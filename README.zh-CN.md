# vod-uni-sdk-v2

<div align="center">

[English](./README.md) | 简体中文

</div>

腾讯云点播 SDK，兼容 UniApp，适用于 iOS/Android 开发。

## 安装

```js
npm install

npm run build
```

将打包后的输出文件（/dist/vod-uni-sdk-v2.js）放入当前项目中，并导入使用。

````js
// 在项目中需要使用的地方
const TcVod = require("@/dist/vod-uni-sdk-v2.js");

TcVod.start({
  mediaFile: mediaFile,
	getSignature: self.getSignature,

	mediaName: 'App', // 提示：但点播服务并不关心实际值是什么
	error: function (result) {
		reject(result);
		console.log('错误', result);
	},
	progress: function (result) {
		console.log('进度', result);
	},
	finish: function (result) {
		console.log('结果', result);
		const fileId = result.fileId;
		const videoPath = result.videoUrl;
		self.signUrl(
			imageId,
			fileId,
			videoPath,
			appId,
			visitorId,
			onlineVisitorId,
		);
		resolve(result);
	},
});
````
整体方法与 Web 端集成方式类似，可参考官方 Web 端集成文档获取[指导](https://cloud.tencent.com/document/product/266/9239)。

## 功能

* [x] 视频文件上传
* [x] 上传带有指定封面的视频
* [ ] 大文件分片上传

## 许可证

[MIT](./LICENSE)