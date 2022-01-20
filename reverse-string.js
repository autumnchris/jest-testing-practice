function reverseString(str) {

  if (!str || typeof str !== 'string') {
    return 'ERROR: The \"str\" parameter must be of type string containing a value.';
  }
  else {
    str = str.split('').reverse().join('');
    return str;
  }
}

module.exports = reverseString;