const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members && Array.isArray(members)) {
    return members.sort().reduce((abbr, name) => {
      if (typeof name == 'string') abbr.push( name.trim()[0].toUpperCase())
      return abbr
    }, []).sort().join('')
  }
  return false
};