const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  let res = -(Math.log(sampleActivity / MODERN_ACTIVITY)) / (Math.log(2) / HALF_LIFE_PERIOD);

  if (res >= 0 && res <= Number.MAX_VALUE) return res;
  return false;
};