function capitalize(str) {

  if (typeof str !== 'string' || str.length === 0) {
    throw new Error('The "str" parameter must be of type string containing a value.');
  }
  
  return str[0].toUpperCase() + str.slice(1);
}

module.exports = capitalize;