const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date instanceof Date && !isNaN(date)) {
    const month = date.getMonth();
    if (month >= 2 && month <= 4) {
      return 'spring';
    }
    if (month >= 5 && month <= 7) {
      return 'summer';
    }
    if (month >= 8 && month <= 10) {
      return 'autumn';
    }
    return 'winter';
  } else if (date !== undefined) {
    throw new Error();
  } else {
    return 'Unable to determine the time of year!';
  }
};