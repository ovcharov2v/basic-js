const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (!options.repeatTimes) options.repeatTimes = 1
  if (!options.separator) options.separator = '+'

  if (!options.hasOwnProperty('addition')) options.addition = ''
  if(typeof options.addition != 'string') options.addition = String(options.addition)
  
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1
  if (!options.additionSeparator) options.additionSeparator = '|'

  let res = ''

  for (let i = 0; i < options.repeatTimes; i++) {
    res += str
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (j == options.additionRepeatTimes - 1)
        res += options.addition;
      else
        res += options.addition + options.additionSeparator
    }

    if (i !== options.repeatTimes - 1) res += options.separator
  }

  return res;
};