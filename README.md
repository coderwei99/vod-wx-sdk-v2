# vod-uni-sdk-v2

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

Tencent Cloud VOD SDK compatible with UniApp for iOS/Android development.

## Installation

```js
npm install

npm run build
```

Place the packaged output (/dist/vod-uni-sdk-v2.js) into the current project and import it to use.

````js
// At the places in your project where it needs to be used.
const TcVod = require("@/dist/vod-uni-sdk-v2.js");

TcVod.start({
  mediaFile: mediaFile,
	getSignature: self.getSignature,

	mediaName: 'App', // tips: But VOD doesn't care about what the actual value is.
	error: function (result) {
		reject(result);
		console.log('error', result);
	},
	progress: function (result) {
		console.log('progres', result);
	},
	finish: function (result) {
		console.log('result', result);
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
The overall approach is similar to the web-side integration method, and you can refer to the official web-side integration documentation for [guidance](https://cloud.tencent.com/document/product/266/9239).

## Features

* [x] Video file upload
* [x] Upload a video with a specified cover
* [ ] Large file upload with chunking


## License

[MIT](./LICENSE)
