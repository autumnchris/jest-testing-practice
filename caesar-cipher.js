function caesarCipher(str, shiftFactor) {

  if (typeof str !== 'string' || str.length === 0 || typeof shiftFactor !== 'number' || !Number.isInteger(shiftFactor)) {
    throw new Error('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
  }

  return str.split('').map(char => {
    const charCode = char.charCodeAt();

    // Uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      return String.fromCharCode(((charCode - 65 + shiftFactor) % 26 + 26) % 26 + 65);
    }
    // Lowercase letters
    else if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(((charCode - 97 + shiftFactor) % 26 + 26) % 26 + 97);
    }
    else {
      return char;
    }
  }).join('');
}

module.exports = caesarCipher;