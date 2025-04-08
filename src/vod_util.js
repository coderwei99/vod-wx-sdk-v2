/**
 * 工具函数集合，用于类型检查和文件信息处理
 */
const vodUtil = {
  /**
   * 获取变量的类型字符串
   * @param {*} value - 要检查的值
   * @returns {string} 类型名称（小写）
   */
  getType(value) {
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
  },

  /**
   * 检查是否为函数
   * @param {*} value - 要检查的值
   * @returns {boolean} 是否为函数
   */
  isFunction(value) {
    return value && this.getType(value) === "function";
  },

  /**
   * 检查是否为对象（非null且类型为object）
   * @param {*} value - 要检查的值
   * @returns {boolean} 是否为对象
   */
  isObject(value) {
    return value && this.getType(value) === "object";
  },

  /**
   * 获取文件信息对象
   * @param {Object} file - 文件对象，包含tempFilePath和size
   * @param {string} [fileName] - 可选文件名
   * @returns {Object} 文件信息，包括路径、类型、名称和大小
   */
  getFileMessage(file, fileName) {
    const tempFilePath = file.tempFilePath;
    return {
      tempFilePath,
      type: tempFilePath.slice(tempFilePath.lastIndexOf(".") + 1),
      name: typeof fileName === "string" ? fileName : "来自小程序",
      size: file.size,
    };
  },

  /**
   * 空函数，用于占位
   */
  noop() { },
};

module.exports = vodUtil;