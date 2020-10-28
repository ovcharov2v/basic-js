const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.reduce((res, arr) => {
    res += arr.reduce((res, el) => {
      if (el && el == '^^') res++;
      return res;
    }, 0)
    return res;
  }, 0)
};