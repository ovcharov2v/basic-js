const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse || reverse == '';
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    return this.crypt(message, key, 'encrypt');
  }

  decrypt(message, key) {
    return this.crypt(message, key, 'decrypt');
  }

  crypt(message, key, action) {
    if (message && key) {
      message = message.toUpperCase();
      key = key.toUpperCase();

      let resultMessage = [];
      let keywordIndex = 0;

      for (let symbol of message) {
        if (this.indexInAlphabet(symbol) >= 0 && this.indexInAlphabet(symbol) <= this.alphabet.length - 1) {
          let transformedSymbol;
          if (action === 'encrypt') {
            transformedSymbol = (this.indexInAlphabet(symbol) + this.indexInAlphabet(key[keywordIndex]));
          } else {
            transformedSymbol = (this.indexInAlphabet(symbol) + this.alphabet.length - this.indexInAlphabet(key[keywordIndex]));
          }
          transformedSymbol = transformedSymbol % this.alphabet.length;

          resultMessage.push(this.alphabet[transformedSymbol]);
          keywordIndex++;
        } else resultMessage.push(symbol);

        if (keywordIndex === key.length) keywordIndex = 0;
      }

      if (this.reverse) return resultMessage.reverse().join('');
      return resultMessage.join('');
    } else {
      throw new Error();
    }
  }

  indexInAlphabet(transformedSymbol) {
    return this.alphabet.indexOf(transformedSymbol);
  }
}

module.exports = VigenereCipheringMachine;