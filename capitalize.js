function capitalize(str) {

  if (!str || typeof str !== 'string') {
    return 'ERROR: The \"str\" parameter must be of type string containing a value.';
  }
  else {
    str = str.toLowerCase().split('');
    str[0] = str[0].toUpperCase();
    str = str.join('');
    return str;
  }
}

module.exports = capitalize;