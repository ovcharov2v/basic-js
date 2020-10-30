const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;

    return arr.reduce((count, el) => {
      return Math.max(this.calculateDepth(el) + 1, count);
    }, 1);
  }
};