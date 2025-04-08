const COS = require("./cos-wx-sdk-v5");
const vodUtil = require("./vod_util");
const { UploaderEvent } = require("./constants");
const { EventEmitter } = require("events");
const { VodReporter, reportEvent } = require("./reporter");
const baseConfig = require("./config")

const COS_REGION_KEY = "COS_REGION_KEY";
const DEFAULT_COS_STRATEGY = {
  ChunkParallelLimit: 6,
  ChunkSize: 1048576 * 8, // 8MB
};

/**
 * 执行竞速请求以确定最优区域
 * @param {Object} options - 请求选项
 * @returns {Promise<string>} 返回区域标识
 */
const raceRequest = (options) => new Promise((resolve) => {
  uni.request({
    method: "HEAD",
    url: `https://${options.domain}`,
    success: () => resolve(options.region),
    fail: (error) => console.warn(`Race request failed for ${options.domain}`, error),
  });
});

/**
 * 获取COS上传策略
 * @param {Object} params - 配置参数
 * @returns {Object} COS策略对象
 */
const getCosStrategy = (params = {}) => {
  console.log('getCosStrategy is called');

  const sourceData = {
    FileParallelLimit: params.fileParallelLimit,
    ChunkParallelLimit: params.chunkParallelLimit ?? DEFAULT_COS_STRATEGY.ChunkParallelLimit,
    ChunkRetryTimes: params.chunkRetryTimes,
    ChunkSize: params.chunkSize ?? DEFAULT_COS_STRATEGY.ChunkSize,
    SliceSize: params.sliceSize,
    CopyChunkParallelLimit: params.copyChunkParallelLimit,
    CopyChunkSize: params.copyChunkSize,
    CopySliceSize: params.copySliceSize,
    ProgressInterval: params.progressInterval,
  };

  return Object.fromEntries(
    Object.entries(sourceData).filter(([, value]) => value !== undefined)
  );
};

