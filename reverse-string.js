function reverseString(str) {

  if (typeof str !== 'string' || str.length === 0) {
    throw new Error('The \"str\" parameter must be of type string containing a value.');
  }
  else {
    return str.split('').reverse().join('');
  }
}

module.exports = reverseString;