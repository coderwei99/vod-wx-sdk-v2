(function (e, a) { for (var i in a) e[i] = a[i]; }(exports, /******/(function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
    }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
      /******/
    };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
  }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
    /******/
  };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
    /******/
  };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
  /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }

    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    var COS = __webpack_require__(1);

    var vodUtil = __webpack_require__(2);

    var _require = __webpack_require__(3),
      UploaderEvent = _require.UploaderEvent;

    var _require2 = __webpack_require__(4),
      EventEmitter = _require2.EventEmitter;

    var COS_REGION_KEY = "COS_REGION_KEY";
    var HOST = "vod2.qcloud.com";

    var _require3 = __webpack_require__(5),
      VodReporter = _require3.VodReporter,
      reportEvent = _require3.reportEvent;

    function raceRequest(options) {
      return new Promise(function (resolve, reject) {
        uni.request({
          method: "HEAD",
          url: "https://" + options.domain,
          success: function success(result) {
            resolve(options.region);
          },
          fail: function fail(result) {
            if (vodUtil.isFunction(self.error)) {
              self.error(result);
            }
          }
        });
      });
    }

    function getCosStrategy(params) {
      var sourceData = {
        FileParallelLimit: params.fileParallelLimit,
        ChunkParallelLimit: params.chunkParallelLimit || 6,
        ChunkRetryTimes: params.chunkRetryTimes,
        ChunkSize: params.chunkSize || 1048576 * 8,
        SliceSize: params.sliceSize,
        CopyChunkParallelLimit: params.copyChunkParallelLimit,
        CopyChunkSize: params.copyChunkSize,
        CopySliceSize: params.copySliceSize,
        ProgressInterval: params.progressInterval
      };
      var cosStrategy = Object.keys(sourceData).filter(function (key) {
        return sourceData[key] !== undefined;
      }).reduce(function (acc, key) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, sourceData[key]));
      }, {});
      return cosStrategy;
    }

    var Uploader = /*#__PURE__*/function (_EventEmitter) {
      _inherits(Uploader, _EventEmitter);

      var _super = _createSuper(Uploader);

      function Uploader(opts) {
        var _this;

        _classCallCheck(this, Uploader);

        _this = _super.call(this);

        _defineProperty(_assertThisInitialized(_this), "retryCommitNum", 3);

        _defineProperty(_assertThisInitialized(_this), "retryApplyNum", 3);

        _defineProperty(_assertThisInitialized(_this), "retryPrepareNum", 3);

        var self = _assertThisInitialized(_this);

        if (vodUtil.getType(opts) !== "object") {
          throw new Error("opts must be a object");
        }

        self.appId = opts.appId || undefined;
        self.taskId = undefined;
        self.cos = undefined;
        self.cosStrategy = getCosStrategy(opts);
        var videoFile;

        if (opts.mediaFile) {
          // alias
          videoFile = opts.mediaFile;
        } else {
          videoFile = opts.videoFile;
        }

        if (!videoFile) {
          throw new Error("need `mediaFile` param");
        }

        self.fileKey = videoFile.tempFilePath.replace(/^.*?([^/]{32}\.\w+)$/, "$1");

        if (opts.mediaName) {
          // alias
          self.fileName = opts.mediaName;
        } else {
          self.fileName = opts.fileName;
        }

        var coverFile = opts.coverFile;
        self.videoFileMessage = vodUtil.getFileMessage(videoFile, self.fileName);

        if (coverFile) {
          coverFile.tempFilePath = coverFile.tempFilePaths[0];
          coverFile.size = coverFile.tempFiles[0].size;
          self.coverFileMessage = vodUtil.getFileMessage(coverFile, self.fileName);
          self.fileKey = coverFile.tempFilePath.replace(/^.*?([^/]{32}\.\w+)$/, "$1");
        }

        self.reportId = opts.reportId || "";
        self.getSignature = opts.getSignature; // self.success = opts.success;

        self.error = opts.error;
        self.progress = opts.progress;
        self.finish = opts.finish;

        if (!self.getSignature) {
          throw new Error("need `getSignature` param");
        }

        if (!vodUtil.isFunction(self.getSignature) || // !vodUtil.isFunction(self.success) ||
          !vodUtil.isFunction(self.error) || !vodUtil.isFunction(self.progress) || !vodUtil.isFunction(self.finish)) {
          throw new Error("getSignature, error, progress, finish must be a Function.");
        } // 网络状态变化时重新竞速获取最优 storeRegion
        // uni.onNetworkStatusChange((res) => {
        //   if (res.isConnected) {
        //     this.requestRegion();
        //   }
        // });


        return _this;
      }

      _createClass(Uploader, [{
        key: "setStorage",
        value: function setStorage(name, val) {
          uni.setStorageSync("wp_ugc_" + name, val);
        }
      }, {
        key: "getStorage",
        value: function getStorage(name) {
          try {
            var val = uni.getStorageSync("wp_ugc_" + name);
            return val;
          } catch (e) {
            return "";
          }
        }
      }, {
        key: "delStorage",
        value: function delStorage(name) {
          uni.removeStorageSync("wp_ugc_" + name);
        }
      }, {
        key: "regionRace",
        value: function regionRace(cosRegionList, cb) {
          Promise.race(cosRegionList.map(function (item) {
            return raceRequest(item);
          })).then(function (res) {
            uni.setStorageSync(COS_REGION_KEY, res); // report target region obtain from prepare

            if (cb) {
              cb(res);
            }
          });
        }
      }, {
        key: "requestRegion",
        value: function requestRegion(callback) {
          var self = this;
          self.getSignature(function (signature) {
            self.signature = signature;
            var sendParams = {
              signature: signature
            };
            var requestStartTime = Date.now();
            uni.request({
              method: "POST",
              url: "https://vod2.qcloud.com/v3/index.php?Action=PrepareUploadUGC",
              data: sendParams,
              dataType: "json",
              success: function success(result) {
                if (result.data.code === 0) {
                  self.appId = self.appId || result.data.data.appId;
                  self.regionRace(result.data.data.cosRegionList, function (res) {
                    self.emit(reportEvent.report_prepare, {
                      data: {
                        region: res
                      },
                      requestStartTime: requestStartTime
                    });
                    callback(res);
                  });
                } else {
                  // eslint-disable-next-line no-lonely-if
                  if (self.retryPrepareNum > 0) {
                    self.emit(reportEvent.report_prepare, {
                      err: result.data,
                      requestStartTime: requestStartTime
                    });
                    self.retryPrepareNum -= 1;
                    self.requestRegion(callback);
                  } else {
                    // eslint-disable-next-line no-lonely-if
                    if (vodUtil.isFunction(self.error)) {
                      self.error(result);
                    }
                  }
                }
              },
              fail: function fail(result) {
                if (vodUtil.isFunction(self.error)) {
                  self.error(result);
                }
              }
            });
          });
        }
      }, {
        key: "getStoreRegion",
        value: function getStoreRegion(callback) {
          var self = this;

          try {
            var region = uni.getStorageSync(COS_REGION_KEY);

            if (!region) {
              throw new Error("no storage");
            }

            return callback(region);
          } catch (e) {
            self.requestRegion(callback);
          }
        }
      }, {
        key: "start",
        value: function start() {
          var self = this; // self.getStoreRegion((region) => {
          // });

          self.applyUpload(function (result) {
            self.uploadFile(result, function () {
              self.commitUpload();
            });
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.cos.cancelTask(this.taskId);
        }
      }, {
        key: "pause",
        value: function pause() {
          this.cos.pauseTask(this.taskId);
        }
      }, {
        key: "restart",
        value: function restart() {
          this.cos.restartTask(this.taskId);
        }
      }, {
        key: "applyUpload",
        value: function applyUpload(callback) {
          var self = this;
          self.getSignature(function (signature) {
            self.signature = signature;
            var sessionKey = self.getStorage(self.fileKey);
            var sendParams;

            if (sessionKey) {
              sendParams = {
                signature: signature,
                vodSessionKey: sessionKey
              };
            } else {
              sendParams = {
                signature: signature,
                videoName: self.videoFileMessage.name,
                videoType: self.videoFileMessage.type // videoSize: self.videoFileMessage.size,

              };
            }

            if (self.coverFileMessage) {
              // upload video together with cover
              sendParams.coverName = self.coverFileMessage.name;
              sendParams.coverType = self.coverFileMessage.type; // sendParams.coverSize = self.coverFileMessage.size;
            }

            var requestStartTime = Date.now();
            uni.request({
              method: "POST",
              url: "https://".concat(HOST, "/v3/index.php?Action=ApplyUploadUGC"),
              data: sendParams,
              dataType: "json",
              success: function success(result) {
                if (result.data.code === 0) {
                  self.appId = self.appId || result.data.data.appId;
                  self.emit(reportEvent.report_apply, {
                    data: sendParams,
                    requestStartTime: requestStartTime
                  });
                  self.vodSessionKey = result.data.data.vodSessionKey;
                  self.MiniProgramAccelerateHost = "vod-upload-accelerate.vod-qcloud.com";
                  self.setStorage(self.fileKey, self.vodSessionKey);
                  callback(result);
                } else {
                  // eslint-disable-next-line no-lonely-if
                  if (self.retryApplyNum > 0) {
                    self.emit(reportEvent.report_apply, {
                      err: result.data,
                      requestStartTime: requestStartTime
                    });
                    self.retryApplyNum -= 1;
                    self.applyUpload(callback);
                  } else {
                    // eslint-disable-next-line no-lonely-if
                    if (vodUtil.isFunction(self.error)) {
                      self.error(result);
                    }
                  }
                }
              },
              fail: function fail(result) {
                if (vodUtil.isFunction(self.error)) {
                  self.error(result);
                }
              }
            });
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(result, cb) {
          var self = this;
          var applyData = result.data.data;
          var cos = new COS(Object.assign({
            getAuthorization: function getAuthorization(options, callback) {
              callback({
                TmpSecretId: applyData.tempCertificate.secretId,
                TmpSecretKey: applyData.tempCertificate.secretKey,
                XCosSecurityToken: applyData.tempCertificate.token,
                StartTime: applyData.timestamp,
                ExpiredTime: applyData.tempCertificate.expiredTime
              });
            }
          }, self.cosStrategy));
          cos.on("before-send", function (opt) {
            var url = opt.url;
            console.log('url', url);
            var u = url.match(/^(https?:\/\/([^\/]+)\/)([^\/]*\/?)(.*)$/);
            opt.url = url.replace(u[2], self.MiniProgramAccelerateHost || "vod2.qcloud.com");
            opt.headers["Vod-Forward-Cos"] = u[2];
          });
          this.cos = cos;
          var cosCommonParam = {
            bucket: "".concat(applyData.storageBucket, "-").concat(applyData.storageAppId),
            region: applyData.storageRegionV5
          };
          var uploadCosParams = [];

          if (this.videoFileMessage) {
            var cosVideoParam = _objectSpread(_objectSpread({}, cosCommonParam), {}, {
              filePath: this.videoFileMessage.tempFilePath,
              fileSize: this.videoFileMessage.size,
              key: applyData.video.storagePath,
              onProgress: function onProgress(info) {
                if (vodUtil.isFunction(self.progress)) {
                  self.progress(info);
                }
              },
              // onProgress: function onProgress(data) {
              //   self.emit(UploaderEvent.video_progress, data);
              //   self.emit(UploaderEvent.media_progress, data);
              // },
              onTaskReady: function onTaskReady(taskId) {
                self.taskId = taskId;
              }
            });

            uploadCosParams.push(cosVideoParam);
          }

          if (this.coverFileMessage) {
            var cosCoverParam = _objectSpread(_objectSpread({}, cosCommonParam), {}, {
              fileSize: this.coverFileMessage.size,
              filePath: this.coverFileMessage.tempFilePath,
              key: applyData.cover.storagePath,
              onTaskReady: vodUtil.noop,
              onProgress: vodUtil.noop // cover don't need progress
              // onProgress: function onProgress(data) {
              //   self.emit(UploaderEvent.cover_progress, data);
              // }

            });

            uploadCosParams.push(cosCoverParam);
          }

          var uploadPromises = uploadCosParams.map(function (uploadCosParam) {
            return new Promise(function (resolve, reject) {
              var requestStartTime = Date.now();
              cos.sliceUploadFile( // cos.postObject(
                {
                  Bucket: uploadCosParam.bucket,
                  Region: uploadCosParam.region,
                  Key: uploadCosParam.key,
                  FilePath: uploadCosParam.filePath,
                  FileSize: uploadCosParam.fileSize,
                  onProgress: uploadCosParam.onProgress,
                  onTaskReady: uploadCosParam.onTaskReady
                }, function (err, data) {
                  if (err) {
                    // when fails
                    if (uploadCosParam.filePath === self.videoFileMessage.tempFilePath) {
                      self.emit(reportEvent.report_cos_upload, {
                        err: err,
                        requestStartTime: requestStartTime
                      });
                    }

                    if (vodUtil.isFunction(self.error)) {
                      var error = err.error;
                      var errObj = error && error.Code ? {
                        code: error.Code,
                        message: error.Message || error.message,
                        reqid: error.RequestId || undefined
                      } : {
                        code: err.statusCode || -2,
                        message: "cos error"
                      };
                      self.error(errObj);
                    }

                    reject();
                    return;
                  } // when succeeds
                  // if (vodUtil.isFunction(self.success)) {
                  //   self.success(data);
                  // }


                  resolve();
                });
            });
          });
          Promise.all(uploadPromises).then(function () {
            cb();
          });
        }
      }, {
        key: "commitUpload",
        value: function commitUpload() {
          var self = this;
          var sendParam = {
            signature: this.signature,
            vodSessionKey: this.vodSessionKey
          };
          var requestStartTime = Date.now();
          uni.request({
            method: "POST",
            url: "https://".concat(HOST, "/v3/index.php?Action=CommitUploadUGC"),
            data: sendParam,
            dataType: "json",
            success: function success(result) {
              if (result.data.code === 0) {
                self.emit(reportEvent.report_commit, {
                  data: result.data.data,
                  requestStartTime: requestStartTime
                });
                var res = result.data.data;

                if (vodUtil.isFunction(self.finish)) {
                  self.finish({
                    fileId: res.fileId,
                    videoName: self.videoFileMessage.name,
                    videoUrl: res.video && res.video.url,
                    coverUrl: res.cover && res.cover.url,
                    verify_content: res.video && res.video.verify_content
                  });
                }

                self.delStorage(self.fileKey);
              } else {
                // eslint-disable-next-line no-lonely-if
                self.emit(reportEvent.report_commit, {
                  err: result.data,
                  requestStartTime: requestStartTime
                });

                if (self.retryCommitNum > 0) {
                  self.retryCommitNum -= 1;
                  self.commitUpload();
                } else {
                  // eslint-disable-next-line no-lonely-if
                  if (vodUtil.isFunction(self.error)) {
                    self.error(result);
                  }
                }
              }
            },
            fail: function fail(result) {
              if (vodUtil.isFunction(self.error)) {
                self.error(result);
              }
            }
          });
        }
      }]);

      return Uploader;
    }(EventEmitter);

    module.exports = {
      start: function start(params) {
        try {
          var uploader = new Uploader(params);
          new VodReporter(uploader);
          uploader.start();
          return uploader;
        } catch (e) {
          if (vodUtil.isFunction(params.error)) {
            params.error({
              code: -1,
              message: e.message
            });
          } else {
            throw e;
          }
        }
      }
    };

    /***/
  }),
/* 1 */
/***/ (function (module, exports, __webpack_require__) {

    !function (e, t) {
      true ? module.exports = t() : undefined;
    }(window, function () {
      return function (e) {
        var t = {};

        function n(i) {
          if (t[i]) return t[i].exports;
          var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
          };
          return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }

        return n.m = e, n.c = t, n.d = function (e, t, i) {
          n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
          });
        }, n.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          });
        }, n.t = function (e, t) {
          if (1 & t && (e = n(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var i = Object.create(null);
          if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
          }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
            return e[t];
          }.bind(null, o));
          return i;
        }, n.n = function (e) {
          var t = e && e.__esModule ? function () {
            return e.default;
          } : function () {
            return e;
          };
          return n.d(t, "a", t), t;
        }, n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "/Users/tianfeng/Documents/项目/sdk/cos-wx-sdk-v5/demo/lib", n(n.s = 10);
      }([function (e, t, n) {
        "use strict";

        (function (t) {
          function i() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            i = function () {
              return e;
            };

            var e = {},
              t = Object.prototype,
              n = t.hasOwnProperty,
              o = "function" == typeof Symbol ? Symbol : {},
              a = o.iterator || "@@iterator",
              s = o.asyncIterator || "@@asyncIterator",
              c = o.toStringTag || "@@toStringTag";

            function l(e, t, n) {
              return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }), e[t];
            }

            try {
              l({}, "");
            } catch (e) {
              l = function (e, t, n) {
                return e[t] = n;
              };
            }

            function u(e, t, n, i) {
              var o = t && t.prototype instanceof f ? t : f,
                r = Object.create(o.prototype),
                a = new w(i || []);
              return r._invoke = function (e, t, n) {
                var i = "suspendedStart";
                return function (o, r) {
                  if ("executing" === i) throw new Error("Generator is already running");

                  if ("completed" === i) {
                    if ("throw" === o) throw r;
                    return T();
                  }

                  for (n.method = o, n.arg = r; ;) {
                    var a = n.delegate;

                    if (a) {
                      var s = C(a, n);

                      if (s) {
                        if (s === d) continue;
                        return s;
                      }
                    }

                    if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                      if ("suspendedStart" === i) throw i = "completed", n.arg;
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    i = "executing";
                    var c = p(e, t, n);

                    if ("normal" === c.type) {
                      if (i = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                      return {
                        value: c.arg,
                        done: n.done
                      };
                    }

                    "throw" === c.type && (i = "completed", n.method = "throw", n.arg = c.arg);
                  }
                };
              }(e, n, a), r;
            }

            function p(e, t, n) {
              try {
                return {
                  type: "normal",
                  arg: e.call(t, n)
                };
              } catch (e) {
                return {
                  type: "throw",
                  arg: e
                };
              }
            }

            e.wrap = u;
            var d = {};

            function f() { }

            function m() { }

            function h() { }

            var g = {};
            l(g, a, function () {
              return this;
            });
            var v = Object.getPrototypeOf,
              y = v && v(v(E([])));
            y && y !== t && n.call(y, a) && (g = y);
            var x = h.prototype = f.prototype = Object.create(g);

            function b(e) {
              ["next", "throw", "return"].forEach(function (t) {
                l(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }

            function k(e, t) {
              function i(o, a, s, c) {
                var l = p(e[o], e, a);

                if ("throw" !== l.type) {
                  var u = l.arg,
                    d = u.value;
                  return d && "object" == r(d) && n.call(d, "__await") ? t.resolve(d.__await).then(function (e) {
                    i("next", e, s, c);
                  }, function (e) {
                    i("throw", e, s, c);
                  }) : t.resolve(d).then(function (e) {
                    u.value = e, s(u);
                  }, function (e) {
                    return i("throw", e, s, c);
                  });
                }

                c(l.arg);
              }

              var o;

              this._invoke = function (e, n) {
                function r() {
                  return new t(function (t, o) {
                    i(e, n, t, o);
                  });
                }

                return o = o ? o.then(r, r) : r();
              };
            }

            function C(e, t) {
              var n = e.iterator[t.method];

              if (void 0 === n) {
                if (t.delegate = null, "throw" === t.method) {
                  if (e.iterator.return && (t.method = "return", t.arg = void 0, C(e, t), "throw" === t.method)) return d;
                  t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                }

                return d;
              }

              var i = p(n, e.iterator, t.arg);
              if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, d;
              var o = i.arg;
              return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d);
            }

            function S(e) {
              var t = {
                tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
            }

            function _(e) {
              var t = e.completion || {};
              t.type = "normal", delete t.arg, e.completion = t;
            }

            function w(e) {
              this.tryEntries = [{
                tryLoc: "root"
              }], e.forEach(S, this), this.reset(!0);
            }

            function E(e) {
              if (e) {
                var t = e[a];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;

                if (!isNaN(e.length)) {
                  var i = -1,
                    o = function t() {
                      for (; ++i < e.length;) if (n.call(e, i)) return t.value = e[i], t.done = !1, t;

                      return t.value = void 0, t.done = !0, t;
                    };

                  return o.next = o;
                }
              }

              return {
                next: T
              };
            }

            function T() {
              return {
                value: void 0,
                done: !0
              };
            }

            return m.prototype = h, l(x, "constructor", h), l(h, "constructor", m), m.displayName = l(h, c, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
            }, e.mark = function (e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, l(e, c, "GeneratorFunction")), e.prototype = Object.create(x), e;
            }, e.awrap = function (e) {
              return {
                __await: e
              };
            }, b(k.prototype), l(k.prototype, s, function () {
              return this;
            }), e.AsyncIterator = k, e.async = function (t, n, i, o, r) {
              void 0 === r && (r = Promise);
              var a = new k(u(t, n, i, o), r);
              return e.isGeneratorFunction(n) ? a : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
            }, b(x), l(x, c, "Generator"), l(x, a, function () {
              return this;
            }), l(x, "toString", function () {
              return "[object Generator]";
            }), e.keys = function (e) {
              var t = [];

              for (var n in e) t.push(n);

              return t.reverse(), function n() {
                for (; t.length;) {
                  var i = t.pop();
                  if (i in e) return n.value = i, n.done = !1, n;
                }

                return n.done = !0, n;
              };
            }, e.values = E, w.prototype = {
              constructor: w,
              reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;

                function i(n, i) {
                  return a.type = "throw", a.arg = e, t.next = n, i && (t.method = "next", t.arg = void 0), !!i;
                }

                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var r = this.tryEntries[o],
                    a = r.completion;
                  if ("root" === r.tryLoc) return i("end");

                  if (r.tryLoc <= this.prev) {
                    var s = n.call(r, "catchLoc"),
                      c = n.call(r, "finallyLoc");

                    if (s && c) {
                      if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                      if (this.prev < r.finallyLoc) return i(r.finallyLoc);
                    } else if (s) {
                      if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                    } else {
                      if (!c) throw new Error("try statement without catch or finally");
                      if (this.prev < r.finallyLoc) return i(r.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var o = this.tryEntries[i];

                  if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var r = o;
                    break;
                  }
                }

                r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                var a = r ? r.completion : {};
                return a.type = e, a.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(a);
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d;
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), d;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];

                  if (n.tryLoc === e) {
                    var i = n.completion;

                    if ("throw" === i.type) {
                      var o = i.arg;

                      _(n);
                    }

                    return o;
                  }
                }

                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, n) {
                return this.delegate = {
                  iterator: E(e),
                  resultName: t,
                  nextLoc: n
                }, "next" === this.method && (this.arg = void 0), d;
              }
            }, e;
          }

          function o(e, t, n, i, o, r, a) {
            try {
              var s = e[r](a),
                c = s.value;
            } catch (e) {
              return void n(e);
            }

            s.done ? t(c) : Promise.resolve(c).then(i, o);
          }

          function r(e) {
            return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, r(e);
          }

          var a = n(12),
            s = n(15),
            c = n(16),
            l = n(21),
            u = n(5).btoa,
            p = uni.getFileSystemManager(),
            d = n(6);

          function f(e) {
            return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
          }

          function m(e, t) {
            var n = [];

            for (var i in e) e.hasOwnProperty(i) && n.push(t ? f(i).toLowerCase() : i);

            return n.sort(function (e, t) {
              return (e = e.toLowerCase()) === (t = t.toLowerCase()) ? 0 : e > t ? 1 : -1;
            });
          }

          var h = ["content-disposition", "content-encoding", "content-length", "content-md5", "expect", "expires", "host", "if-match", "if-modified-since", "if-none-match", "if-unmodified-since", "origin", "range", "response-cache-control", "response-content-disposition", "response-content-encoding", "response-content-language", "response-content-type", "response-expires", "transfer-encoding", "versionid"],
            g = function () { },
            v = function (e) {
              var t = {};

              for (var n in e) e.hasOwnProperty(n) && void 0 !== e[n] && null !== e[n] && (t[n] = e[n]);

              return t;
            };

          function y(e) {
            return C(e, function (e) {
              return "object" === r(e) && null !== e ? y(e) : e;
            });
          }

          function x(e, t) {
            return k(t, function (n, i) {
              e[i] = t[i];
            }), e;
          }

          function b(e) {
            return e instanceof Array;
          }

          function k(e, t) {
            for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
          }

          function C(e, t) {
            var n = b(e) ? [] : {};

            for (var i in e) e.hasOwnProperty(i) && (n[i] = t(e[i], i));

            return n;
          }

          var S = function (e, t) {
            if (t = x({}, t), "getAuth" !== e && "getV4Auth" !== e && "getObjectUrl" !== e) {
              var n = t.Headers || {};

              if (t && "object" === r(t)) {
                !function () {
                  for (var e in t) t.hasOwnProperty(e) && e.indexOf("x-cos-") > -1 && (n[e] = t[e]);
                }();
                R.each({
                  "x-cos-mfa": "MFA",
                  "Content-MD5": "ContentMD5",
                  "Content-Length": "ContentLength",
                  "Content-Type": "ContentType",
                  Expect: "Expect",
                  Expires: "Expires",
                  "Cache-Control": "CacheControl",
                  "Content-Disposition": "ContentDisposition",
                  "Content-Encoding": "ContentEncoding",
                  Range: "Range",
                  "If-Modified-Since": "IfModifiedSince",
                  "If-Unmodified-Since": "IfUnmodifiedSince",
                  "If-Match": "IfMatch",
                  "If-None-Match": "IfNoneMatch",
                  "x-cos-copy-source": "CopySource",
                  "x-cos-copy-source-Range": "CopySourceRange",
                  "x-cos-metadata-directive": "MetadataDirective",
                  "x-cos-copy-source-If-Modified-Since": "CopySourceIfModifiedSince",
                  "x-cos-copy-source-If-Unmodified-Since": "CopySourceIfUnmodifiedSince",
                  "x-cos-copy-source-If-Match": "CopySourceIfMatch",
                  "x-cos-copy-source-If-None-Match": "CopySourceIfNoneMatch",
                  "x-cos-acl": "ACL",
                  "x-cos-grant-read": "GrantRead",
                  "x-cos-grant-write": "GrantWrite",
                  "x-cos-grant-full-control": "GrantFullControl",
                  "x-cos-grant-read-acp": "GrantReadAcp",
                  "x-cos-grant-write-acp": "GrantWriteAcp",
                  "x-cos-storage-class": "StorageClass",
                  "x-cos-traffic-limit": "TrafficLimit",
                  "x-cos-mime-limit": "MimeLimit",
                  "x-cos-server-side-encryption-customer-algorithm": "SSECustomerAlgorithm",
                  "x-cos-server-side-encryption-customer-key": "SSECustomerKey",
                  "x-cos-server-side-encryption-customer-key-MD5": "SSECustomerKeyMD5",
                  "x-cos-server-side-encryption": "ServerSideEncryption",
                  "x-cos-server-side-encryption-cos-kms-key-id": "SSEKMSKeyId",
                  "x-cos-server-side-encryption-context": "SSEContext"
                }, function (e, i) {
                  void 0 !== t[e] && (n[i] = t[e]);
                }), t.Headers = v(n);
              }
            }

            return t;
          },
            _ = function (e) {
              return new Promise(function (t, n) {
                p.readFile({
                  filePath: e,
                  success: function (e) {
                    t(e.data);
                  },
                  fail: function (e) {
                    n((null == e ? void 0 : e.errMsg) || "");
                  }
                });
              });
            },
            w = function () {
              var e,
                t = (e = i().mark(function e(t, n, o) {
                  return i().wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                      case 0:
                        if ("postObject" !== t) {
                          e.next = 4;
                          break;
                        }

                        o(), e.next = 21;
                        break;

                      case 4:
                        if ("putObject" !== t) {
                          e.next = 20;
                          break;
                        }

                        if (void 0 !== n.Body || !n.FilePath) {
                          e.next = 17;
                          break;
                        }

                        return e.prev = 6, e.next = 9, _(n.FilePath);

                      case 9:
                        n.Body = e.sent, e.next = 17;
                        break;

                      case 12:
                        return e.prev = 12, e.t0 = e.catch(6), n.Body = void 0, o({
                          error: "readFile error, ".concat(e.t0)
                        }), e.abrupt("return");

                      case 17:
                        void 0 !== n.Body ? (n.ContentLength = n.Body.byteLength, o(null, n.ContentLength)) : o({
                          error: "missing param Body"
                        }), e.next = 21;
                        break;

                      case 20:
                        n.FilePath ? p.stat({
                          path: n.FilePath,
                          success: function (e) {
                            var t = e.stats;
                            n.FileStat = t, n.FileStat.FilePath = n.FilePath;
                            var i = t.isDirectory() ? 0 : t.size;
                            n.ContentLength = i = i || 0, o(null, i);
                          },
                          fail: function (e) {
                            o(e);
                          }
                        }) : o({
                          error: "missing param FilePath"
                        });

                      case 21:
                      case "end":
                        return e.stop();
                    }
                  }, e, null, [[6, 12]]);
                }), function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (i, r) {
                    var a = e.apply(t, n);

                    function s(e) {
                      o(a, i, r, s, c, "next", e);
                    }

                    function c(e) {
                      o(a, i, r, s, c, "throw", e);
                    }

                    s(void 0);
                  });
                });
              return function (e, n, i) {
                return t.apply(this, arguments);
              };
            }(),
            E = function (e) {
              return Date.now() + (e || 0);
            },
            T = function (e, t) {
              e = e.split("."), t = t.split(".");

              for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");

              for (; t.length < n;) t.push("0");

              for (var i = 0; i < n; i++) {
                var o = parseInt(e[i]),
                  r = parseInt(t[i]);
                if (o > r) return 1;
                if (o < r) return -1;
              }

              return 0;
            },
            A = function () {
              var e = uni.getSystemInfoSync(),
                t = T(e.SDKVersion, "2.10.0") >= 0;
              !t && e.platform;
              return function () {
                return !1, t;
              };
            }(),
            R = {
              noop: g,
              formatParams: S,
              apiWrapper: function (e, n) {
                return function (i, o) {
                  var r,
                    a = this;
                  if ("function" == typeof i && (o = i, i = {}), i = S(e, i), a.options.EnableTracker) if ("sliceUploadFile" === i.calledBySdk) r = i.tracker && i.tracker.generateSubTracker({
                    apiName: e
                  }); else if (["uploadFile", "uploadFiles"].includes(e)) r = null; else {
                    var s = -1;
                    i.Body && (s = "string" == typeof i.Body ? i.Body.length : i.Body.size || i.Body.byteLength || -1), r = new d({
                      bucket: i.Bucket,
                      region: i.Region,
                      apiName: e,
                      fileKey: i.Key,
                      fileSize: s,
                      deepTracker: a.options.DeepTracker,
                      customId: a.options.CustomId,
                      delay: a.options.TrackerDelay
                    });
                  }
                  i.tracker = r;

                  var c = function (e) {
                    return e && e.headers && (e.headers["x-cos-request-id"] && (e.RequestId = e.headers["x-cos-request-id"]), e.headers["x-ci-request-id"] && (e.RequestId = e.headers["x-ci-request-id"]), e.headers["x-cos-version-id"] && (e.VersionId = e.headers["x-cos-version-id"]), e.headers["x-cos-delete-marker"] && (e.DeleteMarker = e.headers["x-cos-delete-marker"])), e;
                  },
                    l = function (e, t) {
                      r && r.formatResult(e, t), o && o(c(e), c(t));
                    },
                    u = function () {
                      if ("getService" !== e && "abortUploadTask" !== e) {
                        var t = function (e, t) {
                          var n = t.Bucket,
                            i = t.Region,
                            o = t.Key;

                          if (e.indexOf("Bucket") > -1 || "deleteMultipleObject" === e || "multipartList" === e || "listObjectVersions" === e) {
                            if (!n) return "Bucket";
                            if (!i) return "Region";
                          } else if (e.indexOf("Object") > -1 || e.indexOf("multipart") > -1 || "sliceUploadFile" === e || "abortUploadTask" === e) {
                            if (!n) return "Bucket";
                            if (!i) return "Region";
                            if (!o) return "Key";
                          }

                          return !1;
                        }(e, i);

                        if (t) return "missing param " + t;

                        if (i.Region) {
                          if (i.Region.indexOf("cos.") > -1) return 'param Region should not be start with "cos."';
                          if (!/^([a-z\d-]+)$/.test(i.Region)) return "Region format error.";
                          !a.options.CompatibilityMode && -1 === i.Region.indexOf("-") && "yfb" !== i.Region && "default" !== i.Region && i.Region;
                        }

                        if (i.Bucket) {
                          if (!/^([a-z\d-]+)-(\d+)$/.test(i.Bucket)) if (i.AppId) i.Bucket = i.Bucket + "-" + i.AppId; else {
                            if (!a.options.AppId) return 'Bucket should format as "test-1250000000".';
                            i.Bucket = i.Bucket + "-" + a.options.AppId;
                          }
                          i.AppId && delete i.AppId;
                        }

                        i.Key && "/" === i.Key.substr(0, 1) && (i.Key = i.Key.substr(1));
                      }
                    }(),
                    p = ["getAuth", "getObjectUrl"].includes(e),
                    f = t.Promise;

                  if (!p && f && !o) return new f(function (e, t) {
                    if (o = function (n, i) {
                      n ? t(n) : e(i);
                    }, u) return l({
                      error: u
                    });
                    n.call(a, i, l);
                  });
                  if (u) return l({
                    error: u
                  });
                  var m = n.call(a, i, l);
                  return p ? m : void 0;
                };
              },
              xml2json: c,
              json2xml: l,
              md5: a,
              clearKey: v,
              fileSlice: function (e, t, n, i) {
                e ? p.readFile({
                  filePath: e,
                  position: t,
                  length: n - t,
                  success: function (e) {
                    i(e.data);
                  },
                  fail: function () {
                    i(null);
                  }
                }) : i(null);
              },
              getBodyMd5: function (e, t, n) {
                n = n || g, e && t && t instanceof ArrayBuffer ? R.getFileMd5(t, function (e, t) {
                  n(t);
                }) : n();
              },
              getFileMd5: function (e, t) {
                var n = a(e);
                return t && t(n), n;
              },
              binaryBase64: function (e) {
                var t,
                  n,
                  i,
                  o = "";

                for (t = 0, n = e.length / 2; t < n; t++) i = parseInt(e[2 * t] + e[2 * t + 1], 16), o += String.fromCharCode(i);

                return u(o);
              },
              extend: x,
              isArray: b,
              isInArray: function (e, t) {
                for (var n = !1, i = 0; i < e.length; i++) if (t === e[i]) {
                  n = !0;
                  break;
                }

                return n;
              },
              makeArray: function (e) {
                return b(e) ? e : [e];
              },
              each: k,
              map: C,
              filter: function (e, t) {
                var n = b(e),
                  i = n ? [] : {};

                for (var o in e) e.hasOwnProperty(o) && t(e[o], o) && (n ? i.push(e[o]) : i[o] = e[o]);

                return i;
              },
              clone: y,
              attr: function (e, t, n) {
                return e && t in e ? e[t] : n;
              },
              uuid: function () {
                var e = function () {
                  return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
                };

                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
              },
              camSafeUrlEncode: f,
              throttleOnProgress: function (e, t) {
                var n,
                  i,
                  o = this,
                  r = 0,
                  a = 0,
                  s = Date.now();

                function c() {
                  if (i = 0, t && "function" == typeof t) {
                    n = Date.now();
                    var o,
                      c = Math.max(0, Math.round((a - r) / ((n - s) / 1e3) * 100) / 100) || 0;
                    o = 0 === a && 0 === e ? 1 : Math.floor(a / e * 100) / 100 || 0, s = n, r = a;

                    try {
                      t({
                        loaded: a,
                        total: e,
                        speed: c,
                        percent: o
                      });
                    } catch (e) { }
                  }
                }

                return function (t, n) {
                  if (t && (a = t.loaded, e = t.total), n) clearTimeout(i), c(); else {
                    if (i) return;
                    i = setTimeout(c, o.options.ProgressInterval);
                  }
                };
              },
              getFileSize: w,
              getFileSizeByPath: function (e) {
                return new Promise(function (t, n) {
                  p.stat({
                    path: e,
                    success: function (e) {
                      var n = e.stats,
                        i = n.isDirectory() ? 0 : n.size;
                      t(i);
                    },
                    fail: function (e) {
                      n((null == e ? void 0 : e.errMsg) || "");
                    }
                  });
                });
              },
              getSkewTime: E,
              obj2str: function (e, t) {
                var n,
                  i,
                  o,
                  r = [],
                  a = m(e);

                for (n = 0; n < a.length; n++) o = void 0 === e[i = a[n]] || null === e[i] ? "" : "" + e[i], i = t ? f(i).toLowerCase() : f(i), o = f(o) || "", r.push(i + "=" + o);

                return r.join("&");
              },
              getAuth: function (e) {
                var t,
                  n = (e = e || {}).SecretId,
                  i = e.SecretKey,
                  o = e.KeyTime,
                  r = (e.method || e.Method || "get").toLowerCase(),
                  a = y(e.Query || e.params || {}),
                  c = function (e) {
                    var t = {};

                    for (var n in e) {
                      var i = n.toLowerCase();
                      (i.indexOf("x-cos-") > -1 || h.indexOf(i) > -1) && (t[n] = e[n]);
                    }

                    return t;
                  }(y(e.Headers || e.headers || {})),
                  l = e.Key || "";

                e.UseRawKey ? t = e.Pathname || e.pathname || "/" + l : 0 !== (t = e.Pathname || e.pathname || l).indexOf("/") && (t = "/" + t);
                var u = !1 !== e.ForceSignHost;

                if (!c.Host && !c.host && e.Bucket && e.Region && u && (c.Host = e.Bucket + ".cos." + e.Region + ".myqcloud.com"), n && i) {
                  var p = Math.round(E(e.SystemClockOffset) / 1e3) - 1,
                    d = p,
                    f = e.Expires || e.expires;
                  d += void 0 === f ? 900 : 1 * f || 0;

                  var g = n,
                    v = o || p + ";" + d,
                    x = o || p + ";" + d,
                    b = m(c, !0).join(";").toLowerCase(),
                    k = m(a, !0).join(";").toLowerCase(),
                    C = s.HmacSHA1(x, i).toString(),
                    S = [r, t, R.obj2str(a, !0), R.obj2str(c, !0), ""].join("\n"),
                    _ = ["sha1", v, s.SHA1(S).toString(), ""].join("\n");

                  return ["q-sign-algorithm=sha1", "q-ak=" + g, "q-sign-time=" + v, "q-key-time=" + x, "q-header-list=" + b, "q-url-param-list=" + k, "q-signature=" + s.HmacSHA1(_, C).toString()].join("&");
                }
              },
              compareVersion: T,
              canFileSlice: A,
              isCIHost: function (e) {
                return /^https?:\/\/([^/]+\.)?ci\.[^/]+/.test(e);
              },
              error: function (e, t) {
                var n = e;
                return e.message = e.message || null, "string" == typeof t ? (e.error = t, e.message = t) : "object" === r(t) && null !== t && (x(e, t), (t.code || t.name) && (e.code = t.code || t.name), t.message && (e.message = t.message), t.stack && (e.stack = t.stack)), "function" == typeof Object.defineProperty && (Object.defineProperty(e, "name", {
                  writable: !0,
                  enumerable: !1
                }), Object.defineProperty(e, "message", {
                  enumerable: !0
                })), e.name = t && t.name || e.name || e.code || "Error", e.code || (e.code = e.name), e.error || (e.error = y(n)), e;
              },
              getSourceParams: function (e) {
                var t = this.options.CopySourceParser;
                if (t) return t(e);
                var n = e.match(/^([^.]+-\d+)\.cos(v6|-cdc|-internal)?\.([^.]+)\.((myqcloud\.com)|(tencentcos\.cn))\/(.+)$/);
                return n ? {
                  Bucket: n[1],
                  Region: n[3],
                  Key: n[7]
                } : null;
              }
            };

          e.exports = R;
        }).call(this, n(2));
      }, function (e, t, n) {
        "use strict";

        function i(e, t) {
          return void 0 === t && (t = Object), t && "function" == typeof t.freeze ? t.freeze(e) : e;
        }

        var o = i({
          HTML: "text/html",
          isHTML: function (e) {
            return e === o.HTML;
          },
          XML_APPLICATION: "application/xml",
          XML_TEXT: "text/xml",
          XML_XHTML_APPLICATION: "application/xhtml+xml",
          XML_SVG_IMAGE: "image/svg+xml"
        }),
          r = i({
            HTML: "http://www.w3.org/1999/xhtml",
            isHTML: function (e) {
              return e === r.HTML;
            },
            SVG: "http://www.w3.org/2000/svg",
            XML: "http://www.w3.org/XML/1998/namespace",
            XMLNS: "http://www.w3.org/2000/xmlns/"
          });
        t.assign = function (e, t) {
          if (null === e || "object" != typeof e) throw new TypeError("target is not an object");

          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);

          return e;
        }, t.freeze = i, t.MIME_TYPE = o, t.NAMESPACE = r;
      }, function (e, t) {
        var n;

        n = function () {
          return this;
        }();

        try {
          n = n || new Function("return this")();
        } catch (e) {
          "object" == typeof window && (n = window);
        }

        e.exports = n;
      }, function (e, t) {
        e.exports = function (e) {
          return e.webpackPolyfill || (e.deprecate = function () { }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            }
          }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            }
          }), e.webpackPolyfill = 1), e;
        };
      }, function (e, t, n) {
        var i = n(1).NAMESPACE;

        function o(e) {
          return "" !== e;
        }

        function r(e, t) {
          return e.hasOwnProperty(t) || (e[t] = !0), e;
        }

        function a(e) {
          if (!e) return [];

          var t = function (e) {
            return e ? e.split(/[\t\n\f\r ]+/).filter(o) : [];
          }(e);

          return Object.keys(t.reduce(r, {}));
        }

        function s(e, t) {
          for (var n in e) t[n] = e[n];
        }

        function c(e, t) {
          var n = e.prototype;

          if (!(n instanceof t)) {
            function i() { }

            i.prototype = t.prototype, s(n, i = new i()), e.prototype = n = i;
          }

          n.constructor != e && (n.constructor = e);
        }

        var l = {},
          u = l.ELEMENT_NODE = 1,
          p = l.ATTRIBUTE_NODE = 2,
          d = l.TEXT_NODE = 3,
          f = l.CDATA_SECTION_NODE = 4,
          m = l.ENTITY_REFERENCE_NODE = 5,
          h = l.ENTITY_NODE = 6,
          g = l.PROCESSING_INSTRUCTION_NODE = 7,
          v = l.COMMENT_NODE = 8,
          y = l.DOCUMENT_NODE = 9,
          x = l.DOCUMENT_TYPE_NODE = 10,
          b = l.DOCUMENT_FRAGMENT_NODE = 11,
          k = l.NOTATION_NODE = 12,
          C = {},
          S = {},
          _ = (C.INDEX_SIZE_ERR = (S[1] = "Index size error", 1), C.DOMSTRING_SIZE_ERR = (S[2] = "DOMString size error", 2), C.HIERARCHY_REQUEST_ERR = (S[3] = "Hierarchy request error", 3)),
          w = (C.WRONG_DOCUMENT_ERR = (S[4] = "Wrong document", 4), C.INVALID_CHARACTER_ERR = (S[5] = "Invalid character", 5), C.NO_DATA_ALLOWED_ERR = (S[6] = "No data allowed", 6), C.NO_MODIFICATION_ALLOWED_ERR = (S[7] = "No modification allowed", 7), C.NOT_FOUND_ERR = (S[8] = "Not found", 8)),
          E = (C.NOT_SUPPORTED_ERR = (S[9] = "Not supported", 9), C.INUSE_ATTRIBUTE_ERR = (S[10] = "Attribute in use", 10));

        C.INVALID_STATE_ERR = (S[11] = "Invalid state", 11), C.SYNTAX_ERR = (S[12] = "Syntax error", 12), C.INVALID_MODIFICATION_ERR = (S[13] = "Invalid modification", 13), C.NAMESPACE_ERR = (S[14] = "Invalid namespace", 14), C.INVALID_ACCESS_ERR = (S[15] = "Invalid access", 15);

        function T(e, t) {
          if (t instanceof Error) var n = t; else n = this, Error.call(this, S[e]), this.message = S[e], Error.captureStackTrace && Error.captureStackTrace(this, T);
          return n.code = e, t && (this.message = this.message + ": " + t), n;
        }

        function A() { }

        function R(e, t) {
          this._node = e, this._refresh = t, O(this);
        }

        function O(e) {
          var t = e._node._inc || e._node.ownerDocument._inc;

          if (e._inc != t) {
            var n = e._refresh(e._node);

            le(e, "length", n.length), s(n, e), e._inc = t;
          }
        }

        function I() { }

        function B(e, t) {
          for (var n = e.length; n--;) if (e[n] === t) return n;
        }

        function N(e, t, n, o) {
          if (o ? t[B(t, o)] = n : t[t.length++] = n, e) {
            n.ownerElement = e;
            var r = e.ownerDocument;
            r && (o && F(r, e, o), function (e, t, n) {
              e && e._inc++, n.namespaceURI === i.XMLNS && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
            }(r, e, n));
          }
        }

        function P(e, t, n) {
          var i = B(t, n);
          if (!(i >= 0)) throw T(w, new Error(e.tagName + "@" + n));

          for (var o = t.length - 1; i < o;) t[i] = t[++i];

          if (t.length = o, e) {
            var r = e.ownerDocument;
            r && (F(r, e, n), n.ownerElement = null);
          }
        }

        function D() { }

        function L() { }

        function j(e) {
          return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
        }

        function U(e, t) {
          if (t(e)) return !0;
          if (e = e.firstChild) do {
            if (U(e, t)) return !0;
          } while (e = e.nextSibling);
        }

        function M() { }

        function F(e, t, n, o) {
          e && e._inc++, n.namespaceURI === i.XMLNS && delete t._nsMap[n.prefix ? n.localName : ""];
        }

        function H(e, t, n) {
          if (e && e._inc) {
            e._inc++;
            var i = t.childNodes;
            if (n) i[i.length++] = n; else {
              for (var o = t.firstChild, r = 0; o;) i[r++] = o, o = o.nextSibling;

              i.length = r, delete i[i.length];
            }
          }
        }

        function z(e, t) {
          var n = t.previousSibling,
            i = t.nextSibling;
          return n ? n.nextSibling = i : e.firstChild = i, i ? i.previousSibling = n : e.lastChild = n, t.parentNode = null, t.previousSibling = null, t.nextSibling = null, H(e.ownerDocument, e), t;
        }

        function q(e, t, n) {
          var i = t.parentNode;

          if (i && i.removeChild(t), t.nodeType === b) {
            var o = t.firstChild;
            if (null == o) return t;
            var r = t.lastChild;
          } else o = r = t;

          var a = n ? n.previousSibling : e.lastChild;
          o.previousSibling = a, r.nextSibling = n, a ? a.nextSibling = o : e.firstChild = o, null == n ? e.lastChild = r : n.previousSibling = r;

          do {
            o.parentNode = e;
          } while (o !== r && (o = o.nextSibling));

          return H(e.ownerDocument || e, e), t.nodeType == b && (t.firstChild = t.lastChild = null), t;
        }

        function K() {
          this._nsMap = {};
        }

        function G() { }

        function V() { }

        function X() { }

        function W() { }

        function Y() { }

        function Q() { }

        function J() { }

        function $() { }

        function Z() { }

        function ee() { }

        function te() { }

        function ne() { }

        function ie(e, t) {
          var n = [],
            i = 9 == this.nodeType && this.documentElement || this,
            o = i.prefix,
            r = i.namespaceURI;
          if (r && null == o && null == (o = i.lookupPrefix(r))) var a = [{
            namespace: r,
            prefix: null
          }];
          return ae(this, n, e, t, a), n.join("");
        }

        function oe(e, t, n) {
          var o = e.prefix || "",
            r = e.namespaceURI;
          if (!r) return !1;
          if ("xml" === o && r === i.XML || r === i.XMLNS) return !1;

          for (var a = n.length; a--;) {
            var s = n[a];
            if (s.prefix === o) return s.namespace !== r;
          }

          return !0;
        }

        function re(e, t, n) {
          e.push(" ", t, '="', n.replace(/[<>&"\t\n\r]/g, j), '"');
        }

        function ae(e, t, n, o, r) {
          if (r || (r = []), o) {
            if (!(e = o(e))) return;
            if ("string" == typeof e) return void t.push(e);
          }

          switch (e.nodeType) {
            case u:
              var a = e.attributes,
                s = a.length,
                c = e.firstChild,
                l = e.tagName,
                h = l;

              if (!(n = i.isHTML(e.namespaceURI) || n) && !e.prefix && e.namespaceURI) {
                for (var k, C = 0; C < a.length; C++) if ("xmlns" === a.item(C).name) {
                  k = a.item(C).value;
                  break;
                }

                if (!k) for (var S = r.length - 1; S >= 0; S--) {
                  if ("" === (_ = r[S]).prefix && _.namespace === e.namespaceURI) {
                    k = _.namespace;
                    break;
                  }
                }
                if (k !== e.namespaceURI) for (S = r.length - 1; S >= 0; S--) {
                  var _;

                  if ((_ = r[S]).namespace === e.namespaceURI) {
                    _.prefix && (h = _.prefix + ":" + l);
                    break;
                  }
                }
              }

              t.push("<", h);

              for (var w = 0; w < s; w++) {
                "xmlns" == (E = a.item(w)).prefix ? r.push({
                  prefix: E.localName,
                  namespace: E.value
                }) : "xmlns" == E.nodeName && r.push({
                  prefix: "",
                  namespace: E.value
                });
              }

              for (w = 0; w < s; w++) {
                var E, T, A;
                if (oe(E = a.item(w), 0, r)) re(t, (T = E.prefix || "") ? "xmlns:" + T : "xmlns", A = E.namespaceURI), r.push({
                  prefix: T,
                  namespace: A
                });
                ae(E, t, n, o, r);
              }

              if (l === h && oe(e, 0, r)) re(t, (T = e.prefix || "") ? "xmlns:" + T : "xmlns", A = e.namespaceURI), r.push({
                prefix: T,
                namespace: A
              });

              if (c || n && !/^(?:meta|link|img|br|hr|input)$/i.test(l)) {
                if (t.push(">"), n && /^script$/i.test(l)) for (; c;) c.data ? t.push(c.data) : ae(c, t, n, o, r.slice()), c = c.nextSibling; else for (; c;) ae(c, t, n, o, r.slice()), c = c.nextSibling;
                t.push("</", h, ">");
              } else t.push("/>");

              return;

            case y:
            case b:
              for (c = e.firstChild; c;) ae(c, t, n, o, r.slice()), c = c.nextSibling;

              return;

            case p:
              return re(t, e.name, e.value);

            case d:
              return t.push(e.data.replace(/[<&>]/g, j));

            case f:
              return t.push("<![CDATA[", e.data, "]]>");

            case v:
              return t.push("\x3c!--", e.data, "--\x3e");

            case x:
              var R = e.publicId,
                O = e.systemId;
              if (t.push("<!DOCTYPE ", e.name), R) t.push(" PUBLIC ", R), O && "." != O && t.push(" ", O), t.push(">"); else if (O && "." != O) t.push(" SYSTEM ", O, ">"); else {
                var I = e.internalSubset;
                I && t.push(" [", I, "]"), t.push(">");
              }
              return;

            case g:
              return t.push("<?", e.target, " ", e.data, "?>");

            case m:
              return t.push("&", e.nodeName, ";");

            default:
              t.push("??", e.nodeName);
          }
        }

        function se(e, t, n) {
          var i;

          switch (t.nodeType) {
            case u:
              (i = t.cloneNode(!1)).ownerDocument = e;

            case b:
              break;

            case p:
              n = !0;
          }

          if (i || (i = t.cloneNode(!1)), i.ownerDocument = e, i.parentNode = null, n) for (var o = t.firstChild; o;) i.appendChild(se(e, o, n)), o = o.nextSibling;
          return i;
        }

        function ce(e, t, n) {
          var i = new t.constructor();

          for (var o in t) {
            var r = t[o];
            "object" != typeof r && r != i[o] && (i[o] = r);
          }

          switch (t.childNodes && (i.childNodes = new A()), i.ownerDocument = e, i.nodeType) {
            case u:
              var a = t.attributes,
                s = i.attributes = new I(),
                c = a.length;
              s._ownerElement = i;

              for (var l = 0; l < c; l++) i.setAttributeNode(ce(e, a.item(l), !0));

              break;

            case p:
              n = !0;
          }

          if (n) for (var d = t.firstChild; d;) i.appendChild(ce(e, d, n)), d = d.nextSibling;
          return i;
        }

        function le(e, t, n) {
          e[t] = n;
        }

        T.prototype = Error.prototype, s(C, T), A.prototype = {
          length: 0,
          item: function (e) {
            return this[e] || null;
          },
          toString: function (e, t) {
            for (var n = [], i = 0; i < this.length; i++) ae(this[i], n, e, t);

            return n.join("");
          }
        }, R.prototype.item = function (e) {
          return O(this), this[e];
        }, c(R, A), I.prototype = {
          length: 0,
          item: A.prototype.item,
          getNamedItem: function (e) {
            for (var t = this.length; t--;) {
              var n = this[t];
              if (n.nodeName == e) return n;
            }
          },
          setNamedItem: function (e) {
            var t = e.ownerElement;
            if (t && t != this._ownerElement) throw new T(E);
            var n = this.getNamedItem(e.nodeName);
            return N(this._ownerElement, this, e, n), n;
          },
          setNamedItemNS: function (e) {
            var t,
              n = e.ownerElement;
            if (n && n != this._ownerElement) throw new T(E);
            return t = this.getNamedItemNS(e.namespaceURI, e.localName), N(this._ownerElement, this, e, t), t;
          },
          removeNamedItem: function (e) {
            var t = this.getNamedItem(e);
            return P(this._ownerElement, this, t), t;
          },
          removeNamedItemNS: function (e, t) {
            var n = this.getNamedItemNS(e, t);
            return P(this._ownerElement, this, n), n;
          },
          getNamedItemNS: function (e, t) {
            for (var n = this.length; n--;) {
              var i = this[n];
              if (i.localName == t && i.namespaceURI == e) return i;
            }

            return null;
          }
        }, D.prototype = {
          hasFeature: function (e, t) {
            return !0;
          },
          createDocument: function (e, t, n) {
            var i = new M();

            if (i.implementation = this, i.childNodes = new A(), i.doctype = n || null, n && i.appendChild(n), t) {
              var o = i.createElementNS(e, t);
              i.appendChild(o);
            }

            return i;
          },
          createDocumentType: function (e, t, n) {
            var i = new Q();
            return i.name = e, i.nodeName = e, i.publicId = t || "", i.systemId = n || "", i;
          }
        }, L.prototype = {
          firstChild: null,
          lastChild: null,
          previousSibling: null,
          nextSibling: null,
          attributes: null,
          parentNode: null,
          childNodes: null,
          ownerDocument: null,
          nodeValue: null,
          namespaceURI: null,
          prefix: null,
          localName: null,
          insertBefore: function (e, t) {
            return q(this, e, t);
          },
          replaceChild: function (e, t) {
            this.insertBefore(e, t), t && this.removeChild(t);
          },
          removeChild: function (e) {
            return z(this, e);
          },
          appendChild: function (e) {
            return this.insertBefore(e, null);
          },
          hasChildNodes: function () {
            return null != this.firstChild;
          },
          cloneNode: function (e) {
            return ce(this.ownerDocument || this, this, e);
          },
          normalize: function () {
            for (var e = this.firstChild; e;) {
              var t = e.nextSibling;
              t && t.nodeType == d && e.nodeType == d ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t);
            }
          },
          isSupported: function (e, t) {
            return this.ownerDocument.implementation.hasFeature(e, t);
          },
          hasAttributes: function () {
            return this.attributes.length > 0;
          },
          lookupPrefix: function (e) {
            for (var t = this; t;) {
              var n = t._nsMap;
              if (n) for (var i in n) if (n[i] == e) return i;
              t = t.nodeType == p ? t.ownerDocument : t.parentNode;
            }

            return null;
          },
          lookupNamespaceURI: function (e) {
            for (var t = this; t;) {
              var n = t._nsMap;
              if (n && e in n) return n[e];
              t = t.nodeType == p ? t.ownerDocument : t.parentNode;
            }

            return null;
          },
          isDefaultNamespace: function (e) {
            return null == this.lookupPrefix(e);
          }
        }, s(l, L), s(l, L.prototype), M.prototype = {
          nodeName: "#document",
          nodeType: y,
          doctype: null,
          documentElement: null,
          _inc: 1,
          insertBefore: function (e, t) {
            if (e.nodeType == b) {
              for (var n = e.firstChild; n;) {
                var i = n.nextSibling;
                this.insertBefore(n, t), n = i;
              }

              return e;
            }

            return null == this.documentElement && e.nodeType == u && (this.documentElement = e), q(this, e, t), e.ownerDocument = this, e;
          },
          removeChild: function (e) {
            return this.documentElement == e && (this.documentElement = null), z(this, e);
          },
          importNode: function (e, t) {
            return se(this, e, t);
          },
          getElementById: function (e) {
            var t = null;
            return U(this.documentElement, function (n) {
              if (n.nodeType == u && n.getAttribute("id") == e) return t = n, !0;
            }), t;
          },
          getElementsByClassName: function (e) {
            var t = a(e);
            return new R(this, function (n) {
              var i = [];
              return t.length > 0 && U(n.documentElement, function (o) {
                if (o !== n && o.nodeType === u) {
                  var r = o.getAttribute("class");

                  if (r) {
                    var s = e === r;

                    if (!s) {
                      var c = a(r);
                      s = t.every((l = c, function (e) {
                        return l && -1 !== l.indexOf(e);
                      }));
                    }

                    s && i.push(o);
                  }
                }

                var l;
              }), i;
            });
          },
          createElement: function (e) {
            var t = new K();
            return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.localName = e, t.childNodes = new A(), (t.attributes = new I())._ownerElement = t, t;
          },
          createDocumentFragment: function () {
            var e = new ee();
            return e.ownerDocument = this, e.childNodes = new A(), e;
          },
          createTextNode: function (e) {
            var t = new X();
            return t.ownerDocument = this, t.appendData(e), t;
          },
          createComment: function (e) {
            var t = new W();
            return t.ownerDocument = this, t.appendData(e), t;
          },
          createCDATASection: function (e) {
            var t = new Y();
            return t.ownerDocument = this, t.appendData(e), t;
          },
          createProcessingInstruction: function (e, t) {
            var n = new te();
            return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, n;
          },
          createAttribute: function (e) {
            var t = new G();
            return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, t;
          },
          createEntityReference: function (e) {
            var t = new Z();
            return t.ownerDocument = this, t.nodeName = e, t;
          },
          createElementNS: function (e, t) {
            var n = new K(),
              i = t.split(":"),
              o = n.attributes = new I();
            return n.childNodes = new A(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, n.namespaceURI = e, 2 == i.length ? (n.prefix = i[0], n.localName = i[1]) : n.localName = t, o._ownerElement = n, n;
          },
          createAttributeNS: function (e, t) {
            var n = new G(),
              i = t.split(":");
            return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 2 == i.length ? (n.prefix = i[0], n.localName = i[1]) : n.localName = t, n;
          }
        }, c(M, L), K.prototype = {
          nodeType: u,
          hasAttribute: function (e) {
            return null != this.getAttributeNode(e);
          },
          getAttribute: function (e) {
            var t = this.getAttributeNode(e);
            return t && t.value || "";
          },
          getAttributeNode: function (e) {
            return this.attributes.getNamedItem(e);
          },
          setAttribute: function (e, t) {
            var n = this.ownerDocument.createAttribute(e);
            n.value = n.nodeValue = "" + t, this.setAttributeNode(n);
          },
          removeAttribute: function (e) {
            var t = this.getAttributeNode(e);
            t && this.removeAttributeNode(t);
          },
          appendChild: function (e) {
            return e.nodeType === b ? this.insertBefore(e, null) : function (e, t) {
              return t.parentNode && t.parentNode.removeChild(t), t.parentNode = e, t.previousSibling = e.lastChild, t.nextSibling = null, t.previousSibling ? t.previousSibling.nextSibling = t : e.firstChild = t, e.lastChild = t, H(e.ownerDocument, e, t), t;
            }(this, e);
          },
          setAttributeNode: function (e) {
            return this.attributes.setNamedItem(e);
          },
          setAttributeNodeNS: function (e) {
            return this.attributes.setNamedItemNS(e);
          },
          removeAttributeNode: function (e) {
            return this.attributes.removeNamedItem(e.nodeName);
          },
          removeAttributeNS: function (e, t) {
            var n = this.getAttributeNodeNS(e, t);
            n && this.removeAttributeNode(n);
          },
          hasAttributeNS: function (e, t) {
            return null != this.getAttributeNodeNS(e, t);
          },
          getAttributeNS: function (e, t) {
            var n = this.getAttributeNodeNS(e, t);
            return n && n.value || "";
          },
          setAttributeNS: function (e, t, n) {
            var i = this.ownerDocument.createAttributeNS(e, t);
            i.value = i.nodeValue = "" + n, this.setAttributeNode(i);
          },
          getAttributeNodeNS: function (e, t) {
            return this.attributes.getNamedItemNS(e, t);
          },
          getElementsByTagName: function (e) {
            return new R(this, function (t) {
              var n = [];
              return U(t, function (i) {
                i === t || i.nodeType != u || "*" !== e && i.tagName != e || n.push(i);
              }), n;
            });
          },
          getElementsByTagNameNS: function (e, t) {
            return new R(this, function (n) {
              var i = [];
              return U(n, function (o) {
                o === n || o.nodeType !== u || "*" !== e && o.namespaceURI !== e || "*" !== t && o.localName != t || i.push(o);
              }), i;
            });
          }
        }, M.prototype.getElementsByTagName = K.prototype.getElementsByTagName, M.prototype.getElementsByTagNameNS = K.prototype.getElementsByTagNameNS, c(K, L), G.prototype.nodeType = p, c(G, L), V.prototype = {
          data: "",
          substringData: function (e, t) {
            return this.data.substring(e, e + t);
          },
          appendData: function (e) {
            e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
          },
          insertData: function (e, t) {
            this.replaceData(e, 0, t);
          },
          appendChild: function (e) {
            throw new Error(S[_]);
          },
          deleteData: function (e, t) {
            this.replaceData(e, t, "");
          },
          replaceData: function (e, t, n) {
            n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, this.length = n.length;
          }
        }, c(V, L), X.prototype = {
          nodeName: "#text",
          nodeType: d,
          splitText: function (e) {
            var t = this.data,
              n = t.substring(e);
            t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
            var i = this.ownerDocument.createTextNode(n);
            return this.parentNode && this.parentNode.insertBefore(i, this.nextSibling), i;
          }
        }, c(X, V), W.prototype = {
          nodeName: "#comment",
          nodeType: v
        }, c(W, V), Y.prototype = {
          nodeName: "#cdata-section",
          nodeType: f
        }, c(Y, V), Q.prototype.nodeType = x, c(Q, L), J.prototype.nodeType = k, c(J, L), $.prototype.nodeType = h, c($, L), Z.prototype.nodeType = m, c(Z, L), ee.prototype.nodeName = "#document-fragment", ee.prototype.nodeType = b, c(ee, L), te.prototype.nodeType = g, c(te, L), ne.prototype.serializeToString = function (e, t, n) {
          return ie.call(e, t, n);
        }, L.prototype.toString = ie;

        try {
          if (Object.defineProperty) {
            function ue(e) {
              switch (e.nodeType) {
                case u:
                case b:
                  var t = [];

                  for (e = e.firstChild; e;) 7 !== e.nodeType && 8 !== e.nodeType && t.push(ue(e)), e = e.nextSibling;

                  return t.join("");

                default:
                  return e.nodeValue;
              }
            }

            Object.defineProperty(R.prototype, "length", {
              get: function () {
                return O(this), this.$$length;
              }
            }), Object.defineProperty(L.prototype, "textContent", {
              get: function () {
                return ue(this);
              },
              set: function (e) {
                switch (this.nodeType) {
                  case u:
                  case b:
                    for (; this.firstChild;) this.removeChild(this.firstChild);

                    (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                    break;

                  default:
                    this.data = e, this.value = e, this.nodeValue = e;
                }
              }
            }), le = function (e, t, n) {
              e["$$" + t] = n;
            };
          }
        } catch (pe) { }

        t.DocumentType = Q, t.DOMException = T, t.DOMImplementation = D, t.Element = K, t.Node = L, t.NodeList = A, t.XMLSerializer = ne;
      }, function (e, t) {
        var n = function (e) {
          var t = (e = e || {}).Base64,
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            i = function (e) {
              for (var t = {}, n = 0, i = e.length; n < i; n++) t[e.charAt(n)] = n;

              return t;
            }(n),
            o = String.fromCharCode,
            r = function (e) {
              if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? o(192 | t >>> 6) + o(128 | 63 & t) : o(224 | t >>> 12 & 15) + o(128 | t >>> 6 & 63) + o(128 | 63 & t);
              var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
              return o(240 | t >>> 18 & 7) + o(128 | t >>> 12 & 63) + o(128 | t >>> 6 & 63) + o(128 | 63 & t);
            },
            a = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
            s = function (e) {
              return e.replace(a, r);
            },
            c = function (e) {
              var t = [0, 2, 1][e.length % 3],
                i = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
              return [n.charAt(i >>> 18), n.charAt(i >>> 12 & 63), t >= 2 ? "=" : n.charAt(i >>> 6 & 63), t >= 1 ? "=" : n.charAt(63 & i)].join("");
            },
            l = e.btoa ? function (t) {
              return e.btoa(t);
            } : function (e) {
              return e.replace(/[\s\S]{1,3}/g, c);
            },
            u = function (e) {
              return l(s(e));
            },
            p = function (e, t) {
              return t ? u(String(e)).replace(/[+\/]/g, function (e) {
                return "+" == e ? "-" : "_";
              }).replace(/=/g, "") : u(String(e));
            },
            d = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
            f = function (e) {
              switch (e.length) {
                case 4:
                  var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                  return o(55296 + (t >>> 10)) + o(56320 + (1023 & t));

                case 3:
                  return o((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

                default:
                  return o((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
              }
            },
            m = function (e) {
              return e.replace(d, f);
            },
            h = function (e) {
              var t = e.length,
                n = t % 4,
                r = (t > 0 ? i[e.charAt(0)] << 18 : 0) | (t > 1 ? i[e.charAt(1)] << 12 : 0) | (t > 2 ? i[e.charAt(2)] << 6 : 0) | (t > 3 ? i[e.charAt(3)] : 0),
                a = [o(r >>> 16), o(r >>> 8 & 255), o(255 & r)];
              return a.length -= [0, 0, 2, 1][n], a.join("");
            },
            g = e.atob ? function (t) {
              return e.atob(t);
            } : function (e) {
              return e.replace(/[\s\S]{1,4}/g, h);
            },
            v = function (e) {
              return m(g(e));
            },
            y = function (e) {
              return v(String(e).replace(/[-_]/g, function (e) {
                return "-" == e ? "+" : "/";
              }).replace(/[^A-Za-z0-9\+\/]/g, ""));
            };

          return {
            VERSION: "2.1.9",
            atob: g,
            btoa: l,
            fromBase64: y,
            toBase64: p,
            utob: s,
            encode: p,
            encodeURI: function (e) {
              return p(e, !0);
            },
            btou: m,
            decode: y,
            noConflict: function () {
              var n = e.Base64;
              return e.Base64 = t, n;
            }
          };
        }();

        e.exports = n;
      }, function (e, t, n) {
        function i(e) {
          return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, i(e);
        }

        function o() {
          "use strict";
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

          o = function () {
            return e;
          };

          var e = {},
            t = Object.prototype,
            n = t.hasOwnProperty,
            r = "function" == typeof Symbol ? Symbol : {},
            a = r.iterator || "@@iterator",
            s = r.asyncIterator || "@@asyncIterator",
            c = r.toStringTag || "@@toStringTag";

          function l(e, t, n) {
            return Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), e[t];
          }

          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return e[t] = n;
            };
          }

          function u(e, t, n, i) {
            var o = t && t.prototype instanceof f ? t : f,
              r = Object.create(o.prototype),
              a = new w(i || []);
            return r._invoke = function (e, t, n) {
              var i = "suspendedStart";
              return function (o, r) {
                if ("executing" === i) throw new Error("Generator is already running");

                if ("completed" === i) {
                  if ("throw" === o) throw r;
                  return T();
                }

                for (n.method = o, n.arg = r; ;) {
                  var a = n.delegate;

                  if (a) {
                    var s = C(a, n);

                    if (s) {
                      if (s === d) continue;
                      return s;
                    }
                  }

                  if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                    if ("suspendedStart" === i) throw i = "completed", n.arg;
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  i = "executing";
                  var c = p(e, t, n);

                  if ("normal" === c.type) {
                    if (i = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                    return {
                      value: c.arg,
                      done: n.done
                    };
                  }

                  "throw" === c.type && (i = "completed", n.method = "throw", n.arg = c.arg);
                }
              };
            }(e, n, a), r;
          }

          function p(e, t, n) {
            try {
              return {
                type: "normal",
                arg: e.call(t, n)
              };
            } catch (e) {
              return {
                type: "throw",
                arg: e
              };
            }
          }

          e.wrap = u;
          var d = {};

          function f() { }

          function m() { }

          function h() { }

          var g = {};
          l(g, a, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            y = v && v(v(E([])));
          y && y !== t && n.call(y, a) && (g = y);
          var x = h.prototype = f.prototype = Object.create(g);

          function b(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }

          function k(e, t) {
            function o(r, a, s, c) {
              var l = p(e[r], e, a);

              if ("throw" !== l.type) {
                var u = l.arg,
                  d = u.value;
                return d && "object" == i(d) && n.call(d, "__await") ? t.resolve(d.__await).then(function (e) {
                  o("next", e, s, c);
                }, function (e) {
                  o("throw", e, s, c);
                }) : t.resolve(d).then(function (e) {
                  u.value = e, s(u);
                }, function (e) {
                  return o("throw", e, s, c);
                });
              }

              c(l.arg);
            }

            var r;

            this._invoke = function (e, n) {
              function i() {
                return new t(function (t, i) {
                  o(e, n, t, i);
                });
              }

              return r = r ? r.then(i, i) : i();
            };
          }

          function C(e, t) {
            var n = e.iterator[t.method];

            if (void 0 === n) {
              if (t.delegate = null, "throw" === t.method) {
                if (e.iterator.return && (t.method = "return", t.arg = void 0, C(e, t), "throw" === t.method)) return d;
                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
              }

              return d;
            }

            var i = p(n, e.iterator, t.arg);
            if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, d;
            var o = i.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d);
          }

          function S(e) {
            var t = {
              tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
          }

          function _(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t;
          }

          function w(e) {
            this.tryEntries = [{
              tryLoc: "root"
            }], e.forEach(S, this), this.reset(!0);
          }

          function E(e) {
            if (e) {
              var t = e[a];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;

              if (!isNaN(e.length)) {
                var i = -1,
                  o = function t() {
                    for (; ++i < e.length;) if (n.call(e, i)) return t.value = e[i], t.done = !1, t;

                    return t.value = void 0, t.done = !0, t;
                  };

                return o.next = o;
              }
            }

            return {
              next: T
            };
          }

          function T() {
            return {
              value: void 0,
              done: !0
            };
          }

          return m.prototype = h, l(x, "constructor", h), l(h, "constructor", m), m.displayName = l(h, c, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
          }, e.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, l(e, c, "GeneratorFunction")), e.prototype = Object.create(x), e;
          }, e.awrap = function (e) {
            return {
              __await: e
            };
          }, b(k.prototype), l(k.prototype, s, function () {
            return this;
          }), e.AsyncIterator = k, e.async = function (t, n, i, o, r) {
            void 0 === r && (r = Promise);
            var a = new k(u(t, n, i, o), r);
            return e.isGeneratorFunction(n) ? a : a.next().then(function (e) {
              return e.done ? e.value : a.next();
            });
          }, b(x), l(x, c, "Generator"), l(x, a, function () {
            return this;
          }), l(x, "toString", function () {
            return "[object Generator]";
          }), e.keys = function (e) {
            var t = [];

            for (var n in e) t.push(n);

            return t.reverse(), function n() {
              for (; t.length;) {
                var i = t.pop();
                if (i in e) return n.value = i, n.done = !1, n;
              }

              return n.done = !0, n;
            };
          }, e.values = E, w.prototype = {
            constructor: w,
            reset: function (e) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;

              function i(n, i) {
                return a.type = "throw", a.arg = e, t.next = n, i && (t.method = "next", t.arg = void 0), !!i;
              }

              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var r = this.tryEntries[o],
                  a = r.completion;
                if ("root" === r.tryLoc) return i("end");

                if (r.tryLoc <= this.prev) {
                  var s = n.call(r, "catchLoc"),
                    c = n.call(r, "finallyLoc");

                  if (s && c) {
                    if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                    if (this.prev < r.finallyLoc) return i(r.finallyLoc);
                  } else if (s) {
                    if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                  } else {
                    if (!c) throw new Error("try statement without catch or finally");
                    if (this.prev < r.finallyLoc) return i(r.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i];

                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var r = o;
                  break;
                }
              }

              r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
              var a = r ? r.completion : {};
              return a.type = e, a.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(a);
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d;
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];

                if (n.tryLoc === e) {
                  var i = n.completion;

                  if ("throw" === i.type) {
                    var o = i.arg;

                    _(n);
                  }

                  return o;
                }
              }

              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return this.delegate = {
                iterator: E(e),
                resultName: t,
                nextLoc: n
              }, "next" === this.method && (this.arg = void 0), d;
            }
          }, e;
        }

        function r(e, t, n, i, o, r, a) {
          try {
            var s = e[r](a),
              c = s.value;
          } catch (e) {
            return void n(e);
          }

          s.done ? t(c) : Promise.resolve(c).then(i, o);
        }

        function a(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }

        var s = n(7),
          c = n(22),
          l = null,
          u = function (e) {
            return l || (l = new c({
              appkey: "0AND0VEVB24UBGDU",
              versionCode: s.version,
              channelID: "mp_sdk",
              openid: "openid",
              unionid: "unid",
              strictMode: !1,
              delay: e,
              sessionDuration: 6e4
            })), l;
          },
          p = function () {
            var e = function () {
              return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
            };

            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
          },
          d = function () {
            return new Promise(function (e) {
              if (uni.canIUse("getNetworkType")) try {
                uni.getNetworkType({
                  success: function (t) {
                    e(t.networkType);
                  }
                });
              } catch (t) {
                e("can_not_get_network_type");
              } else e("can_not_get_network_type");
            });
          },
          f = {
            devicePlatform: "",
            wxVersion: "",
            wxSystem: "",
            wxSdkVersion: ""
          };

        (function () {
          var e = {
            devicePlatform: "",
            wxVersion: "",
            wxSystem: "",
            wxSdkVersion: ""
          };
          return new Promise(function (t) {
            if (uni.canIUse("getSystemInfo")) try {
              uni.getSystemInfo({
                success: function (n) {
                  var i = n.platform,
                    o = n.version,
                    r = n.system,
                    a = n.SDKVersion;
                  Object.assign(e, {
                    devicePlatform: i,
                    wxVersion: o,
                    wxSystem: r,
                    wxSdkVersion: a
                  }), t(e);
                }
              });
            } catch (e) {
              t({
                devicePlatform: "can_not_get_system_info",
                wxVersion: "can_not_get_system_info",
                wxSystem: "can_not_get_system_info",
                wxSdkVersion: "can_not_get_system_info"
              });
            } else t({
              devicePlatform: "can_not_get_system_info",
              wxVersion: "can_not_get_system_info",
              wxSystem: "can_not_get_system_info",
              wxSdkVersion: "can_not_get_system_info"
            });
          });
        })().then(function (e) {
          Object.assign(f, e);
        });
        var m = ["multipartInit", "multipartUpload", "multipartComplete", "multipartList", "multipartListPart", "multipartAbort"],
          h = ["putObject", "postObject", "appendObject", "sliceUploadFile", "uploadFile", "uploadFiles"].concat(m),
          g = ["getObject"];

        function v(e) {
          return e.replace(/([A-Z])/g, "_$1").toLowerCase();
        }

        var y = function () {
          function e(t) {
            !function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e);
            var n = t.parent,
              i = t.traceId,
              o = t.bucket,
              r = t.region,
              a = t.apiName,
              c = t.fileKey,
              l = t.fileSize,
              d = t.accelerate,
              m = t.customId,
              h = t.delay,
              g = t.deepTracker,
              v = o && o.substr(o.lastIndexOf("-") + 1) || "";
            this.parent = n, this.deepTracker = g, this.delay = h, this.params = {
              cossdkVersion: s.version,
              region: r,
              networkType: "",
              host: "",
              accelerate: d ? "Y" : "N",
              requestPath: c || "",
              size: l || -1,
              httpMd5: 0,
              httpSign: 0,
              httpFull: 0,
              name: a || "",
              result: "",
              tookTime: 0,
              errorNode: "",
              errorCode: "",
              errorMessage: "",
              errorRequestId: "",
              errorStatusCode: 0,
              errorServiceName: "",
              tracePlatform: "cos-wx-sdk-v5",
              traceId: i || p(),
              bucket: o,
              appid: v,
              partNumber: 0,
              retryTimes: 0,
              reqUrl: "",
              customId: m || "",
              devicePlatform: f.devicePlatform,
              wxVersion: f.wxVersion,
              wxSystem: f.wxSystem,
              wxSdkVersion: f.wxSdkVersion,
              md5StartTime: 0,
              md5EndTime: 0,
              signStartTime: 0,
              signEndTime: 0,
              httpStartTime: 0,
              httpEndTime: 0,
              startTime: new Date().getTime(),
              endTime: 0
            }, this.beacon = u(h);
          }

          var t, n, i, c, l;
          return t = e, n = [{
            key: "formatResult",
            value: (c = o().mark(function e(t, n) {
              var i, r, a, s, c, l, u, p, f, m, h, g, v, y, x, b, k, C, S;
              return o().wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                  case 0:
                    return m = new Date().getTime(), h = m - this.params.startTime, e.next = 4, d();

                  case 4:
                    if (g = e.sent, v = t ? (null == t || null === (i = t.error) || void 0 === i || null === (r = i.error) || void 0 === r ? void 0 : r.Code) || "Error" : "", y = t && ((null == t || null === (a = t.error) || void 0 === a || null === (s = a.error) || void 0 === s ? void 0 : s.Message) || (null == t || null === (c = t.error) || void 0 === c ? void 0 : c.error) || (null == t ? void 0 : t.error)) || "", x = t ? null == t || null === (l = t.error) || void 0 === l ? void 0 : l.statusCode : n.statusCode, b = t ? null == t || null === (u = t.error) || void 0 === u || null === (p = u.error) || void 0 === p ? void 0 : p.Resource : "", k = t ? (null == t || null === (f = t.error) || void 0 === f ? void 0 : f.RequestId) || "" : (null == n ? void 0 : n.RequestId) || "", C = t ? k ? "Server" : "Client" : "", Object.assign(this.params, {
                      tookTime: h,
                      networkType: g,
                      httpMd5: this.params.md5EndTime - this.params.md5StartTime,
                      httpSign: this.params.signEndTime - this.params.signStartTime,
                      httpFull: this.params.httpEndTime - this.params.httpStartTime,
                      result: t ? "Fail" : "Success",
                      errorType: C,
                      errorCode: v,
                      errorStatusCode: x,
                      errorMessage: y,
                      errorServiceName: b,
                      errorRequestId: k
                    }), !t || v && y || (this.params.fullError = t ? JSON.stringify(t) : ""), "getObject" === this.params.name && (this.params.size = n ? n.headers && n.headers["content-length"] : -1), this.params.reqUrl) try {
                      S = /^http(s)?:\/\/(.*?)\//.exec(this.params.reqUrl), this.params.host = S[2];
                    } catch (e) {
                      this.params.host = this.params.reqUrl;
                    }
                    this.sendEvents();

                  case 16:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            }), l = function () {
              var e = this,
                t = arguments;
              return new Promise(function (n, i) {
                var o = c.apply(e, t);

                function a(e) {
                  r(o, n, i, a, s, "next", e);
                }

                function s(e) {
                  r(o, n, i, a, s, "throw", e);
                }

                a(void 0);
              });
            }, function (e, t) {
              return l.apply(this, arguments);
            })
          }, {
            key: "setParams",
            value: function (e) {
              Object.assign(this.params, e);
            }
          }, {
            key: "sendEvents",
            value: function () {
              if (!m.includes(this.params.name) || this.deepTracker) {
                var e,
                  t = (e = this.params.name, h.includes(e) ? "cos_upload" : g.includes(e) ? "cos_download" : "base_service"),
                  n = function (e) {
                    var t = {},
                      n = "Success" === e.result ? ["tracePlatform", "cossdkVersion", "region", "bucket", "appid", "networkType", "host", "accelerate", "requestPath", "partNumber", "size", "name", "result", "tookTime", "errorRequestId", "retryTimes", "reqUrl", "customId", "devicePlatform", "wxVersion", "wxSystem", "wxSdkVersion"] : ["tracePlatform", "cossdkVersion", "region", "networkType", "host", "accelerate", "requestPath", "size", "httpMd5", "httpSign", "httpFull", "name", "result", "tookTime", "errorNode", "errorCode", "errorMessage", "errorRequestId", "errorStatusCode", "errorServiceName", "errorType", "traceId", "bucket", "appid", "partNumber", "retryTimes", "reqUrl", "customId", "fullError", "devicePlatform", "wxVersion", "wxSystem", "wxSdkVersion"];

                    for (var i in e) n.includes(i) && (t[v(i)] = e[i]);

                    return t;
                  }(this.params);

                this.beacon || (this.beacon = u(this.delay || 5e3)), 0 === this.params.delay ? this.beacon && this.beacon.onDirectUserAction(t, n) : this.beacon && this.beacon.onUserAction(t, n);
              }
            }
          }, {
            key: "generateSubTracker",
            value: function (t) {
              return Object.assign(t, {
                parent: this,
                deepTracker: this.deepTracker,
                traceId: this.params.traceId,
                bucket: this.params.bucket,
                region: this.params.region,
                fileKey: this.params.requestPath,
                customId: this.params.customId,
                delay: this.params.delay
              }), new e(t);
            }
          }], n && a(t.prototype, n), i && a(t, i), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e;
        }();

        e.exports = y;
      }, function (e) {
        e.exports = JSON.parse('{"name":"cos-wx-sdk-v5","version":"1.4.6","description":"小程序 SDK for [腾讯云对象存储服务](https://cloud.tencent.com/product/cos)","main":"demo/lib/cos-wx-sdk-v5.min.js","scripts":{"dev":"cross-env NODE_ENV=development node build.js --mode=development","build":"cross-env NODE_ENV=production node build.js --mode=production","sts.js":"node server/sts.js"},"repository":{"type":"git","url":"http://github.com/tencentyun/cos-wx-sdk-v5.git"},"author":"carsonxu","license":"ISC","dependencies":{"mime":"^2.4.6","@xmldom/xmldom":"^0.8.2"},"devDependencies":{"babel-core":"6.26.3","babel-loader":"8.2.5","@babel/preset-env":"7.16.11","body-parser":"^1.18.3","cross-env":"^7.0.3","express":"^4.17.1","qcloud-cos-sts":"^3.0.2","terser-webpack-plugin":"4.2.3","webpack":"4.46.0","webpack-cli":"4.10.0"}}');
      }, function (e, t) {
        var n = function (e) {
          var t = {},
            n = function (e) {
              return !t[e] && (t[e] = []), t[e];
            };

          e.on = function (e, t) {
            n(e).push(t);
          }, e.off = function (e, t) {
            for (var i = n(e), o = i.length - 1; o >= 0; o--) t === i[o] && i.splice(o, 1);
          }, e.emit = function (e, t) {
            for (var i = n(e).map(function (e) {
              return e;
            }), o = 0; o < i.length; o++) i[o](t);
          };
        };

        e.exports.init = n, e.exports.EventProxy = function () {
          n(this);
        };
      }, function (e, t, n) {
        var i,
          o,
          r = n(0),
          a = "cos_sdk_upload_cache",
          s = function () {
            try {
              i.length ? uni.setStorageSync(a, JSON.stringify(i)) : uni.removeStorageSync(a);
            } catch (e) { }
          },
          c = function () {
            if (!i) {
              i = function () {
                try {
                  var e = JSON.parse(uni.getStorageSync(a));
                } catch (e) { }

                return e || (e = []), e;
              }();

              for (var e = !1, t = Math.round(Date.now() / 1e3), n = i.length - 1; n >= 0; n--) {
                var o = i[n][2];
                (!o || o + 2592e3 < t) && (i.splice(n, 1), e = !0);
              }

              e && s();
            }
          },
          l = function () {
            o || (o = setTimeout(function () {
              s(), o = null;
            }, 400));
          },
          u = {
            using: {},
            setUsing: function (e) {
              u.using[e] = !0;
            },
            removeUsing: function (e) {
              delete u.using[e];
            },
            getFileId: function (e, t, n, i) {
              return e.FilePath && e.size && e.lastModifiedTime && t ? r.md5([e.FilePath].join("::")) + "-" + r.md5([e.size, e.mode, e.lastAccessedTime, e.lastModifiedTime, t, n, i].join("::")) : null;
            },
            getCopyFileId: function (e, t, n, i, o) {
              var a = t["content-length"],
                s = t.etag || "",
                c = t["last-modified"];
              return e && n ? r.md5([e, a, s, c, n, i, o].join("::")) : null;
            },
            getUploadIdList: function (e) {
              if (!e) return null;
              c();

              for (var t = [], n = 0; n < i.length; n++) i[n][0] === e && t.push(i[n][1]);

              return t.length ? t : null;
            },
            saveUploadId: function (e, t, n) {
              if (c(), e) {
                for (var o = e.substr(0, e.indexOf("-") + 1), r = i.length - 1; r >= 0; r--) {
                  var a = i[r];
                  (a[0] === e && a[1] === t || e !== a[0] && 0 === a[0].indexOf(o)) && i.splice(r, 1);
                }

                i.unshift([e, t, Math.round(Date.now() / 1e3)]), i.length > n && i.splice(n), l();
              }
            },
            removeUploadId: function (e) {
              c(), delete u.using[e];

              for (var t = i.length - 1; t >= 0; t--) i[t][1] === e && i.splice(t, 1);

              l();
            }
          };

        e.exports = u;
      }, function (e, t, n) {
        var i = n(11);
        e.exports = i;
      }, function (e, t, n) {
        "use strict";

        var i = n(0),
          o = n(8),
          r = n(23),
          a = n(24),
          s = n(30),
          c = n(7),
          l = {
            SecretId: "",
            SecretKey: "",
            SecurityToken: "",
            ChunkRetryTimes: 2,
            FileParallelLimit: 3,
            ChunkParallelLimit: 3,
            ChunkSize: 1048576,
            SliceSize: 1048576,
            CopyChunkParallelLimit: 20,
            CopyChunkSize: 10485760,
            CopySliceSize: 10485760,
            MaxPartNumber: 1e4,
            ProgressInterval: 1e3,
            UploadQueueSize: 1e4,
            Domain: "",
            ServiceDomain: "",
            Protocol: "",
            CompatibilityMode: !1,
            ForcePathStyle: !1,
            Timeout: 0,
            CorrectClockSkew: !0,
            SystemClockOffset: 0,
            UploadCheckContentMd5: !1,
            UploadAddMetaMd5: !1,
            UploadIdCacheLimit: 50,
            UseAccelerate: !1,
            ForceSignHost: !0,
            HttpDNSServiceId: "",
            SimpleUploadMethod: "postObject",
            EnableTracker: !1,
            DeepTracker: !1,
            TrackerDelay: 5e3,
            CustomId: ""
          },
          u = function (e) {
            this.options = i.extend(i.clone(l), e || {}), this.options.FileParallelLimit = Math.max(1, this.options.FileParallelLimit), this.options.ChunkParallelLimit = Math.max(1, this.options.ChunkParallelLimit), this.options.ChunkRetryTimes = Math.max(0, this.options.ChunkRetryTimes), this.options.ChunkSize = Math.max(1048576, this.options.ChunkSize), this.options.CopyChunkParallelLimit = Math.max(1, this.options.CopyChunkParallelLimit), this.options.CopyChunkSize = Math.max(1048576, this.options.CopyChunkSize), this.options.CopySliceSize = Math.max(0, this.options.CopySliceSize), this.options.MaxPartNumber = Math.max(1024, Math.min(1e4, this.options.MaxPartNumber)), this.options.Timeout = Math.max(0, this.options.Timeout), this.options.AppId, this.options.SecretId && this.options.SecretId.indexOf(" "), this.options.SecretKey && this.options.SecretKey.indexOf(" "), o.init(this), r.init(this);
          };

        a.init(u, r), s.init(u, r), u.util = {
          md5: i.md5,
          xml2json: i.xml2json,
          json2xml: i.json2xml
        }, u.getAuthorization = i.getAuth, u.version = c.version, e.exports = u;
      }, function (module, exports, __webpack_require__) {
        (function (process, global, module) {
          var __WEBPACK_AMD_DEFINE_RESULT__;

          function _typeof(e) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, _typeof(e);
          }

          (function () {
            "use strict";

            var ERROR = "input is invalid type",
              WINDOW = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)),
              root = WINDOW ? window : {};
            root.JS_MD5_NO_WINDOW && (WINDOW = !1);
            var WEB_WORKER = !WINDOW && "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)),
              NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" === (void 0 === process ? "undefined" : _typeof(process)) && process.versions && process.versions.node;
            NODE_JS ? root = global : WEB_WORKER && (root = self);

            var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" === _typeof(module) && module.exports,
              AMD = __webpack_require__(14),
              ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
              HEX_CHARS = "0123456789abcdef".split(""),
              EXTRA = [128, 32768, 8388608, -2147483648],
              SHIFT = [0, 8, 16, 24],
              OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
              BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
              blocks = [],
              buffer8;

            if (ARRAY_BUFFER) {
              var buffer = new ArrayBuffer(68);
              buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer);
            }

            !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            }), !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (e) {
              return "object" === _typeof(e) && e.buffer && e.buffer.constructor === ArrayBuffer;
            });

            var createOutputMethod = function (e) {
              return function (t) {
                return new Md5(!0).update(t)[e]();
              };
            },
              createMethod = function () {
                var e = createOutputMethod("hex");
                NODE_JS && (e = nodeWrap(e)), e.getCtx = e.create = function () {
                  return new Md5();
                }, e.update = function (t) {
                  return e.create().update(t);
                };

                for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                  var n = OUTPUT_TYPES[t];
                  e[n] = createOutputMethod(n);
                }

                return e;
              },
              nodeWrap = function nodeWrap(method) {
                var crypto = eval("require('crypto')"),
                  Buffer = eval("require('buffer').Buffer"),
                  nodeMethod = function (e) {
                    if ("string" == typeof e) return crypto.createHash("md5").update(e, "utf8").digest("hex");
                    if (null == e) throw ERROR;
                    return e.constructor === ArrayBuffer && (e = new Uint8Array(e)), Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(e)).digest("hex") : method(e);
                  };

                return nodeMethod;
              };

            function Md5(e) {
              if (e) blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks, this.buffer8 = buffer8; else if (ARRAY_BUFFER) {
                var t = new ArrayBuffer(68);
                this.buffer8 = new Uint8Array(t), this.blocks = new Uint32Array(t);
              } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
            }

            Md5.prototype.update = function (e) {
              if (!this.finalized) {
                var t,
                  n = _typeof(e);

                if ("string" !== n) {
                  if ("object" !== n) throw ERROR;
                  if (null === e) throw ERROR;

                  if (!ARRAY_BUFFER || e.constructor !== ArrayBuffer && "ArrayBuffer" !== e.constructor.name) {
                    if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e))) throw ERROR;
                  } else e = new Uint8Array(e);

                  t = !0;
                }

                for (var i, o, r = 0, a = e.length, s = this.blocks, c = this.buffer8; r < a;) {
                  if (this.hashed && (this.hashed = !1, s[0] = s[16], s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), t) {
                    if (ARRAY_BUFFER) for (o = this.start; r < a && o < 64; ++r) c[o++] = e[r]; else for (o = this.start; r < a && o < 64; ++r) s[o >> 2] |= e[r] << SHIFT[3 & o++];
                  } else if (ARRAY_BUFFER) for (o = this.start; r < a && o < 64; ++r) (i = e.charCodeAt(r)) < 128 ? c[o++] = i : i < 2048 ? (c[o++] = 192 | i >> 6, c[o++] = 128 | 63 & i) : i < 55296 || i >= 57344 ? (c[o++] = 224 | i >> 12, c[o++] = 128 | i >> 6 & 63, c[o++] = 128 | 63 & i) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++r)), c[o++] = 240 | i >> 18, c[o++] = 128 | i >> 12 & 63, c[o++] = 128 | i >> 6 & 63, c[o++] = 128 | 63 & i); else for (o = this.start; r < a && o < 64; ++r) (i = e.charCodeAt(r)) < 128 ? s[o >> 2] |= i << SHIFT[3 & o++] : i < 2048 ? (s[o >> 2] |= (192 | i >> 6) << SHIFT[3 & o++], s[o >> 2] |= (128 | 63 & i) << SHIFT[3 & o++]) : i < 55296 || i >= 57344 ? (s[o >> 2] |= (224 | i >> 12) << SHIFT[3 & o++], s[o >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & o++], s[o >> 2] |= (128 | 63 & i) << SHIFT[3 & o++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++r)), s[o >> 2] |= (240 | i >> 18) << SHIFT[3 & o++], s[o >> 2] |= (128 | i >> 12 & 63) << SHIFT[3 & o++], s[o >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & o++], s[o >> 2] |= (128 | 63 & i) << SHIFT[3 & o++]);
                  this.lastByteIndex = o, this.bytes += o - this.start, o >= 64 ? (this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o;
                }

                return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
              }
            }, Md5.prototype.finalize = function () {
              if (!this.finalized) {
                this.finalized = !0;
                var e = this.blocks,
                  t = this.lastByteIndex;
                e[t >> 2] |= EXTRA[3 & t], t >= 56 && (this.hashed || this.hash(), e[0] = e[16], e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.bytes << 3, e[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
              }
            }, Md5.prototype.hash = function () {
              var e,
                t,
                n,
                i,
                o,
                r,
                a = this.blocks;
              this.first ? t = ((t = ((e = ((e = a[0] - 680876937) << 7 | e >>> 25) - 271733879 << 0) ^ (n = ((n = (-271733879 ^ (i = ((i = (-1732584194 ^ 2004318071 & e) + a[1] - 117830708) << 12 | i >>> 20) + e << 0) & (-271733879 ^ e)) + a[2] - 1126478375) << 17 | n >>> 15) + i << 0) & (i ^ e)) + a[3] - 1316259209) << 22 | t >>> 10) + n << 0 : (e = this.h0, t = this.h1, n = this.h2, t = ((t += ((e = ((e += ((i = this.h3) ^ t & (n ^ i)) + a[0] - 680876936) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (i = ((i += (n ^ e & (t ^ n)) + a[1] - 389564586) << 12 | i >>> 20) + e << 0) & (e ^ t)) + a[2] + 606105819) << 17 | n >>> 15) + i << 0) & (i ^ e)) + a[3] - 1044525330) << 22 | t >>> 10) + n << 0), t = ((t += ((e = ((e += (i ^ t & (n ^ i)) + a[4] - 176418897) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (i = ((i += (n ^ e & (t ^ n)) + a[5] + 1200080426) << 12 | i >>> 20) + e << 0) & (e ^ t)) + a[6] - 1473231341) << 17 | n >>> 15) + i << 0) & (i ^ e)) + a[7] - 45705983) << 22 | t >>> 10) + n << 0, t = ((t += ((e = ((e += (i ^ t & (n ^ i)) + a[8] + 1770035416) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (i = ((i += (n ^ e & (t ^ n)) + a[9] - 1958414417) << 12 | i >>> 20) + e << 0) & (e ^ t)) + a[10] - 42063) << 17 | n >>> 15) + i << 0) & (i ^ e)) + a[11] - 1990404162) << 22 | t >>> 10) + n << 0, t = ((t += ((e = ((e += (i ^ t & (n ^ i)) + a[12] + 1804603682) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (i = ((i += (n ^ e & (t ^ n)) + a[13] - 40341101) << 12 | i >>> 20) + e << 0) & (e ^ t)) + a[14] - 1502002290) << 17 | n >>> 15) + i << 0) & (i ^ e)) + a[15] + 1236535329) << 22 | t >>> 10) + n << 0, t = ((t += ((i = ((i += (t ^ n & ((e = ((e += (n ^ i & (t ^ n)) + a[1] - 165796510) << 5 | e >>> 27) + t << 0) ^ t)) + a[6] - 1069501632) << 9 | i >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (i ^ e)) + a[11] + 643717713) << 14 | n >>> 18) + i << 0) ^ i)) + a[0] - 373897302) << 20 | t >>> 12) + n << 0, t = ((t += ((i = ((i += (t ^ n & ((e = ((e += (n ^ i & (t ^ n)) + a[5] - 701558691) << 5 | e >>> 27) + t << 0) ^ t)) + a[10] + 38016083) << 9 | i >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (i ^ e)) + a[15] - 660478335) << 14 | n >>> 18) + i << 0) ^ i)) + a[4] - 405537848) << 20 | t >>> 12) + n << 0, t = ((t += ((i = ((i += (t ^ n & ((e = ((e += (n ^ i & (t ^ n)) + a[9] + 568446438) << 5 | e >>> 27) + t << 0) ^ t)) + a[14] - 1019803690) << 9 | i >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (i ^ e)) + a[3] - 187363961) << 14 | n >>> 18) + i << 0) ^ i)) + a[8] + 1163531501) << 20 | t >>> 12) + n << 0, t = ((t += ((i = ((i += (t ^ n & ((e = ((e += (n ^ i & (t ^ n)) + a[13] - 1444681467) << 5 | e >>> 27) + t << 0) ^ t)) + a[2] - 51403784) << 9 | i >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (i ^ e)) + a[7] + 1735328473) << 14 | n >>> 18) + i << 0) ^ i)) + a[12] - 1926607734) << 20 | t >>> 12) + n << 0, t = ((t += ((r = (i = ((i += ((o = t ^ n) ^ (e = ((e += (o ^ i) + a[5] - 378558) << 4 | e >>> 28) + t << 0)) + a[8] - 2022574463) << 11 | i >>> 21) + e << 0) ^ e) ^ (n = ((n += (r ^ t) + a[11] + 1839030562) << 16 | n >>> 16) + i << 0)) + a[14] - 35309556) << 23 | t >>> 9) + n << 0, t = ((t += ((r = (i = ((i += ((o = t ^ n) ^ (e = ((e += (o ^ i) + a[1] - 1530992060) << 4 | e >>> 28) + t << 0)) + a[4] + 1272893353) << 11 | i >>> 21) + e << 0) ^ e) ^ (n = ((n += (r ^ t) + a[7] - 155497632) << 16 | n >>> 16) + i << 0)) + a[10] - 1094730640) << 23 | t >>> 9) + n << 0, t = ((t += ((r = (i = ((i += ((o = t ^ n) ^ (e = ((e += (o ^ i) + a[13] + 681279174) << 4 | e >>> 28) + t << 0)) + a[0] - 358537222) << 11 | i >>> 21) + e << 0) ^ e) ^ (n = ((n += (r ^ t) + a[3] - 722521979) << 16 | n >>> 16) + i << 0)) + a[6] + 76029189) << 23 | t >>> 9) + n << 0, t = ((t += ((r = (i = ((i += ((o = t ^ n) ^ (e = ((e += (o ^ i) + a[9] - 640364487) << 4 | e >>> 28) + t << 0)) + a[12] - 421815835) << 11 | i >>> 21) + e << 0) ^ e) ^ (n = ((n += (r ^ t) + a[15] + 530742520) << 16 | n >>> 16) + i << 0)) + a[2] - 995338651) << 23 | t >>> 9) + n << 0, t = ((t += ((i = ((i += (t ^ ((e = ((e += (n ^ (t | ~i)) + a[0] - 198630844) << 6 | e >>> 26) + t << 0) | ~n)) + a[7] + 1126891415) << 10 | i >>> 22) + e << 0) ^ ((n = ((n += (e ^ (i | ~t)) + a[14] - 1416354905) << 15 | n >>> 17) + i << 0) | ~e)) + a[5] - 57434055) << 21 | t >>> 11) + n << 0, t = ((t += ((i = ((i += (t ^ ((e = ((e += (n ^ (t | ~i)) + a[12] + 1700485571) << 6 | e >>> 26) + t << 0) | ~n)) + a[3] - 1894986606) << 10 | i >>> 22) + e << 0) ^ ((n = ((n += (e ^ (i | ~t)) + a[10] - 1051523) << 15 | n >>> 17) + i << 0) | ~e)) + a[1] - 2054922799) << 21 | t >>> 11) + n << 0, t = ((t += ((i = ((i += (t ^ ((e = ((e += (n ^ (t | ~i)) + a[8] + 1873313359) << 6 | e >>> 26) + t << 0) | ~n)) + a[15] - 30611744) << 10 | i >>> 22) + e << 0) ^ ((n = ((n += (e ^ (i | ~t)) + a[6] - 1560198380) << 15 | n >>> 17) + i << 0) | ~e)) + a[13] + 1309151649) << 21 | t >>> 11) + n << 0, t = ((t += ((i = ((i += (t ^ ((e = ((e += (n ^ (t | ~i)) + a[4] - 145523070) << 6 | e >>> 26) + t << 0) | ~n)) + a[11] - 1120210379) << 10 | i >>> 22) + e << 0) ^ ((n = ((n += (e ^ (i | ~t)) + a[2] + 718787259) << 15 | n >>> 17) + i << 0) | ~e)) + a[9] - 343485551) << 21 | t >>> 11) + n << 0, this.first ? (this.h0 = e + 1732584193 << 0, this.h1 = t - 271733879 << 0, this.h2 = n - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + e << 0, this.h1 = this.h1 + t << 0, this.h2 = this.h2 + n << 0, this.h3 = this.h3 + i << 0);
            }, Md5.prototype.hex = function () {
              this.finalize();
              var e = this.h0,
                t = this.h1,
                n = this.h2,
                i = this.h3;
              return HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15];
            }, Md5.prototype.toString = Md5.prototype.hex, Md5.prototype.digest = function () {
              this.finalize();
              var e = this.h0,
                t = this.h1,
                n = this.h2,
                i = this.h3;
              return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255];
            }, Md5.prototype.array = Md5.prototype.digest, Md5.prototype.arrayBuffer = function () {
              this.finalize();
              var e = new ArrayBuffer(16),
                t = new Uint32Array(e);
              return t[0] = this.h0, t[1] = this.h1, t[2] = this.h2, t[3] = this.h3, e;
            }, Md5.prototype.buffer = Md5.prototype.arrayBuffer, Md5.prototype.base64 = function () {
              for (var e, t, n, i = "", o = this.array(), r = 0; r < 15;) e = o[r++], t = o[r++], n = o[r++], i += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[63 & (e << 4 | t >>> 4)] + BASE64_ENCODE_CHAR[63 & (t << 2 | n >>> 6)] + BASE64_ENCODE_CHAR[63 & n];

              return e = o[r], i += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[e << 4 & 63] + "==";
            };
            var exports = createMethod();
            COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return exports;
            }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
          })();
        }).call(this, __webpack_require__(13), __webpack_require__(2), __webpack_require__(3)(module));
      }, function (e, t) {
        var n,
          i,
          o = e.exports = {};

        function r() {
          throw new Error("setTimeout has not been defined");
        }

        function a() {
          throw new Error("clearTimeout has not been defined");
        }

        function s(e) {
          if (n === setTimeout) return setTimeout(e, 0);
          if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

          try {
            return n(e, 0);
          } catch (t) {
            try {
              return n.call(null, e, 0);
            } catch (t) {
              return n.call(this, e, 0);
            }
          }
        }

        !function () {
          try {
            n = "function" == typeof setTimeout ? setTimeout : r;
          } catch (e) {
            n = r;
          }

          try {
            i = "function" == typeof clearTimeout ? clearTimeout : a;
          } catch (e) {
            i = a;
          }
        }();
        var c,
          l = [],
          u = !1,
          p = -1;

        function d() {
          u && c && (u = !1, c.length ? l = c.concat(l) : p = -1, l.length && f());
        }

        function f() {
          if (!u) {
            var e = s(d);
            u = !0;

            for (var t = l.length; t;) {
              for (c = l, l = []; ++p < t;) c && c[p].run();

              p = -1, t = l.length;
            }

            c = null, u = !1, function (e) {
              if (i === clearTimeout) return clearTimeout(e);
              if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);

              try {
                i(e);
              } catch (t) {
                try {
                  return i.call(null, e);
                } catch (t) {
                  return i.call(this, e);
                }
              }
            }(e);
          }
        }

        function m(e, t) {
          this.fun = e, this.array = t;
        }

        function h() { }

        o.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          l.push(new m(e, t)), 1 !== l.length || u || s(f);
        }, m.prototype.run = function () {
          this.fun.apply(null, this.array);
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function (e) {
          return [];
        }, o.binding = function (e) {
          throw new Error("process.binding is not supported");
        }, o.cwd = function () {
          return "/";
        }, o.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }, o.umask = function () {
          return 0;
        };
      }, function (e, t) {
        (function (t) {
          e.exports = t;
        }).call(this, {});
      }, function (e, t) {
        var n,
          i,
          o,
          r,
          a,
          s,
          c,
          l = l || function (e, t) {
            var n = {},
              i = n.lib = {},
              o = function () { },
              r = i.Base = {
                extend: function (e) {
                  o.prototype = this;
                  var t = new o();
                  return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function () {
                    t.$super.init.apply(this, arguments);
                  }), t.init.prototype = t, t.$super = this, t;
                },
                create: function () {
                  var e = this.extend();
                  return e.init.apply(e, arguments), e;
                },
                init: function () { },
                mixIn: function (e) {
                  for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);

                  e.hasOwnProperty("toString") && (this.toString = e.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                }
              },
              a = i.WordArray = r.extend({
                init: function (e, t) {
                  e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
                },
                toString: function (e) {
                  return (e || c).stringify(this);
                },
                concat: function (e) {
                  var t = this.words,
                    n = e.words,
                    i = this.sigBytes;
                  if (e = e.sigBytes, this.clamp(), i % 4) for (var o = 0; o < e; o++) t[i + o >>> 2] |= (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 24 - (i + o) % 4 * 8; else if (65535 < n.length) for (o = 0; o < e; o += 4) t[i + o >>> 2] = n[o >>> 2]; else t.push.apply(t, n);
                  return this.sigBytes += e, this;
                },
                clamp: function () {
                  var t = this.words,
                    n = this.sigBytes;
                  t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
                },
                clone: function () {
                  var e = r.clone.call(this);
                  return e.words = this.words.slice(0), e;
                },
                random: function (t) {
                  for (var n = [], i = 0; i < t; i += 4) n.push(4294967296 * e.random() | 0);

                  return new a.init(n, t);
                }
              }),
              s = n.enc = {},
              c = s.Hex = {
                stringify: function (e) {
                  var t = e.words;
                  e = e.sigBytes;

                  for (var n = [], i = 0; i < e; i++) {
                    var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
                  }

                  return n.join("");
                },
                parse: function (e) {
                  for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;

                  return new a.init(n, t / 2);
                }
              },
              l = s.Latin1 = {
                stringify: function (e) {
                  var t = e.words;
                  e = e.sigBytes;

                  for (var n = [], i = 0; i < e; i++) n.push(String.fromCharCode(t[i >>> 2] >>> 24 - i % 4 * 8 & 255));

                  return n.join("");
                },
                parse: function (e) {
                  for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;

                  return new a.init(n, t);
                }
              },
              u = s.Utf8 = {
                stringify: function (e) {
                  try {
                    return decodeURIComponent(escape(l.stringify(e)));
                  } catch (e) {
                    throw Error("Malformed UTF-8 data");
                  }
                },
                parse: function (e) {
                  return l.parse(unescape(encodeURIComponent(e)));
                }
              },
              p = i.BufferedBlockAlgorithm = r.extend({
                reset: function () {
                  this._data = new a.init(), this._nDataBytes = 0;
                },
                _append: function (e) {
                  "string" == typeof e && (e = u.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
                },
                _process: function (t) {
                  var n = this._data,
                    i = n.words,
                    o = n.sigBytes,
                    r = this.blockSize,
                    s = o / (4 * r);

                  if (t = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * r, o = e.min(4 * t, o), t) {
                    for (var c = 0; c < t; c += r) this._doProcessBlock(i, c);

                    c = i.splice(0, t), n.sigBytes -= o;
                  }

                  return new a.init(c, o);
                },
                clone: function () {
                  var e = r.clone.call(this);
                  return e._data = this._data.clone(), e;
                },
                _minBufferSize: 0
              });

            i.Hasher = p.extend({
              cfg: r.extend(),
              init: function (e) {
                this.cfg = this.cfg.extend(e), this.reset();
              },
              reset: function () {
                p.reset.call(this), this._doReset();
              },
              update: function (e) {
                return this._append(e), this._process(), this;
              },
              finalize: function (e) {
                return e && this._append(e), this._doFinalize();
              },
              blockSize: 16,
              _createHelper: function (e) {
                return function (t, n) {
                  return new e.init(n).finalize(t);
                };
              },
              _createHmacHelper: function (e) {
                return function (t, n) {
                  return new d.HMAC.init(e, n).finalize(t);
                };
              }
            });
            var d = n.algo = {};
            return n;
          }(Math);

        i = (a = (n = l).lib).WordArray, o = a.Hasher, r = [], a = n.algo.SHA1 = o.extend({
          _doReset: function () {
            this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function (e, t) {
            for (var n = this._hash.words, i = n[0], o = n[1], a = n[2], s = n[3], c = n[4], l = 0; 80 > l; l++) {
              if (16 > l) r[l] = 0 | e[t + l]; else {
                var u = r[l - 3] ^ r[l - 8] ^ r[l - 14] ^ r[l - 16];
                r[l] = u << 1 | u >>> 31;
              }
              u = (i << 5 | i >>> 27) + c + r[l], u = 20 > l ? u + (1518500249 + (o & a | ~o & s)) : 40 > l ? u + (1859775393 + (o ^ a ^ s)) : 60 > l ? u + ((o & a | o & s | a & s) - 1894007588) : u + ((o ^ a ^ s) - 899497514), c = s, s = a, a = o << 30 | o >>> 2, o = i, i = u;
            }

            n[0] = n[0] + i | 0, n[1] = n[1] + o | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, n[4] = n[4] + c | 0;
          },
          _doFinalize: function () {
            var e = this._data,
              t = e.words,
              n = 8 * this._nDataBytes,
              i = 8 * e.sigBytes;
            return t[i >>> 5] |= 128 << 24 - i % 32, t[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (i + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
          },
          clone: function () {
            var e = o.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        }), n.SHA1 = o._createHelper(a), n.HmacSHA1 = o._createHmacHelper(a), function () {
          var e = l,
            t = e.enc.Utf8;
          e.algo.HMAC = e.lib.Base.extend({
            init: function (e, n) {
              e = this._hasher = new e.init(), "string" == typeof n && (n = t.parse(n));
              var i = e.blockSize,
                o = 4 * i;
              n.sigBytes > o && (n = e.finalize(n)), n.clamp();

              for (var r = this._oKey = n.clone(), a = this._iKey = n.clone(), s = r.words, c = a.words, l = 0; l < i; l++) s[l] ^= 1549556828, c[l] ^= 909522486;

              r.sigBytes = a.sigBytes = o, this.reset();
            },
            reset: function () {
              var e = this._hasher;
              e.reset(), e.update(this._iKey);
            },
            update: function (e) {
              return this._hasher.update(e), this;
            },
            finalize: function (e) {
              var t = this._hasher;
              return e = t.finalize(e), t.reset(), t.finalize(this._oKey.clone().concat(e));
            }
          });
        }(), c = (s = l).lib.WordArray, s.enc.Base64 = {
          stringify: function (e) {
            var t = e.words,
              n = e.sigBytes,
              i = this._map;
            e.clamp();

            for (var o = [], r = 0; r < n; r += 3) for (var a = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, s = 0; s < 4 && r + .75 * s < n; s++) o.push(i.charAt(a >>> 6 * (3 - s) & 63));

            var c = i.charAt(64);
            if (c) for (; o.length % 4;) o.push(c);
            return o.join("");
          },
          parse: function (e) {
            var t = e.length,
              n = this._map,
              i = n.charAt(64);

            if (i) {
              var o = e.indexOf(i);
              -1 != o && (t = o);
            }

            for (var r = [], a = 0, s = 0; s < t; s++) if (s % 4) {
              var l = n.indexOf(e.charAt(s - 1)) << s % 4 * 2,
                u = n.indexOf(e.charAt(s)) >>> 6 - s % 4 * 2;
              r[a >>> 2] |= (l | u) << 24 - a % 4 * 8, a++;
            }

            return c.create(r, a);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }, e.exports = l;
      }, function (e, t, n) {
        var i = n(17).DOMParser,
          o = function (e) {
            "use strict";

            e = e || {}, function () {
              void 0 === e.escapeMode && (e.escapeMode = !0);
              e.attributePrefix = e.attributePrefix || "_", e.arrayAccessForm = e.arrayAccessForm || "none", e.emptyNodeForm = e.emptyNodeForm || "text", void 0 === e.enableToStringFunc && (e.enableToStringFunc = !0);
              e.arrayAccessFormPaths = e.arrayAccessFormPaths || [], void 0 === e.skipEmptyTextNodesForObj && (e.skipEmptyTextNodesForObj = !0);
              void 0 === e.stripWhitespaces && (e.stripWhitespaces = !0);
              e.datetimeAccessFormPaths = e.datetimeAccessFormPaths || [], void 0 === e.useDoubleQuotes && (e.useDoubleQuotes = !1);
              e.xmlElementsFilter = e.xmlElementsFilter || [], e.jsonPropertiesFilter = e.jsonPropertiesFilter || [], void 0 === e.keepCData && (e.keepCData = !1);
            }();
            var t = 1,
              n = 3,
              o = 4,
              r = 8,
              a = 9;

            function s(e) {
              var t = e.localName;
              return null == t && (t = e.baseName), null != t && "" != t || (t = e.nodeName), t;
            }

            function c(e) {
              return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : e;
            }

            function l(e, t, n, i) {
              for (var o = 0; o < e.length; o++) {
                var r = e[o];

                if ("string" == typeof r) {
                  if (r == i) break;
                } else if (r instanceof RegExp) {
                  if (r.test(i)) break;
                } else if ("function" == typeof r && r(t, n, i)) break;
              }

              return o != e.length;
            }

            function u(t, n, i) {
              if ("property" === e.arrayAccessForm) t[n] instanceof Array ? t[n + "_asArray"] = t[n] : t[n + "_asArray"] = [t[n]];
              !(t[n] instanceof Array) && e.arrayAccessFormPaths.length > 0 && l(e.arrayAccessFormPaths, t, n, i) && (t[n] = [t[n]]);
            }

            function p(e) {
              var t = e.split(/[-T:+Z]/g),
                n = new Date(t[0], t[1] - 1, t[2]),
                i = t[5].split(".");

              if (n.setHours(t[3], t[4], i[0]), i.length > 1 && n.setMilliseconds(i[1]), t[6] && t[7]) {
                var o = 60 * t[6] + Number(t[7]);
                o = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * o : o), n.setMinutes(n.getMinutes() - o - n.getTimezoneOffset());
              } else -1 !== e.indexOf("Z", e.length - 1) && (n = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())));

              return n;
            }

            function d(n, i, o, r) {
              return !(i == t && e.xmlElementsFilter.length > 0) || l(e.xmlElementsFilter, n, o, r);
            }

            function f(i, c) {
              if (i.nodeType == a) {
                for (var m = new Object(), h = i.childNodes, g = 0; g < h.length; g++) {
                  if ((v = h.item(g)).nodeType == t) m[y = s(v)] = f(v, y);
                }

                return m;
              }

              if (i.nodeType == t) {
                (m = new Object()).__cnt = 0;

                for (h = i.childNodes, g = 0; g < h.length; g++) {
                  var v,
                    y = s(v = h.item(g));

                  if (v.nodeType != r) {
                    var x = c + "." + y;
                    d(m, v.nodeType, y, x) && (m.__cnt++, null == m[y] ? (m[y] = f(v, x), u(m, y, x)) : (null != m[y] && (m[y] instanceof Array || (m[y] = [m[y]], u(m, y, x))), m[y][m[y].length] = f(v, x)));
                  }
                }

                for (var b = 0; b < i.attributes.length; b++) {
                  var k = i.attributes.item(b);
                  m.__cnt++, m[e.attributePrefix + k.name] = k.value;
                }

                var C = function (e) {
                  return e.prefix;
                }(i);

                return null != C && "" != C && (m.__cnt++, m.__prefix = C), null != m["#text"] && (m.__text = m["#text"], m.__text instanceof Array && (m.__text = m.__text.join("\n")), e.stripWhitespaces && (m.__text = m.__text.trim()), delete m["#text"], "property" == e.arrayAccessForm && delete m["#text_asArray"], m.__text = function (t, n, i) {
                  if (e.datetimeAccessFormPaths.length > 0) {
                    var o = i.split(".#")[0];
                    return l(e.datetimeAccessFormPaths, t, n, o) ? p(t) : t;
                  }

                  return t;
                }(m.__text, y, c + "." + y)), null != m["#cdata-section"] && (m.__cdata = m["#cdata-section"], delete m["#cdata-section"], "property" == e.arrayAccessForm && delete m["#cdata-section_asArray"]), 0 == m.__cnt && "text" == e.emptyNodeForm ? m = "" : 1 == m.__cnt && null != m.__text ? m = m.__text : 1 != m.__cnt || null == m.__cdata || e.keepCData ? m.__cnt > 1 && null != m.__text && e.skipEmptyTextNodesForObj && (e.stripWhitespaces && "" == m.__text || "" == m.__text.trim()) && delete m.__text : m = m.__cdata, delete m.__cnt, !e.enableToStringFunc || null == m.__text && null == m.__cdata || (m.toString = function () {
                  return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "");
                }), m;
              }

              if (i.nodeType == n || i.nodeType == o) return i.nodeValue;
            }

            function m(t, n, i, o) {
              var r = "<" + (null != t && null != t.__prefix ? t.__prefix + ":" : "") + n;
              if (null != i) for (var a = 0; a < i.length; a++) {
                var s = i[a],
                  l = t[s];
                e.escapeMode && (l = c(l)), r += " " + s.substr(e.attributePrefix.length) + "=", e.useDoubleQuotes ? r += '"' + l + '"' : r += "'" + l + "'";
              }
              return r += o ? "/>" : ">";
            }

            function h(e, t) {
              return "</" + (null != e.__prefix ? e.__prefix + ":" : "") + t + ">";
            }

            function g(t, n) {
              return "property" == e.arrayAccessForm && (i = n.toString(), o = "_asArray", -1 !== i.indexOf(o, i.length - o.length)) || 0 == n.toString().indexOf(e.attributePrefix) || 0 == n.toString().indexOf("__") || t[n] instanceof Function;
              var i, o;
            }

            function v(e) {
              var t = 0;
              if (e instanceof Object) for (var n in e) g(e, n) || t++;
              return t;
            }

            function y(t, n, i) {
              return 0 == e.jsonPropertiesFilter.length || "" == i || l(e.jsonPropertiesFilter, t, n, i);
            }

            function x(t) {
              var n = [];
              if (t instanceof Object) for (var i in t) -1 == i.toString().indexOf("__") && 0 == i.toString().indexOf(e.attributePrefix) && n.push(i);
              return n;
            }

            function b(t) {
              var n = "";
              return t instanceof Object ? n += function (t) {
                var n = "";
                return null != t.__cdata && (n += "<![CDATA[" + t.__cdata + "]]>"), null != t.__text && (e.escapeMode ? n += c(t.__text) : n += t.__text), n;
              }(t) : null != t && (e.escapeMode ? n += c(t) : n += t), n;
            }

            function k(e, t) {
              return "" === e ? t : e + "." + t;
            }

            function C(e, t, n, i) {
              var o = "";
              if (0 == e.length) o += m(e, t, n, !0); else for (var r = 0; r < e.length; r++) o += m(e[r], t, x(e[r]), !1), o += S(e[r], k(i, t)), o += h(e[r], t);
              return o;
            }

            function S(e, t) {
              var n = "";
              if (v(e) > 0) for (var i in e) if (!g(e, i) && ("" == t || y(e, i, k(t, i)))) {
                var o = e[i],
                  r = x(o);
                if (null == o || null == o) n += m(o, i, r, !0); else if (o instanceof Object) {
                  if (o instanceof Array) n += C(o, i, r, t); else if (o instanceof Date) n += m(o, i, r, !1), n += o.toISOString(), n += h(o, i); else {
                    v(o) > 0 || null != o.__text || null != o.__cdata ? (n += m(o, i, r, !1), n += S(o, k(t, i)), n += h(o, i)) : n += m(o, i, r, !0);
                  }
                } else n += m(o, i, r, !1), n += b(o), n += h(o, i);
              }
              return n += b(e);
            }

            this.parseXmlString = function (e) {
              var t;
              if (void 0 === e) return null;

              if (i) {
                var n = new i(),
                  o = null;

                try {
                  o = n.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI;
                } catch (e) {
                  o = null;
                }

                try {
                  t = n.parseFromString(e, "text/xml"), null != o && t.getElementsByTagNameNS(o, "parsererror").length > 0 && (t = null);
                } catch (e) {
                  t = null;
                }
              } else 0 == e.indexOf("<?") && (e = e.substr(e.indexOf("?>") + 2)), (t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e);

              return t;
            }, this.asArray = function (e) {
              return void 0 === e || null == e ? [] : e instanceof Array ? e : [e];
            }, this.toXmlDateTime = function (e) {
              return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null;
            }, this.asDateTime = function (e) {
              return "string" == typeof e ? p(e) : e;
            }, this.xml2json = function (e) {
              return f(e);
            }, this.xml_str2json = function (e) {
              var t = this.parseXmlString(e);
              return null != t ? this.xml2json(t) : null;
            }, this.json2xml_str = function (e) {
              return S(e, "");
            }, this.json2xml = function (e) {
              var t = this.json2xml_str(e);
              return this.parseXmlString(t);
            }, this.getVersion = function () {
              return "1.2.0";
            };
          };

        e.exports = function (e) {
          if (!e) return null;
          var t = new i().parseFromString(e, "text/xml"),
            n = new o().xml2json(t);
          return n.html && n.getElementsByTagName("parsererror").length ? null : n;
        };
      }, function (e, t, n) {
        var i = n(4);
        t.DOMImplementation = i.DOMImplementation, t.XMLSerializer = i.XMLSerializer, t.DOMParser = n(18).DOMParser;
      }, function (e, t, n) {
        var i = n(1),
          o = n(4),
          r = n(19),
          a = n(20),
          s = o.DOMImplementation,
          c = i.NAMESPACE,
          l = a.ParseError,
          u = a.XMLReader;

        function p(e) {
          return e.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
        }

        function d(e) {
          this.options = e || {
            locator: {}
          };
        }

        function f() {
          this.cdata = !1;
        }

        function m(e, t) {
          t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
        }

        function h(e, t, n) {
          return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e;
        }

        function g(e, t) {
          e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
        }

        d.prototype.parseFromString = function (e, t) {
          var n = this.options,
            i = new u(),
            o = n.domBuilder || new f(),
            a = n.errorHandler,
            s = n.locator,
            l = n.xmlns || {},
            d = /\/x?html?$/.test(t),
            m = d ? r.HTML_ENTITIES : r.XML_ENTITIES;
          s && o.setDocumentLocator(s), i.errorHandler = function (e, t, n) {
            if (!e) {
              if (t instanceof f) return t;
              e = t;
            }

            var i = {},
              o = e instanceof Function;

            function r(t) {
              var r = e[t];
              !r && o && (r = 2 == e.length ? function (n) {
                e(t, n);
              } : e), i[t] = r && function (e) {
                r("[xmldom " + t + "]\t" + e + function (e) {
                  if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
                }(n));
              } || function () { };
            }

            return n = n || {}, r("warning"), r("error"), r("fatalError"), i;
          }(a, o, s), i.domBuilder = n.domBuilder || o, d && (l[""] = c.HTML), l.xml = l.xml || c.XML;
          var h = n.normalizeLineEndings || p;
          return e && "string" == typeof e ? i.parse(h(e), l, m) : i.errorHandler.error("invalid doc source"), o.doc;
        }, f.prototype = {
          startDocument: function () {
            this.doc = new s().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
          },
          startElement: function (e, t, n, i) {
            var o = this.doc,
              r = o.createElementNS(e, n || t),
              a = i.length;
            g(this, r), this.currentElement = r, this.locator && m(this.locator, r);

            for (var s = 0; s < a; s++) {
              e = i.getURI(s);
              var c = i.getValue(s),
                l = (n = i.getQName(s), o.createAttributeNS(e, n));
              this.locator && m(i.getLocator(s), l), l.value = l.nodeValue = c, r.setAttributeNode(l);
            }
          },
          endElement: function (e, t, n) {
            var i = this.currentElement;
            i.tagName;
            this.currentElement = i.parentNode;
          },
          startPrefixMapping: function (e, t) { },
          endPrefixMapping: function (e) { },
          processingInstruction: function (e, t) {
            var n = this.doc.createProcessingInstruction(e, t);
            this.locator && m(this.locator, n), g(this, n);
          },
          ignorableWhitespace: function (e, t, n) { },
          characters: function (e, t, n) {
            if (e = h.apply(this, arguments)) {
              if (this.cdata) var i = this.doc.createCDATASection(e); else i = this.doc.createTextNode(e);
              this.currentElement ? this.currentElement.appendChild(i) : /^\s*$/.test(e) && this.doc.appendChild(i), this.locator && m(this.locator, i);
            }
          },
          skippedEntity: function (e) { },
          endDocument: function () {
            this.doc.normalize();
          },
          setDocumentLocator: function (e) {
            (this.locator = e) && (e.lineNumber = 0);
          },
          comment: function (e, t, n) {
            e = h.apply(this, arguments);
            var i = this.doc.createComment(e);
            this.locator && m(this.locator, i), g(this, i);
          },
          startCDATA: function () {
            this.cdata = !0;
          },
          endCDATA: function () {
            this.cdata = !1;
          },
          startDTD: function (e, t, n) {
            var i = this.doc.implementation;

            if (i && i.createDocumentType) {
              var o = i.createDocumentType(e, t, n);
              this.locator && m(this.locator, o), g(this, o), this.doc.doctype = o;
            }
          },
          warning: function (e) { },
          error: function (e) { },
          fatalError: function (e) {
            throw new l(e, this.locator);
          }
        }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (e) {
          f.prototype[e] = function () {
            return null;
          };
        }), t.__DOMHandler = f, t.normalizeLineEndings = p, t.DOMParser = d;
      }, function (e, t, n) {
        var i = n(1).freeze;
        t.XML_ENTITIES = i({
          amp: "&",
          apos: "'",
          gt: ">",
          lt: "<",
          quot: '"'
        }), t.HTML_ENTITIES = i({
          lt: "<",
          gt: ">",
          amp: "&",
          quot: '"',
          apos: "'",
          Agrave: "À",
          Aacute: "Á",
          Acirc: "Â",
          Atilde: "Ã",
          Auml: "Ä",
          Aring: "Å",
          AElig: "Æ",
          Ccedil: "Ç",
          Egrave: "È",
          Eacute: "É",
          Ecirc: "Ê",
          Euml: "Ë",
          Igrave: "Ì",
          Iacute: "Í",
          Icirc: "Î",
          Iuml: "Ï",
          ETH: "Ð",
          Ntilde: "Ñ",
          Ograve: "Ò",
          Oacute: "Ó",
          Ocirc: "Ô",
          Otilde: "Õ",
          Ouml: "Ö",
          Oslash: "Ø",
          Ugrave: "Ù",
          Uacute: "Ú",
          Ucirc: "Û",
          Uuml: "Ü",
          Yacute: "Ý",
          THORN: "Þ",
          szlig: "ß",
          agrave: "à",
          aacute: "á",
          acirc: "â",
          atilde: "ã",
          auml: "ä",
          aring: "å",
          aelig: "æ",
          ccedil: "ç",
          egrave: "è",
          eacute: "é",
          ecirc: "ê",
          euml: "ë",
          igrave: "ì",
          iacute: "í",
          icirc: "î",
          iuml: "ï",
          eth: "ð",
          ntilde: "ñ",
          ograve: "ò",
          oacute: "ó",
          ocirc: "ô",
          otilde: "õ",
          ouml: "ö",
          oslash: "ø",
          ugrave: "ù",
          uacute: "ú",
          ucirc: "û",
          uuml: "ü",
          yacute: "ý",
          thorn: "þ",
          yuml: "ÿ",
          nbsp: " ",
          iexcl: "¡",
          cent: "¢",
          pound: "£",
          curren: "¤",
          yen: "¥",
          brvbar: "¦",
          sect: "§",
          uml: "¨",
          copy: "©",
          ordf: "ª",
          laquo: "«",
          not: "¬",
          shy: "­­",
          reg: "®",
          macr: "¯",
          deg: "°",
          plusmn: "±",
          sup2: "²",
          sup3: "³",
          acute: "´",
          micro: "µ",
          para: "¶",
          middot: "·",
          cedil: "¸",
          sup1: "¹",
          ordm: "º",
          raquo: "»",
          frac14: "¼",
          frac12: "½",
          frac34: "¾",
          iquest: "¿",
          times: "×",
          divide: "÷",
          forall: "∀",
          part: "∂",
          exist: "∃",
          empty: "∅",
          nabla: "∇",
          isin: "∈",
          notin: "∉",
          ni: "∋",
          prod: "∏",
          sum: "∑",
          minus: "−",
          lowast: "∗",
          radic: "√",
          prop: "∝",
          infin: "∞",
          ang: "∠",
          and: "∧",
          or: "∨",
          cap: "∩",
          cup: "∪",
          int: "∫",
          there4: "∴",
          sim: "∼",
          cong: "≅",
          asymp: "≈",
          ne: "≠",
          equiv: "≡",
          le: "≤",
          ge: "≥",
          sub: "⊂",
          sup: "⊃",
          nsub: "⊄",
          sube: "⊆",
          supe: "⊇",
          oplus: "⊕",
          otimes: "⊗",
          perp: "⊥",
          sdot: "⋅",
          Alpha: "Α",
          Beta: "Β",
          Gamma: "Γ",
          Delta: "Δ",
          Epsilon: "Ε",
          Zeta: "Ζ",
          Eta: "Η",
          Theta: "Θ",
          Iota: "Ι",
          Kappa: "Κ",
          Lambda: "Λ",
          Mu: "Μ",
          Nu: "Ν",
          Xi: "Ξ",
          Omicron: "Ο",
          Pi: "Π",
          Rho: "Ρ",
          Sigma: "Σ",
          Tau: "Τ",
          Upsilon: "Υ",
          Phi: "Φ",
          Chi: "Χ",
          Psi: "Ψ",
          Omega: "Ω",
          alpha: "α",
          beta: "β",
          gamma: "γ",
          delta: "δ",
          epsilon: "ε",
          zeta: "ζ",
          eta: "η",
          theta: "θ",
          iota: "ι",
          kappa: "κ",
          lambda: "λ",
          mu: "μ",
          nu: "ν",
          xi: "ξ",
          omicron: "ο",
          pi: "π",
          rho: "ρ",
          sigmaf: "ς",
          sigma: "σ",
          tau: "τ",
          upsilon: "υ",
          phi: "φ",
          chi: "χ",
          psi: "ψ",
          omega: "ω",
          thetasym: "ϑ",
          upsih: "ϒ",
          piv: "ϖ",
          OElig: "Œ",
          oelig: "œ",
          Scaron: "Š",
          scaron: "š",
          Yuml: "Ÿ",
          fnof: "ƒ",
          circ: "ˆ",
          tilde: "˜",
          ensp: " ",
          emsp: " ",
          thinsp: " ",
          zwnj: "‌",
          zwj: "‍",
          lrm: "‎",
          rlm: "‏",
          ndash: "–",
          mdash: "—",
          lsquo: "‘",
          rsquo: "’",
          sbquo: "‚",
          ldquo: "“",
          rdquo: "”",
          bdquo: "„",
          dagger: "†",
          Dagger: "‡",
          bull: "•",
          hellip: "…",
          permil: "‰",
          prime: "′",
          Prime: "″",
          lsaquo: "‹",
          rsaquo: "›",
          oline: "‾",
          euro: "€",
          trade: "™",
          larr: "←",
          uarr: "↑",
          rarr: "→",
          darr: "↓",
          harr: "↔",
          crarr: "↵",
          lceil: "⌈",
          rceil: "⌉",
          lfloor: "⌊",
          rfloor: "⌋",
          loz: "◊",
          spades: "♠",
          clubs: "♣",
          hearts: "♥",
          diams: "♦"
        }), t.entityMap = t.HTML_ENTITIES;
      }, function (e, t, n) {
        var i = n(1).NAMESPACE,
          o = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
          r = new RegExp("[\\-\\.0-9" + o.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
          a = new RegExp("^" + o.source + r.source + "*(?::" + o.source + r.source + "*)?$");

        function s(e, t) {
          this.message = e, this.locator = t, Error.captureStackTrace && Error.captureStackTrace(this, s);
        }

        function c() { }

        function l(e, t) {
          return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
        }

        function u(e, t, n, o, r, a) {
          function s(e, t, i) {
            n.attributeNames.hasOwnProperty(e) && a.fatalError("Attribute " + e + " redefined"), n.addValue(e, t.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, r), i);
          }

          for (var c, l = ++t, u = 0; ;) {
            var p = e.charAt(l);

            switch (p) {
              case "=":
                if (1 === u) c = e.slice(t, l), u = 3; else {
                  if (2 !== u) throw new Error("attribute equal must after attrName");
                  u = 3;
                }
                break;

              case "'":
              case '"':
                if (3 === u || 1 === u) {
                  if (1 === u && (a.warning('attribute value must after "="'), c = e.slice(t, l)), t = l + 1, !((l = e.indexOf(p, t)) > 0)) throw new Error("attribute value no end '" + p + "' match");
                  s(c, d = e.slice(t, l), t - 1), u = 5;
                } else {
                  if (4 != u) throw new Error('attribute value must after "="');
                  s(c, d = e.slice(t, l), t), a.warning('attribute "' + c + '" missed start quot(' + p + ")!!"), t = l + 1, u = 5;
                }

                break;

              case "/":
                switch (u) {
                  case 0:
                    n.setTagName(e.slice(t, l));

                  case 5:
                  case 6:
                  case 7:
                    u = 7, n.closed = !0;

                  case 4:
                  case 1:
                  case 2:
                    break;

                  default:
                    throw new Error("attribute invalid close char('/')");
                }

                break;

              case "":
                return a.error("unexpected end of input"), 0 == u && n.setTagName(e.slice(t, l)), l;

              case ">":
                switch (u) {
                  case 0:
                    n.setTagName(e.slice(t, l));

                  case 5:
                  case 6:
                  case 7:
                    break;

                  case 4:
                  case 1:
                    "/" === (d = e.slice(t, l)).slice(-1) && (n.closed = !0, d = d.slice(0, -1));

                  case 2:
                    2 === u && (d = c), 4 == u ? (a.warning('attribute "' + d + '" missed quot(")!'), s(c, d, t)) : (i.isHTML(o[""]) && d.match(/^(?:disabled|checked|selected)$/i) || a.warning('attribute "' + d + '" missed value!! "' + d + '" instead!!'), s(d, d, t));
                    break;

                  case 3:
                    throw new Error("attribute value missed!!");
                }

                return l;

              case "":
                p = " ";

              default:
                if (p <= " ") switch (u) {
                  case 0:
                    n.setTagName(e.slice(t, l)), u = 6;
                    break;

                  case 1:
                    c = e.slice(t, l), u = 2;
                    break;

                  case 4:
                    var d = e.slice(t, l);
                    a.warning('attribute "' + d + '" missed quot(")!!'), s(c, d, t);

                  case 5:
                    u = 6;
                } else switch (u) {
                  case 2:
                    n.tagName;
                    i.isHTML(o[""]) && c.match(/^(?:disabled|checked|selected)$/i) || a.warning('attribute "' + c + '" missed value!! "' + c + '" instead2!!'), s(c, c, t), t = l, u = 1;
                    break;

                  case 5:
                    a.warning('attribute space is required"' + c + '"!!');

                  case 6:
                    u = 1, t = l;
                    break;

                  case 3:
                    u = 4, t = l;
                    break;

                  case 7:
                    throw new Error("elements closed character '/' and '>' must be connected to");
                }
            }

            l++;
          }
        }

        function p(e, t, n) {
          for (var o = e.tagName, r = null, a = e.length; a--;) {
            var s = e[a],
              c = s.qName,
              l = s.value;
            if ((f = c.indexOf(":")) > 0) var u = s.prefix = c.slice(0, f),
              p = c.slice(f + 1),
              d = "xmlns" === u && p; else p = c, u = null, d = "xmlns" === c && "";
            s.localName = p, !1 !== d && (null == r && (r = {}, m(n, n = {})), n[d] = r[d] = l, s.uri = i.XMLNS, t.startPrefixMapping(d, l));
          }

          for (a = e.length; a--;) {
            (u = (s = e[a]).prefix) && ("xml" === u && (s.uri = i.XML), "xmlns" !== u && (s.uri = n[u || ""]));
          }

          var f;
          (f = o.indexOf(":")) > 0 ? (u = e.prefix = o.slice(0, f), p = e.localName = o.slice(f + 1)) : (u = null, p = e.localName = o);
          var h = e.uri = n[u || ""];
          if (t.startElement(h, p, o, e), !e.closed) return e.currentNSMap = n, e.localNSMap = r, !0;
          if (t.endElement(h, p, o), r) for (u in r) t.endPrefixMapping(u);
        }

        function d(e, t, n, i, o) {
          if (/^(?:script|textarea)$/i.test(n)) {
            var r = e.indexOf("</" + n + ">", t),
              a = e.substring(t + 1, r);
            if (/[&<]/.test(a)) return /^script$/i.test(n) ? (o.characters(a, 0, a.length), r) : (a = a.replace(/&#?\w+;/g, i), o.characters(a, 0, a.length), r);
          }

          return t + 1;
        }

        function f(e, t, n, i) {
          var o = i[n];
          return null == o && ((o = e.lastIndexOf("</" + n + ">")) < t && (o = e.lastIndexOf("</" + n)), i[n] = o), o < t;
        }

        function m(e, t) {
          for (var n in e) t[n] = e[n];
        }

        function h(e, t, n, i) {
          if ("-" === e.charAt(t + 2)) return "-" === e.charAt(t + 3) ? (o = e.indexOf("--\x3e", t + 4)) > t ? (n.comment(e, t + 4, o - t - 4), o + 3) : (i.error("Unclosed comment"), -1) : -1;

          if ("CDATA[" == e.substr(t + 3, 6)) {
            var o = e.indexOf("]]>", t + 9);
            return n.startCDATA(), n.characters(e, t + 9, o - t - 9), n.endCDATA(), o + 3;
          }

          var r = function (e, t) {
            var n,
              i = [],
              o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
            o.lastIndex = t, o.exec(e);

            for (; n = o.exec(e);) if (i.push(n), n[1]) return i;
          }(e, t),
            a = r.length;

          if (a > 1 && /!doctype/i.test(r[0][0])) {
            var s = r[1][0],
              c = !1,
              l = !1;
            a > 3 && (/^public$/i.test(r[2][0]) ? (c = r[3][0], l = a > 4 && r[4][0]) : /^system$/i.test(r[2][0]) && (l = r[3][0]));
            var u = r[a - 1];
            return n.startDTD(s, c, l), n.endDTD(), u.index + u[0].length;
          }

          return -1;
        }

        function g(e, t, n) {
          var i = e.indexOf("?>", t);

          if (i) {
            var o = e.substring(t, i).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);

            if (o) {
              o[0].length;
              return n.processingInstruction(o[1], o[2]), i + 2;
            }

            return -1;
          }

          return -1;
        }

        function v() {
          this.attributeNames = {};
        }

        s.prototype = new Error(), s.prototype.name = s.name, c.prototype = {
          parse: function (e, t, n) {
            var o = this.domBuilder;
            o.startDocument(), m(t, t = {}), function (e, t, n, o, r) {
              function a(e) {
                if (e > 65535) {
                  var t = 55296 + ((e -= 65536) >> 10),
                    n = 56320 + (1023 & e);
                  return String.fromCharCode(t, n);
                }

                return String.fromCharCode(e);
              }

              function c(e) {
                var t = e.slice(1, -1);
                return Object.hasOwnProperty.call(n, t) ? n[t] : "#" === t.charAt(0) ? a(parseInt(t.substr(1).replace("x", "0x"))) : (r.error("entity not found:" + e), e);
              }

              function m(t) {
                if (t > w) {
                  var n = e.substring(w, t).replace(/&#?\w+;/g, c);
                  C && y(w), o.characters(n, 0, t - w), w = t;
                }
              }

              function y(t, n) {
                for (; t >= b && (n = k.exec(e));) x = n.index, b = x + n[0].length, C.lineNumber++;

                C.columnNumber = t - x + 1;
              }

              var x = 0,
                b = 0,
                k = /.*(?:\r\n?|\n)|.*$/g,
                C = o.locator,
                S = [{
                  currentNSMap: t
                }],
                _ = {},
                w = 0;

              for (; ;) {
                try {
                  var E = e.indexOf("<", w);

                  if (E < 0) {
                    if (!e.substr(w).match(/^\s*$/)) {
                      var T = o.doc,
                        A = T.createTextNode(e.substr(w));
                      T.appendChild(A), o.currentElement = A;
                    }

                    return;
                  }

                  switch (E > w && m(E), e.charAt(E + 1)) {
                    case "/":
                      var R = e.indexOf(">", E + 3),
                        O = e.substring(E + 2, R).replace(/[ \t\n\r]+$/g, ""),
                        I = S.pop();
                      R < 0 ? (O = e.substring(E + 2).replace(/[\s<].*/, ""), r.error("end tag name: " + O + " is not complete:" + I.tagName), R = E + 1 + O.length) : O.match(/\s</) && (O = O.replace(/[\s<].*/, ""), r.error("end tag name: " + O + " maybe not complete"), R = E + 1 + O.length);
                      var B = I.localNSMap,
                        N = I.tagName == O;

                      if (N || I.tagName && I.tagName.toLowerCase() == O.toLowerCase()) {
                        if (o.endElement(I.uri, I.localName, O), B) for (var P in B) o.endPrefixMapping(P);
                        N || r.fatalError("end tag name: " + O + " is not match the current start tagName:" + I.tagName);
                      } else S.push(I);

                      R++;
                      break;

                    case "?":
                      C && y(E), R = g(e, E, o);
                      break;

                    case "!":
                      C && y(E), R = h(e, E, o, r);
                      break;

                    default:
                      C && y(E);
                      var D = new v(),
                        L = S[S.length - 1].currentNSMap,
                        j = (R = u(e, E, D, L, c, r), D.length);

                      if (!D.closed && f(e, R, D.tagName, _) && (D.closed = !0, n.nbsp || r.warning("unclosed xml attribute")), C && j) {
                        for (var U = l(C, {}), M = 0; M < j; M++) {
                          var F = D[M];
                          y(F.offset), F.locator = l(C, {});
                        }

                        o.locator = U, p(D, o, L) && S.push(D), o.locator = C;
                      } else p(D, o, L) && S.push(D);

                      i.isHTML(D.uri) && !D.closed ? R = d(e, R, D.tagName, c, o) : R++;
                  }
                } catch (e) {
                  if (e instanceof s) throw e;
                  r.error("element parse error: " + e), R = -1;
                }

                R > w ? w = R : m(Math.max(E, w) + 1);
              }
            }(e, t, n, o, this.errorHandler), o.endDocument();
          }
        }, v.prototype = {
          setTagName: function (e) {
            if (!a.test(e)) throw new Error("invalid tagName:" + e);
            this.tagName = e;
          },
          addValue: function (e, t, n) {
            if (!a.test(e)) throw new Error("invalid attribute:" + e);
            this.attributeNames[e] = this.length, this[this.length++] = {
              qName: e,
              value: t,
              offset: n
            };
          },
          length: 0,
          getLocalName: function (e) {
            return this[e].localName;
          },
          getLocator: function (e) {
            return this[e].locator;
          },
          getQName: function (e) {
            return this[e].qName;
          },
          getURI: function (e) {
            return this[e].uri;
          },
          getValue: function (e) {
            return this[e].value;
          }
        }, t.XMLReader = c, t.ParseError = s;
      }, function (e, t) {
        function n(e) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, n(e);
        }

        var i = "a-zA-Z_À-ÖØ-öø-ÿͰ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿿、-퟿豈-﷏ﷰ-�",
          o = new RegExp("^([^" + i + "])|^((x|X)(m|M)(l|L))|([^" + i + "-.0-9·̀-ͯ‿⁀])", "g"),
          r = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm,
          a = function (e) {
            var t = [];
            if (e instanceof Object) for (var n in e) e.hasOwnProperty(n) && t.push(n);
            return t;
          },
          s = function (e, t) {
            var i = function (e, n, i, r, a) {
              var s = void 0 !== t.indent ? t.indent : "\t",
                c = t.prettyPrint ? "\n" + new Array(r).join(s) : "";
              t.removeIllegalNameCharacters && (e = e.replace(o, "_"));
              var l = [c, "<", e, i || ""];
              return n && n.length > 0 ? (l.push(">"), l.push(n), a && l.push(c), l.push("</"), l.push(e), l.push(">")) : l.push("/>"), l.join("");
            };

            return function e(o, s, c) {
              var l = n(o);

              switch ((Array.isArray ? Array.isArray(o) : o instanceof Array) ? l = "array" : o instanceof Date && (l = "date"), l) {
                case "array":
                  var u = [];
                  return o.map(function (t) {
                    u.push(e(t, 1, c + 1));
                  }), t.prettyPrint && u.push("\n"), u.join("");

                case "date":
                  return o.toJSON ? o.toJSON() : o + "";

                case "object":
                  var p = [];

                  for (var d in o) if (o.hasOwnProperty(d)) if (o[d] instanceof Array) for (var f in o[d]) o[d].hasOwnProperty(f) && p.push(i(d, e(o[d][f], 0, c + 1), null, c + 1, a(o[d][f]).length)); else p.push(i(d, e(o[d], 0, c + 1), null, c + 1));

                  return t.prettyPrint && p.length > 0 && p.push("\n"), p.join("");

                case "function":
                  return o();

                default:
                  return t.escape ? ("" + o).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(r, "") : "" + o;
              }
            }(e, 0, 0);
          },
          c = function (e) {
            var t = ['<?xml version="1.0" encoding="UTF-8"'];
            return e && t.push(' standalone="yes"'), t.push("?>"), t.join("");
          };

        e.exports = function (e, t) {
          if (t || (t = {
            xmlHeader: {
              standalone: !0
            },
            prettyPrint: !0,
            indent: "  "
          }), "string" == typeof e) try {
            e = JSON.parse(e.toString());
          } catch (e) {
            return !1;
          }
          var i = "",
            o = "";
          return t && ("object" == n(t) ? (t.xmlHeader && (i = c(!!t.xmlHeader.standalone)), void 0 !== t.docType && (o = "<!DOCTYPE " + t.docType + ">")) : i = c()), [i, (t = t || {}).prettyPrint && o ? "\n" : "", o, s(e, t)].join("").replace(/\n{2,}/g, "\n").replace(/\s+$/g, "");
        };
      }, function (e, t, n) {
        (function (e) {
          var n, i, o, r;

          function a(e) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e;
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, a(e);
            /*! For license information please see beacon_mp.min.js.LICENSE.txt */
          }

          window, r = function () {
            return function (e) {
              var t = {};

              function n(i) {
                if (t[i]) return t[i].exports;
                var o = t[i] = {
                  i: i,
                  l: !1,
                  exports: {}
                };
                return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
              }

              return n.m = e, n.c = t, n.d = function (e, t, i) {
                n.o(e, t) || Object.defineProperty(e, t, {
                  enumerable: !0,
                  get: i
                });
              }, n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                  value: !0
                });
              }, n.t = function (e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == a(e) && e && e.__esModule) return e;
                var i = Object.create(null);
                if (n.r(i), Object.defineProperty(i, "default", {
                  enumerable: !0,
                  value: e
                }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
                  return e[t];
                }.bind(null, o));
                return i;
              }, n.n = function (e) {
                var t = e && e.__esModule ? function () {
                  return e.default;
                } : function () {
                  return e;
                };
                return n.d(t, "a", t), t;
              }, n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }, n.p = "", n(n.s = 6);
            }([function (e, t, n) {
              "use strict";

              Object.defineProperty(t, "__esModule", {
                value: !0
              }), t.BEACON_ATTA_REQUEST_URL = t.BEACON_ATTA_TOKEN = t.BEACON_ATTA_ID = t.BEACON_CONFIG_HTTPS_URL = t.BEACON_CONFIG_REQUEST_TIME = t.BEACON_CONFIG = t.BEACON_SENDING_IDS_KEY = t.BEACON_NORMAL_LOG_ID_KEY = t.BEACON_DRIECT_LOG_ID_KEY = t.BEACON_LASE_REPORT_TIME_KEY = t.BEACON_DEVICE_ID_KEY = t.BEACON_STORE_PREFIX = t.BEACON_LOG_ID_KEY = t.BEACON_IS_REALTIME_KEY = t.BEACON_DELAY_DEFAULT = t.BEACON_HTTPS_URL = t.BEACON_HTTP_URL = void 0, t.BEACON_HTTP_URL = "http://oth.eve.mdt.qq.com:8080/analytics/v2_upload", t.BEACON_HTTPS_URL = "https://otheve.beacon.qq.com/analytics/v2_upload", t.BEACON_DELAY_DEFAULT = 3e3, t.BEACON_IS_REALTIME_KEY = "A99", t.BEACON_LOG_ID_KEY = "A100", t.BEACON_STORE_PREFIX = "__BEACON_", t.BEACON_DEVICE_ID_KEY = "__BEACON_deviceId", t.BEACON_LASE_REPORT_TIME_KEY = "last_report_time", t.BEACON_DRIECT_LOG_ID_KEY = "direct_log_id", t.BEACON_NORMAL_LOG_ID_KEY = "normal_log_id", t.BEACON_SENDING_IDS_KEY = "sending_event_ids", t.BEACON_CONFIG = "beacon_config", t.BEACON_CONFIG_REQUEST_TIME = "beacon_config_request_time", t.BEACON_CONFIG_HTTPS_URL = "https://oth.str.beacon.qq.com/trpc.beacon.configserver.BeaconConfigService/QueryConfig", t.BEACON_ATTA_ID = "00400014144", t.BEACON_ATTA_TOKEN = "6478159937", t.BEACON_ATTA_REQUEST_URL = "https://h.trace.qq.com/kv";
            }, function (e, t, n) {
              "use strict";

              Object.defineProperty(t, "__esModule", {
                value: !0
              }), t.getEventId = t.replaceSymbol = t.replace = t.assert = void 0;
              var i = n(0),
                o = n(9);

              function r(e) {
                if ("string" != typeof e) return e;

                try {
                  return e.replace(new RegExp("\\|", "g"), "%7C").replace(new RegExp("\\&", "g"), "%26").replace(new RegExp("\\=", "g"), "%3D").replace(new RegExp("\\+", "g"), "%2B");
                } catch (e) {
                  return "";
                }
              }

              Object.defineProperty(t, "EventEmiter", {
                enumerable: !0,
                get: function () {
                  return o.EventEmiter;
                }
              }), t.assert = function (e, t) {
                if (!e) throw t instanceof Error ? t : new Error(t);
              }, t.replace = function (e, t) {
                for (var n = {}, i = 0, o = Object.keys(e); i < o.length; i++) {
                  var a = o[i],
                    s = e[a];
                  if ("string" == typeof s) n[r(a)] = r(s); else {
                    if (t) throw new Error("value mast be string  !!!!");
                    n[r(String(a))] = r(String(s));
                  }
                }

                return n;
              }, t.replaceSymbol = r, t.getEventId = function (e) {
                return String(e[i.BEACON_IS_REALTIME_KEY]) + String(e[i.BEACON_LOG_ID_KEY]);
              };
            }, function (e, t, n) {
              "use strict";

              Object.defineProperty(t, "__esModule", {
                value: !0
              }), t.createPipeline = void 0;

              var i = function () { };

              t.createPipeline = function (e) {
                if (!e || !e.reduce || !e.length) throw new TypeError("createPipeline 方法需要传入至少有一个 pipe 的数组");
                return 1 === e.length ? function (t, n) {
                  e[0](t, n || i);
                } : e.reduce(function (e, t) {
                  return function (n, o) {
                    return void 0 === o && (o = i), e(n, function (e) {
                      return null == t ? void 0 : t(e, o);
                    });
                  };
                });
              };
            }, function (e, t, n) {
              "use strict";

              Object.defineProperty(t, "__esModule", {
                value: !0
              });

              var i = n(0),
                o = function () {
                  function e(e, t, n, o) {
                    this.requestParams = {}, this.network = o, this.requestParams.attaid = i.BEACON_ATTA_ID, this.requestParams.token = i.BEACON_ATTA_TOKEN, this.requestParams.product_id = e.appkey, this.requestParams.platform = n, this.requestParams.uin = t.deviceId, this.requestParams.model = "", this.requestParams.os = n, this.requestParams.app_version = e.appVersion, this.requestParams.sdk_version = t.sdkVersion, this.requestParams.error_stack = "";
                  }

                  return e.prototype.reportError = function (e, t) {
                    this.requestParams._dc = Math.random(), this.requestParams.error_msg = t, this.requestParams.error_code = e, this.network.get(i.BEACON_ATTA_REQUEST_URL, {
                      params: this.requestParams
                    });
                  }, e;
                }();

              t.default = o;
            }, function (e, t, n) {
              "use strict";

              Object.defineProperty(t, "__esModule", {
                value: !0
              }), t.Config = void 0, t.Config = function () { };
            }, function (e, t, n) {
              "use strict";

              Object.defineProperty(t, "__esModule", {
                value: !0
              });

              var i = n(0),
                o = function () {
                  function e(e, t, n, o) {
                    this.strategy = {
                      isEventUpOnOff: !0,
                      httpsUploadUrl: i.BEACON_HTTPS_URL,
                      requestInterval: 30,
                      blacklist: [],
                      samplelist: []
                    }, this.realSample = {}, this.appkey = "", this.appkey = e.appkey, this.storage = n;

                    try {
                      var r = JSON.parse(this.storage.getItem(i.BEACON_CONFIG));
                      r && this.processData(r);
                    } catch (e) { }

                    this.needRequestConfig() && this.requestConfig(e.appVersion, t, o);
                  }

                  return e.prototype.requestConfig = function (e, t, n) {
                    var o = this;
                    this.storage.setItem(i.BEACON_CONFIG_REQUEST_TIME, Date.now().toString()), n.post(i.BEACON_CONFIG_HTTPS_URL, {
                      platformId: "undefined" == typeof wx ? "3" : "4",
                      mainAppKey: this.appkey,
                      appVersion: e,
                      sdkVersion: t.sdkVersion,
                      osVersion: t.userAgent,
                      model: "",
                      packageName: "",
                      params: {
                        A3: t.deviceId
                      }
                    }).then(function (e) {
                      if (0 == e.data.ret) try {
                        var t = JSON.parse(e.data.beaconConfig);
                        t && (o.processData(t), o.storage.setItem(i.BEACON_CONFIG, e.data.beaconConfig));
                      } catch (e) { } else o.processData(null), o.storage.setItem(i.BEACON_CONFIG, "");
                    }).catch(function (e) { });
                  }, e.prototype.processData = function (e) {
                    var t, n, i, o, r;
                    this.strategy.isEventUpOnOff = null !== (t = null == e ? void 0 : e.isEventUpOnOff) && void 0 !== t ? t : this.strategy.isEventUpOnOff, this.strategy.httpsUploadUrl = null !== (n = null == e ? void 0 : e.httpsUploadUrl) && void 0 !== n ? n : this.strategy.httpsUploadUrl, this.strategy.requestInterval = null !== (i = null == e ? void 0 : e.requestInterval) && void 0 !== i ? i : this.strategy.requestInterval, this.strategy.blacklist = null !== (o = null == e ? void 0 : e.blacklist) && void 0 !== o ? o : this.strategy.blacklist, this.strategy.samplelist = null !== (r = null == e ? void 0 : e.samplelist) && void 0 !== r ? r : this.strategy.samplelist;

                    for (var a = 0, s = this.strategy.samplelist; a < s.length; a++) {
                      var c = s[a].split(",");
                      2 == c.length && (this.realSample[c[0]] = c[1]);
                    }
                  }, e.prototype.needRequestConfig = function () {
                    var e = Number(this.storage.getItem(i.BEACON_CONFIG_REQUEST_TIME));
                    return Date.now() - e > 60 * this.strategy.requestInterval * 1e3;
                  }, e.prototype.getUploadUrl = function () {
                    return this.strategy.httpsUploadUrl + "?appkey=" + this.appkey;
                  }, e.prototype.isBlackEvent = function (e) {
                    return -1 != this.strategy.blacklist.indexOf(e);
                  }, e.prototype.isEventUpOnOff = function () {
                    return this.strategy.isEventUpOnOff;
                  }, e.prototype.isSampleEvent = function (e) {
                    return !!Object.prototype.hasOwnProperty.call(this.realSample, e) && this.realSample[e] < Math.floor(Math.random() * Math.floor(1e4));
                  }, e;
                }();

              t.default = o;
            }, function (e, t, n) {
              "use strict";

              var i,
                o = this && this.__extends || (i = function (e, t) {
                  return (i = Object.setPrototypeOf || {
                    __proto__: []
                  } instanceof Array && function (e, t) {
                    e.__proto__ = t;
                  } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                  })(e, t);
                }, function (e, t) {
                  function n() {
                    this.constructor = e;
                  }

                  i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
                }),
                r = this && this.__assign || function () {
                  return (r = Object.assign || function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);

                    return e;
                  }).apply(this, arguments);
                },
                a = this && this.__importDefault || function (e) {
                  return e && e.__esModule ? e : {
                    default: e
                  };
                };

              Object.defineProperty(t, "__esModule", {
                value: !0
              }), t.WeappOpts = void 0;

              var s = a(n(7)),
                c = a(n(3)),
                l = n(0),
                u = n(1),
                p = n(4),
                d = a(n(5)),
                f = function (e) {
                  function t() {
                    return null !== e && e.apply(this, arguments) || this;
                  }

                  return o(t, e), t;
                }(p.Config);

              t.WeappOpts = f;

              var m = wx || qq,
                h = function (e) {
                  function t(t) {
                    var n = e.call(this, t) || this;
                    return n.send = function (e, t, i) {
                      if (!n.config.appkey) throw new Error("please call init before");
                      n.network.post(n.strategy.getUploadUrl(), e.data).then(function (i) {
                        100 == i.data.result ? n.delayTime = 1e3 * i.data.delayTime : n.delayTime = 0, t && t(e.data), n.cleanEvents(e.data.events);
                      }).catch(function (t) {
                        var o = e.data.events;
                        n.errorReport.reportError(t.code ? t.code.toString() : "600", t.message), i && i(e.data), n.concatEvents(o);
                      });
                    }, n.network = new g(), n.storage = new v(t.appkey), n.initCommonInfo(t, n), n.errorReport = new c.default(n.config, n.commonInfo, "weapp", n.network), n.strategy = new d.default(n.config, n.commonInfo, n.storage, n.network), n.storage.setItem(l.BEACON_SENDING_IDS_KEY, JSON.stringify([])), n.onDirectUserAction("rqd_weapp_init", {}), setTimeout(function () {
                      return n.lifeCycle.emit("init");
                    }, 0), n.initDelayTime = t.delay ? t.delay : 2e3, n.cycleSend(n.initDelayTime), n;
                  }

                  return o(t, e), t.prototype.initCommonInfo = function (e, t) {
                    m.getNetworkType({
                      success: function (e) {
                        t.storage.setItem("nt", e.networkType);
                      }
                    }), this.commonInfo = {
                      deviceId: this.storage.createDeviceId(),
                      language: "",
                      query: "",
                      userAgent: "",
                      pixel: "",
                      channelID: e.channelID ? String(e.channelID) : "",
                      openid: e.openid ? String(e.openid) : "",
                      unid: e.unionid ? String(e.unionid) : "",
                      sdkVersion: "4.2.6-weapp"
                    }, this.config.appVersion = e.versionCode ? String(e.versionCode) : "", this.config.strictMode = e.strictMode;
                  }, t.prototype.cycleSend = function (e) {
                    var t = this;
                    setTimeout(function () {
                      t.realSend(t.getEvents()), t.cycleSend(0 == t.delayTime ? t.initDelayTime : t.delayTime);
                    }, e);
                  }, t.prototype.onReport = function (e, t, n) {
                    var i = [],
                      o = "4.2.6-weapp_" + (n ? l.BEACON_DRIECT_LOG_ID_KEY : l.BEACON_NORMAL_LOG_ID_KEY),
                      a = Number(this.storage.getItem(o));
                    a = a || 1, t = r(r({}, t), {
                      A99: n ? "Y" : "N",
                      A100: String(a),
                      A72: this.commonInfo.sdkVersion
                    }), a++, this.storage.setItem(o, String(a)), i.push({
                      eventCode: e,
                      eventTime: Date.now().toString(),
                      mapValue: u.replace(t, this.config.strictMode)
                    }), n && 0 == this.delayTime ? this.realSend(i) : this.concatEvents(i);
                  }, t.prototype.realSend = function (e) {
                    var t, n;

                    if (0 != e.length) {
                      var i = this.getSystemInfo(),
                        o = {
                          appVersion: this.config.appVersion ? u.replaceSymbol(this.config.appVersion) : "",
                          sdkVersion: "4.2.6-weapp",
                          sdkId: "weapp",
                          mainAppKey: this.config.appkey,
                          platformId: 4,
                          common: u.replace(r(r({}, this.additionalParams), {
                            env: "undefined" == typeof qq ? "wechat" : "qq",
                            A2: this.commonInfo.deviceId,
                            A8: String(this.commonInfo.openid),
                            A9: this.getSystemInfo().brand,
                            A10: encodeURIComponent(i.model),
                            A12: i.language,
                            A23: this.commonInfo.channelID,
                            A33: this.getNetworkType(),
                            A50: String(this.commonInfo.unid),
                            A95: i.version,
                            A102: null === (n = null === (t = getCurrentPages()) || void 0 === t ? void 0 : t.pop()) || void 0 === n ? void 0 : n.route,
                            A114: encodeURIComponent(i.system),
                            A115: encodeURIComponent(i.platform),
                            A116: i.windowWidth + "*" + i.windowHeight + "*" + i.pixelRatio,
                            A117: this.getUserInfo(),
                            A118: this.getLocation()
                          }), !1),
                          events: e
                        };

                      this._normalLogPipeline(o);
                    }
                  }, t.prototype.setUserInfo = function (e) {
                    this.storage.setItem("ui", JSON.stringify(e.userInfo));
                  }, t.prototype.setLocation = function (e) {
                    this.storage.setItem("lt", JSON.stringify(e));
                  }, t.prototype.getSystemInfo = function () {
                    return m.getSystemInfoSync();
                  }, t.prototype.getNetworkType = function () {
                    return this.storage.getItem("nt");
                  }, t.prototype.getUserInfo = function () {
                    return this.storage.getItem("ui");
                  }, t.prototype.getLocation = function () {
                    return this.storage.getItem("lt");
                  }, t.prototype.concatEvents = function (e) {
                    var t = this.getLocalEvents();
                    t = t || {};

                    for (var n = 0, i = e; n < i.length; n++) {
                      var o = i[n],
                        r = u.getEventId(o.mapValue);
                      this.removeSendingId(r), t[r] = o;
                    }

                    this.setLocalEvents(t);
                  }, t.prototype.getEvents = function () {
                    var e = [],
                      t = [],
                      n = this.getLocalEvents();
                    if (!n) return e;

                    try {
                      t = JSON.parse(this.storage.getItem(l.BEACON_SENDING_IDS_KEY));
                    } catch (e) { }

                    for (var i = 0, o = Object.getOwnPropertyNames(n); i < o.length; i++) {
                      var r = o[i],
                        a = n[r];
                      -1 == t.indexOf(r) && (e.push(a), t.push(r));
                    }

                    return this.storage.setItem(l.BEACON_SENDING_IDS_KEY, JSON.stringify(t)), e;
                  }, t.prototype.cleanEvents = function (e) {
                    for (var t = this.getLocalEvents(), n = 0, i = e; n < i.length; n++) {
                      var o = i[n],
                        r = u.getEventId(o.mapValue);
                      this.removeSendingId(r), delete t[r];
                    }

                    this.setLocalEvents(t);
                  }, t.prototype.setLocalEvents = function (e) {
                    try {
                      this.storage.setItem("BEACON_EVENT", JSON.stringify(e));
                    } catch (e) { }
                  }, t.prototype.getLocalEvents = function () {
                    try {
                      return JSON.parse(this.storage.getItem("BEACON_EVENT"));
                    } catch (e) {
                      return {};
                    }
                  }, t;
                }(s.default);

              t.default = h;

              var g = function () {
                function e() { }

                return e.prototype.get = function (e, t) {
                  return new Promise(function (n, i) {
                    m.request({
                      method: "GET",
                      data: null == t ? void 0 : t.params,
                      url: e,
                      success: function (e) {
                        n(e);
                      },
                      fail: function (e) {
                        i(e);
                      }
                    });
                  });
                }, e.prototype.post = function (e, t, n) {
                  var i = this;
                  return new Promise(function (o, r) {
                    m.request({
                      method: "POST",
                      url: e,
                      data: t,
                      success: function (e) {
                        var t = {
                          data: e.data,
                          status: e.statusCode,
                          statusText: "",
                          headers: e.header,
                          config: n,
                          request: i
                        };
                        o(t);
                      },
                      fail: function (e) {
                        var t = {
                          message: e.errMsg,
                          code: "600",
                          request: i
                        };
                        r(t);
                      }
                    });
                  });
                }, e;
              }(),
                v = function () {
                  function e(e) {
                    this.appkey = e;
                  }

                  return e.prototype.getItem = function (e) {
                    try {
                      return m.getStorageSync(this.getStoreKey(e));
                    } catch (e) {
                      return "";
                    }
                  }, e.prototype.removeItem = function (e) {
                    try {
                      m.removeStorageSync(this.getStoreKey(e));
                    } catch (e) { }
                  }, e.prototype.setItem = function (e, t) {
                    try {
                      m.setStorageSync(this.getStoreKey(e), t);
                    } catch (e) { }
                  }, e.prototype.createDeviceId = function () {
                    var e = m.getStorageSync("beacon_u");
                    return e && "" != e || (e = this.getRandom(36), m.setStorageSync("beacon_u", e)), e;
                  }, e.prototype.getRandom = function (e) {
                    return (1e6 * Date.now() + Math.floor(1e6 * Math.random())).toString(e) || "";
                  }, e.prototype.getStoreKey = function (e) {
                    return "beaconV2__" + this.appkey + "_" + e;
                  }, e;
                }();
            }, function (e, t, n) {
              "use strict";

              var i = this && this.__createBinding || (Object.create ? function (e, t, n, i) {
                void 0 === i && (i = n), Object.defineProperty(e, i, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  }
                });
              } : function (e, t, n, i) {
                void 0 === i && (i = n), e[i] = t[n];
              }),
                o = this && this.__exportStar || function (e, t) {
                  for (var n in e) "default" === n || t.hasOwnProperty(n) || i(t, e, n);
                },
                r = this && this.__importDefault || function (e) {
                  return e && e.__esModule ? e : {
                    default: e
                  };
                };

              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var a = r(n(8));
              t.default = a.default, o(n(10), t), o(n(2), t), o(n(11), t), o(n(1), t);
            }, function (e, t, n) {
              "use strict";

              var i = this && this.__assign || function () {
                return (i = Object.assign || function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);

                  return e;
                }).apply(this, arguments);
              };

              Object.defineProperty(t, "__esModule", {
                value: !0
              });

              var o = n(1),
                r = n(2),
                a = n(1),
                s = n(0),
                c = function () {
                  function e(e) {
                    var t = this;
                    this.lifeCycle = new o.EventEmiter(), this.uploadJobQueue = [], this.additionalParams = {}, this.delayTime = 0, this._normalLogPipeline = r.createPipeline([function (e) {
                      t.send({
                        url: t.strategy.getUploadUrl(),
                        data: e,
                        method: "post",
                        contentType: "application/json;charset=UTF-8"
                      }, function () {
                        var n = t.config.onReportSuccess;
                        "function" == typeof n && n(JSON.stringify(e.events));
                      }, function () {
                        var n = t.config.onReportFail;
                        "function" == typeof n && n(JSON.stringify(e.events));
                      });
                    }]), a.assert(Boolean(e.appkey), "appkey must be initial"), this.config = i({}, e);
                  }

                  return e.prototype.onUserAction = function (e, t) {
                    this.preReport(e, t, !1);
                  }, e.prototype.onDirectUserAction = function (e, t) {
                    this.preReport(e, t, !0);
                  }, e.prototype.preReport = function (e, t, n) {
                    e ? this.strategy.isEventUpOnOff() && (this.strategy.isBlackEvent(e) || this.strategy.isSampleEvent(e) || this.onReport(e, t, n)) : this.errorReport.reportError("602", " no eventCode");
                  }, e.prototype.addAdditionalParams = function (e) {
                    for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                      var i = n[t];
                      this.additionalParams[i] = e[i];
                    }
                  }, e.prototype.setChannelId = function (e) {
                    this.commonInfo.channelID = String(e);
                  }, e.prototype.setOpenId = function (e) {
                    this.commonInfo.openid = String(e);
                  }, e.prototype.setUnionid = function (e) {
                    this.commonInfo.unid = String(e);
                  }, e.prototype.getDeviceId = function () {
                    return this.commonInfo.deviceId;
                  }, e.prototype.getCommonInfo = function () {
                    return this.commonInfo;
                  }, e.prototype.removeSendingId = function (e) {
                    var t = JSON.parse(this.storage.getItem(s.BEACON_SENDING_IDS_KEY)),
                      n = t.indexOf(e);
                    -1 != n && (t.splice(n, 1), this.storage.setItem(s.BEACON_SENDING_IDS_KEY, JSON.stringify(t)));
                  }, e;
                }();

              t.default = c;
            }, function (e, t, n) {
              "use strict";

              Object.defineProperty(t, "__esModule", {
                value: !0
              }), t.EventEmiter = void 0;

              var i = function () {
                function e() {
                  var e = this;
                  this.emit = function (t, n) {
                    if (e) {
                      var i,
                        o = e.__EventsList[t];

                      if (null == o ? void 0 : o.length) {
                        o = o.slice();

                        for (var r = 0; r < o.length; r++) {
                          i = o[r];

                          try {
                            var a = i.callback.apply(e, [n]);
                            if (1 === i.type && e.remove(t, i.callback), !1 === a) break;
                          } catch (e) {
                            throw e;
                          }
                        }
                      }

                      return e;
                    }
                  }, this.__EventsList = {};
                }

                return e.prototype.indexOf = function (e, t) {
                  for (var n = 0; n < e.length; n++) if (e[n].callback === t) return n;

                  return -1;
                }, e.prototype.on = function (e, t, n) {
                  if (void 0 === n && (n = 0), this) {
                    var i = this.__EventsList[e];

                    if (i || (i = this.__EventsList[e] = []), -1 === this.indexOf(i, t)) {
                      var o = {
                        name: e,
                        type: n || 0,
                        callback: t
                      };
                      return i.push(o), this;
                    }

                    return this;
                  }
                }, e.prototype.one = function (e, t) {
                  this.on(e, t, 1);
                }, e.prototype.remove = function (e, t) {
                  if (this) {
                    var n = this.__EventsList[e];
                    if (!n) return null;

                    if (!t) {
                      try {
                        delete this.__EventsList[e];
                      } catch (e) { }

                      return null;
                    }

                    if (n.length) {
                      var i = this.indexOf(n, t);
                      n.splice(i, 1);
                    }

                    return this;
                  }
                }, e;
              }();

              t.EventEmiter = i;
            }, function (e, t, n) {
              "use strict";

              Object.defineProperty(t, "__esModule", {
                value: !0
              });
            }, function (e, t, n) {
              "use strict";

              var i = this && this.__createBinding || (Object.create ? function (e, t, n, i) {
                void 0 === i && (i = n), Object.defineProperty(e, i, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  }
                });
              } : function (e, t, n, i) {
                void 0 === i && (i = n), e[i] = t[n];
              }),
                o = this && this.__exportStar || function (e, t) {
                  for (var n in e) "default" === n || t.hasOwnProperty(n) || i(t, e, n);
                };

              Object.defineProperty(t, "__esModule", {
                value: !0
              }), o(n(3), t), o(n(4), t), o(n(5), t);
            }]).default;
          }, "object" == a(t) && "object" == a(e) ? e.exports = r() : (i = [], void 0 === (o = "function" == typeof (n = r) ? n.apply(t, i) : n) || (e.exports = o));
        }).call(this, n(3)(e));
      }, function (e, t, n) {
        var i = n(9),
          o = n(0),
          r = {};
        e.exports.transferToTaskMethod = function (e, t) {
          r[t] = e[t], e[t] = function (e, n) {
            e.SkipTask ? r[t].call(this, e, n) : this._addTask(t, e, n);
          };
        }, e.exports.init = function (e) {
          var t,
            n,
            a = [],
            s = {},
            c = 0,
            l = 0,
            u = function (e) {
              var t = {
                id: e.id,
                Bucket: e.Bucket,
                Region: e.Region,
                Key: e.Key,
                FilePath: e.FilePath,
                state: e.state,
                loaded: e.loaded,
                size: e.size,
                speed: e.speed,
                percent: e.percent,
                hashPercent: e.hashPercent,
                error: e.error
              };
              return e.FilePath && (t.FilePath = e.FilePath), t;
            },
            p = (n = function () {
              t = 0, e.emit("task-list-update", {
                list: o.map(a, u)
              }), e.emit("list-update", {
                list: o.map(a, u)
              });
            }, function () {
              t || (t = setTimeout(n));
            }),
            d = function () {
              if (!(a.length <= e.options.UploadQueueSize)) {
                for (var t = 0; t < l && t < a.length && a.length > e.options.UploadQueueSize;) {
                  var n = "waiting" === a[t].state || "checking" === a[t].state || "uploading" === a[t].state;
                  a[t] && n ? t++ : (s[a[t].id] && delete s[a[t].id], a.splice(t, 1), l--);
                }

                p();
              }
            },
            f = function t() {
              if (!(c >= e.options.FileParallelLimit)) {
                for (; a[l] && "waiting" !== a[l].state;) l++;

                if (!(l >= a.length)) {
                  var n = a[l];
                  l++, c++, n.state = "checking", n.params.onTaskStart && n.params.onTaskStart(u(n)), !n.params.UploadData && (n.params.UploadData = {});
                  var i = o.formatParams(n.api, n.params);
                  r[n.api].call(e, i, function (i, o) {
                    e._isRunningTask(n.id) && ("checking" !== n.state && "uploading" !== n.state || (n.state = i ? "error" : "success", i && (n.error = i), c--, p(), t(), n.callback && n.callback(i, o), "success" === n.state && (n.params && (delete n.params.UploadData, delete n.params.Body, delete n.params), delete n.callback)), d());
                  }), p(), setTimeout(t);
                }
              }
            },
            m = function (t, n) {
              var o = s[t];

              if (o) {
                var r = o && "waiting" === o.state,
                  a = o && ("checking" === o.state || "uploading" === o.state);

                if ("canceled" === n && "canceled" !== o.state || "paused" === n && r || "paused" === n && a) {
                  if ("paused" === n && o.params.Body && "function" == typeof o.params.Body.pipe) return;
                  o.state = n, e.emit("inner-kill-task", {
                    TaskId: t,
                    toState: n
                  });

                  try {
                    var l = o && o.params && o.params.UploadData.UploadId;
                  } catch (e) { }

                  "canceled" === n && l && i.removeUsing(l), p(), a && (c--, f()), "canceled" === n && (o.params && (delete o.params.UploadData, delete o.params.Body, delete o.params), delete o.callback);
                }

                d();
              }
            };

          e._addTasks = function (t) {
            o.each(t, function (t) {
              e._addTask(t.api, t.params, t.callback, !0);
            }), p();
          }, e._addTask = function (t, n, i, r) {
            var c = "postObject" === e.options.SimpleUploadMethod ? "postObject" : "putObject";
            "sliceUploadFile" !== t || o.canFileSlice() || (t = c), n = o.formatParams(t, n);
            var l = o.uuid();
            n.TaskId = l, n.onTaskReady && n.onTaskReady(l);
            var u = {
              params: n,
              callback: i,
              api: t,
              index: a.length,
              id: l,
              Bucket: n.Bucket,
              Region: n.Region,
              Key: n.Key,
              FilePath: n.FilePath || "",
              state: "waiting",
              loaded: 0,
              size: 0,
              speed: 0,
              percent: 0,
              hashPercent: 0,
              error: null
            },
              m = n.onHashProgress;

            n.onHashProgress = function (t) {
              e._isRunningTask(u.id) && (u.hashPercent = t.percent, m && m(t), p());
            };

            var h = n.onProgress;
            return n.onProgress = function (t) {
              e._isRunningTask(u.id) && ("checking" === u.state && (u.state = "uploading"), u.loaded = t.loaded, u.size = t.total, u.speed = t.speed, u.percent = t.percent, h && h(t), p());
            }, o.getFileSize(t, n, function (e, t) {
              e ? i(e) : (s[l] = u, a.push(u), u.size = t, !r && p(), f(), d());
            }), l;
          }, e._isRunningTask = function (e) {
            var t = s[e];
            return !(!t || "checking" !== t.state && "uploading" !== t.state);
          }, e.getTaskList = function () {
            return o.map(a, u);
          }, e.cancelTask = function (e) {
            m(e, "canceled");
          }, e.pauseTask = function (e) {
            m(e, "paused");
          }, e.restartTask = function (e) {
            var t = s[e];
            !t || "paused" !== t.state && "error" !== t.state || (t.state = "waiting", p(), l = Math.min(l, t.index), f());
          }, e.isUploadRunning = function () {
            return c || l < a.length;
          };
        };
      }, function (e, t, n) {
        "use strict";

        var i = n(25),
          o = (n(5), n(0)),
          r = n(26);

        function a(e) {
          var t = {
            GrantFullControl: [],
            GrantWrite: [],
            GrantRead: [],
            GrantReadAcp: [],
            GrantWriteAcp: [],
            ACL: ""
          },
            n = {
              FULL_CONTROL: "GrantFullControl",
              WRITE: "GrantWrite",
              READ: "GrantRead",
              READ_ACP: "GrantReadAcp",
              WRITE_ACP: "GrantWriteAcp"
            },
            i = (e && e.AccessControlList || {}).Grant;
          i && (i = o.isArray(i) ? i : [i]);
          var r = {
            READ: 0,
            WRITE: 0,
            FULL_CONTROL: 0
          };
          return i && i.length && o.each(i, function (i) {
            "qcs::cam::anyone:anyone" === i.Grantee.ID || "http://cam.qcloud.com/groups/global/AllUsers" === i.Grantee.URI ? r[i.Permission] = 1 : i.Grantee.ID !== e.Owner.ID && t[n[i.Permission]].push('id="' + i.Grantee.ID + '"');
          }), r.FULL_CONTROL || r.WRITE && r.READ ? t.ACL = "public-read-write" : r.READ ? t.ACL = "public-read" : t.ACL = "private", o.each(n, function (e) {
            t[e] = s(t[e].join(","));
          }), t;
        }

        function s(e) {
          var t,
            n,
            i = e.split(","),
            o = {};

          for (t = 0; t < i.length;) o[n = i[t].trim()] ? i.splice(t, 1) : (o[n] = !0, i[t] = n, t++);

          return i.join(",");
        }

        function c(e) {
          var t = e.bucket,
            n = t.substr(0, t.lastIndexOf("-")),
            i = t.substr(t.lastIndexOf("-") + 1),
            r = e.domain,
            a = e.region,
            s = e.object;
          r || (r = ["cn-south", "cn-south-2", "cn-north", "cn-east", "cn-southwest", "sg"].indexOf(a) > -1 ? "{Region}.myqcloud.com" : "cos.{Region}.myqcloud.com", e.ForcePathStyle || (r = "{Bucket}." + r)), r = (r = r.replace(/\{\{AppId\}\}/gi, i).replace(/\{\{Bucket\}\}/gi, n).replace(/\{\{Region\}\}/gi, a).replace(/\{\{.*?\}\}/gi, "")).replace(/\{AppId\}/gi, i).replace(/\{BucketName\}/gi, n).replace(/\{Bucket\}/gi, t).replace(/\{Region\}/gi, a).replace(/\{.*?\}/gi, ""), /^[a-zA-Z]+:\/\//.test(r) || (r = "https://" + r), "/" === r.slice(-1) && (r = r.slice(0, -1));
          var c = r;
          return e.ForcePathStyle && (c += "/" + t), c += "/", s && (c += o.camSafeUrlEncode(s).replace(/%2F/g, "/")), e.isLocation && (c = c.replace(/^https?:\/\//, "")), c;
        }

        var l = function (e) {
          if (!e.Bucket || !e.Region) return "";
          var t = void 0 === e.UseAccelerate ? this.options.UseAccelerate : e.UseAccelerate,
            n = (e.Url || c({
              ForcePathStyle: this.options.ForcePathStyle,
              protocol: this.options.Protocol,
              domain: this.options.Domain,
              bucket: e.Bucket,
              region: t ? "accelerate" : e.Region
            })).replace(/^https?:\/\/([^/]+)(\/.*)?$/, "$1");
          return new RegExp("^([a-z\\d-]+-\\d+\\.)?(cos|cosv6|ci|pic)\\.([a-z\\d-]+)\\.myqcloud\\.com$").test(n) ? n : "";
        };

        function u(e, t) {
          var n = o.clone(e.Headers),
            i = "";
          o.each(n, function (e, t) {
            ("" === e || ["content-type", "cache-control"].indexOf(t.toLowerCase()) > -1) && delete n[t], "host" === t.toLowerCase() && (i = e);
          });
          var r = !1 !== e.ForceSignHost;
          !i && e.SignHost && r && (n.Host = e.SignHost);

          var a = !1,
            s = function (e, n) {
              a || (a = !0, n && n.XCosSecurityToken && !n.SecurityToken && ((n = o.clone(n)).SecurityToken = n.XCosSecurityToken, delete n.XCosSecurityToken), t && t(e, n));
            },
            c = this,
            l = e.Bucket || "",
            u = e.Region || "",
            p = "name/cos:PostObject" !== e.Action && e.Key ? e.Key : "";

          c.options.ForcePathStyle && l && (p = l + "/" + p);
          var d = "/" + p,
            f = {},
            m = e.Scope;

          if (!m) {
            var h = e.Action || "",
              g = e.ResourceKey || e.Key || "";
            m = e.Scope || [{
              action: h,
              bucket: l,
              region: u,
              prefix: g
            }];
          }

          var v = o.md5(JSON.stringify(m));
          c._StsCache = c._StsCache || [], function () {
            var e, t;

            for (e = c._StsCache.length - 1; e >= 0; e--) {
              t = c._StsCache[e];
              var n = Math.round(o.getSkewTime(c.options.SystemClockOffset) / 1e3) + 30;
              if (t.StartTime && n < t.StartTime || n >= t.ExpiredTime) c._StsCache.splice(e, 1); else if (!t.ScopeLimit || t.ScopeLimit && t.ScopeKey === v) {
                f = t;
                break;
              }
            }
          }();

          var y,
            x = function () {
              var t = "";
              f.StartTime && e.Expires ? t = f.StartTime + ";" + (f.StartTime + 1 * e.Expires) : f.StartTime && f.ExpiredTime && (t = f.StartTime + ";" + f.ExpiredTime);
              var i = {
                Authorization: o.getAuth({
                  SecretId: f.TmpSecretId,
                  SecretKey: f.TmpSecretKey,
                  Method: e.Method,
                  Pathname: d,
                  Query: e.Query,
                  Headers: n,
                  Expires: e.Expires,
                  SystemClockOffset: c.options.SystemClockOffset,
                  KeyTime: t,
                  ForceSignHost: r
                }),
                SecurityToken: f.SecurityToken || f.XCosSecurityToken || "",
                Token: f.Token || "",
                ClientIP: f.ClientIP || "",
                ClientUA: f.ClientUA || ""
              };
              s(null, i);
            },
            b = function (e) {
              if (e.Authorization) {
                var t = !1,
                  n = e.Authorization;
                if (n) if (n.indexOf(" ") > -1) t = !1; else if (n.indexOf("q-sign-algorithm=") > -1 && n.indexOf("q-ak=") > -1 && n.indexOf("q-sign-time=") > -1 && n.indexOf("q-key-time=") > -1 && n.indexOf("q-url-param-list=") > -1) t = !0; else try {
                  (n = atob(n)).indexOf("a=") > -1 && n.indexOf("k=") > -1 && n.indexOf("t=") > -1 && n.indexOf("r=") > -1 && n.indexOf("b=") > -1 && (t = !0);
                } catch (e) { }
                if (!t) return o.error(new Error("getAuthorization callback params format error"));
              } else {
                if (!e.TmpSecretId) return o.error(new Error('getAuthorization callback params missing "TmpSecretId"'));
                if (!e.TmpSecretKey) return o.error(new Error('getAuthorization callback params missing "TmpSecretKey"'));
                if (!e.SecurityToken && !e.XCosSecurityToken) return o.error(new Error('getAuthorization callback params missing "SecurityToken"'));
                if (!e.ExpiredTime) return o.error(new Error('getAuthorization callback params missing "ExpiredTime"'));
                if (e.ExpiredTime && 10 !== e.ExpiredTime.toString().length) return o.error(new Error('getAuthorization callback params "ExpiredTime" should be 10 digits'));
                if (e.StartTime && 10 !== e.StartTime.toString().length) return o.error(new Error('getAuthorization callback params "StartTime" should be 10 StartTime'));
              }

              return !1;
            };

          if (f.ExpiredTime && f.ExpiredTime - o.getSkewTime(c.options.SystemClockOffset) / 1e3 > 60) x(); else if (c.options.getAuthorization) c.options.getAuthorization.call(c, {
            Bucket: l,
            Region: u,
            Method: e.Method,
            Key: p,
            Pathname: d,
            Query: e.Query,
            Headers: n,
            Scope: m,
            SystemClockOffset: c.options.SystemClockOffset,
            ForceSignHost: r
          }, function (e) {
            "string" == typeof e && (e = {
              Authorization: e
            });
            var t = b(e);
            if (t) return s(t);
            e.Authorization ? s(null, e) : ((f = e || {}).Scope = m, f.ScopeKey = v, c._StsCache.push(f), x());
          }); else {
            if (!c.options.getSTS) return y = {
              Authorization: o.getAuth({
                SecretId: e.SecretId || c.options.SecretId,
                SecretKey: e.SecretKey || c.options.SecretKey,
                Method: e.Method,
                Pathname: d,
                Query: e.Query,
                Headers: n,
                Expires: e.Expires,
                SystemClockOffset: c.options.SystemClockOffset,
                ForceSignHost: r
              }),
              SecurityToken: c.options.SecurityToken || c.options.XCosSecurityToken
            }, s(null, y), y;
            c.options.getSTS.call(c, {
              Bucket: l,
              Region: u
            }, function (e) {
              (f = e || {}).Scope = m, f.ScopeKey = v, f.TmpSecretId || (f.TmpSecretId = f.SecretId), f.TmpSecretKey || (f.TmpSecretKey = f.SecretKey);
              var t = b(f);
              if (t) return s(t);
              c._StsCache.push(f), x();
            });
          }
          return "";
        }

        function p(e) {
          var t = !1,
            n = !1,
            i = e.headers && (e.headers.date || e.headers.Date) || e.error && e.error.ServerTime;

          try {
            var r = e.error.Code,
              a = e.error.Message;
            ("RequestTimeTooSkewed" === r || "AccessDenied" === r && "Request has expired" === a) && (n = !0);
          } catch (e) { }

          if (e) if (n && i) {
            var s = Date.parse(i);
            this.options.CorrectClockSkew && Math.abs(o.getSkewTime(this.options.SystemClockOffset) - s) >= 3e4 && (this.options.SystemClockOffset = s - Date.now(), t = !0);
          } else 5 === Math.floor(e.statusCode / 100) && (t = !0);
          return t;
        }

        function d(e, t) {
          var n = this;
          !e.headers && (e.headers = {}), !e.qs && (e.qs = {}), e.VersionId && (e.qs.versionId = e.VersionId), e.qs = o.clearKey(e.qs), e.headers && (e.headers = o.clearKey(e.headers)), e.qs && (e.qs = o.clearKey(e.qs));
          var i = o.clone(e.qs);
          e.action && (i[e.action] = "");
          var r = e.url || e.Url,
            a = e.SignHost || l.call(this, {
              Bucket: e.Bucket,
              Region: e.Region,
              Url: r
            }),
            s = e.tracker;
          !function o(r) {
            var c = n.options.SystemClockOffset;
            s && s.setParams({
              signStartTime: new Date().getTime(),
              retryTimes: r - 1
            }), u.call(n, {
              Bucket: e.Bucket || "",
              Region: e.Region || "",
              Method: e.method,
              Key: e.Key,
              Query: i,
              Headers: e.headers,
              SignHost: a,
              Action: e.Action,
              ResourceKey: e.ResourceKey,
              Scope: e.Scope,
              ForceSignHost: n.options.ForceSignHost
            }, function (i, a) {
              i ? t(i) : (s && s.setParams({
                signEndTime: new Date().getTime(),
                httpStartTime: new Date().getTime()
              }), e.AuthData = a, f.call(n, e, function (i, a) {
                s && s.setParams({
                  httpEndTime: new Date().getTime()
                }), i && r < 2 && (c !== n.options.SystemClockOffset || p.call(n, i)) ? (e.headers && (delete e.headers.Authorization, delete e.headers.token, delete e.headers.clientIP, delete e.headers.clientUA, e.headers["x-cos-security-token"] && delete e.headers["x-cos-security-token"], e.headers["x-ci-security-token"] && delete e.headers["x-ci-security-token"]), o(r + 1)) : t(i, a);
              }));
            });
          }(1);
        }

        function f(e, t) {
          var n = this,
            r = e.TaskId;

          if (!r || n._isRunningTask(r)) {
            var a = e.Bucket,
              s = e.Region,
              l = e.Key,
              u = e.method || "GET",
              p = e.url || e.Url,
              d = e.body,
              f = e.json,
              m = e.rawBody,
              h = n.options.HttpDNSServiceId;
            n.options.UseAccelerate && (s = "accelerate"), p = p || c({
              ForcePathStyle: n.options.ForcePathStyle,
              protocol: n.options.Protocol,
              domain: n.options.Domain,
              bucket: a,
              region: s,
              object: l
            }), e.action && (p = p + "?" + e.action), e.qsStr && (p = p.indexOf("?") > -1 ? p + "&" + e.qsStr : p + "?" + e.qsStr);
            var g = {
              method: u,
              url: p,
              headers: e.headers,
              qs: e.qs,
              filePath: e.filePath,
              body: d,
              json: f,
              httpDNSServiceId: h
            },
              v = "x-cos-security-token";
            o.isCIHost(p) && (v = "x-ci-security-token"), g.headers.Authorization = e.AuthData.Authorization, e.AuthData.Token && (g.headers.token = e.AuthData.Token), e.AuthData.ClientIP && (g.headers.clientIP = e.AuthData.ClientIP), e.AuthData.ClientUA && (g.headers.clientUA = e.AuthData.ClientUA), e.AuthData.SecurityToken && (g.headers[v] = e.AuthData.SecurityToken), g.headers && (g.headers = o.clearKey(g.headers)), g = o.clearKey(g), e.onProgress && "function" == typeof e.onProgress && (g.onProgress = function (t) {
              if (!r || n._isRunningTask(r)) {
                var i = t ? t.loaded : 0;
                e.onProgress({
                  loaded: i,
                  total: t.total
                });
              }
            }), this.options.Timeout && (g.timeout = this.options.Timeout), n.options.ForcePathStyle && (g.pathStyle = n.options.ForcePathStyle), n.emit("before-send", g);
            var y = g.url.includes("accelerate."),
              x = g.qs ? Object.keys(g.qs).map(function (e) {
                return "".concat(e, "=").concat(g.qs[e]);
              }).join("&") : "",
              b = x ? g.url + "?" + x : g.url;
            e.tracker && e.tracker.setParams({
              reqUrl: b,
              accelerate: y ? "Y" : "N"
            }), e.tracker && e.tracker.parent && e.tracker.parent.setParams({
              reqUrl: b,
              accelerate: y ? "Y" : "N"
            });

            var k = i(g, function (e, i, a) {
              if ("abort" !== e) {
                var s,
                  c = function (e, a) {
                    if (r && n.off("inner-kill-task", C), !s) {
                      s = !0;
                      var c = {};
                      i && i.statusCode && (c.statusCode = i.statusCode), i && i.headers && (c.headers = i.headers), e ? (e = o.extend(e || {}, c), t(e, null)) : (a = o.extend(a || {}, c), t(null, a)), k = null;
                    }
                  };

                if (e) c({
                  error: e
                }); else {
                  var l;
                  if (m) (l = {}).body = a; else try {
                    l = a && a.indexOf("<") > -1 && a.indexOf(">") > -1 && o.xml2json(a) || {};
                  } catch (e) {
                    l = a || {};
                  }
                  var u = i.statusCode;
                  2 === Math.floor(u / 100) ? l.Error ? c({
                    error: l.Error
                  }) : c(null, l) : c({
                    error: l.Error || l
                  });
                }
              }
            }),
              C = function e(t) {
                t.TaskId === r && (k && k.abort && k.abort(), n.off("inner-kill-task", e));
              };

            r && n.on("inner-kill-task", C);
          }
        }

        var m = {
          getService: function (e, t) {
            "function" == typeof e && (t = e, e = {});
            var n = this.options.ServiceDomain,
              i = e.Region;
            n ? (n = n.replace(/\{\{Region\}\}/gi, i || "").replace(/\{\{.*?\}\}/gi, ""), /^[a-zA-Z]+:\/\//.test(n) || (n = "https://" + n), "/" === n.slice(-1) && (n = n.slice(0, -1))) : n = i ? "https://cos." + i + ".myqcloud.com" : "https://service.cos.myqcloud.com";
            n.replace(/^https?:\/\/([^/]+)(\/.*)?$/, "$1"), d.call(this, {
              Action: "name/cos:GetService",
              url: n,
              method: "GET",
              headers: e.Headers
            }, function (e, n) {
              if (e) return t(e);
              var i = n && n.ListAllMyBucketsResult && n.ListAllMyBucketsResult.Buckets && n.ListAllMyBucketsResult.Buckets.Bucket || [];
              i = o.isArray(i) ? i : [i];
              var r = n && n.ListAllMyBucketsResult && n.ListAllMyBucketsResult.Owner || {};
              t(null, {
                Buckets: i,
                Owner: r,
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          putBucket: function (e, t) {
            var n = this,
              i = "";

            if (e.BucketAZConfig) {
              var r = {
                BucketAZConfig: e.BucketAZConfig
              };
              i = o.json2xml({
                CreateBucketConfiguration: r
              });
            }

            d.call(this, {
              Action: "name/cos:PutBucket",
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              body: i
            }, function (i, o) {
              if (i) return t(i);
              var r = c({
                protocol: n.options.Protocol,
                domain: n.options.Domain,
                bucket: e.Bucket,
                region: e.Region,
                isLocation: !0
              });
              t(null, {
                Location: r,
                statusCode: o.statusCode,
                headers: o.headers
              });
            });
          },
          headBucket: function (e, t) {
            d.call(this, {
              Action: "name/cos:HeadBucket",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              method: "HEAD"
            }, function (e, n) {
              t(e, n);
            });
          },
          getBucket: function (e, t) {
            var n = {};
            n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n.marker = e.Marker, n["max-keys"] = e.MaxKeys, n["encoding-type"] = e.EncodingType, d.call(this, {
              Action: "name/cos:GetBucket",
              ResourceKey: n.prefix,
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              qs: n
            }, function (e, n) {
              if (e) return t(e);
              var i = n.ListBucketResult || {},
                r = i.Contents || [],
                a = i.CommonPrefixes || [];
              r = o.isArray(r) ? r : [r], a = o.isArray(a) ? a : [a];
              var s = o.clone(i);
              o.extend(s, {
                Contents: r,
                CommonPrefixes: a,
                statusCode: n.statusCode,
                headers: n.headers
              }), t(null, s);
            });
          },
          deleteBucket: function (e, t) {
            d.call(this, {
              Action: "name/cos:DeleteBucket",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              method: "DELETE"
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          putBucketAcl: function (e, t) {
            var n = e.Headers,
              i = "";

            if (e.AccessControlPolicy) {
              var r = o.clone(e.AccessControlPolicy || {}),
                a = r.Grants || r.Grant;
              a = o.isArray(a) ? a : [a], delete r.Grant, delete r.Grants, r.AccessControlList = {
                Grant: a
              }, i = o.json2xml({
                AccessControlPolicy: r
              }), n["Content-Type"] = "application/xml", n["Content-MD5"] = o.binaryBase64(o.md5(i));
            }

            o.each(n, function (e, t) {
              0 === t.indexOf("x-cos-grant-") && (n[t] = s(n[t]));
            }), d.call(this, {
              Action: "name/cos:PutBucketACL",
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: n,
              action: "acl",
              body: i
            }, function (e, n) {
              if (e) return t(e);
              t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          getBucketAcl: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketACL",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "acl"
            }, function (e, n) {
              if (e) return t(e);
              var i = n.AccessControlPolicy || {},
                r = i.Owner || {},
                s = i.AccessControlList.Grant || [];
              s = o.isArray(s) ? s : [s];
              var c = a(i);
              n.headers && n.headers["x-cos-acl"] && (c.ACL = n.headers["x-cos-acl"]), c = o.extend(c, {
                Owner: r,
                Grants: s,
                statusCode: n.statusCode,
                headers: n.headers
              }), t(null, c);
            });
          },
          putBucketCors: function (e, t) {
            var n = (e.CORSConfiguration || {}).CORSRules || e.CORSRules || [];
            n = o.clone(o.isArray(n) ? n : [n]), o.each(n, function (e) {
              o.each(["AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader"], function (t) {
                var n = t + "s",
                  i = e[n] || e[t] || [];
                delete e[n], e[t] = o.isArray(i) ? i : [i];
              });
            });
            var i = {
              CORSRule: n
            };
            e.ResponseVary && (i.ResponseVary = e.ResponseVary);
            var r = o.json2xml({
              CORSConfiguration: i
            }),
              a = e.Headers;
            a["Content-Type"] = "application/xml", a["Content-MD5"] = o.binaryBase64(o.md5(r)), d.call(this, {
              Action: "name/cos:PutBucketCORS",
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              body: r,
              action: "cors",
              headers: a
            }, function (e, n) {
              if (e) return t(e);
              t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          getBucketCors: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketCORS",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "cors"
            }, function (e, n) {
              if (e) {
                if (404 === e.statusCode && e.error && "NoSuchCORSConfiguration" === e.error.Code) {
                  var i = {
                    CORSRules: [],
                    statusCode: e.statusCode
                  };
                  e.headers && (i.headers = e.headers), t(null, i);
                } else t(e);
              } else {
                var r = n.CORSConfiguration || {},
                  a = r.CORSRules || r.CORSRule || [];
                a = o.clone(o.isArray(a) ? a : [a]);
                var s = r.ResponseVary;
                o.each(a, function (e) {
                  o.each(["AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader"], function (t) {
                    var n = t + "s",
                      i = e[n] || e[t] || [];
                    delete e[t], e[n] = o.isArray(i) ? i : [i];
                  });
                }), t(null, {
                  CORSRules: a,
                  ResponseVary: s,
                  statusCode: n.statusCode,
                  headers: n.headers
                });
              }
            });
          },
          deleteBucketCors: function (e, t) {
            d.call(this, {
              Action: "name/cos:DeleteBucketCORS",
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "cors"
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode || e.statusCode,
                headers: n.headers
              });
            });
          },
          getBucketLocation: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketLocation",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "location"
            }, function (e, n) {
              if (e) return t(e);
              t(null, n);
            });
          },
          getBucketPolicy: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketPolicy",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "policy",
              rawBody: !0
            }, function (e, n) {
              if (e) return e.statusCode && 403 === e.statusCode ? t({
                ErrorStatus: "Access Denied"
              }) : e.statusCode && 405 === e.statusCode ? t({
                ErrorStatus: "Method Not Allowed"
              }) : e.statusCode && 404 === e.statusCode ? t({
                ErrorStatus: "Policy Not Found"
              }) : t(e);
              var i = {};

              try {
                i = JSON.parse(n.body);
              } catch (e) { }

              t(null, {
                Policy: i,
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          putBucketPolicy: function (e, t) {
            var n = e.Policy,
              i = n;

            try {
              "string" == typeof n ? n = JSON.parse(i) : i = JSON.stringify(n);
            } catch (e) {
              t({
                error: "Policy format error"
              });
            }

            var r = e.Headers;
            r["Content-Type"] = "application/json", r["Content-MD5"] = o.binaryBase64(o.md5(i)), d.call(this, {
              Action: "name/cos:PutBucketPolicy",
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              action: "policy",
              body: i,
              headers: r,
              json: !0
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          deleteBucketPolicy: function (e, t) {
            d.call(this, {
              Action: "name/cos:DeleteBucketPolicy",
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "policy"
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode || e.statusCode,
                headers: n.headers
              });
            });
          },
          putBucketTagging: function (e, t) {
            var n = e.Tagging || {},
              i = n.TagSet || n.Tags || e.Tags || [];
            i = o.clone(o.isArray(i) ? i : [i]);
            var r = o.json2xml({
              Tagging: {
                TagSet: {
                  Tag: i
                }
              }
            }),
              a = e.Headers;
            a["Content-Type"] = "application/xml", a["Content-MD5"] = o.binaryBase64(o.md5(r)), d.call(this, {
              Action: "name/cos:PutBucketTagging",
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              body: r,
              action: "tagging",
              headers: a
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          getBucketTagging: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketTagging",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "tagging"
            }, function (e, n) {
              if (e) {
                if (404 !== e.statusCode || !e.error || "Not Found" !== e.error && "NoSuchTagSet" !== e.error.Code) t(e); else {
                  var i = {
                    Tags: [],
                    statusCode: e.statusCode
                  };
                  e.headers && (i.headers = e.headers), t(null, i);
                }
              } else {
                var r = [];

                try {
                  r = n.Tagging.TagSet.Tag || [];
                } catch (e) { }

                r = o.clone(o.isArray(r) ? r : [r]), t(null, {
                  Tags: r,
                  statusCode: n.statusCode,
                  headers: n.headers
                });
              }
            });
          },
          deleteBucketTagging: function (e, t) {
            d.call(this, {
              Action: "name/cos:DeleteBucketTagging",
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "tagging"
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          putBucketLifecycle: function (e, t) {
            var n = (e.LifecycleConfiguration || {}).Rules || e.Rules || [];
            n = o.clone(n);
            var i = o.json2xml({
              LifecycleConfiguration: {
                Rule: n
              }
            }),
              r = e.Headers;
            r["Content-Type"] = "application/xml", r["Content-MD5"] = o.binaryBase64(o.md5(i)), d.call(this, {
              Action: "name/cos:PutBucketLifecycle",
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              body: i,
              action: "lifecycle",
              headers: r
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          getBucketLifecycle: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketLifecycle",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "lifecycle"
            }, function (e, n) {
              if (e) {
                if (404 === e.statusCode && e.error && "NoSuchLifecycleConfiguration" === e.error.Code) {
                  var i = {
                    Rules: [],
                    statusCode: e.statusCode
                  };
                  e.headers && (i.headers = e.headers), t(null, i);
                } else t(e);
              } else {
                var r = [];

                try {
                  r = n.LifecycleConfiguration.Rule || [];
                } catch (e) { }

                r = o.clone(o.isArray(r) ? r : [r]), t(null, {
                  Rules: r,
                  statusCode: n.statusCode,
                  headers: n.headers
                });
              }
            });
          },
          deleteBucketLifecycle: function (e, t) {
            d.call(this, {
              Action: "name/cos:DeleteBucketLifecycle",
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "lifecycle"
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          putBucketVersioning: function (e, t) {
            if (e.VersioningConfiguration) {
              var n = e.VersioningConfiguration || {},
                i = o.json2xml({
                  VersioningConfiguration: n
                }),
                r = e.Headers;
              r["Content-Type"] = "application/xml", r["Content-MD5"] = o.binaryBase64(o.md5(i)), d.call(this, {
                Action: "name/cos:PutBucketVersioning",
                method: "PUT",
                Bucket: e.Bucket,
                Region: e.Region,
                body: i,
                action: "versioning",
                headers: r
              }, function (e, n) {
                return e && 204 === e.statusCode ? t(null, {
                  statusCode: e.statusCode
                }) : e ? t(e) : void t(null, {
                  statusCode: n.statusCode,
                  headers: n.headers
                });
              });
            } else t({
              error: "missing param VersioningConfiguration"
            });
          },
          getBucketVersioning: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketVersioning",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "versioning"
            }, function (e, n) {
              e || !n.VersioningConfiguration && (n.VersioningConfiguration = {}), t(e, n);
            });
          },
          putBucketReplication: function (e, t) {
            var n = o.clone(e.ReplicationConfiguration),
              i = o.json2xml({
                ReplicationConfiguration: n
              });
            i = (i = i.replace(/<(\/?)Rules>/gi, "<$1Rule>")).replace(/<(\/?)Tags>/gi, "<$1Tag>");
            var r = e.Headers;
            r["Content-Type"] = "application/xml", r["Content-MD5"] = o.binaryBase64(o.md5(i)), d.call(this, {
              Action: "name/cos:PutBucketReplication",
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              body: i,
              action: "replication",
              headers: r
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          getBucketReplication: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketReplication",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "replication"
            }, function (e, n) {
              if (e) {
                if (404 !== e.statusCode || !e.error || "Not Found" !== e.error && "ReplicationConfigurationnotFoundError" !== e.error.Code) t(e); else {
                  var i = {
                    ReplicationConfiguration: {
                      Rules: []
                    },
                    statusCode: e.statusCode
                  };
                  e.headers && (i.headers = e.headers), t(null, i);
                }
              } else e || !n.ReplicationConfiguration && (n.ReplicationConfiguration = {}), n.ReplicationConfiguration.Rule && (n.ReplicationConfiguration.Rules = n.ReplicationConfiguration.Rule, delete n.ReplicationConfiguration.Rule), t(e, n);
            });
          },
          deleteBucketReplication: function (e, t) {
            d.call(this, {
              Action: "name/cos:DeleteBucketReplication",
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "replication"
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          putBucketWebsite: function (e, t) {
            if (e.WebsiteConfiguration) {
              var n = o.clone(e.WebsiteConfiguration || {}),
                i = n.RoutingRules || n.RoutingRule || [];
              i = o.isArray(i) ? i : [i], delete n.RoutingRule, delete n.RoutingRules, i.length && (n.RoutingRules = {
                RoutingRule: i
              });
              var r = o.json2xml({
                WebsiteConfiguration: n
              }),
                a = e.Headers;
              a["Content-Type"] = "application/xml", a["Content-MD5"] = o.binaryBase64(o.md5(r)), d.call(this, {
                Action: "name/cos:PutBucketWebsite",
                method: "PUT",
                Bucket: e.Bucket,
                Region: e.Region,
                body: r,
                action: "website",
                headers: a
              }, function (e, n) {
                return e && 204 === e.statusCode ? t(null, {
                  statusCode: e.statusCode
                }) : e ? t(e) : void t(null, {
                  statusCode: n.statusCode,
                  headers: n.headers
                });
              });
            } else t({
              error: "missing param WebsiteConfiguration"
            });
          },
          getBucketWebsite: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketWebsite",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              headers: e.Headers,
              action: "website"
            }, function (e, n) {
              if (e) {
                if (404 === e.statusCode && "NoSuchWebsiteConfiguration" === e.error.Code) {
                  var i = {
                    WebsiteConfiguration: {},
                    statusCode: e.statusCode
                  };
                  e.headers && (i.headers = e.headers), t(null, i);
                } else t(e);
              } else {
                var r = n.WebsiteConfiguration || {};

                if (r.RoutingRules) {
                  var a = o.clone(r.RoutingRules.RoutingRule || []);
                  a = o.makeArray(a), r.RoutingRules = a;
                }

                t(null, {
                  WebsiteConfiguration: r,
                  statusCode: n.statusCode,
                  headers: n.headers
                });
              }
            });
          },
          deleteBucketWebsite: function (e, t) {
            d.call(this, {
              Action: "name/cos:DeleteBucketWebsite",
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "website"
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          putBucketReferer: function (e, t) {
            if (e.RefererConfiguration) {
              var n = o.clone(e.RefererConfiguration || {}),
                i = n.DomainList || {},
                r = i.Domains || i.Domain || [];
              (r = o.isArray(r) ? r : [r]).length && (n.DomainList = {
                Domain: r
              });
              var a = o.json2xml({
                RefererConfiguration: n
              }),
                s = e.Headers;
              s["Content-Type"] = "application/xml", s["Content-MD5"] = o.binaryBase64(o.md5(a)), d.call(this, {
                Action: "name/cos:PutBucketReferer",
                method: "PUT",
                Bucket: e.Bucket,
                Region: e.Region,
                body: a,
                action: "referer",
                headers: s
              }, function (e, n) {
                return e && 204 === e.statusCode ? t(null, {
                  statusCode: e.statusCode
                }) : e ? t(e) : void t(null, {
                  statusCode: n.statusCode,
                  headers: n.headers
                });
              });
            } else t({
              error: "missing param RefererConfiguration"
            });
          },
          getBucketReferer: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketReferer",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              headers: e.Headers,
              action: "referer"
            }, function (e, n) {
              if (e) {
                if (404 === e.statusCode && "NoSuchRefererConfiguration" === e.error.Code) {
                  var i = {
                    WebsiteConfiguration: {},
                    statusCode: e.statusCode
                  };
                  e.headers && (i.headers = e.headers), t(null, i);
                } else t(e);
              } else {
                var r = n.RefererConfiguration || {};

                if (r.DomainList) {
                  var a = o.makeArray(r.DomainList.Domain || []);
                  r.DomainList = {
                    Domains: a
                  };
                }

                t(null, {
                  RefererConfiguration: r,
                  statusCode: n.statusCode,
                  headers: n.headers
                });
              }
            });
          },
          putBucketDomain: function (e, t) {
            var n = (e.DomainConfiguration || {}).DomainRule || e.DomainRule || [];
            n = o.clone(n);
            var i = o.json2xml({
              DomainConfiguration: {
                DomainRule: n
              }
            }),
              r = e.Headers;
            r["Content-Type"] = "application/xml", r["Content-MD5"] = o.binaryBase64(o.md5(i)), d.call(this, {
              Action: "name/cos:PutBucketDomain",
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              body: i,
              action: "domain",
              headers: r
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          getBucketDomain: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketDomain",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "domain"
            }, function (e, n) {
              if (e) return t(e);
              var i = [];

              try {
                i = n.DomainConfiguration.DomainRule || [];
              } catch (e) { }

              i = o.clone(o.isArray(i) ? i : [i]), t(null, {
                DomainRule: i,
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          deleteBucketDomain: function (e, t) {
            d.call(this, {
              Action: "name/cos:DeleteBucketDomain",
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "domain"
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          putBucketOrigin: function (e, t) {
            var n = (e.OriginConfiguration || {}).OriginRule || e.OriginRule || [];
            n = o.clone(n);
            var i = o.json2xml({
              OriginConfiguration: {
                OriginRule: n
              }
            }),
              r = e.Headers;
            r["Content-Type"] = "application/xml", r["Content-MD5"] = o.binaryBase64(o.md5(i)), d.call(this, {
              Action: "name/cos:PutBucketOrigin",
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              body: i,
              action: "origin",
              headers: r
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          getBucketOrigin: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketOrigin",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "origin"
            }, function (e, n) {
              if (e) return t(e);
              var i = [];

              try {
                i = n.OriginConfiguration.OriginRule || [];
              } catch (e) { }

              i = o.clone(o.isArray(i) ? i : [i]), t(null, {
                OriginRule: i,
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          deleteBucketOrigin: function (e, t) {
            d.call(this, {
              Action: "name/cos:DeleteBucketOrigin",
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "origin"
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          putBucketLogging: function (e, t) {
            var n = o.json2xml({
              BucketLoggingStatus: e.BucketLoggingStatus || ""
            }),
              i = e.Headers;
            i["Content-Type"] = "application/xml", i["Content-MD5"] = o.binaryBase64(o.md5(n)), d.call(this, {
              Action: "name/cos:PutBucketLogging",
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              body: n,
              action: "logging",
              headers: i
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          getBucketLogging: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketLogging",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "logging"
            }, function (e, n) {
              if (e) return t(e);
              delete n.BucketLoggingStatus._xmlns, t(null, {
                BucketLoggingStatus: n.BucketLoggingStatus,
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          putBucketInventory: function (e, t) {
            var n = o.clone(e.InventoryConfiguration);

            if (n.OptionalFields) {
              var i = n.OptionalFields || [];
              n.OptionalFields = {
                Field: i
              };
            }

            if (n.Destination && n.Destination.COSBucketDestination && n.Destination.COSBucketDestination.Encryption) {
              var r = n.Destination.COSBucketDestination.Encryption;
              Object.keys(r).indexOf("SSECOS") > -1 && (r["SSE-COS"] = r.SSECOS, delete r.SSECOS);
            }

            var a = o.json2xml({
              InventoryConfiguration: n
            }),
              s = e.Headers;
            s["Content-Type"] = "application/xml", s["Content-MD5"] = o.binaryBase64(o.md5(a)), d.call(this, {
              Action: "name/cos:PutBucketInventory",
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              body: a,
              action: "inventory",
              qs: {
                id: e.Id
              },
              headers: s
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          getBucketInventory: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetBucketInventory",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "inventory",
              qs: {
                id: e.Id
              }
            }, function (e, n) {
              if (e) return t(e);
              var i = n.InventoryConfiguration;

              if (i && i.OptionalFields && i.OptionalFields.Field) {
                var r = i.OptionalFields.Field;
                o.isArray(r) || (r = [r]), i.OptionalFields = r;
              }

              if (i.Destination && i.Destination.COSBucketDestination && i.Destination.COSBucketDestination.Encryption) {
                var a = i.Destination.COSBucketDestination.Encryption;
                Object.keys(a).indexOf("SSE-COS") > -1 && (a.SSECOS = a["SSE-COS"], delete a["SSE-COS"]);
              }

              t(null, {
                InventoryConfiguration: i,
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          listBucketInventory: function (e, t) {
            d.call(this, {
              Action: "name/cos:ListBucketInventory",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "inventory",
              qs: {
                "continuation-token": e.ContinuationToken
              }
            }, function (e, n) {
              if (e) return t(e);
              var i = n.ListInventoryConfigurationResult,
                r = i.InventoryConfiguration || [];
              r = o.isArray(r) ? r : [r], delete i.InventoryConfiguration, o.each(r, function (e) {
                if (e && e.OptionalFields && e.OptionalFields.Field) {
                  var t = e.OptionalFields.Field;
                  o.isArray(t) || (t = [t]), e.OptionalFields = t;
                }

                if (e.Destination && e.Destination.COSBucketDestination && e.Destination.COSBucketDestination.Encryption) {
                  var n = e.Destination.COSBucketDestination.Encryption;
                  Object.keys(n).indexOf("SSE-COS") > -1 && (n.SSECOS = n["SSE-COS"], delete n["SSE-COS"]);
                }
              }), i.InventoryConfigurations = r, o.extend(i, {
                statusCode: n.statusCode,
                headers: n.headers
              }), t(null, i);
            });
          },
          deleteBucketInventory: function (e, t) {
            d.call(this, {
              Action: "name/cos:DeleteBucketInventory",
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "inventory",
              qs: {
                id: e.Id
              }
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          putBucketAccelerate: function (e, t) {
            if (e.AccelerateConfiguration) {
              var n = {
                AccelerateConfiguration: e.AccelerateConfiguration || {}
              },
                i = o.json2xml(n),
                r = {
                  "Content-Type": "application/xml"
                };
              r["Content-MD5"] = o.binaryBase64(o.md5(i)), d.call(this, {
                Interface: "putBucketAccelerate",
                Action: "name/cos:PutBucketAccelerate",
                method: "PUT",
                Bucket: e.Bucket,
                Region: e.Region,
                body: i,
                action: "accelerate",
                headers: r
              }, function (e, n) {
                if (e) return t(e);
                t(null, {
                  statusCode: n.statusCode,
                  headers: n.headers
                });
              });
            } else t({
              error: "missing param AccelerateConfiguration"
            });
          },
          getBucketAccelerate: function (e, t) {
            d.call(this, {
              Interface: "getBucketAccelerate",
              Action: "name/cos:GetBucketAccelerate",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              action: "accelerate"
            }, function (e, n) {
              e || !n.AccelerateConfiguration && (n.AccelerateConfiguration = {}), t(e, n);
            });
          },
          getObject: function (e, t) {
            var n = e.Query || {},
              i = e.QueryString || "",
              r = e.tracker;
            r && r.setParams({
              signStartTime: new Date().getTime()
            }), n["response-content-type"] = e.ResponseContentType, n["response-content-language"] = e.ResponseContentLanguage, n["response-expires"] = e.ResponseExpires, n["response-cache-control"] = e.ResponseCacheControl, n["response-content-disposition"] = e.ResponseContentDisposition, n["response-content-encoding"] = e.ResponseContentEncoding, d.call(this, {
              Action: "name/cos:GetObject",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              VersionId: e.VersionId,
              headers: e.Headers,
              qs: n,
              qsStr: i,
              rawBody: !0,
              tracker: r
            }, function (n, i) {
              if (n) {
                var r = n.statusCode;
                return e.Headers["If-Modified-Since"] && r && 304 === r ? t(null, {
                  NotModified: !0
                }) : t(n);
              }

              t(null, {
                Body: i.body,
                ETag: o.attr(i.headers, "etag", ""),
                statusCode: i.statusCode,
                headers: i.headers
              });
            });
          },
          headObject: function (e, t) {
            d.call(this, {
              Action: "name/cos:HeadObject",
              method: "HEAD",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              VersionId: e.VersionId,
              headers: e.Headers
            }, function (n, i) {
              if (n) {
                var r = n.statusCode;
                return e.Headers["If-Modified-Since"] && r && 304 === r ? t(null, {
                  NotModified: !0,
                  statusCode: r
                }) : t(n);
              }

              i.ETag = o.attr(i.headers, "etag", ""), t(null, i);
            });
          },
          listObjectVersions: function (e, t) {
            var n = {};
            n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n["key-marker"] = e.KeyMarker, n["version-id-marker"] = e.VersionIdMarker, n["max-keys"] = e.MaxKeys, n["encoding-type"] = e.EncodingType, d.call(this, {
              Action: "name/cos:GetBucketObjectVersions",
              ResourceKey: n.prefix,
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              qs: n,
              action: "versions"
            }, function (e, n) {
              if (e) return t(e);
              var i = n.ListVersionsResult || {},
                r = i.DeleteMarker || [];
              r = o.isArray(r) ? r : [r];
              var a = i.Version || [];
              a = o.isArray(a) ? a : [a];
              var s = o.clone(i);
              delete s.DeleteMarker, delete s.Version, o.extend(s, {
                DeleteMarkers: r,
                Versions: a,
                statusCode: n.statusCode,
                headers: n.headers
              }), t(null, s);
            });
          },
          putObject: function (e, t) {
            var n = this,
              i = e.ContentLength,
              a = o.throttleOnProgress.call(n, i, e.onProgress),
              s = e.Headers;
            s["Cache-Control"] || s["cache-control"] || (s["Cache-Control"] = ""), s["Content-Type"] || s["content-type"] || (s["Content-Type"] = r.getType(e.Key) || "application/octet-stream");
            var l = e.UploadAddMetaMd5 || n.options.UploadAddMetaMd5 || n.options.UploadCheckContentMd5,
              u = e.tracker;
            l && u && u.setParams({
              md5StartTime: new Date().getTime()
            }), o.getBodyMd5(l, e.Body, function (r) {
              r && (u && u.setParams({
                md5EndTime: new Date().getTime()
              }), n.options.UploadCheckContentMd5 && (s["Content-MD5"] = o.binaryBase64(r)), (e.UploadAddMetaMd5 || n.options.UploadAddMetaMd5) && (s["x-cos-meta-md5"] = r)), void 0 !== e.ContentLength && (s["Content-Length"] = e.ContentLength), a(null, !0), d.call(n, {
                Action: "name/cos:PutObject",
                TaskId: e.TaskId,
                method: "PUT",
                Bucket: e.Bucket,
                Region: e.Region,
                Key: e.Key,
                headers: e.Headers,
                qs: e.Query,
                body: e.Body,
                onProgress: a,
                tracker: u
              }, function (r, s) {
                if (r) return a(null, !0), t(r);
                a({
                  loaded: i,
                  total: i
                }, !0);
                var l = c({
                  ForcePathStyle: n.options.ForcePathStyle,
                  protocol: n.options.Protocol,
                  domain: n.options.Domain,
                  bucket: e.Bucket,
                  region: n.options.UseAccelerate ? "accelerate" : e.Region,
                  object: e.Key
                });
                l = l.substr(l.indexOf("://") + 3), s.Location = l, s.ETag = o.attr(s.headers, "etag", ""), t(null, s);
              });
            });
          },
          postObject: function (e, t) {
            var n = this,
              i = {},
              r = e.FilePath;

            if (r) {
              for (var a in i["Cache-Control"] = e.CacheControl, i["Content-Disposition"] = e.ContentDisposition, i["Content-Encoding"] = e.ContentEncoding, i["Content-MD5"] = e.ContentMD5, i["Content-Length"] = e.ContentLength, i["Content-Type"] = e.ContentType, i.Expect = e.Expect, i.Expires = e.Expires, i["x-cos-acl"] = e.ACL, i["x-cos-grant-read"] = e.GrantRead, i["x-cos-grant-write"] = e.GrantWrite, i["x-cos-grant-full-control"] = e.GrantFullControl, i["x-cos-storage-class"] = e.StorageClass, i["x-cos-mime-limit"] = e.MimeLimit, i["x-cos-traffic-limit"] = e.TrafficLimit, i["x-cos-server-side-encryption-customer-algorithm"] = e.SSECustomerAlgorithm, i["x-cos-server-side-encryption-customer-key"] = e.SSECustomerKey, i["x-cos-server-side-encryption-customer-key-MD5"] = e.SSECustomerKeyMD5, i["x-cos-server-side-encryption"] = e.ServerSideEncryption, i["x-cos-server-side-encryption-cos-kms-key-id"] = e.SSEKMSKeyId, i["x-cos-server-side-encryption-context"] = e.SSEContext, delete i["Content-Length"], delete i["content-length"], e) a.indexOf("x-cos-meta-") > -1 && (i[a] = e[a]);

              var s = o.throttleOnProgress.call(n, i["Content-Length"], e.onProgress);
              d.call(this, {
                Action: "name/cos:PostObject",
                method: "POST",
                Bucket: e.Bucket,
                Region: e.Region,
                Key: e.Key,
                headers: i,
                qs: e.Query,
                filePath: r,
                TaskId: e.TaskId,
                onProgress: s
              }, function (i, o) {
                if (s(null, !0), i) return t(i);

                if (o && o.headers) {
                  var a = o.headers,
                    l = a.etag || a.Etag || a.ETag || "",
                    u = r.substr(r.lastIndexOf("/") + 1),
                    p = c({
                      ForcePathStyle: n.options.ForcePathStyle,
                      protocol: n.options.Protocol,
                      domain: n.options.Domain,
                      bucket: e.Bucket,
                      region: e.Region,
                      object: e.Key.replace(/\$\{filename\}/g, u),
                      isLocation: !0
                    });
                  return t(null, {
                    Location: p,
                    statusCode: o.statusCode,
                    headers: a,
                    ETag: l
                  });
                }

                t(null, o);
              });
            } else t({
              error: "missing param FilePath"
            });
          },
          deleteObject: function (e, t) {
            d.call(this, {
              Action: "name/cos:DeleteObject",
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              headers: e.Headers,
              VersionId: e.VersionId
            }, function (e, n) {
              if (e) {
                var i = e.statusCode;
                return i && 204 === i ? t(null, {
                  statusCode: i
                }) : i && 404 === i ? t(null, {
                  BucketNotFound: !0,
                  statusCode: i
                }) : t(e);
              }

              t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          getObjectAcl: function (e, t) {
            d.call(this, {
              Action: "name/cos:GetObjectACL",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              headers: e.Headers,
              action: "acl"
            }, function (e, n) {
              if (e) return t(e);
              var i = n.AccessControlPolicy || {},
                r = i.Owner || {},
                s = i.AccessControlList && i.AccessControlList.Grant || [];
              s = o.isArray(s) ? s : [s];
              var c = a(i);
              n.headers && n.headers["x-cos-acl"] && (c.ACL = n.headers["x-cos-acl"]), c = o.extend(c, {
                Owner: r,
                Grants: s,
                statusCode: n.statusCode,
                headers: n.headers
              }), t(null, c);
            });
          },
          putObjectAcl: function (e, t) {
            var n = e.Headers,
              i = "";

            if (e.AccessControlPolicy) {
              var r = o.clone(e.AccessControlPolicy || {}),
                a = r.Grants || r.Grant;
              a = o.isArray(a) ? a : [a], delete r.Grant, delete r.Grants, r.AccessControlList = {
                Grant: a
              }, i = o.json2xml({
                AccessControlPolicy: r
              }), n["Content-Type"] = "application/xml", n["Content-MD5"] = o.binaryBase64(o.md5(i));
            }

            o.each(n, function (e, t) {
              0 === t.indexOf("x-cos-grant-") && (n[t] = s(n[t]));
            }), d.call(this, {
              Action: "name/cos:PutObjectACL",
              method: "PUT",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              action: "acl",
              headers: n,
              body: i
            }, function (e, n) {
              if (e) return t(e);
              t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          optionsObject: function (e, t) {
            var n = e.Headers;
            n.Origin = e.Origin, n["Access-Control-Request-Method"] = e.AccessControlRequestMethod, n["Access-Control-Request-Headers"] = e.AccessControlRequestHeaders, d.call(this, {
              Action: "name/cos:OptionsObject",
              method: "OPTIONS",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              headers: n
            }, function (e, n) {
              if (e) return e.statusCode && 403 === e.statusCode ? t(null, {
                OptionsForbidden: !0,
                statusCode: e.statusCode
              }) : t(e);
              var i = n.headers || {};
              t(null, {
                AccessControlAllowOrigin: i["access-control-allow-origin"],
                AccessControlAllowMethods: i["access-control-allow-methods"],
                AccessControlAllowHeaders: i["access-control-allow-headers"],
                AccessControlExposeHeaders: i["access-control-expose-headers"],
                AccessControlMaxAge: i["access-control-max-age"],
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          putObjectCopy: function (e, t) {
            var n = e.Headers;
            !n["Cache-Control"] && n["cache-control"] && (n["Cache-Control"] = "");
            var i = e.CopySource || "",
              r = o.getSourceParams.call(this, i);

            if (r) {
              var a = r.Bucket,
                s = r.Region,
                c = decodeURIComponent(r.Key);
              d.call(this, {
                Scope: [{
                  action: "name/cos:GetObject",
                  bucket: a,
                  region: s,
                  prefix: c
                }, {
                  action: "name/cos:PutObject",
                  bucket: e.Bucket,
                  region: e.Region,
                  prefix: e.Key
                }],
                method: "PUT",
                Bucket: e.Bucket,
                Region: e.Region,
                Key: e.Key,
                VersionId: e.VersionId,
                headers: e.Headers
              }, function (e, n) {
                if (e) return t(e);
                var i = o.clone(n.CopyObjectResult || {});
                o.extend(i, {
                  statusCode: n.statusCode,
                  headers: n.headers
                }), t(null, i);
              });
            } else t({
              error: "CopySource format error"
            });
          },
          deleteMultipleObject: function (e, t) {
            var n = e.Objects || [],
              i = e.Quiet;
            n = o.isArray(n) ? n : [n];
            var r = o.json2xml({
              Delete: {
                Object: n,
                Quiet: i || !1
              }
            }),
              a = e.Headers;
            a["Content-Type"] = "application/xml", a["Content-MD5"] = o.binaryBase64(o.md5(r));
            var s = o.map(n, function (t) {
              return {
                action: "name/cos:DeleteObject",
                bucket: e.Bucket,
                region: e.Region,
                prefix: t.Key
              };
            });
            d.call(this, {
              Scope: s,
              method: "POST",
              Bucket: e.Bucket,
              Region: e.Region,
              body: r,
              action: "delete",
              headers: a
            }, function (e, n) {
              if (e) return t(e);
              var i = n.DeleteResult || {},
                r = i.Deleted || [],
                a = i.Error || [];
              r = o.isArray(r) ? r : [r], a = o.isArray(a) ? a : [a];
              var s = o.clone(i);
              o.extend(s, {
                Error: a,
                Deleted: r,
                statusCode: n.statusCode,
                headers: n.headers
              }), t(null, s);
            });
          },
          restoreObject: function (e, t) {
            var n = e.Headers;

            if (e.RestoreRequest) {
              var i = e.RestoreRequest || {},
                r = o.json2xml({
                  RestoreRequest: i
                });
              n["Content-Type"] = "application/xml", n["Content-MD5"] = o.binaryBase64(o.md5(r)), d.call(this, {
                Action: "name/cos:RestoreObject",
                method: "POST",
                Bucket: e.Bucket,
                Region: e.Region,
                Key: e.Key,
                VersionId: e.VersionId,
                body: r,
                action: "restore",
                headers: n
              }, function (e, n) {
                t(e, n);
              });
            } else t({
              error: "missing param RestoreRequest"
            });
          },
          putObjectTagging: function (e, t) {
            var n = e.Tagging || {},
              i = n.TagSet || n.Tags || e.Tags || [];
            i = o.clone(o.isArray(i) ? i : [i]);
            var r = o.json2xml({
              Tagging: {
                TagSet: {
                  Tag: i
                }
              }
            }),
              a = e.Headers;
            a["Content-Type"] = "application/xml", a["Content-MD5"] = o.binaryBase64(o.md5(r)), d.call(this, {
              Interface: "putObjectTagging",
              Action: "name/cos:PutObjectTagging",
              method: "PUT",
              Bucket: e.Bucket,
              Key: e.Key,
              Region: e.Region,
              body: r,
              action: "tagging",
              headers: a,
              VersionId: e.VersionId
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          getObjectTagging: function (e, t) {
            d.call(this, {
              Interface: "getObjectTagging",
              Action: "name/cos:GetObjectTagging",
              method: "GET",
              Key: e.Key,
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              action: "tagging",
              VersionId: e.VersionId
            }, function (e, n) {
              if (e) {
                if (404 !== e.statusCode || !e.error || "Not Found" !== e.error && "NoSuchTagSet" !== e.error.Code) t(e); else {
                  var i = {
                    Tags: [],
                    statusCode: e.statusCode
                  };
                  e.headers && (i.headers = e.headers), t(null, i);
                }
              } else {
                var r = [];

                try {
                  r = n.Tagging.TagSet.Tag || [];
                } catch (e) { }

                r = o.clone(o.isArray(r) ? r : [r]), t(null, {
                  Tags: r,
                  statusCode: n.statusCode,
                  headers: n.headers
                });
              }
            });
          },
          deleteObjectTagging: function (e, t) {
            d.call(this, {
              Interface: "deleteObjectTagging",
              Action: "name/cos:DeleteObjectTagging",
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              headers: e.Headers,
              action: "tagging",
              VersionId: e.VersionId
            }, function (e, n) {
              return e && 204 === e.statusCode ? t(null, {
                statusCode: e.statusCode
              }) : e ? t(e) : void t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          appendObject: function (e, t) {
            d.call(this, {
              Action: "name/cos:AppendObject",
              method: "POST",
              Bucket: e.Bucket,
              Region: e.Region,
              action: "append",
              Key: e.Key,
              body: e.Body,
              qs: {
                position: e.Position
              },
              headers: e.Headers
            }, function (e, n) {
              if (e) return t(e);
              t(null, n);
            });
          },
          uploadPartCopy: function (e, t) {
            var n = e.CopySource || "",
              i = o.getSourceParams.call(this, n);

            if (i) {
              var r = i.Bucket,
                a = i.Region,
                s = decodeURIComponent(i.Key);
              d.call(this, {
                Scope: [{
                  action: "name/cos:GetObject",
                  bucket: r,
                  region: a,
                  prefix: s
                }, {
                  action: "name/cos:PutObject",
                  bucket: e.Bucket,
                  region: e.Region,
                  prefix: e.Key
                }],
                method: "PUT",
                Bucket: e.Bucket,
                Region: e.Region,
                Key: e.Key,
                VersionId: e.VersionId,
                qs: {
                  partNumber: e.PartNumber,
                  uploadId: e.UploadId
                },
                headers: e.Headers
              }, function (e, n) {
                if (e) return t(e);
                var i = o.clone(n.CopyPartResult || {});
                o.extend(i, {
                  statusCode: n.statusCode,
                  headers: n.headers
                }), t(null, i);
              });
            } else t({
              error: "CopySource format error"
            });
          },
          multipartInit: function (e, t) {
            var n = e.Headers,
              i = e.tracker;
            n["Cache-Control"] || n["cache-control"] || (n["Cache-Control"] = ""), n["Content-Type"] || n["content-type"] || (n["Content-Type"] = r.getType(e.Key) || "application/octet-stream"), d.call(this, {
              Action: "name/cos:InitiateMultipartUpload",
              method: "POST",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              action: "uploads",
              headers: e.Headers,
              qs: e.Query,
              tracker: i
            }, function (e, n) {
              return e ? (i && i.parent && i.parent.setParams({
                errorNode: "multipartInit"
              }), t(e)) : (n = o.clone(n || {})) && n.InitiateMultipartUploadResult ? t(null, o.extend(n.InitiateMultipartUploadResult, {
                statusCode: n.statusCode,
                headers: n.headers
              })) : void t(null, n);
            });
          },
          multipartUpload: function (e, t) {
            var n = this;
            o.getFileSize("multipartUpload", e, function () {
              var i = e.tracker,
                r = n.options.UploadCheckContentMd5;
              r && i && i.setParams({
                md5StartTime: new Date().getTime()
              }), o.getBodyMd5(r, e.Body, function (a) {
                a && (e.Headers["Content-MD5"] = o.binaryBase64(a), r && i && i.setParams({
                  md5EndTime: new Date().getTime()
                })), i && i.setParams({
                  partNumber: e.PartNumber
                }), d.call(n, {
                  Action: "name/cos:UploadPart",
                  TaskId: e.TaskId,
                  method: "PUT",
                  Bucket: e.Bucket,
                  Region: e.Region,
                  Key: e.Key,
                  qs: {
                    partNumber: e.PartNumber,
                    uploadId: e.UploadId
                  },
                  headers: e.Headers,
                  onProgress: e.onProgress,
                  body: e.Body || null,
                  tracker: i
                }, function (e, n) {
                  if (e) return i && i.parent && i.parent.setParams({
                    errorNode: "multipartUpload"
                  }), t(e);
                  t(null, {
                    ETag: o.attr(n.headers, "etag", {}),
                    statusCode: n.statusCode,
                    headers: n.headers
                  });
                });
              });
            });
          },
          multipartComplete: function (e, t) {
            for (var n = this, i = e.UploadId, r = e.Parts, a = e.tracker, s = 0, l = r.length; s < l; s++) 0 !== r[s].ETag.indexOf('"') && (r[s].ETag = '"' + r[s].ETag + '"');

            var u = o.json2xml({
              CompleteMultipartUpload: {
                Part: r
              }
            }),
              p = e.Headers;
            p["Content-Type"] = "application/xml", p["Content-MD5"] = o.binaryBase64(o.md5(u)), d.call(this, {
              Action: "name/cos:CompleteMultipartUpload",
              method: "POST",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              qs: {
                uploadId: i
              },
              body: u,
              headers: p,
              tracker: a
            }, function (i, r) {
              if (i) return a && a.parent && a.parent.setParams({
                errorNode: "multipartComplete"
              }), t(i);
              var s = c({
                ForcePathStyle: n.options.ForcePathStyle,
                protocol: n.options.Protocol,
                domain: n.options.Domain,
                bucket: e.Bucket,
                region: e.Region,
                object: e.Key,
                isLocation: !0
              }),
                l = r.CompleteMultipartUploadResult || {},
                u = o.extend(l, {
                  Location: s,
                  statusCode: r.statusCode,
                  headers: r.headers
                });
              t(null, u);
            });
          },
          multipartList: function (e, t) {
            var n = {};
            n.delimiter = e.Delimiter, n["encoding-type"] = e.EncodingType, n.prefix = e.Prefix || "", n["max-uploads"] = e.MaxUploads, n["key-marker"] = e.KeyMarker, n["upload-id-marker"] = e.UploadIdMarker, n = o.clearKey(n);
            var i = e.tracker;
            i && i.setParams({
              signStartTime: new Date().getTime()
            }), d.call(this, {
              Action: "name/cos:ListMultipartUploads",
              ResourceKey: n.prefix,
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              headers: e.Headers,
              qs: n,
              action: "uploads",
              tracker: i
            }, function (e, n) {
              if (e) return i && i.parent && i.parent.setParams({
                errorNode: "multipartList"
              }), t(e);

              if (n && n.ListMultipartUploadsResult) {
                var r = n.ListMultipartUploadsResult.Upload || [],
                  a = n.ListMultipartUploadsResult.CommonPrefixes || [];
                a = o.isArray(a) ? a : [a], r = o.isArray(r) ? r : [r], n.ListMultipartUploadsResult.Upload = r, n.ListMultipartUploadsResult.CommonPrefixes = a;
              }

              var s = o.clone(n.ListMultipartUploadsResult || {});
              o.extend(s, {
                statusCode: n.statusCode,
                headers: n.headers
              }), t(null, s);
            });
          },
          multipartListPart: function (e, t) {
            var n = {},
              i = e.tracker;
            n.uploadId = e.UploadId, n["encoding-type"] = e.EncodingType, n["max-parts"] = e.MaxParts, n["part-number-marker"] = e.PartNumberMarker, d.call(this, {
              Action: "name/cos:ListParts",
              method: "GET",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              headers: e.Headers,
              qs: n,
              tracker: i
            }, function (e, n) {
              if (e) return i && i.parent && i.parent.setParams({
                errorNode: "multipartListPart"
              }), t(e);
              var r = n.ListPartsResult || {},
                a = r.Part || [];
              a = o.isArray(a) ? a : [a], r.Part = a;
              var s = o.clone(r);
              o.extend(s, {
                statusCode: n.statusCode,
                headers: n.headers
              }), t(null, s);
            });
          },
          multipartAbort: function (e, t) {
            var n = {};
            n.uploadId = e.UploadId, d.call(this, {
              Action: "name/cos:AbortMultipartUpload",
              method: "DELETE",
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              headers: e.Headers,
              qs: n
            }, function (e, n) {
              if (e) return t(e);
              t(null, {
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          },
          request: function (e, t) {
            d.call(this, {
              method: e.Method,
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              action: e.Action,
              headers: e.Headers,
              qs: e.Query,
              body: e.Body,
              Url: e.Url,
              rawBody: e.RawBody
            }, function (e, n) {
              if (e) return t(e);
              n && n.body && (n.Body = n.body, delete n.body), t(e, n);
            });
          },
          getObjectUrl: function (e, t) {
            var n = this,
              i = void 0 === e.UseAccelerate ? n.options.UseAccelerate : e.UseAccelerate,
              r = c({
                ForcePathStyle: n.options.ForcePathStyle,
                protocol: e.Protocol || n.options.Protocol,
                domain: e.Domain || n.options.Domain,
                bucket: e.Bucket,
                region: i ? "accelerate" : e.Region,
                object: e.Key
              }),
              a = "";
            e.Query && (a += o.obj2str(e.Query)), e.QueryString && (a += (a ? "&" : "") + e.QueryString);
            var s = r;
            if (void 0 !== e.Sign && !e.Sign) return a && (s += "?" + a), t(null, {
              Url: s
            }), s;
            var p = l.call(this, {
              Bucket: e.Bucket,
              Region: e.Region,
              UseAccelerate: e.UseAccelerate,
              Url: r
            }),
              d = u.call(this, {
                Action: "PUT" === (e.Method || "").toUpperCase() ? "name/cos:PutObject" : "name/cos:GetObject",
                Bucket: e.Bucket || "",
                Region: e.Region || "",
                Method: e.Method || "get",
                Key: e.Key,
                Expires: e.Expires,
                Headers: e.Headers,
                Query: e.Query,
                SignHost: p,
                ForceSignHost: !1 !== e.ForceSignHost && n.options.ForceSignHost
              }, function (e, n) {
                if (t) if (e) t(e); else {
                  var i = r;
                  i += "?" + (n.Authorization.indexOf("q-signature") > -1 ? function (e) {
                    var t = e.match(/q-url-param-list.*?(?=&)/g)[0],
                      n = "q-url-param-list=" + encodeURIComponent(t.replace(/q-url-param-list=/, "")).toLowerCase(),
                      i = new RegExp(t, "g");
                    return e.replace(i, n);
                  }(n.Authorization) : "sign=" + encodeURIComponent(n.Authorization)), n.SecurityToken && (i += "&x-cos-security-token=" + n.SecurityToken), n.ClientIP && (i += "&clientIP=" + n.ClientIP), n.ClientUA && (i += "&clientUA=" + n.ClientUA), n.Token && (i += "&token=" + n.Token), a && (i += "&" + a), setTimeout(function () {
                    t(null, {
                      Url: i
                    });
                  });
                }
              });
            return d ? (s += "?" + d.Authorization + (d.SecurityToken ? "&x-cos-security-token=" + d.SecurityToken : ""), a && (s += "&" + a)) : a && (s += "?" + a), s;
          },
          getAuth: function (e) {
            return o.getAuth({
              SecretId: e.SecretId || this.options.SecretId || "",
              SecretKey: e.SecretKey || this.options.SecretKey || "",
              Bucket: e.Bucket,
              Region: e.Region,
              Method: e.Method,
              Key: e.Key,
              Query: e.Query,
              Headers: e.Headers,
              Expires: e.Expires,
              SystemClockOffset: this.options.SystemClockOffset
            });
          }
        };

        e.exports.init = function (e, t) {
          t.transferToTaskMethod(m, "postObject"), t.transferToTaskMethod(m, "putObject"), o.each(m, function (t, n) {
            e.prototype[n] = o.apiWrapper(n, t);
          });
        };
      }, function (e, t) {
        function n(e) {
          return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
        }

        var i = function (e, t) {
          var i,
            o,
            r,
            a = [],
            s = function (e, t) {
              var i = [];

              for (var o in e) e.hasOwnProperty(o) && i.push(t ? n(o).toLowerCase() : o);

              return i.sort(function (e, t) {
                return (e = e.toLowerCase()) === (t = t.toLowerCase()) ? 0 : e > t ? 1 : -1;
              });
            }(e);

          for (i = 0; i < s.length; i++) r = void 0 === e[o = s[i]] || null === e[o] ? "" : "" + e[o], o = t ? n(o).toLowerCase() : n(o), r = n(r) || "", a.push(o + "=" + r);

          return a.join("&");
        };

        e.exports = function (e, t) {
          var n,
            o = e.filePath,
            r = e.headers || {},
            a = e.url || e.Url,
            s = e.method,
            c = e.onProgress,
            l = e.httpDNSServiceId,
            u = function (e, n) {
              var i = n.header,
                o = {};
              if (i) for (var r in i) i.hasOwnProperty(r) && (o[r.toLowerCase()] = i[r]);
              t(e, {
                statusCode: n.statusCode,
                headers: o
              }, n.data);
            };

          if (o) {
            var p,
              d = a.match(/^(https?:\/\/[^/]+\/)([^/]*\/?)(.*)$/);
            e.pathStyle ? (p = decodeURIComponent(d[3] || ""), a = d[1] + d[2]) : (p = decodeURIComponent(d[2] + d[3] || ""), a = d[1]);
            var f = {
              key: p,
              success_action_status: 200,
              Signature: r.Authorization
            },
              m = ["Cache-Control", "Content-Type", "Content-Disposition", "Content-Encoding", "Expires", "x-cos-storage-class", "x-cos-security-token", "x-ci-security-token"];

            for (var h in e.headers) e.headers.hasOwnProperty(h) && (h.indexOf("x-cos-meta-") > -1 || m.indexOf(h) > -1) && (f[h] = e.headers[h]);

            r["x-cos-acl"] && (f.acl = r["x-cos-acl"]), !f["Content-Type"] && (f["Content-Type"] = ""), (n = uni.uploadFile({
              url: a,
              method: s,
              name: "file",
              header: r,
              filePath: o,
              formData: f,
              timeout: e.timeout,
              success: function (e) {
                u(null, e);
              },
              fail: function (e) {
                u(e.errMsg, e);
              }
            })).onProgressUpdate(function (e) {
              c && c({
                loaded: e.totalBytesSent,
                total: e.totalBytesExpectedToSend,
                progress: e.progress / 100
              });
            });
          } else {
            var g = e.qs && i(e.qs) || "";
            g && (a += (a.indexOf("?") > -1 ? "&" : "?") + g), r["Content-Length"] && delete r["Content-Length"];
            var v = {
              url: a,
              method: s,
              header: r,
              dataType: "text",
              data: e.body,
              timeout: e.timeout,
              success: function (e) {
                u(null, e);
              },
              fail: function (e) {
                u(e.errMsg, e);
              }
            };
            l && Object.assign(v, {
              enableHttpDNS: !0,
              httpDNSServiceId: l
            }), n = uni.request(v);
          }

          return n;
        };
      }, function (e, t, n) {
        "use strict";

        let i = n(27);
        e.exports = new i(n(28), n(29));
      }, function (e, t, n) {
        "use strict";

        function i() {
          this._types = Object.create(null), this._extensions = Object.create(null);

          for (let e = 0; e < arguments.length; e++) this.define(arguments[e]);

          this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
        }

        i.prototype.define = function (e, t) {
          for (let n in e) {
            let i = e[n].map(function (e) {
              return e.toLowerCase();
            });
            n = n.toLowerCase();

            for (let e = 0; e < i.length; e++) {
              const o = i[e];

              if ("*" !== o[0]) {
                if (!t && o in this._types) throw new Error('Attempt to change mapping for "' + o + '" extension from "' + this._types[o] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + o + '" from the list of extensions for "' + n + '".');
                this._types[o] = n;
              }
            }

            if (t || !this._extensions[n]) {
              const e = i[0];
              this._extensions[n] = "*" !== e[0] ? e : e.substr(1);
            }
          }
        }, i.prototype.getType = function (e) {
          let t = (e = String(e)).replace(/^.*[/\\]/, "").toLowerCase(),
            n = t.replace(/^.*\./, "").toLowerCase(),
            i = t.length < e.length;
          return (n.length < t.length - 1 || !i) && this._types[n] || null;
        }, i.prototype.getExtension = function (e) {
          return (e = /^\s*([^;\s]*)/.test(e) && RegExp.$1) && this._extensions[e.toLowerCase()] || null;
        }, e.exports = i;
      }, function (e, t) {
        e.exports = {
          "application/andrew-inset": ["ez"],
          "application/applixware": ["aw"],
          "application/atom+xml": ["atom"],
          "application/atomcat+xml": ["atomcat"],
          "application/atomdeleted+xml": ["atomdeleted"],
          "application/atomsvc+xml": ["atomsvc"],
          "application/atsc-dwd+xml": ["dwd"],
          "application/atsc-held+xml": ["held"],
          "application/atsc-rsat+xml": ["rsat"],
          "application/bdoc": ["bdoc"],
          "application/calendar+xml": ["xcs"],
          "application/ccxml+xml": ["ccxml"],
          "application/cdfx+xml": ["cdfx"],
          "application/cdmi-capability": ["cdmia"],
          "application/cdmi-container": ["cdmic"],
          "application/cdmi-domain": ["cdmid"],
          "application/cdmi-object": ["cdmio"],
          "application/cdmi-queue": ["cdmiq"],
          "application/cu-seeme": ["cu"],
          "application/dash+xml": ["mpd"],
          "application/davmount+xml": ["davmount"],
          "application/docbook+xml": ["dbk"],
          "application/dssc+der": ["dssc"],
          "application/dssc+xml": ["xdssc"],
          "application/ecmascript": ["es", "ecma"],
          "application/emma+xml": ["emma"],
          "application/emotionml+xml": ["emotionml"],
          "application/epub+zip": ["epub"],
          "application/exi": ["exi"],
          "application/express": ["exp"],
          "application/fdt+xml": ["fdt"],
          "application/font-tdpfr": ["pfr"],
          "application/geo+json": ["geojson"],
          "application/gml+xml": ["gml"],
          "application/gpx+xml": ["gpx"],
          "application/gxf": ["gxf"],
          "application/gzip": ["gz"],
          "application/hjson": ["hjson"],
          "application/hyperstudio": ["stk"],
          "application/inkml+xml": ["ink", "inkml"],
          "application/ipfix": ["ipfix"],
          "application/its+xml": ["its"],
          "application/java-archive": ["jar", "war", "ear"],
          "application/java-serialized-object": ["ser"],
          "application/java-vm": ["class"],
          "application/javascript": ["js", "mjs"],
          "application/json": ["json", "map"],
          "application/json5": ["json5"],
          "application/jsonml+json": ["jsonml"],
          "application/ld+json": ["jsonld"],
          "application/lgr+xml": ["lgr"],
          "application/lost+xml": ["lostxml"],
          "application/mac-binhex40": ["hqx"],
          "application/mac-compactpro": ["cpt"],
          "application/mads+xml": ["mads"],
          "application/manifest+json": ["webmanifest"],
          "application/marc": ["mrc"],
          "application/marcxml+xml": ["mrcx"],
          "application/mathematica": ["ma", "nb", "mb"],
          "application/mathml+xml": ["mathml"],
          "application/mbox": ["mbox"],
          "application/mediaservercontrol+xml": ["mscml"],
          "application/metalink+xml": ["metalink"],
          "application/metalink4+xml": ["meta4"],
          "application/mets+xml": ["mets"],
          "application/mmt-aei+xml": ["maei"],
          "application/mmt-usd+xml": ["musd"],
          "application/mods+xml": ["mods"],
          "application/mp21": ["m21", "mp21"],
          "application/mp4": ["mp4s", "m4p"],
          "application/msword": ["doc", "dot"],
          "application/mxf": ["mxf"],
          "application/n-quads": ["nq"],
          "application/n-triples": ["nt"],
          "application/node": ["cjs"],
          "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"],
          "application/oda": ["oda"],
          "application/oebps-package+xml": ["opf"],
          "application/ogg": ["ogx"],
          "application/omdoc+xml": ["omdoc"],
          "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"],
          "application/oxps": ["oxps"],
          "application/p2p-overlay+xml": ["relo"],
          "application/patch-ops-error+xml": ["xer"],
          "application/pdf": ["pdf"],
          "application/pgp-encrypted": ["pgp"],
          "application/pgp-signature": ["asc", "sig"],
          "application/pics-rules": ["prf"],
          "application/pkcs10": ["p10"],
          "application/pkcs7-mime": ["p7m", "p7c"],
          "application/pkcs7-signature": ["p7s"],
          "application/pkcs8": ["p8"],
          "application/pkix-attr-cert": ["ac"],
          "application/pkix-cert": ["cer"],
          "application/pkix-crl": ["crl"],
          "application/pkix-pkipath": ["pkipath"],
          "application/pkixcmp": ["pki"],
          "application/pls+xml": ["pls"],
          "application/postscript": ["ai", "eps", "ps"],
          "application/provenance+xml": ["provx"],
          "application/pskc+xml": ["pskcxml"],
          "application/raml+yaml": ["raml"],
          "application/rdf+xml": ["rdf", "owl"],
          "application/reginfo+xml": ["rif"],
          "application/relax-ng-compact-syntax": ["rnc"],
          "application/resource-lists+xml": ["rl"],
          "application/resource-lists-diff+xml": ["rld"],
          "application/rls-services+xml": ["rs"],
          "application/route-apd+xml": ["rapd"],
          "application/route-s-tsid+xml": ["sls"],
          "application/route-usd+xml": ["rusd"],
          "application/rpki-ghostbusters": ["gbr"],
          "application/rpki-manifest": ["mft"],
          "application/rpki-roa": ["roa"],
          "application/rsd+xml": ["rsd"],
          "application/rss+xml": ["rss"],
          "application/rtf": ["rtf"],
          "application/sbml+xml": ["sbml"],
          "application/scvp-cv-request": ["scq"],
          "application/scvp-cv-response": ["scs"],
          "application/scvp-vp-request": ["spq"],
          "application/scvp-vp-response": ["spp"],
          "application/sdp": ["sdp"],
          "application/senml+xml": ["senmlx"],
          "application/sensml+xml": ["sensmlx"],
          "application/set-payment-initiation": ["setpay"],
          "application/set-registration-initiation": ["setreg"],
          "application/shf+xml": ["shf"],
          "application/sieve": ["siv", "sieve"],
          "application/smil+xml": ["smi", "smil"],
          "application/sparql-query": ["rq"],
          "application/sparql-results+xml": ["srx"],
          "application/srgs": ["gram"],
          "application/srgs+xml": ["grxml"],
          "application/sru+xml": ["sru"],
          "application/ssdl+xml": ["ssdl"],
          "application/ssml+xml": ["ssml"],
          "application/swid+xml": ["swidtag"],
          "application/tei+xml": ["tei", "teicorpus"],
          "application/thraud+xml": ["tfi"],
          "application/timestamped-data": ["tsd"],
          "application/toml": ["toml"],
          "application/trig": ["trig"],
          "application/ttml+xml": ["ttml"],
          "application/ubjson": ["ubj"],
          "application/urc-ressheet+xml": ["rsheet"],
          "application/urc-targetdesc+xml": ["td"],
          "application/voicexml+xml": ["vxml"],
          "application/wasm": ["wasm"],
          "application/widget": ["wgt"],
          "application/winhlp": ["hlp"],
          "application/wsdl+xml": ["wsdl"],
          "application/wspolicy+xml": ["wspolicy"],
          "application/xaml+xml": ["xaml"],
          "application/xcap-att+xml": ["xav"],
          "application/xcap-caps+xml": ["xca"],
          "application/xcap-diff+xml": ["xdf"],
          "application/xcap-el+xml": ["xel"],
          "application/xcap-ns+xml": ["xns"],
          "application/xenc+xml": ["xenc"],
          "application/xhtml+xml": ["xhtml", "xht"],
          "application/xliff+xml": ["xlf"],
          "application/xml": ["xml", "xsl", "xsd", "rng"],
          "application/xml-dtd": ["dtd"],
          "application/xop+xml": ["xop"],
          "application/xproc+xml": ["xpl"],
          "application/xslt+xml": ["*xsl", "xslt"],
          "application/xspf+xml": ["xspf"],
          "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
          "application/yang": ["yang"],
          "application/yin+xml": ["yin"],
          "application/zip": ["zip"],
          "audio/3gpp": ["*3gpp"],
          "audio/adpcm": ["adp"],
          "audio/amr": ["amr"],
          "audio/basic": ["au", "snd"],
          "audio/midi": ["mid", "midi", "kar", "rmi"],
          "audio/mobile-xmf": ["mxmf"],
          "audio/mp3": ["*mp3"],
          "audio/mp4": ["m4a", "mp4a"],
          "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
          "audio/ogg": ["oga", "ogg", "spx", "opus"],
          "audio/s3m": ["s3m"],
          "audio/silk": ["sil"],
          "audio/wav": ["wav"],
          "audio/wave": ["*wav"],
          "audio/webm": ["weba"],
          "audio/xm": ["xm"],
          "font/collection": ["ttc"],
          "font/otf": ["otf"],
          "font/ttf": ["ttf"],
          "font/woff": ["woff"],
          "font/woff2": ["woff2"],
          "image/aces": ["exr"],
          "image/apng": ["apng"],
          "image/avif": ["avif"],
          "image/bmp": ["bmp"],
          "image/cgm": ["cgm"],
          "image/dicom-rle": ["drle"],
          "image/emf": ["emf"],
          "image/fits": ["fits"],
          "image/g3fax": ["g3"],
          "image/gif": ["gif"],
          "image/heic": ["heic"],
          "image/heic-sequence": ["heics"],
          "image/heif": ["heif"],
          "image/heif-sequence": ["heifs"],
          "image/hej2k": ["hej2"],
          "image/hsj2": ["hsj2"],
          "image/ief": ["ief"],
          "image/jls": ["jls"],
          "image/jp2": ["jp2", "jpg2"],
          "image/jpeg": ["jpeg", "jpg", "jpe"],
          "image/jph": ["jph"],
          "image/jphc": ["jhc"],
          "image/jpm": ["jpm"],
          "image/jpx": ["jpx", "jpf"],
          "image/jxr": ["jxr"],
          "image/jxra": ["jxra"],
          "image/jxrs": ["jxrs"],
          "image/jxs": ["jxs"],
          "image/jxsc": ["jxsc"],
          "image/jxsi": ["jxsi"],
          "image/jxss": ["jxss"],
          "image/ktx": ["ktx"],
          "image/ktx2": ["ktx2"],
          "image/png": ["png"],
          "image/sgi": ["sgi"],
          "image/svg+xml": ["svg", "svgz"],
          "image/t38": ["t38"],
          "image/tiff": ["tif", "tiff"],
          "image/tiff-fx": ["tfx"],
          "image/webp": ["webp"],
          "image/wmf": ["wmf"],
          "message/disposition-notification": ["disposition-notification"],
          "message/global": ["u8msg"],
          "message/global-delivery-status": ["u8dsn"],
          "message/global-disposition-notification": ["u8mdn"],
          "message/global-headers": ["u8hdr"],
          "message/rfc822": ["eml", "mime"],
          "model/3mf": ["3mf"],
          "model/gltf+json": ["gltf"],
          "model/gltf-binary": ["glb"],
          "model/iges": ["igs", "iges"],
          "model/mesh": ["msh", "mesh", "silo"],
          "model/mtl": ["mtl"],
          "model/obj": ["obj"],
          "model/step+xml": ["stpx"],
          "model/step+zip": ["stpz"],
          "model/step-xml+zip": ["stpxz"],
          "model/stl": ["stl"],
          "model/vrml": ["wrl", "vrml"],
          "model/x3d+binary": ["*x3db", "x3dbz"],
          "model/x3d+fastinfoset": ["x3db"],
          "model/x3d+vrml": ["*x3dv", "x3dvz"],
          "model/x3d+xml": ["x3d", "x3dz"],
          "model/x3d-vrml": ["x3dv"],
          "text/cache-manifest": ["appcache", "manifest"],
          "text/calendar": ["ics", "ifb"],
          "text/coffeescript": ["coffee", "litcoffee"],
          "text/css": ["css"],
          "text/csv": ["csv"],
          "text/html": ["html", "htm", "shtml"],
          "text/jade": ["jade"],
          "text/jsx": ["jsx"],
          "text/less": ["less"],
          "text/markdown": ["markdown", "md"],
          "text/mathml": ["mml"],
          "text/mdx": ["mdx"],
          "text/n3": ["n3"],
          "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
          "text/richtext": ["rtx"],
          "text/rtf": ["*rtf"],
          "text/sgml": ["sgml", "sgm"],
          "text/shex": ["shex"],
          "text/slim": ["slim", "slm"],
          "text/spdx": ["spdx"],
          "text/stylus": ["stylus", "styl"],
          "text/tab-separated-values": ["tsv"],
          "text/troff": ["t", "tr", "roff", "man", "me", "ms"],
          "text/turtle": ["ttl"],
          "text/uri-list": ["uri", "uris", "urls"],
          "text/vcard": ["vcard"],
          "text/vtt": ["vtt"],
          "text/xml": ["*xml"],
          "text/yaml": ["yaml", "yml"],
          "video/3gpp": ["3gp", "3gpp"],
          "video/3gpp2": ["3g2"],
          "video/h261": ["h261"],
          "video/h263": ["h263"],
          "video/h264": ["h264"],
          "video/iso.segment": ["m4s"],
          "video/jpeg": ["jpgv"],
          "video/jpm": ["*jpm", "jpgm"],
          "video/mj2": ["mj2", "mjp2"],
          "video/mp2t": ["ts"],
          "video/mp4": ["mp4", "mp4v", "mpg4"],
          "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
          "video/ogg": ["ogv"],
          "video/quicktime": ["qt", "mov"],
          "video/webm": ["webm"]
        };
      }, function (e, t) {
        e.exports = {
          "application/prs.cww": ["cww"],
          "application/vnd.1000minds.decision-model+xml": ["1km"],
          "application/vnd.3gpp.pic-bw-large": ["plb"],
          "application/vnd.3gpp.pic-bw-small": ["psb"],
          "application/vnd.3gpp.pic-bw-var": ["pvb"],
          "application/vnd.3gpp2.tcap": ["tcap"],
          "application/vnd.3m.post-it-notes": ["pwn"],
          "application/vnd.accpac.simply.aso": ["aso"],
          "application/vnd.accpac.simply.imp": ["imp"],
          "application/vnd.acucobol": ["acu"],
          "application/vnd.acucorp": ["atc", "acutc"],
          "application/vnd.adobe.air-application-installer-package+zip": ["air"],
          "application/vnd.adobe.formscentral.fcdt": ["fcdt"],
          "application/vnd.adobe.fxp": ["fxp", "fxpl"],
          "application/vnd.adobe.xdp+xml": ["xdp"],
          "application/vnd.adobe.xfdf": ["xfdf"],
          "application/vnd.ahead.space": ["ahead"],
          "application/vnd.airzip.filesecure.azf": ["azf"],
          "application/vnd.airzip.filesecure.azs": ["azs"],
          "application/vnd.amazon.ebook": ["azw"],
          "application/vnd.americandynamics.acc": ["acc"],
          "application/vnd.amiga.ami": ["ami"],
          "application/vnd.android.package-archive": ["apk"],
          "application/vnd.anser-web-certificate-issue-initiation": ["cii"],
          "application/vnd.anser-web-funds-transfer-initiation": ["fti"],
          "application/vnd.antix.game-component": ["atx"],
          "application/vnd.apple.installer+xml": ["mpkg"],
          "application/vnd.apple.keynote": ["key"],
          "application/vnd.apple.mpegurl": ["m3u8"],
          "application/vnd.apple.numbers": ["numbers"],
          "application/vnd.apple.pages": ["pages"],
          "application/vnd.apple.pkpass": ["pkpass"],
          "application/vnd.aristanetworks.swi": ["swi"],
          "application/vnd.astraea-software.iota": ["iota"],
          "application/vnd.audiograph": ["aep"],
          "application/vnd.balsamiq.bmml+xml": ["bmml"],
          "application/vnd.blueice.multipass": ["mpm"],
          "application/vnd.bmi": ["bmi"],
          "application/vnd.businessobjects": ["rep"],
          "application/vnd.chemdraw+xml": ["cdxml"],
          "application/vnd.chipnuts.karaoke-mmd": ["mmd"],
          "application/vnd.cinderella": ["cdy"],
          "application/vnd.citationstyles.style+xml": ["csl"],
          "application/vnd.claymore": ["cla"],
          "application/vnd.cloanto.rp9": ["rp9"],
          "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
          "application/vnd.cluetrust.cartomobile-config": ["c11amc"],
          "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"],
          "application/vnd.commonspace": ["csp"],
          "application/vnd.contact.cmsg": ["cdbcmsg"],
          "application/vnd.cosmocaller": ["cmc"],
          "application/vnd.crick.clicker": ["clkx"],
          "application/vnd.crick.clicker.keyboard": ["clkk"],
          "application/vnd.crick.clicker.palette": ["clkp"],
          "application/vnd.crick.clicker.template": ["clkt"],
          "application/vnd.crick.clicker.wordbank": ["clkw"],
          "application/vnd.criticaltools.wbs+xml": ["wbs"],
          "application/vnd.ctc-posml": ["pml"],
          "application/vnd.cups-ppd": ["ppd"],
          "application/vnd.curl.car": ["car"],
          "application/vnd.curl.pcurl": ["pcurl"],
          "application/vnd.dart": ["dart"],
          "application/vnd.data-vision.rdz": ["rdz"],
          "application/vnd.dbf": ["dbf"],
          "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
          "application/vnd.dece.ttml+xml": ["uvt", "uvvt"],
          "application/vnd.dece.unspecified": ["uvx", "uvvx"],
          "application/vnd.dece.zip": ["uvz", "uvvz"],
          "application/vnd.denovo.fcselayout-link": ["fe_launch"],
          "application/vnd.dna": ["dna"],
          "application/vnd.dolby.mlp": ["mlp"],
          "application/vnd.dpgraph": ["dpg"],
          "application/vnd.dreamfactory": ["dfac"],
          "application/vnd.ds-keypoint": ["kpxx"],
          "application/vnd.dvb.ait": ["ait"],
          "application/vnd.dvb.service": ["svc"],
          "application/vnd.dynageo": ["geo"],
          "application/vnd.ecowin.chart": ["mag"],
          "application/vnd.enliven": ["nml"],
          "application/vnd.epson.esf": ["esf"],
          "application/vnd.epson.msf": ["msf"],
          "application/vnd.epson.quickanime": ["qam"],
          "application/vnd.epson.salt": ["slt"],
          "application/vnd.epson.ssf": ["ssf"],
          "application/vnd.eszigno3+xml": ["es3", "et3"],
          "application/vnd.ezpix-album": ["ez2"],
          "application/vnd.ezpix-package": ["ez3"],
          "application/vnd.fdf": ["fdf"],
          "application/vnd.fdsn.mseed": ["mseed"],
          "application/vnd.fdsn.seed": ["seed", "dataless"],
          "application/vnd.flographit": ["gph"],
          "application/vnd.fluxtime.clip": ["ftc"],
          "application/vnd.framemaker": ["fm", "frame", "maker", "book"],
          "application/vnd.frogans.fnc": ["fnc"],
          "application/vnd.frogans.ltf": ["ltf"],
          "application/vnd.fsc.weblaunch": ["fsc"],
          "application/vnd.fujitsu.oasys": ["oas"],
          "application/vnd.fujitsu.oasys2": ["oa2"],
          "application/vnd.fujitsu.oasys3": ["oa3"],
          "application/vnd.fujitsu.oasysgp": ["fg5"],
          "application/vnd.fujitsu.oasysprs": ["bh2"],
          "application/vnd.fujixerox.ddd": ["ddd"],
          "application/vnd.fujixerox.docuworks": ["xdw"],
          "application/vnd.fujixerox.docuworks.binder": ["xbd"],
          "application/vnd.fuzzysheet": ["fzs"],
          "application/vnd.genomatix.tuxedo": ["txd"],
          "application/vnd.geogebra.file": ["ggb"],
          "application/vnd.geogebra.tool": ["ggt"],
          "application/vnd.geometry-explorer": ["gex", "gre"],
          "application/vnd.geonext": ["gxt"],
          "application/vnd.geoplan": ["g2w"],
          "application/vnd.geospace": ["g3w"],
          "application/vnd.gmx": ["gmx"],
          "application/vnd.google-apps.document": ["gdoc"],
          "application/vnd.google-apps.presentation": ["gslides"],
          "application/vnd.google-apps.spreadsheet": ["gsheet"],
          "application/vnd.google-earth.kml+xml": ["kml"],
          "application/vnd.google-earth.kmz": ["kmz"],
          "application/vnd.grafeq": ["gqf", "gqs"],
          "application/vnd.groove-account": ["gac"],
          "application/vnd.groove-help": ["ghf"],
          "application/vnd.groove-identity-message": ["gim"],
          "application/vnd.groove-injector": ["grv"],
          "application/vnd.groove-tool-message": ["gtm"],
          "application/vnd.groove-tool-template": ["tpl"],
          "application/vnd.groove-vcard": ["vcg"],
          "application/vnd.hal+xml": ["hal"],
          "application/vnd.handheld-entertainment+xml": ["zmm"],
          "application/vnd.hbci": ["hbci"],
          "application/vnd.hhe.lesson-player": ["les"],
          "application/vnd.hp-hpgl": ["hpgl"],
          "application/vnd.hp-hpid": ["hpid"],
          "application/vnd.hp-hps": ["hps"],
          "application/vnd.hp-jlyt": ["jlt"],
          "application/vnd.hp-pcl": ["pcl"],
          "application/vnd.hp-pclxl": ["pclxl"],
          "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"],
          "application/vnd.ibm.minipay": ["mpy"],
          "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"],
          "application/vnd.ibm.rights-management": ["irm"],
          "application/vnd.ibm.secure-container": ["sc"],
          "application/vnd.iccprofile": ["icc", "icm"],
          "application/vnd.igloader": ["igl"],
          "application/vnd.immervision-ivp": ["ivp"],
          "application/vnd.immervision-ivu": ["ivu"],
          "application/vnd.insors.igm": ["igm"],
          "application/vnd.intercon.formnet": ["xpw", "xpx"],
          "application/vnd.intergeo": ["i2g"],
          "application/vnd.intu.qbo": ["qbo"],
          "application/vnd.intu.qfx": ["qfx"],
          "application/vnd.ipunplugged.rcprofile": ["rcprofile"],
          "application/vnd.irepository.package+xml": ["irp"],
          "application/vnd.is-xpr": ["xpr"],
          "application/vnd.isac.fcs": ["fcs"],
          "application/vnd.jam": ["jam"],
          "application/vnd.jcp.javame.midlet-rms": ["rms"],
          "application/vnd.jisp": ["jisp"],
          "application/vnd.joost.joda-archive": ["joda"],
          "application/vnd.kahootz": ["ktz", "ktr"],
          "application/vnd.kde.karbon": ["karbon"],
          "application/vnd.kde.kchart": ["chrt"],
          "application/vnd.kde.kformula": ["kfo"],
          "application/vnd.kde.kivio": ["flw"],
          "application/vnd.kde.kontour": ["kon"],
          "application/vnd.kde.kpresenter": ["kpr", "kpt"],
          "application/vnd.kde.kspread": ["ksp"],
          "application/vnd.kde.kword": ["kwd", "kwt"],
          "application/vnd.kenameaapp": ["htke"],
          "application/vnd.kidspiration": ["kia"],
          "application/vnd.kinar": ["kne", "knp"],
          "application/vnd.koan": ["skp", "skd", "skt", "skm"],
          "application/vnd.kodak-descriptor": ["sse"],
          "application/vnd.las.las+xml": ["lasxml"],
          "application/vnd.llamagraphics.life-balance.desktop": ["lbd"],
          "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"],
          "application/vnd.lotus-1-2-3": ["123"],
          "application/vnd.lotus-approach": ["apr"],
          "application/vnd.lotus-freelance": ["pre"],
          "application/vnd.lotus-notes": ["nsf"],
          "application/vnd.lotus-organizer": ["org"],
          "application/vnd.lotus-screencam": ["scm"],
          "application/vnd.lotus-wordpro": ["lwp"],
          "application/vnd.macports.portpkg": ["portpkg"],
          "application/vnd.mapbox-vector-tile": ["mvt"],
          "application/vnd.mcd": ["mcd"],
          "application/vnd.medcalcdata": ["mc1"],
          "application/vnd.mediastation.cdkey": ["cdkey"],
          "application/vnd.mfer": ["mwf"],
          "application/vnd.mfmp": ["mfm"],
          "application/vnd.micrografx.flo": ["flo"],
          "application/vnd.micrografx.igx": ["igx"],
          "application/vnd.mif": ["mif"],
          "application/vnd.mobius.daf": ["daf"],
          "application/vnd.mobius.dis": ["dis"],
          "application/vnd.mobius.mbk": ["mbk"],
          "application/vnd.mobius.mqy": ["mqy"],
          "application/vnd.mobius.msl": ["msl"],
          "application/vnd.mobius.plc": ["plc"],
          "application/vnd.mobius.txf": ["txf"],
          "application/vnd.mophun.application": ["mpn"],
          "application/vnd.mophun.certificate": ["mpc"],
          "application/vnd.mozilla.xul+xml": ["xul"],
          "application/vnd.ms-artgalry": ["cil"],
          "application/vnd.ms-cab-compressed": ["cab"],
          "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
          "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"],
          "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"],
          "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"],
          "application/vnd.ms-excel.template.macroenabled.12": ["xltm"],
          "application/vnd.ms-fontobject": ["eot"],
          "application/vnd.ms-htmlhelp": ["chm"],
          "application/vnd.ms-ims": ["ims"],
          "application/vnd.ms-lrm": ["lrm"],
          "application/vnd.ms-officetheme": ["thmx"],
          "application/vnd.ms-outlook": ["msg"],
          "application/vnd.ms-pki.seccat": ["cat"],
          "application/vnd.ms-pki.stl": ["*stl"],
          "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"],
          "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"],
          "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"],
          "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"],
          "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"],
          "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"],
          "application/vnd.ms-project": ["mpp", "mpt"],
          "application/vnd.ms-word.document.macroenabled.12": ["docm"],
          "application/vnd.ms-word.template.macroenabled.12": ["dotm"],
          "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
          "application/vnd.ms-wpl": ["wpl"],
          "application/vnd.ms-xpsdocument": ["xps"],
          "application/vnd.mseq": ["mseq"],
          "application/vnd.musician": ["mus"],
          "application/vnd.muvee.style": ["msty"],
          "application/vnd.mynfc": ["taglet"],
          "application/vnd.neurolanguage.nlu": ["nlu"],
          "application/vnd.nitf": ["ntf", "nitf"],
          "application/vnd.noblenet-directory": ["nnd"],
          "application/vnd.noblenet-sealer": ["nns"],
          "application/vnd.noblenet-web": ["nnw"],
          "application/vnd.nokia.n-gage.ac+xml": ["*ac"],
          "application/vnd.nokia.n-gage.data": ["ngdat"],
          "application/vnd.nokia.n-gage.symbian.install": ["n-gage"],
          "application/vnd.nokia.radio-preset": ["rpst"],
          "application/vnd.nokia.radio-presets": ["rpss"],
          "application/vnd.novadigm.edm": ["edm"],
          "application/vnd.novadigm.edx": ["edx"],
          "application/vnd.novadigm.ext": ["ext"],
          "application/vnd.oasis.opendocument.chart": ["odc"],
          "application/vnd.oasis.opendocument.chart-template": ["otc"],
          "application/vnd.oasis.opendocument.database": ["odb"],
          "application/vnd.oasis.opendocument.formula": ["odf"],
          "application/vnd.oasis.opendocument.formula-template": ["odft"],
          "application/vnd.oasis.opendocument.graphics": ["odg"],
          "application/vnd.oasis.opendocument.graphics-template": ["otg"],
          "application/vnd.oasis.opendocument.image": ["odi"],
          "application/vnd.oasis.opendocument.image-template": ["oti"],
          "application/vnd.oasis.opendocument.presentation": ["odp"],
          "application/vnd.oasis.opendocument.presentation-template": ["otp"],
          "application/vnd.oasis.opendocument.spreadsheet": ["ods"],
          "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"],
          "application/vnd.oasis.opendocument.text": ["odt"],
          "application/vnd.oasis.opendocument.text-master": ["odm"],
          "application/vnd.oasis.opendocument.text-template": ["ott"],
          "application/vnd.oasis.opendocument.text-web": ["oth"],
          "application/vnd.olpc-sugar": ["xo"],
          "application/vnd.oma.dd2+xml": ["dd2"],
          "application/vnd.openblox.game+xml": ["obgx"],
          "application/vnd.openofficeorg.extension": ["oxt"],
          "application/vnd.openstreetmap.data+xml": ["osm"],
          "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"],
          "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"],
          "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"],
          "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"],
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"],
          "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"],
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"],
          "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"],
          "application/vnd.osgeo.mapguide.package": ["mgp"],
          "application/vnd.osgi.dp": ["dp"],
          "application/vnd.osgi.subsystem": ["esa"],
          "application/vnd.palm": ["pdb", "pqa", "oprc"],
          "application/vnd.pawaafile": ["paw"],
          "application/vnd.pg.format": ["str"],
          "application/vnd.pg.osasli": ["ei6"],
          "application/vnd.picsel": ["efif"],
          "application/vnd.pmi.widget": ["wg"],
          "application/vnd.pocketlearn": ["plf"],
          "application/vnd.powerbuilder6": ["pbd"],
          "application/vnd.previewsystems.box": ["box"],
          "application/vnd.proteus.magazine": ["mgz"],
          "application/vnd.publishare-delta-tree": ["qps"],
          "application/vnd.pvi.ptid1": ["ptid"],
          "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
          "application/vnd.rar": ["rar"],
          "application/vnd.realvnc.bed": ["bed"],
          "application/vnd.recordare.musicxml": ["mxl"],
          "application/vnd.recordare.musicxml+xml": ["musicxml"],
          "application/vnd.rig.cryptonote": ["cryptonote"],
          "application/vnd.rim.cod": ["cod"],
          "application/vnd.rn-realmedia": ["rm"],
          "application/vnd.rn-realmedia-vbr": ["rmvb"],
          "application/vnd.route66.link66+xml": ["link66"],
          "application/vnd.sailingtracker.track": ["st"],
          "application/vnd.seemail": ["see"],
          "application/vnd.sema": ["sema"],
          "application/vnd.semd": ["semd"],
          "application/vnd.semf": ["semf"],
          "application/vnd.shana.informed.formdata": ["ifm"],
          "application/vnd.shana.informed.formtemplate": ["itp"],
          "application/vnd.shana.informed.interchange": ["iif"],
          "application/vnd.shana.informed.package": ["ipk"],
          "application/vnd.simtech-mindmapper": ["twd", "twds"],
          "application/vnd.smaf": ["mmf"],
          "application/vnd.smart.teacher": ["teacher"],
          "application/vnd.software602.filler.form+xml": ["fo"],
          "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
          "application/vnd.spotfire.dxp": ["dxp"],
          "application/vnd.spotfire.sfs": ["sfs"],
          "application/vnd.stardivision.calc": ["sdc"],
          "application/vnd.stardivision.draw": ["sda"],
          "application/vnd.stardivision.impress": ["sdd"],
          "application/vnd.stardivision.math": ["smf"],
          "application/vnd.stardivision.writer": ["sdw", "vor"],
          "application/vnd.stardivision.writer-global": ["sgl"],
          "application/vnd.stepmania.package": ["smzip"],
          "application/vnd.stepmania.stepchart": ["sm"],
          "application/vnd.sun.wadl+xml": ["wadl"],
          "application/vnd.sun.xml.calc": ["sxc"],
          "application/vnd.sun.xml.calc.template": ["stc"],
          "application/vnd.sun.xml.draw": ["sxd"],
          "application/vnd.sun.xml.draw.template": ["std"],
          "application/vnd.sun.xml.impress": ["sxi"],
          "application/vnd.sun.xml.impress.template": ["sti"],
          "application/vnd.sun.xml.math": ["sxm"],
          "application/vnd.sun.xml.writer": ["sxw"],
          "application/vnd.sun.xml.writer.global": ["sxg"],
          "application/vnd.sun.xml.writer.template": ["stw"],
          "application/vnd.sus-calendar": ["sus", "susp"],
          "application/vnd.svd": ["svd"],
          "application/vnd.symbian.install": ["sis", "sisx"],
          "application/vnd.syncml+xml": ["xsm"],
          "application/vnd.syncml.dm+wbxml": ["bdm"],
          "application/vnd.syncml.dm+xml": ["xdm"],
          "application/vnd.syncml.dmddf+xml": ["ddf"],
          "application/vnd.tao.intent-module-archive": ["tao"],
          "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
          "application/vnd.tmobile-livetv": ["tmo"],
          "application/vnd.trid.tpt": ["tpt"],
          "application/vnd.triscape.mxs": ["mxs"],
          "application/vnd.trueapp": ["tra"],
          "application/vnd.ufdl": ["ufd", "ufdl"],
          "application/vnd.uiq.theme": ["utz"],
          "application/vnd.umajin": ["umj"],
          "application/vnd.unity": ["unityweb"],
          "application/vnd.uoml+xml": ["uoml"],
          "application/vnd.vcx": ["vcx"],
          "application/vnd.visio": ["vsd", "vst", "vss", "vsw"],
          "application/vnd.visionary": ["vis"],
          "application/vnd.vsf": ["vsf"],
          "application/vnd.wap.wbxml": ["wbxml"],
          "application/vnd.wap.wmlc": ["wmlc"],
          "application/vnd.wap.wmlscriptc": ["wmlsc"],
          "application/vnd.webturbo": ["wtb"],
          "application/vnd.wolfram.player": ["nbp"],
          "application/vnd.wordperfect": ["wpd"],
          "application/vnd.wqd": ["wqd"],
          "application/vnd.wt.stf": ["stf"],
          "application/vnd.xara": ["xar"],
          "application/vnd.xfdl": ["xfdl"],
          "application/vnd.yamaha.hv-dic": ["hvd"],
          "application/vnd.yamaha.hv-script": ["hvs"],
          "application/vnd.yamaha.hv-voice": ["hvp"],
          "application/vnd.yamaha.openscoreformat": ["osf"],
          "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"],
          "application/vnd.yamaha.smaf-audio": ["saf"],
          "application/vnd.yamaha.smaf-phrase": ["spf"],
          "application/vnd.yellowriver-custom-menu": ["cmp"],
          "application/vnd.zul": ["zir", "zirz"],
          "application/vnd.zzazz.deck+xml": ["zaz"],
          "application/x-7z-compressed": ["7z"],
          "application/x-abiword": ["abw"],
          "application/x-ace-compressed": ["ace"],
          "application/x-apple-diskimage": ["*dmg"],
          "application/x-arj": ["arj"],
          "application/x-authorware-bin": ["aab", "x32", "u32", "vox"],
          "application/x-authorware-map": ["aam"],
          "application/x-authorware-seg": ["aas"],
          "application/x-bcpio": ["bcpio"],
          "application/x-bdoc": ["*bdoc"],
          "application/x-bittorrent": ["torrent"],
          "application/x-blorb": ["blb", "blorb"],
          "application/x-bzip": ["bz"],
          "application/x-bzip2": ["bz2", "boz"],
          "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"],
          "application/x-cdlink": ["vcd"],
          "application/x-cfs-compressed": ["cfs"],
          "application/x-chat": ["chat"],
          "application/x-chess-pgn": ["pgn"],
          "application/x-chrome-extension": ["crx"],
          "application/x-cocoa": ["cco"],
          "application/x-conference": ["nsc"],
          "application/x-cpio": ["cpio"],
          "application/x-csh": ["csh"],
          "application/x-debian-package": ["*deb", "udeb"],
          "application/x-dgc-compressed": ["dgc"],
          "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"],
          "application/x-doom": ["wad"],
          "application/x-dtbncx+xml": ["ncx"],
          "application/x-dtbook+xml": ["dtb"],
          "application/x-dtbresource+xml": ["res"],
          "application/x-dvi": ["dvi"],
          "application/x-envoy": ["evy"],
          "application/x-eva": ["eva"],
          "application/x-font-bdf": ["bdf"],
          "application/x-font-ghostscript": ["gsf"],
          "application/x-font-linux-psf": ["psf"],
          "application/x-font-pcf": ["pcf"],
          "application/x-font-snf": ["snf"],
          "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"],
          "application/x-freearc": ["arc"],
          "application/x-futuresplash": ["spl"],
          "application/x-gca-compressed": ["gca"],
          "application/x-glulx": ["ulx"],
          "application/x-gnumeric": ["gnumeric"],
          "application/x-gramps-xml": ["gramps"],
          "application/x-gtar": ["gtar"],
          "application/x-hdf": ["hdf"],
          "application/x-httpd-php": ["php"],
          "application/x-install-instructions": ["install"],
          "application/x-iso9660-image": ["*iso"],
          "application/x-iwork-keynote-sffkey": ["*key"],
          "application/x-iwork-numbers-sffnumbers": ["*numbers"],
          "application/x-iwork-pages-sffpages": ["*pages"],
          "application/x-java-archive-diff": ["jardiff"],
          "application/x-java-jnlp-file": ["jnlp"],
          "application/x-keepass2": ["kdbx"],
          "application/x-latex": ["latex"],
          "application/x-lua-bytecode": ["luac"],
          "application/x-lzh-compressed": ["lzh", "lha"],
          "application/x-makeself": ["run"],
          "application/x-mie": ["mie"],
          "application/x-mobipocket-ebook": ["prc", "mobi"],
          "application/x-ms-application": ["application"],
          "application/x-ms-shortcut": ["lnk"],
          "application/x-ms-wmd": ["wmd"],
          "application/x-ms-wmz": ["wmz"],
          "application/x-ms-xbap": ["xbap"],
          "application/x-msaccess": ["mdb"],
          "application/x-msbinder": ["obd"],
          "application/x-mscardfile": ["crd"],
          "application/x-msclip": ["clp"],
          "application/x-msdos-program": ["*exe"],
          "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"],
          "application/x-msmediaview": ["mvb", "m13", "m14"],
          "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"],
          "application/x-msmoney": ["mny"],
          "application/x-mspublisher": ["pub"],
          "application/x-msschedule": ["scd"],
          "application/x-msterminal": ["trm"],
          "application/x-mswrite": ["wri"],
          "application/x-netcdf": ["nc", "cdf"],
          "application/x-ns-proxy-autoconfig": ["pac"],
          "application/x-nzb": ["nzb"],
          "application/x-perl": ["pl", "pm"],
          "application/x-pilot": ["*prc", "*pdb"],
          "application/x-pkcs12": ["p12", "pfx"],
          "application/x-pkcs7-certificates": ["p7b", "spc"],
          "application/x-pkcs7-certreqresp": ["p7r"],
          "application/x-rar-compressed": ["*rar"],
          "application/x-redhat-package-manager": ["rpm"],
          "application/x-research-info-systems": ["ris"],
          "application/x-sea": ["sea"],
          "application/x-sh": ["sh"],
          "application/x-shar": ["shar"],
          "application/x-shockwave-flash": ["swf"],
          "application/x-silverlight-app": ["xap"],
          "application/x-sql": ["sql"],
          "application/x-stuffit": ["sit"],
          "application/x-stuffitx": ["sitx"],
          "application/x-subrip": ["srt"],
          "application/x-sv4cpio": ["sv4cpio"],
          "application/x-sv4crc": ["sv4crc"],
          "application/x-t3vm-image": ["t3"],
          "application/x-tads": ["gam"],
          "application/x-tar": ["tar"],
          "application/x-tcl": ["tcl", "tk"],
          "application/x-tex": ["tex"],
          "application/x-tex-tfm": ["tfm"],
          "application/x-texinfo": ["texinfo", "texi"],
          "application/x-tgif": ["*obj"],
          "application/x-ustar": ["ustar"],
          "application/x-virtualbox-hdd": ["hdd"],
          "application/x-virtualbox-ova": ["ova"],
          "application/x-virtualbox-ovf": ["ovf"],
          "application/x-virtualbox-vbox": ["vbox"],
          "application/x-virtualbox-vbox-extpack": ["vbox-extpack"],
          "application/x-virtualbox-vdi": ["vdi"],
          "application/x-virtualbox-vhd": ["vhd"],
          "application/x-virtualbox-vmdk": ["vmdk"],
          "application/x-wais-source": ["src"],
          "application/x-web-app-manifest+json": ["webapp"],
          "application/x-x509-ca-cert": ["der", "crt", "pem"],
          "application/x-xfig": ["fig"],
          "application/x-xliff+xml": ["*xlf"],
          "application/x-xpinstall": ["xpi"],
          "application/x-xz": ["xz"],
          "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
          "audio/vnd.dece.audio": ["uva", "uvva"],
          "audio/vnd.digital-winds": ["eol"],
          "audio/vnd.dra": ["dra"],
          "audio/vnd.dts": ["dts"],
          "audio/vnd.dts.hd": ["dtshd"],
          "audio/vnd.lucent.voice": ["lvp"],
          "audio/vnd.ms-playready.media.pya": ["pya"],
          "audio/vnd.nuera.ecelp4800": ["ecelp4800"],
          "audio/vnd.nuera.ecelp7470": ["ecelp7470"],
          "audio/vnd.nuera.ecelp9600": ["ecelp9600"],
          "audio/vnd.rip": ["rip"],
          "audio/x-aac": ["aac"],
          "audio/x-aiff": ["aif", "aiff", "aifc"],
          "audio/x-caf": ["caf"],
          "audio/x-flac": ["flac"],
          "audio/x-m4a": ["*m4a"],
          "audio/x-matroska": ["mka"],
          "audio/x-mpegurl": ["m3u"],
          "audio/x-ms-wax": ["wax"],
          "audio/x-ms-wma": ["wma"],
          "audio/x-pn-realaudio": ["ram", "ra"],
          "audio/x-pn-realaudio-plugin": ["rmp"],
          "audio/x-realaudio": ["*ra"],
          "audio/x-wav": ["*wav"],
          "chemical/x-cdx": ["cdx"],
          "chemical/x-cif": ["cif"],
          "chemical/x-cmdf": ["cmdf"],
          "chemical/x-cml": ["cml"],
          "chemical/x-csml": ["csml"],
          "chemical/x-xyz": ["xyz"],
          "image/prs.btif": ["btif"],
          "image/prs.pti": ["pti"],
          "image/vnd.adobe.photoshop": ["psd"],
          "image/vnd.airzip.accelerator.azv": ["azv"],
          "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
          "image/vnd.djvu": ["djvu", "djv"],
          "image/vnd.dvb.subtitle": ["*sub"],
          "image/vnd.dwg": ["dwg"],
          "image/vnd.dxf": ["dxf"],
          "image/vnd.fastbidsheet": ["fbs"],
          "image/vnd.fpx": ["fpx"],
          "image/vnd.fst": ["fst"],
          "image/vnd.fujixerox.edmics-mmr": ["mmr"],
          "image/vnd.fujixerox.edmics-rlc": ["rlc"],
          "image/vnd.microsoft.icon": ["ico"],
          "image/vnd.ms-dds": ["dds"],
          "image/vnd.ms-modi": ["mdi"],
          "image/vnd.ms-photo": ["wdp"],
          "image/vnd.net-fpx": ["npx"],
          "image/vnd.pco.b16": ["b16"],
          "image/vnd.tencent.tap": ["tap"],
          "image/vnd.valve.source.texture": ["vtf"],
          "image/vnd.wap.wbmp": ["wbmp"],
          "image/vnd.xiff": ["xif"],
          "image/vnd.zbrush.pcx": ["pcx"],
          "image/x-3ds": ["3ds"],
          "image/x-cmu-raster": ["ras"],
          "image/x-cmx": ["cmx"],
          "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
          "image/x-icon": ["*ico"],
          "image/x-jng": ["jng"],
          "image/x-mrsid-image": ["sid"],
          "image/x-ms-bmp": ["*bmp"],
          "image/x-pcx": ["*pcx"],
          "image/x-pict": ["pic", "pct"],
          "image/x-portable-anymap": ["pnm"],
          "image/x-portable-bitmap": ["pbm"],
          "image/x-portable-graymap": ["pgm"],
          "image/x-portable-pixmap": ["ppm"],
          "image/x-rgb": ["rgb"],
          "image/x-tga": ["tga"],
          "image/x-xbitmap": ["xbm"],
          "image/x-xpixmap": ["xpm"],
          "image/x-xwindowdump": ["xwd"],
          "message/vnd.wfa.wsc": ["wsc"],
          "model/vnd.collada+xml": ["dae"],
          "model/vnd.dwf": ["dwf"],
          "model/vnd.gdl": ["gdl"],
          "model/vnd.gtw": ["gtw"],
          "model/vnd.mts": ["mts"],
          "model/vnd.opengex": ["ogex"],
          "model/vnd.parasolid.transmit.binary": ["x_b"],
          "model/vnd.parasolid.transmit.text": ["x_t"],
          "model/vnd.sap.vds": ["vds"],
          "model/vnd.usdz+zip": ["usdz"],
          "model/vnd.valve.source.compiled-map": ["bsp"],
          "model/vnd.vtu": ["vtu"],
          "text/prs.lines.tag": ["dsc"],
          "text/vnd.curl": ["curl"],
          "text/vnd.curl.dcurl": ["dcurl"],
          "text/vnd.curl.mcurl": ["mcurl"],
          "text/vnd.curl.scurl": ["scurl"],
          "text/vnd.dvb.subtitle": ["sub"],
          "text/vnd.fly": ["fly"],
          "text/vnd.fmi.flexstor": ["flx"],
          "text/vnd.graphviz": ["gv"],
          "text/vnd.in3d.3dml": ["3dml"],
          "text/vnd.in3d.spot": ["spot"],
          "text/vnd.sun.j2me.app-descriptor": ["jad"],
          "text/vnd.wap.wml": ["wml"],
          "text/vnd.wap.wmlscript": ["wmls"],
          "text/x-asm": ["s", "asm"],
          "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
          "text/x-component": ["htc"],
          "text/x-fortran": ["f", "for", "f77", "f90"],
          "text/x-handlebars-template": ["hbs"],
          "text/x-java-source": ["java"],
          "text/x-lua": ["lua"],
          "text/x-markdown": ["mkd"],
          "text/x-nfo": ["nfo"],
          "text/x-opml": ["opml"],
          "text/x-org": ["*org"],
          "text/x-pascal": ["p", "pas"],
          "text/x-processing": ["pde"],
          "text/x-sass": ["sass"],
          "text/x-scss": ["scss"],
          "text/x-setext": ["etx"],
          "text/x-sfv": ["sfv"],
          "text/x-suse-ymp": ["ymp"],
          "text/x-uuencode": ["uu"],
          "text/x-vcalendar": ["vcs"],
          "text/x-vcard": ["vcf"],
          "video/vnd.dece.hd": ["uvh", "uvvh"],
          "video/vnd.dece.mobile": ["uvm", "uvvm"],
          "video/vnd.dece.pd": ["uvp", "uvvp"],
          "video/vnd.dece.sd": ["uvs", "uvvs"],
          "video/vnd.dece.video": ["uvv", "uvvv"],
          "video/vnd.dvb.file": ["dvb"],
          "video/vnd.fvt": ["fvt"],
          "video/vnd.mpegurl": ["mxu", "m4u"],
          "video/vnd.ms-playready.media.pyv": ["pyv"],
          "video/vnd.uvvu.mp4": ["uvu", "uvvu"],
          "video/vnd.vivo": ["viv"],
          "video/x-f4v": ["f4v"],
          "video/x-fli": ["fli"],
          "video/x-flv": ["flv"],
          "video/x-m4v": ["m4v"],
          "video/x-matroska": ["mkv", "mk3d", "mks"],
          "video/x-mng": ["mng"],
          "video/x-ms-asf": ["asf", "asx"],
          "video/x-ms-vob": ["vob"],
          "video/x-ms-wm": ["wm"],
          "video/x-ms-wmv": ["wmv"],
          "video/x-ms-wmx": ["wmx"],
          "video/x-ms-wvx": ["wvx"],
          "video/x-msvideo": ["avi"],
          "video/x-sgi-movie": ["movie"],
          "video/x-smv": ["smv"],
          "x-conference/x-cooltalk": ["ice"]
        };
      }, function (e, t, n) {
        function i() {
          "use strict";
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

          i = function () {
            return e;
          };

          var e = {},
            t = Object.prototype,
            n = t.hasOwnProperty,
            r = "function" == typeof Symbol ? Symbol : {},
            a = r.iterator || "@@iterator",
            s = r.asyncIterator || "@@asyncIterator",
            c = r.toStringTag || "@@toStringTag";

          function l(e, t, n) {
            return Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), e[t];
          }

          try {
            l({}, "");
          } catch (e) {
            l = function (e, t, n) {
              return e[t] = n;
            };
          }

          function u(e, t, n, i) {
            var o = t && t.prototype instanceof f ? t : f,
              r = Object.create(o.prototype),
              a = new w(i || []);
            return r._invoke = function (e, t, n) {
              var i = "suspendedStart";
              return function (o, r) {
                if ("executing" === i) throw new Error("Generator is already running");

                if ("completed" === i) {
                  if ("throw" === o) throw r;
                  return T();
                }

                for (n.method = o, n.arg = r; ;) {
                  var a = n.delegate;

                  if (a) {
                    var s = C(a, n);

                    if (s) {
                      if (s === d) continue;
                      return s;
                    }
                  }

                  if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                    if ("suspendedStart" === i) throw i = "completed", n.arg;
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  i = "executing";
                  var c = p(e, t, n);

                  if ("normal" === c.type) {
                    if (i = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                    return {
                      value: c.arg,
                      done: n.done
                    };
                  }

                  "throw" === c.type && (i = "completed", n.method = "throw", n.arg = c.arg);
                }
              };
            }(e, n, a), r;
          }

          function p(e, t, n) {
            try {
              return {
                type: "normal",
                arg: e.call(t, n)
              };
            } catch (e) {
              return {
                type: "throw",
                arg: e
              };
            }
          }

          e.wrap = u;
          var d = {};

          function f() { }

          function m() { }

          function h() { }

          var g = {};
          l(g, a, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            y = v && v(v(E([])));
          y && y !== t && n.call(y, a) && (g = y);
          var x = h.prototype = f.prototype = Object.create(g);

          function b(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }

          function k(e, t) {
            function i(r, a, s, c) {
              var l = p(e[r], e, a);

              if ("throw" !== l.type) {
                var u = l.arg,
                  d = u.value;
                return d && "object" == o(d) && n.call(d, "__await") ? t.resolve(d.__await).then(function (e) {
                  i("next", e, s, c);
                }, function (e) {
                  i("throw", e, s, c);
                }) : t.resolve(d).then(function (e) {
                  u.value = e, s(u);
                }, function (e) {
                  return i("throw", e, s, c);
                });
              }

              c(l.arg);
            }

            var r;

            this._invoke = function (e, n) {
              function o() {
                return new t(function (t, o) {
                  i(e, n, t, o);
                });
              }

              return r = r ? r.then(o, o) : o();
            };
          }

          function C(e, t) {
            var n = e.iterator[t.method];

            if (void 0 === n) {
              if (t.delegate = null, "throw" === t.method) {
                if (e.iterator.return && (t.method = "return", t.arg = void 0, C(e, t), "throw" === t.method)) return d;
                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
              }

              return d;
            }

            var i = p(n, e.iterator, t.arg);
            if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, d;
            var o = i.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d);
          }

          function S(e) {
            var t = {
              tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
          }

          function _(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t;
          }

          function w(e) {
            this.tryEntries = [{
              tryLoc: "root"
            }], e.forEach(S, this), this.reset(!0);
          }

          function E(e) {
            if (e) {
              var t = e[a];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;

              if (!isNaN(e.length)) {
                var i = -1,
                  o = function t() {
                    for (; ++i < e.length;) if (n.call(e, i)) return t.value = e[i], t.done = !1, t;

                    return t.value = void 0, t.done = !0, t;
                  };

                return o.next = o;
              }
            }

            return {
              next: T
            };
          }

          function T() {
            return {
              value: void 0,
              done: !0
            };
          }

          return m.prototype = h, l(x, "constructor", h), l(h, "constructor", m), m.displayName = l(h, c, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
          }, e.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, l(e, c, "GeneratorFunction")), e.prototype = Object.create(x), e;
          }, e.awrap = function (e) {
            return {
              __await: e
            };
          }, b(k.prototype), l(k.prototype, s, function () {
            return this;
          }), e.AsyncIterator = k, e.async = function (t, n, i, o, r) {
            void 0 === r && (r = Promise);
            var a = new k(u(t, n, i, o), r);
            return e.isGeneratorFunction(n) ? a : a.next().then(function (e) {
              return e.done ? e.value : a.next();
            });
          }, b(x), l(x, c, "Generator"), l(x, a, function () {
            return this;
          }), l(x, "toString", function () {
            return "[object Generator]";
          }), e.keys = function (e) {
            var t = [];

            for (var n in e) t.push(n);

            return t.reverse(), function n() {
              for (; t.length;) {
                var i = t.pop();
                if (i in e) return n.value = i, n.done = !1, n;
              }

              return n.done = !0, n;
            };
          }, e.values = E, w.prototype = {
            constructor: w,
            reset: function (e) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;

              function i(n, i) {
                return a.type = "throw", a.arg = e, t.next = n, i && (t.method = "next", t.arg = void 0), !!i;
              }

              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var r = this.tryEntries[o],
                  a = r.completion;
                if ("root" === r.tryLoc) return i("end");

                if (r.tryLoc <= this.prev) {
                  var s = n.call(r, "catchLoc"),
                    c = n.call(r, "finallyLoc");

                  if (s && c) {
                    if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                    if (this.prev < r.finallyLoc) return i(r.finallyLoc);
                  } else if (s) {
                    if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                  } else {
                    if (!c) throw new Error("try statement without catch or finally");
                    if (this.prev < r.finallyLoc) return i(r.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i];

                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var r = o;
                  break;
                }
              }

              r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
              var a = r ? r.completion : {};
              return a.type = e, a.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(a);
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d;
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];

                if (n.tryLoc === e) {
                  var i = n.completion;

                  if ("throw" === i.type) {
                    var o = i.arg;

                    _(n);
                  }

                  return o;
                }
              }

              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return this.delegate = {
                iterator: E(e),
                resultName: t,
                nextLoc: n
              }, "next" === this.method && (this.arg = void 0), d;
            }
          }, e;
        }

        function o(e) {
          return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, o(e);
        }

        function r(e, t, n, i, o, r, a) {
          try {
            var s = e[r](a),
              c = s.value;
          } catch (e) {
            return void n(e);
          }

          s.done ? t(c) : Promise.resolve(c).then(i, o);
        }

        function a(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (i, o) {
              var a = e.apply(t, n);

              function s(e) {
                r(a, i, o, s, c, "next", e);
              }

              function c(e) {
                r(a, i, o, s, c, "throw", e);
              }

              s(void 0);
            });
          };
        }

        var s = n(9),
          c = n(31),
          l = n(8).EventProxy,
          u = n(0),
          p = n(6);

        function d(e, t) {
          var n = e.TaskId,
            i = e.Bucket,
            o = e.Region,
            r = e.Key,
            a = e.StorageClass,
            p = this,
            d = {},
            h = e.FileSize,
            g = e.SliceSize,
            v = Math.ceil(h / g),
            y = 0,
            x = u.throttleOnProgress.call(p, h, e.onHashProgress),
            b = function (t, n) {
              var i = t.length;
              if (0 === i) return n(null, !0);
              if (i > v) return n(null, !1);
              if (i > 1 && Math.max(t[0].Size, t[1].Size) !== g) return n(null, !1);
              !function o(r) {
                if (r < i) {
                  var a = t[r];
                  !function (t, n) {
                    var i = g * (t - 1),
                      o = Math.min(i + g, h),
                      r = o - i;
                    d[t] ? n(null, {
                      PartNumber: t,
                      ETag: d[t],
                      Size: r
                    }) : u.fileSlice(e.FilePath, i, o, function (e) {
                      try {
                        var i = u.getFileMd5(e);
                      } catch (e) {
                        return n(e);
                      }

                      var o = '"' + i + '"';
                      d[t] = o, 1, y += r, n(null, {
                        PartNumber: t,
                        ETag: o,
                        Size: r
                      }), x({
                        loaded: y,
                        total: h
                      });
                    });
                  }(a.PartNumber, function (e, t) {
                    t && t.ETag === a.ETag && t.Size === a.Size ? o(r + 1) : n(null, !1);
                  });
                } else n(null, !0);
              }(0);
            },
            k = new l();

          k.on("error", function (e) {
            if (p._isRunningTask(n)) return t(e);
          }), k.on("upload_id_available", function (e) {
            var n = {},
              i = [];
            u.each(e.PartList, function (e) {
              n[e.PartNumber] = e;
            });

            for (var o = 1; o <= v; o++) {
              var r = n[o];
              r ? (r.PartNumber = o, r.Uploaded = !0) : r = {
                PartNumber: o,
                ETag: null,
                Uploaded: !1
              }, i.push(r);
            }

            e.PartList = i, t(null, e);
          }), k.on("no_available_upload_id", function () {
            if (p._isRunningTask(n)) {
              var s = u.extend({
                Bucket: i,
                Region: o,
                Key: r,
                Headers: u.clone(e.Headers),
                Query: u.clone(e.Query),
                StorageClass: a,
                calledBySdk: "sliceUploadFile",
                tracker: e.tracker
              }, e);
              p.multipartInit(s, function (e, i) {
                if (p._isRunningTask(n)) {
                  if (e) return k.emit("error", e);
                  var o = i.UploadId;
                  if (!o) return t({
                    Message: "no upload id"
                  });
                  k.emit("upload_id_available", {
                    UploadId: o,
                    PartList: []
                  });
                }
              });
            }
          }), k.on("has_and_check_upload_id", function (t) {
            t = t.reverse(), c.eachLimit(t, 1, function (t, a) {
              p._isRunningTask(n) && (s.using[t] ? a() : m.call(p, {
                Bucket: i,
                Region: o,
                Key: r,
                UploadId: t,
                tracker: e.tracker
              }, function (e, i) {
                if (p._isRunningTask(n)) {
                  if (e) return s.removeUsing(t), k.emit("error", e);
                  var o = i.PartList;
                  o.forEach(function (e) {
                    e.PartNumber *= 1, e.Size *= 1, e.ETag = e.ETag || "";
                  }), b(o, function (e, i) {
                    if (p._isRunningTask(n)) return e ? k.emit("error", e) : void (i ? a({
                      UploadId: t,
                      PartList: o
                    }) : a());
                  });
                }
              }));
            }, function (e) {
              p._isRunningTask(n) && (x(null, !0), e && e.UploadId ? k.emit("upload_id_available", e) : k.emit("no_available_upload_id"));
            });
          }), k.on("seek_local_avail_upload_id", function (t) {
            var a = s.getFileId(e.FileStat, e.ChunkSize, i, r),
              c = s.getUploadIdList(a);

            if (a && c) {
              !function a(l) {
                if (l >= c.length) k.emit("has_and_check_upload_id", t); else {
                  var d = c[l];
                  if (!u.isInArray(t, d)) return s.removeUploadId(d), void a(l + 1);
                  s.using[d] ? a(l + 1) : m.call(p, {
                    Bucket: i,
                    Region: o,
                    Key: r,
                    UploadId: d,
                    tracker: e.tracker
                  }, function (e, t) {
                    p._isRunningTask(n) && (e ? (s.removeUploadId(d), a(l + 1)) : k.emit("upload_id_available", {
                      UploadId: d,
                      PartList: t.PartList
                    }));
                  });
                }
              }(0);
            } else k.emit("has_and_check_upload_id", t);
          }), k.on("get_remote_upload_id_list", function () {
            f.call(p, {
              Bucket: i,
              Region: o,
              Key: r,
              tracker: e.tracker
            }, function (t, o) {
              if (p._isRunningTask(n)) {
                if (t) return k.emit("error", t);
                var c = u.filter(o.UploadList, function (e) {
                  return e.Key === r && (!a || e.StorageClass.toUpperCase() === a.toUpperCase());
                }).reverse().map(function (e) {
                  return e.UploadId || e.UploadID;
                });
                if (c.length) k.emit("seek_local_avail_upload_id", c); else {
                  var l,
                    d = s.getFileId(e.FileStat, e.ChunkSize, i, r);
                  d && (l = s.getUploadIdList(d)) && u.each(l, function (e) {
                    s.removeUploadId(e);
                  }), k.emit("no_available_upload_id");
                }
              }
            });
          }), k.emit("get_remote_upload_id_list");
        }

        function f(e, t) {
          var n = this,
            i = [],
            o = {
              Bucket: e.Bucket,
              Region: e.Region,
              Prefix: e.Key,
              calledBySdk: e.calledBySdk || "sliceUploadFile",
              tracker: e.tracker
            };
          !function e() {
            n.multipartList(o, function (n, r) {
              if (n) return t(n);
              i.push.apply(i, r.Upload || []), "true" === r.IsTruncated ? (o.KeyMarker = r.NextKeyMarker, o.UploadIdMarker = r.NextUploadIdMarker, e()) : t(null, {
                UploadList: i
              });
            });
          }();
        }

        function m(e, t) {
          var n = this,
            i = [],
            o = {
              Bucket: e.Bucket,
              Region: e.Region,
              Key: e.Key,
              UploadId: e.UploadId,
              calledBySdk: "sliceUploadFile",
              tracker: e.tracker
            };
          !function e() {
            n.multipartListPart(o, function (n, r) {
              if (n) return t(n);
              i.push.apply(i, r.Part || []), "true" === r.IsTruncated ? (o.PartNumberMarker = r.NextPartNumberMarker, e()) : t(null, {
                PartList: i
              });
            });
          }();
        }

        function h(e, t) {
          var n = this,
            i = e.TaskId,
            o = e.Bucket,
            r = e.Region,
            a = e.Key,
            s = e.UploadData,
            l = e.FileSize,
            p = e.SliceSize,
            d = Math.min(e.AsyncLimit || n.options.ChunkParallelLimit || 1, 256),
            f = e.FilePath,
            m = Math.ceil(l / p),
            h = 0,
            v = e.ServerSideEncryption,
            y = u.filter(s.PartList, function (e) {
              return e.Uploaded && (h += e.PartNumber >= m && l % p || p), !e.Uploaded;
            }),
            x = e.onProgress;
          c.eachLimit(y, d, function (t, c) {
            if (n._isRunningTask(i)) {
              var u = t.PartNumber,
                d = Math.min(l, t.PartNumber * p) - (t.PartNumber - 1) * p,
                m = 0;
              g.call(n, {
                TaskId: i,
                Bucket: o,
                Region: r,
                Key: a,
                SliceSize: p,
                FileSize: l,
                PartNumber: u,
                ServerSideEncryption: v,
                FilePath: f,
                UploadData: s,
                onProgress: function (e) {
                  h += e.loaded - m, m = e.loaded, x({
                    loaded: h,
                    total: l
                  });
                },
                tracker: e.tracker
              }, function (e, o) {
                n._isRunningTask(i) && (e ? h -= m : (h += d - m, t.ETag = o.ETag), x({
                  loaded: h,
                  total: l
                }), c(e || null, o));
              });
            }
          }, function (e) {
            if (n._isRunningTask(i)) return e ? t(e) : void t(null, {
              UploadId: s.UploadId,
              SliceList: s.PartList
            });
          });
        }

        function g(e, t) {
          var n = this,
            i = e.TaskId,
            o = e.Bucket,
            r = e.Region,
            a = e.Key,
            s = e.FileSize,
            l = e.FilePath,
            p = 1 * e.PartNumber,
            d = e.SliceSize,
            f = e.ServerSideEncryption,
            m = e.UploadData,
            h = n.options.ChunkRetryTimes + 1,
            g = e.Headers || {},
            v = d * (p - 1),
            y = d,
            x = v + d;
          x > s && (y = (x = s) - v);
          var b = ["x-cos-traffic-limit", "x-cos-mime-limit"],
            k = {};
          u.each(g, function (e, t) {
            b.indexOf(t) > -1 && (k[t] = e);
          }), u.fileSlice(l, v, x, function (s) {
            var l = u.getFileMd5(s),
              d = l ? u.binaryBase64(l) : null,
              g = m.PartList[p - 1];
            c.retry(h, function (t) {
              n._isRunningTask(i) && n.multipartUpload({
                TaskId: i,
                Bucket: o,
                Region: r,
                Key: a,
                ContentLength: y,
                PartNumber: p,
                UploadId: m.UploadId,
                ServerSideEncryption: f,
                Body: s,
                Headers: k,
                onProgress: e.onProgress,
                ContentMD5: d,
                calledBySdk: "sliceUploadFile",
                tracker: e.tracker
              }, function (e, o) {
                if (n._isRunningTask(i)) return e ? t(e) : (g.Uploaded = !0, t(null, o));
              });
            }, function (e, o) {
              if (n._isRunningTask(i)) return t(e, o);
            });
          });
        }

        function v(e, t) {
          var n = e.Bucket,
            i = e.Region,
            o = e.Key,
            r = e.UploadId,
            a = e.SliceList,
            s = this,
            l = this.options.ChunkRetryTimes + 1,
            u = a.map(function (e) {
              return {
                PartNumber: e.PartNumber,
                ETag: e.ETag
              };
            });
          c.retry(l, function (t) {
            s.multipartComplete({
              Bucket: n,
              Region: i,
              Key: o,
              UploadId: r,
              Parts: u,
              calledBySdk: "sliceUploadFile",
              tracker: e.tracker
            }, t);
          }, function (e, n) {
            t(e, n);
          });
        }

        function y(e, t) {
          var n = e.Bucket,
            i = e.Region,
            o = e.Key,
            r = e.AbortArray,
            a = e.AsyncLimit || 1,
            s = this,
            l = 0,
            u = new Array(r.length);
          c.eachLimit(r, a, function (t, r) {
            var a = l;
            if (o && o !== t.Key) return u[a] = {
              error: {
                KeyNotMatch: !0
              }
            }, void r(null);
            var c = t.UploadId || t.UploadID;
            s.multipartAbort({
              Bucket: n,
              Region: i,
              Key: t.Key,
              Headers: e.Headers,
              UploadId: c
            }, function (e) {
              var o = {
                Bucket: n,
                Region: i,
                Key: t.Key,
                UploadId: c
              };
              u[a] = {
                error: e,
                task: o
              }, r(null);
            }), l++;
          }, function (e) {
            if (e) return t(e);

            for (var n = [], i = [], o = 0, r = u.length; o < r; o++) {
              var a = u[o];
              a.task && (a.error ? i.push(a.task) : n.push(a.task));
            }

            return t(null, {
              successList: n,
              errorList: i
            });
          });
        }

        function x() {
          return (x = a(i().mark(function e(t, n) {
            var r, a, s, c, l, d, f, m, h, g, v;
            return i().wrap(function (e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  return r = this, a = void 0 === t.SliceSize ? r.options.SliceSize : t.SliceSize, s = [], e.prev = 3, e.next = 6, u.getFileSizeByPath(t.FilePath);

                case 6:
                  c = e.sent, e.next = 12;
                  break;

                case 9:
                  e.prev = 9, e.t0 = e.catch(3), n({
                    error: e.t0
                  });

                case 12:
                  l = {
                    TaskId: ""
                  }, r.options.EnableTracker && (d = r.options.UseAccelerate || "string" == typeof r.options.Domain && r.options.Domain.includes("accelerate."), t.tracker = new p({
                    bucket: t.Bucket,
                    region: t.Region,
                    apiName: "uploadFile",
                    fileKey: t.Key,
                    fileSize: c,
                    accelerate: d,
                    deepTracker: r.options.DeepTracker,
                    customId: r.options.CustomId,
                    delay: r.options.TrackerDelay
                  })), u.each(t, function (e, t) {
                    "object" !== o(e) && "function" != typeof e && (l[t] = e);
                  }), f = t.onTaskReady, t.onTaskReady = function (e) {
                    l.TaskId = e, f && f(e);
                  }, m = t.onFileFinish, h = function (e, i) {
                    t.tracker && t.tracker.formatResult(e, i), m && m(e, i, l), n && n(e, i);
                  }, g = "postObject" === r.options.SimpleUploadMethod ? "postObject" : "putObject", v = c > a ? "sliceUploadFile" : g, s.push({
                    api: v,
                    params: t,
                    callback: h
                  }), r._addTasks(s);

                case 23:
                case "end":
                  return e.stop();
              }
            }, e, this, [[3, 9]]);
          }))).apply(this, arguments);
        }

        function b() {
          return b = a(i().mark(function e(t, n) {
            var r, s, c, l, d, f, m, h, g, v, y;
            return i().wrap(function (e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  return r = this, s = void 0 === t.SliceSize ? r.options.SliceSize : t.SliceSize, c = 0, l = 0, d = u.throttleOnProgress.call(r, l, t.onProgress), f = t.files.length, m = t.onFileFinish, h = Array(f), g = function (e, t, i) {
                    d(null, !0), m && m(e, t, i), h[i.Index] = {
                      options: i,
                      error: e,
                      data: t
                    }, --f <= 0 && n && n(null, {
                      files: h
                    });
                  }, v = [], y = function () {
                    return t.files.map(function (e, t) {
                      return new Promise(function () {
                        var n = a(i().mark(function n(a) {
                          var f, m, h, y, x, b, k, C, S, _;

                          return i().wrap(function (n) {
                            for (; ;) switch (n.prev = n.next) {
                              case 0:
                                return f = 0, n.prev = 1, n.next = 4, u.getFileSizeByPath(e.FilePath);

                              case 4:
                                f = n.sent, n.next = 9;
                                break;

                              case 7:
                                n.prev = 7, n.t0 = n.catch(1);

                              case 9:
                                m = {
                                  Index: t,
                                  TaskId: ""
                                }, c += f, r.options.EnableTracker && (h = r.options.UseAccelerate || "string" == typeof r.options.Domain && r.options.Domain.includes("accelerate."), e.tracker = new p({
                                  bucket: e.Bucket,
                                  region: e.Region,
                                  apiName: "uploadFiles",
                                  fileKey: e.Key,
                                  fileSize: f,
                                  accelerate: h,
                                  deepTracker: r.options.DeepTracker,
                                  customId: r.options.CustomId,
                                  delay: r.options.TrackerDelay
                                })), u.each(e, function (e, t) {
                                  "object" !== o(e) && "function" != typeof e && (m[t] = e);
                                }), y = e.onTaskReady, e.onTaskReady = function (e) {
                                  m.TaskId = e, y && y(e);
                                }, x = 0, b = e.onProgress, e.onProgress = function (e) {
                                  l = l - x + e.loaded, x = e.loaded, b && b(e), d({
                                    loaded: l,
                                    total: c
                                  });
                                }, k = e.onFileFinish, C = function (t, n) {
                                  e.tracker && e.tracker.formatResult(t, n), k && k(t, n), g && g(t, n, m);
                                }, S = "postObject" === r.options.SimpleUploadMethod ? "postObject" : "putObject", _ = f > s ? "sliceUploadFile" : S, v.push({
                                  api: _,
                                  params: e,
                                  callback: C
                                }), a(!0);

                              case 24:
                              case "end":
                                return n.stop();
                            }
                          }, n, null, [[1, 7]]);
                        }));
                        return function (e) {
                          return n.apply(this, arguments);
                        };
                      }());
                    });
                  }, e.next = 13, Promise.all(y());

                case 13:
                  r._addTasks(v);

                case 14:
                case "end":
                  return e.stop();
              }
            }, e, this);
          })), b.apply(this, arguments);
        }

        function k(e, t) {
          var n = e.TaskId,
            i = e.Bucket,
            o = e.Region,
            r = e.Key,
            a = e.CopySource,
            s = e.UploadId,
            l = 1 * e.PartNumber,
            u = e.CopySourceRange,
            p = this.options.ChunkRetryTimes + 1,
            d = this;
          c.retry(p, function (t) {
            d.uploadPartCopy({
              TaskId: n,
              Bucket: i,
              Region: o,
              Key: r,
              CopySource: a,
              UploadId: s,
              PartNumber: l,
              CopySourceRange: u,
              onProgress: e.onProgress
            }, function (e, n) {
              t(e || null, n);
            });
          }, function (e, n) {
            return t(e, n);
          });
        }

        var C = {
          sliceUploadFile: function (e, t) {
            var n = this;
            if (!u.canFileSlice()) return e.SkipTask = !0, void ("postObject" === n.options.SimpleUploadMethod ? n.postObject(e, t) : n.putObject(e, t));
            var i,
              o,
              r = new l(),
              a = e.TaskId,
              c = e.Bucket,
              p = e.Region,
              f = e.Key,
              m = e.FilePath,
              g = e.ChunkSize || e.SliceSize || n.options.ChunkSize,
              y = e.AsyncLimit,
              x = e.StorageClass,
              b = e.ServerSideEncryption,
              k = e.onHashProgress,
              C = e.tracker;
            C && C.setParams({
              chunkSize: g
            }), r.on("error", function (i) {
              if (n._isRunningTask(a)) {
                var o = {
                  UploadId: e.UploadData.UploadId || "",
                  err: i,
                  error: i
                };
                return t(o);
              }
            }), r.on("upload_complete", function (n) {
              var i = u.extend({
                UploadId: e.UploadData.UploadId || ""
              }, n);
              t(null, i);
            }), r.on("upload_slice_complete", function (e) {
              v.call(n, {
                Bucket: c,
                Region: p,
                Key: f,
                UploadId: e.UploadId,
                SliceList: e.SliceList,
                tracker: C
              }, function (t, c) {
                if (n._isRunningTask(a)) {
                  if (s.removeUsing(e.UploadId), t) return o(null, !0), r.emit("error", t);
                  s.removeUploadId(e.UploadId), o({
                    loaded: i,
                    total: i
                  }, !0), r.emit("upload_complete", c);
                }
              });
            }), r.on("get_upload_data_finish", function (t) {
              var l = s.getFileId(e.FileStat, e.ChunkSize, c, f);
              l && s.saveUploadId(l, t.UploadId, n.options.UploadIdCacheLimit), s.setUsing(t.UploadId), o(null, !0), h.call(n, {
                TaskId: a,
                Bucket: c,
                Region: p,
                Key: f,
                FilePath: m,
                FileSize: i,
                SliceSize: g,
                AsyncLimit: y,
                ServerSideEncryption: b,
                UploadData: t,
                onProgress: o,
                tracker: C
              }, function (e, t) {
                if (n._isRunningTask(a)) return e ? (o(null, !0), r.emit("error", e)) : void r.emit("upload_slice_complete", t);
              });
            }), r.on("get_file_size_finish", function () {
              if (o = u.throttleOnProgress.call(n, i, e.onProgress), e.UploadData.UploadId) r.emit("get_upload_data_finish", e.UploadData); else {
                var t = u.extend({
                  TaskId: a,
                  Bucket: c,
                  Region: p,
                  Key: f,
                  Headers: e.Headers,
                  StorageClass: x,
                  FilePath: m,
                  FileSize: i,
                  SliceSize: g,
                  onHashProgress: k,
                  tracker: C
                }, e);
                t.FileSize = i, d.call(n, t, function (t, i) {
                  if (n._isRunningTask(a)) {
                    if (t) return r.emit("error", t);
                    e.UploadData.UploadId = i.UploadId, e.UploadData.PartList = i.PartList, r.emit("get_upload_data_finish", e.UploadData);
                  }
                });
              }
            }), i = e.ContentLength, delete e.ContentLength, !e.Headers && (e.Headers = {}), u.each(e.Headers, function (t, n) {
              "content-length" === n.toLowerCase() && delete e.Headers[n];
            }), function () {
              for (var t = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 5120], o = 1048576, r = 0; r < t.length && !(i / (o = 1024 * t[r] * 1024) <= n.options.MaxPartNumber); r++);

              e.ChunkSize = e.SliceSize = g = Math.max(g, o);
            }(), 0 === i ? (e.Body = "", e.ContentLength = 0, e.SkipTask = !0, n.putObject(e, function (e, n) {
              if (e) return t(e);
              t(null, n);
            })) : r.emit("get_file_size_finish");
          },
          abortUploadTask: function (e, t) {
            var n = e.Bucket,
              i = e.Region,
              o = e.Key,
              r = e.UploadId,
              a = e.Level || "task",
              s = e.AsyncLimit,
              c = this,
              u = new l();
            if (u.on("error", function (e) {
              return t(e);
            }), u.on("get_abort_array", function (r) {
              y.call(c, {
                Bucket: n,
                Region: i,
                Key: o,
                Headers: e.Headers,
                AsyncLimit: s,
                AbortArray: r
              }, function (e, n) {
                if (e) return t(e);
                t(null, n);
              });
            }), "bucket" === a) f.call(c, {
              Bucket: n,
              Region: i,
              calledBySdk: "abortUploadTask"
            }, function (e, n) {
              if (e) return t(e);
              u.emit("get_abort_array", n.UploadList || []);
            }); else if ("file" === a) {
              if (!o) return t({
                error: "abort_upload_task_no_key"
              });
              f.call(c, {
                Bucket: n,
                Region: i,
                Key: o,
                calledBySdk: "abortUploadTask"
              }, function (e, n) {
                if (e) return t(e);
                u.emit("get_abort_array", n.UploadList || []);
              });
            } else {
              if ("task" !== a) return t({
                error: "abort_unknown_level"
              });
              if (!r) return t({
                error: "abort_upload_task_no_id"
              });
              if (!o) return t({
                error: "abort_upload_task_no_key"
              });
              u.emit("get_abort_array", [{
                Key: o,
                UploadId: r
              }]);
            }
          },
          uploadFile: function (e, t) {
            return x.apply(this, arguments);
          },
          uploadFiles: function (e, t) {
            return b.apply(this, arguments);
          },
          sliceCopyFile: function (e, t) {
            var n = new l(),
              i = this,
              o = e.Bucket,
              r = e.Region,
              a = e.Key,
              p = e.CopySource,
              d = u.getSourceParams.call(this, p);

            if (d) {
              var f = d.Bucket,
                h = d.Region,
                g = decodeURIComponent(d.Key),
                v = void 0 === e.CopySliceSize ? i.options.CopySliceSize : e.CopySliceSize;
              v = Math.max(0, v);
              var y,
                x,
                b = e.CopyChunkSize || this.options.CopyChunkSize,
                C = this.options.CopyChunkParallelLimit,
                S = this.options.ChunkRetryTimes + 1,
                _ = 0,
                w = 0,
                E = {},
                T = {},
                A = {};
              n.on("copy_slice_complete", function (n) {
                var l = {};
                u.each(e.Headers, function (e, t) {
                  0 === t.toLowerCase().indexOf("x-cos-meta-") && (l[t] = e);
                });
                var p = u.map(n.PartList, function (e) {
                  return {
                    PartNumber: e.PartNumber,
                    ETag: e.ETag
                  };
                });
                c.retry(S, function (e) {
                  i.multipartComplete({
                    Bucket: o,
                    Region: r,
                    Key: a,
                    UploadId: n.UploadId,
                    Parts: p,
                    calledBySdk: "sliceCopyFile"
                  }, e);
                }, function (e, i) {
                  if (s.removeUsing(n.UploadId), e) return x(null, !0), t(e);
                  s.removeUploadId(n.UploadId), x({
                    loaded: y,
                    total: y
                  }, !0), t(null, i);
                });
              }), n.on("get_copy_data_finish", function (e) {
                var l = s.getCopyFileId(p, E, b, o, a);
                l && s.saveUploadId(l, e.UploadId, i.options.UploadIdCacheLimit), s.setUsing(e.UploadId);
                var d = u.filter(e.PartList, function (e) {
                  return e.Uploaded && (w += e.PartNumber >= _ && y % b || b), !e.Uploaded;
                });
                c.eachLimit(d, C, function (t, n) {
                  var s = t.PartNumber,
                    l = t.CopySourceRange,
                    u = t.end - t.start,
                    d = 0;
                  c.retry(S, function (t) {
                    k.call(i, {
                      Bucket: o,
                      Region: r,
                      Key: a,
                      CopySource: p,
                      UploadId: e.UploadId,
                      PartNumber: s,
                      CopySourceRange: l,
                      onProgress: function (e) {
                        w += e.loaded - d, d = e.loaded, x({
                          loaded: w,
                          total: y
                        });
                      }
                    }, t);
                  }, function (e, i) {
                    if (e) return n(e);
                    x({
                      loaded: w,
                      total: y
                    }), w += u - d, t.ETag = i.ETag, n(e || null, i);
                  });
                }, function (i) {
                  if (i) return s.removeUsing(e.UploadId), x(null, !0), t(i);
                  n.emit("copy_slice_complete", e);
                });
              }), n.on("get_chunk_size_finish", function () {
                var c = function () {
                  i.multipartInit({
                    Bucket: o,
                    Region: r,
                    Key: a,
                    Headers: A
                  }, function (i, o) {
                    if (i) return t(i);
                    e.UploadId = o.UploadId, n.emit("get_copy_data_finish", {
                      UploadId: e.UploadId,
                      PartList: e.PartList
                    });
                  });
                },
                  l = s.getCopyFileId(p, E, b, o, a),
                  d = s.getUploadIdList(l);

                if (!l || !d) return c();
                !function t(l) {
                  if (l >= d.length) return c();
                  var p = d[l];
                  if (s.using[p]) return t(l + 1);
                  m.call(i, {
                    Bucket: o,
                    Region: r,
                    Key: a,
                    UploadId: p
                  }, function (i, o) {
                    if (i) s.removeUploadId(p), t(l + 1); else {
                      if (s.using[p]) return t(l + 1);
                      var r = {},
                        a = 0;
                      u.each(o.PartList, function (e) {
                        var t = parseInt(e.Size),
                          n = a + t - 1;
                        r[e.PartNumber + "|" + a + "|" + n] = e.ETag, a += t;
                      }), u.each(e.PartList, function (e) {
                        var t = r[e.PartNumber + "|" + e.start + "|" + e.end];
                        t && (e.ETag = t, e.Uploaded = !0);
                      }), n.emit("get_copy_data_finish", {
                        UploadId: p,
                        PartList: e.PartList
                      });
                    }
                  });
                }(0);
              }), n.on("get_file_size_finish", function () {
                var o;

                if (function () {
                  for (var t = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 5120], n = 1048576, o = 0; o < t.length && !(y / (n = 1024 * t[o] * 1024) <= i.options.MaxPartNumber); o++);

                  e.ChunkSize = b = Math.max(b, n), _ = Math.ceil(y / b);

                  for (var r = [], a = 1; a <= _; a++) {
                    var s = (a - 1) * b,
                      c = a * b < y ? a * b - 1 : y - 1,
                      l = {
                        PartNumber: a,
                        start: s,
                        end: c,
                        CopySourceRange: "bytes=" + s + "-" + c
                      };
                    r.push(l);
                  }

                  e.PartList = r;
                }(), (o = "Replaced" === e.Headers["x-cos-metadata-directive"] ? e.Headers : T)["x-cos-storage-class"] = e.Headers["x-cos-storage-class"] || T["x-cos-storage-class"], o = u.clearKey(o), "ARCHIVE" === T["x-cos-storage-class"] || "DEEP_ARCHIVE" === T["x-cos-storage-class"]) {
                  var r = T["x-cos-restore"];
                  if (!r || 'ongoing-request="true"' === r) return void t({
                    error: "Unrestored archive object is not allowed to be copied"
                  });
                }

                delete o["x-cos-copy-source"], delete o["x-cos-metadata-directive"], delete o["x-cos-copy-source-If-Modified-Since"], delete o["x-cos-copy-source-If-Unmodified-Since"], delete o["x-cos-copy-source-If-Match"], delete o["x-cos-copy-source-If-None-Match"], n.emit("get_chunk_size_finish");
              }), i.headObject({
                Bucket: f,
                Region: h,
                Key: g
              }, function (o, r) {
                if (o) o.statusCode && 404 === o.statusCode ? t({
                  ErrorStatus: g + " Not Exist"
                }) : t(o); else if (void 0 !== (y = e.FileSize = r.headers["content-length"]) && y) {
                  if (x = u.throttleOnProgress.call(i, y, e.onProgress), y <= v) e.Headers["x-cos-metadata-directive"] || (e.Headers["x-cos-metadata-directive"] = "Copy"), i.putObjectCopy(e, function (e, n) {
                    if (e) return x(null, !0), t(e);
                    x({
                      loaded: y,
                      total: y
                    }, !0), t(e, n);
                  }); else {
                    var a = r.headers;
                    E = a, T = {
                      "Cache-Control": a["cache-control"],
                      "Content-Disposition": a["content-disposition"],
                      "Content-Encoding": a["content-encoding"],
                      "Content-Type": a["content-type"],
                      Expires: a.expires,
                      "x-cos-storage-class": a["x-cos-storage-class"]
                    }, u.each(a, function (e, t) {
                      var n = "x-cos-meta-";
                      0 === t.indexOf(n) && t.length > n.length && (T[t] = e);
                    }), n.emit("get_file_size_finish");
                  }
                } else t({
                  error: 'get Content-Length error, please add "Content-Length" to CORS ExposeHeader setting.'
                });
              });
            } else t({
              error: "CopySource format error"
            });
          }
        };

        e.exports.init = function (e, t) {
          t.transferToTaskMethod(C, "sliceUploadFile"), u.each(C, function (t, n) {
            e.prototype[n] = u.apiWrapper(n, t);
          });
        };
      }, function (e, t) {
        var n = {
          eachLimit: function (e, t, n, i) {
            if (i = i || function () { }, !e.length || t <= 0) return i();
            var o = 0,
              r = 0,
              a = 0;
            !function s() {
              if (o >= e.length) return i();

              for (; a < t && r < e.length;) a += 1, n(e[(r += 1) - 1], function (t) {
                t ? (i(t), i = function () { }) : (a -= 1, (o += 1) >= e.length ? i() : s());
              });
            }();
          },
          retry: function (e, t, n) {
            e < 1 ? n() : function i(o) {
              t(function (t, r) {
                t && o < e ? i(o + 1) : n(t, r);
              });
            }(1);
          }
        };
        e.exports = n;
      }]);
    });

    /***/
  }),
/* 2 */
/***/ (function (module, exports) {

    var vodUtil = {
      getType: function getType(a) {
        if (a === null) {
          return "null";
        }

        if (a === undefined) {
          return "undefined";
        }

        return Object.prototype.toString.call(a).slice(8, -1).toLowerCase();
      },
      isFunction: function isFunction(para) {
        if (para && this.getType(para) !== "function") {
          return false;
        }

        return true;
      },
      getFileMessage: function getFileMessage(file, fileName) {
        var fileMsg = {};
        fileMsg.tempFilePath = file.tempFilePath;
        fileMsg.type = file.tempFilePath.substring(file.tempFilePath.lastIndexOf(".") + 1);

        if (typeof fileName === "string") {
          fileMsg.name = fileName;
        } else {
          fileMsg.name = "来自小程序";
        }

        fileMsg.size = file.size;
        return fileMsg;
      },
      noop: function noop() { }
    };
    module.exports = vodUtil;

    /***/
  }),
/* 3 */
/***/ (function (module, exports) {

    var UploaderEvent = {
      video_progress: "video_progress",
      media_progress: "media_progress"
    };
    exports.UploaderEvent = UploaderEvent;

    /***/
  }),
/* 4 */
/***/ (function (module, exports, __webpack_require__) {

    "use strict";
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.


    var R = typeof Reflect === 'object' ? Reflect : null;
    var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;

    if (R && typeof R.ownKeys === 'function') {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target);
      };
    }

    function ProcessEmitWarning(warning) {
      if (console && console.warn) console.warn(warning);
    }

    var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
      return value !== value;
    };

    function EventEmitter() {
      EventEmitter.init.call(this);
    }

    module.exports = EventEmitter; // Backwards-compat with node 0.10.x

    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.

    var defaultMaxListeners = 10;
    Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
      enumerable: true,
      get: function () {
        return defaultMaxListeners;
      },
      set: function (arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        }

        defaultMaxListeners = arg;
      }
    });

    EventEmitter.init = function () {
      if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      }

      this._maxListeners = this._maxListeners || undefined;
    }; // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.


    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
      }

      this._maxListeners = n;
      return this;
    };

    function $getMaxListeners(that) {
      if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }

    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return $getMaxListeners(this);
    };

    EventEmitter.prototype.emit = function emit(type) {
      var args = [];

      for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

      var doError = type === 'error';
      var events = this._events;
      if (events !== undefined) doError = doError && events.error === undefined; else if (!doError) return false; // If there is no 'error' event listener then throw.

      if (doError) {
        var er;
        if (args.length > 0) er = args[0];

        if (er instanceof Error) {
          // Note: The comments on the `throw` lines are intentional, they show
          // up in Node's output if this results in an unhandled exception.
          throw er; // Unhandled 'error' event
        } // At least give some kind of context to the user


        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
      }

      var handler = events[type];
      if (handler === undefined) return false;

      if (typeof handler === 'function') {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);

        for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
      }

      return true;
    };

    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = target._events;

      if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
      } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
          target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
          // this._events to be assigned to a new object

          events = target._events;
        }

        existing = events[type];
      }

      if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === 'function') {
          // Adding the second element, need to change to array.
          existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        } // Check for listener leak


        m = $getMaxListeners(target);

        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true; // No error code for this since it is a Warning
          // eslint-disable-next-line no-restricted-syntax

          var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
          w.name = 'MaxListenersExceededWarning';
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }

      return target;
    }

    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

    function onceWrapper() {
      var args = [];

      for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);

      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        ReflectApply(this.listener, this.target, args);
      }
    }

    function _onceWrap(target, type, listener) {
      var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
      };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }

    EventEmitter.prototype.once = function once(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      this.on(type, _onceWrap(this, type, listener));
      return this;
    };

    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    }; // Emits a 'removeListener' event if and only if the listener was removed.


    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined) return this;
      list = events[type];
      if (list === undefined) return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null); else {
          delete events[type];
          if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0) return this;
        if (position === 0) list.shift(); else {
          spliceOne(list, position);
        }
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === undefined) return this; // not listening for removeListener, no need to emit

      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0) this._events = Object.create(null); else delete events[type];
        }

        return this;
      } // emit removeListener for all listeners on all events


      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;

        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }

        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === undefined) return [];
      var evlistener = events[type];
      if (evlistener === undefined) return [];
      if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }

    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };

    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };

    EventEmitter.listenerCount = function (emitter, type) {
      if (typeof emitter.listenerCount === 'function') {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };

    EventEmitter.prototype.listenerCount = listenerCount;

    function listenerCount(type) {
      var events = this._events;

      if (events !== undefined) {
        var evlistener = events[type];

        if (typeof evlistener === 'function') {
          return 1;
        } else if (evlistener !== undefined) {
          return evlistener.length;
        }
      }

      return 0;
    }

    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };

    function arrayClone(arr, n) {
      var copy = new Array(n);

      for (var i = 0; i < n; ++i) copy[i] = arr[i];

      return copy;
    }

    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++) list[index] = list[index + 1];

      list.pop();
    }

    function unwrapListeners(arr) {
      var ret = new Array(arr.length);

      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }

      return ret;
    }

    /***/
  }),
/* 5 */
/***/ (function (module, exports, __webpack_require__) {

    var _temp;

    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    var Uploader = __webpack_require__(0);

    var pkg = __webpack_require__(6);

    var VodReportEvent = {
      report_prepare: "report_prepare",
      report_apply: "report_apply",
      report_cos_upload: "report_cos_upload",
      report_commit: "report_commit",
      report_done: "report_done"
    };
    var ReqType = {
      prepare: 10000,
      apply: 10001,
      cos_upload: 20001,
      commit: 10002,
      done: 40001
    };
    exports.reportEvent = VodReportEvent;
    exports.VodReporter = (_temp = /*#__PURE__*/function () {
      // only partial data when created
      function _temp(uploader, options) {
        _classCallCheck(this, _temp);

        _defineProperty(this, "uploader", undefined);

        _defineProperty(this, "options", undefined);

        _defineProperty(this, "baseReportData", {
          version: pkg.version,
          platform: 4000,
          device: function () {
            var _wx$getSystemInfoSync = uni.getSystemInfoSync(),
              brand = _wx$getSystemInfoSync.brand,
              model = _wx$getSystemInfoSync.model,
              version = _wx$getSystemInfoSync.version;

            return "".concat(brand, "-").concat(model, "-wx").concat(version);
          }()
        });

        _defineProperty(this, "reportUrl", "https://vodreport.qcloud.com/ugcupload_new");

        this.uploader = uploader;
        this.options = options;
        this.init();
      }

      _createClass(_temp, [{
        key: "init",
        value: function init() {
          this.uploader.on(VodReportEvent.report_prepare, this.onPrepare.bind(this));
          this.uploader.on(VodReportEvent.report_apply, this.onApply.bind(this));
          this.uploader.on(VodReportEvent.report_cos_upload, this.onCosUpload.bind(this));
          this.uploader.on(VodReportEvent.report_commit, this.onCommit.bind(this));
          this.uploader.on(VodReportEvent.report_done, this.onDone.bind(this));
        } // PrepareUpload

      }, {
        key: "onPrepare",
        value: function onPrepare(reportObj) {
          var uploader = this.uploader;

          try {
            var customReportData = {
              appId: uploader.appId,
              reqType: ReqType.prepare,
              errCode: 0,
              vodErrCode: 0,
              errMsg: "",
              reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
              reqTime: Number(reportObj.requestStartTime)
            };

            if (reportObj.err) {
              customReportData.errCode = 1;
              customReportData.vodErrCode = reportObj.err.code;
              customReportData.errMsg = reportObj.err.message;
            }

            if (reportObj.data) {
              customReportData.cosRegion = reportObj.data.region;
            }

            this.report(customReportData);
          } catch (e) {
            console.log("onPrepare", e);
          }
        } // ApplyUploadUGC

      }, {
        key: "onApply",
        value: function onApply(reportObj) {
          try {
            var uploader = this.uploader;

            if (!uploader.videoFileMessage) {
              return;
            }

            var file = uploader.videoFileMessage;
            Object.assign(this.baseReportData, {
              appId: uploader.appId,
              fileSize: file.size,
              fileName: file.name,
              fileType: file.type,
              vodSessionKey: uploader.vodSessionKey,
              reqKey: uploader.reqKey,
              reportId: uploader.reportId
            });
            var customReportData = {
              reqType: ReqType.apply,
              errCode: 0,
              vodErrCode: 0,
              errMsg: "",
              reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
              reqTime: Number(reportObj.requestStartTime)
            };

            if (reportObj.err) {
              customReportData.errCode = 1;
              customReportData.vodErrCode = reportObj.err.code;
              customReportData.errMsg = reportObj.err.message;
            }

            if (reportObj.data) {
              this.baseReportData.cosRegion = reportObj.data.storageRegion;
            }

            this.report(customReportData);
          } catch (e) {
            console.error("onApply", e);
          }
        } // upload to cos

      }, {
        key: "onCosUpload",
        value: function onCosUpload(reportObj) {
          try {
            var customReportData = {
              reqType: ReqType.cos_upload,
              errCode: 0,
              cosErrCode: "",
              errMsg: "",
              reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
              reqTime: Number(reportObj.requestStartTime)
            };

            if (reportObj.err) {
              customReportData.errCode = 1;
              customReportData.cosErrCode = reportObj.err.error ? reportObj.err.error.Code : reportObj.err;

              if (reportObj.err && reportObj.err.error === "error") {
                customReportData.cosErrCode = "cors error";
              }

              customReportData.errMsg = JSON.stringify(reportObj.err);
            }

            this.report(customReportData);
          } catch (e) {
            console.error("onCosUpload", e);
          }
        } // CommitUploadUGC

      }, {
        key: "onCommit",
        value: function onCommit(reportObj) {
          try {
            var customReportData = {
              reqType: ReqType.commit,
              errCode: 0,
              vodErrCode: 0,
              errMsg: "",
              reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
              reqTime: Number(reportObj.requestStartTime)
            };

            if (reportObj.err) {
              customReportData.errCode = 1;
              customReportData.vodErrCode = reportObj.err.code;
              customReportData.errMsg = reportObj.err.message;
            }

            if (reportObj.data) {
              this.baseReportData.fileId = reportObj.data.fileId;
            }

            this.report(customReportData);
          } catch (e) {
            console.error("onCommit", e);
          }
        }
      }, {
        key: "onDone",
        value: function onDone(reportObj) {
          try {
            var customReportData = {
              reqType: ReqType.done,
              errCode: reportObj.err && reportObj.err.code,
              reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
              reqTime: Number(reportObj.requestStartTime)
            };
            this.report(customReportData);
          } catch (e) {
            console.error("onDone", e);
          }
        }
      }, {
        key: "report",
        value: function report(reportData) {
          reportData = _objectSpread(_objectSpread({}, this.baseReportData), reportData);
          this.send(reportData);
        }
      }, {
        key: "send",
        value: function send(reportData) {
          if (false) { }

          console.log("上报: ", reportData);
          uni.request({
            method: "POST",
            url: this.reportUrl,
            data: reportData,
            dataType: "json",
            fail: function fail(err) {
              console.log(err);
            }
          });
        }
      }]);

      return _temp;
    }(), _temp);

    /***/
  }),
/* 6 */
/***/ (function (module) {

    module.exports = JSON.parse("{\"name\":\"vod-uni-sdk-v2\",\"version\":\"1.1.1\",\"description\":\"Tencent cloud vod sdk for wechat mini program\",\"main\":\"dist/vod-uni-sdk-v2.js\",\"miniprogram\":\"dist\",\"scripts\":{\"build\":\"webpack --config webpack.config.js\",\"dev\":\"webpack --config webpack.dev.js --watch\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/tencentyun/vod-uni-sdk-v2.git\"},\"keywords\":[\"vod\",\"tencentcloud\",\"qcloud\",\"wechat\"],\"author\":\"alsotang <alsotang@gmail.com>\",\"contributors\":[\"_windmill <l20122005@live.com>\"],\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/tencentyun/vod-uni-sdk-v2/issues\"},\"homepage\":\"https://github.com/tencentyun/vod-uni-sdk-v2#readme\",\"devDependencies\":{\"@babel/core\":\"^7.12.10\",\"@babel/plugin-proposal-class-properties\":\"^7.12.1\",\"@babel/preset-env\":\"^7.12.11\",\"babel-loader\":\"^8.2.2\",\"eslint\":\"^5.16.0\",\"eslint-config-airbnb-base\":\"^13.2.0\",\"eslint-config-prettier\":\"^5.1.0\",\"eslint-plugin-import\":\"^2.22.1\",\"eslint-plugin-prettier\":\"^3.3.1\",\"webpack\":\"^4.46.0\",\"webpack-cli\":\"^3.3.12\"},\"dependencies\":{\"cos-wx-sdk-v5\":\"^1.4.6\"}}");

    /***/
  })
/******/])));