class Uploader extends EventEmitter {
  #retryLimits = {
    commit: 3,
    apply: 3,
    prepare: 3,
  };

  constructor(opts) {
    super();
    if (!vodUtil.isObject(opts)) throw new Error("opts must be an object");
    console.log('-----------------');

    this.#initializeProperties(opts);
    this.#validateRequiredParams();
    this.cosStrategy = getCosStrategy(opts);
  }

  #initializeProperties(opts) {
    this.appId = opts.appId;
    this.taskId = null;
    this.cos = null;
    this.reportId = opts.reportId || "";
    this.getSignature = opts.getSignature;
    this.error = opts.error;
    this.progress = opts.progress;
    this.finish = opts.finish;

    const videoFile = opts.mediaFile ?? opts.videoFile;
    if (!videoFile) throw new Error("`mediaFile` param is required");

    this.fileKey = videoFile.tempFilePath.replace(/^.*?([^/]{32}\.\w+)$/, "$1");
    this.fileName = opts.mediaName ?? opts.fileName;
    this.videoFileMessage = vodUtil.getFileMessage(videoFile, this.fileName);

    if (opts.coverFile) this.#initCoverFile(opts.coverFile);
  }

  #initCoverFile(coverFile) {
    coverFile.tempFilePath = coverFile.tempFilePaths[0];
    coverFile.size = coverFile.tempFiles[0].size;
    this.coverFileMessage = vodUtil.getFileMessage(coverFile, this.fileName);
    this.fileKey = coverFile.tempFilePath.replace(
      /^.*?([^/]{32}\.\w+)$/,
      "$1"
    );
  }

  #validateRequiredParams() {
    const requiredFunctions = [
      [this.getSignature, "getSignature"],
      [this.error, "error"],
      [this.progress, "progress"],
      [this.finish, "finish"],
    ];

    for (const [fn, name] of requiredFunctions) {
      if (!vodUtil.isFunction(fn)) {
        throw new Error(`${name} must be a function`);
      }
    }
  }

  // 存储操作方法
  setStorage(name, value) {
    uni.setStorageSync(`wp_ugc_${name}`, value);
  }

  getStorage(name) {
    return uni.getStorageSync(`wp_ugc_${name}`) || "";
  }

  delStorage(name) {
    uni.removeStorageSync(`wp_ugc_${name}`);
  }

  /**
   * 区域竞速选择
   * @param {Array} cosRegionList - 区域列表
   * @param {Function} callback - 回调函数
   */
  async regionRace(cosRegionList, callback) {
    const region = await Promise.race(cosRegionList.map(raceRequest));
    uni.setStorageSync(COS_REGION_KEY, region);
    callback?.(region);
  }

  async requestRegion(callback) {
    const signature = await this.#getSignature();
    const requestStartTime = Date.now();

    uni.request({
      method: "POST",
      url: `${baseConfig.tencentCloudUrl}?Action=${baseConfig.PrepareUploadUGC}`,
      data: { signature },
      dataType: "json",
      success: (result) => this.#handlePrepareResponse(result, requestStartTime, callback),
      fail: (error) => this.error?.(error, 1),
    });
  }

  #getSignature() {
    return new Promise((resolve) => this.getSignature(resolve));
  }

  #handlePrepareResponse(result, requestStartTime, callback) {
    if (result.data.code === 0) {
      this.appId = this.appId || result.data.data.appId;
      this.regionRace(result.data.data.cosRegionList, (region) => {
        this.emit(reportEvent.report_prepare, { data: { region }, requestStartTime });
        callback(region);
      });
    } else if (this.#retryLimits.prepare > 0) {
      this.#retryLimits.prepare--;
      this.emit(reportEvent.report_prepare, { err: result.data, requestStartTime });
      this.requestRegion(callback);
    } else {
      this.error?.(result, 2);
    }
  }

  getStoreRegion(callback) {
    const region = this.getStorage(COS_REGION_KEY);
    return region ? callback(region) : this.requestRegion(callback);
  }

  start() {
    console.log("Uploader starting...");
    this.applyUpload((result) => {
      this.uploadFile(result, () => this.commitUpload());
    });
  }

  cancel() { this.cos?.cancelTask(this.taskId); }
  pause() { this.cos?.pauseTask(this.taskId); }
  restart() { this.cos?.restartTask(this.taskId); }

  async applyUpload(callback) {
    const signature = await this.#getSignature();
    this.signature = signature;
    const sessionKey = this.getStorage(this.fileKey);
    const sendParams = this.#buildApplyParams(signature, sessionKey);
    const requestStartTime = Date.now();

    uni.request({
      method: "POST",
      url: `${baseConfig.tencentCloudUrl}?Action=${baseConfig.ApplyUploadUGC}`,
      data: sendParams,
      dataType: "json",
      success: (result) => this.#handleApplyResponse(result, sendParams, requestStartTime, callback),
      fail: (error) => {
        console.log('111111111111111111111111111111');

        this.error?.(error, 3)
      },
    });
  }

  #buildApplyParams(signature, sessionKey) {
    const baseParams = sessionKey
      ? { signature, vodSessionKey: sessionKey }
      : {
        signature,
        videoName: this.videoFileMessage.name,
        videoType: this.videoFileMessage.type,
      };

    return this.coverFileMessage
      ? {
        ...baseParams,
        coverName: this.coverFileMessage.name,
        coverType: this.coverFileMessage.type,
      }
      : baseParams;
  }

  #handleApplyResponse(result, sendParams, requestStartTime, callback) {
    if (result.data.code === 0) {
      this.appId = this.appId || result.data.data.appId;
      this.vodSessionKey = result.data.data.vodSessionKey;
      this.setStorage(this.fileKey, this.vodSessionKey);
      this.emit(reportEvent.report_apply, { data: sendParams, requestStartTime });
      callback(result);
    } else if (this.#retryLimits.apply > 0) {
      this.#retryLimits.apply--;
      this.emit(reportEvent.report_apply, { err: result.data, requestStartTime });
      this.applyUpload(callback);
    } else {
      this.error?.(result, 4);
    }
  }

  async uploadFile(result, callback) {
    const applyData = result.data.data;
    this.cos = this.#createCosInstance(applyData);

    const uploadParams = this.#buildUploadParams(applyData);
    await Promise.all(uploadParams.map((param) => this.#uploadSingleFile(param)));
    console.log("All uploads completed");
    callback();
  }

  #createCosInstance(applyData) {
    const cos = new COS({
      ...this.cosStrategy,
      getAuthorization: (_, cb) => cb({
        TmpSecretId: applyData.tempCertificate.secretId,
        TmpSecretKey: applyData.tempCertificate.secretKey,
        XCosSecurityToken: applyData.tempCertificate.token,
        StartTime: applyData.timestamp,
        ExpiredTime: applyData.tempCertificate.expiredTime,
      }),
    });

    cos.on("before-send", (opt) => {
      try {
        const [, , domain, path] = opt.url.match(/^(https?:\/\/([^\/]+)\/)([^\/]*\/?)(.*)$/);
        opt.url = opt.url.replace(domain, "vod2.qcloud.com");
        opt.headers["Vod-Forward-Cos"] = domain;
      } catch (error) {
        console.log('error', error);
      }
    });

    return cos;
  }

  #buildUploadParams(applyData) {
    const commonParam = {
      bucket: `${applyData.storageBucket}-${applyData.storageAppId}`,
      region: applyData.storageRegionV5,
    };

    const params = [];
    if (this.videoFileMessage) {
      params.push({
        ...commonParam,
        filePath: this.videoFileMessage.tempFilePath,
        fileSize: this.videoFileMessage.size,
        key: applyData.video.storagePath,
        onProgress: (info) => this.progress?.(info),
        onTaskReady: (taskId) => (this.taskId = taskId),
      });
    }

    if (this.coverFileMessage) {
      params.push({
        ...commonParam,
        filePath: this.coverFileMessage.tempFilePath,
        fileSize: this.coverFileMessage.size,
        key: applyData.cover.storagePath,
        onTaskReady: vodUtil.noop,
        onProgress: vodUtil.noop,
      });
    }

    return params;
  }

  #uploadSingleFile(param) {
    return new Promise((resolve, reject) => {
      const requestStartTime = Date.now();
      this.cos.sliceUploadFile(
        {
          Bucket: param.bucket,
          Region: param.region,
          Key: param.key,
          FilePath: param.filePath,
          FileSize: param.fileSize,
          onProgress: param.onProgress,
          onTaskReady: param.onTaskReady,
        },
        (err, data) => {
          if (err) {
            this.#handleUploadError(err, param, requestStartTime);
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }

  #handleUploadError(err, param, requestStartTime) {
    if (param.filePath === this.videoFileMessage.tempFilePath) {
      this.emit(reportEvent.report_cos_upload, { err, requestStartTime });
    }

    const errorObj = err.error?.Code
      ? {
        code: err.error.Code,
        message: err.error.Message || err.error.message,
        reqid: err.error.RequestId,
      }
      : { code: err.statusCode || -2, message: "cos error" };

    this.error?.(errorObj, 5);
  }

  async commitUpload() {
    const sendParam = { signature: this.signature, vodSessionKey: this.vodSessionKey };
    const requestStartTime = Date.now();

    uni.request({
      method: "POST",
      url: `${baseConfig.tencentCloudUrl}?Action=${baseConfig.CommitUploadUGC}`,
      data: sendParam,
      dataType: "json",
      success: (result) => this.#handleCommitResponse(result, requestStartTime),
      fail: (error) => this.error?.(error, 6),
    });
  }

  #handleCommitResponse(result, requestStartTime) {
    if (result.data.code === 0) {
      this.emit(reportEvent.report_commit, { data: result.data.data, requestStartTime });
      this.#finishUpload(result.data.data);
      this.delStorage(this.fileKey);
    } else if (this.#retryLimits.commit > 0) {
      this.#retryLimits.commit--;
      this.emit(reportEvent.report_commit, { err: result.data, requestStartTime });
      this.commitUpload();
    } else {
      this.error?.(result, 7);
    }
  }

  #finishUpload(data) {
    this.finish?.({
      fileId: data.fileId,
      videoName: this.videoFileMessage.name,
      videoUrl: data.video?.url,
      coverUrl: data.cover?.url,
    });
  }
}

module.exports = {
  start: (params) => {
    try {
      const uploader = new Uploader(params);
      new VodReporter(uploader);
      uploader.start();
      return uploader;
    } catch (e) {
      console.error("Uploader initialization failed:", e);
      params.error?.({ code: -1, message: e.message });
    }
  },
};