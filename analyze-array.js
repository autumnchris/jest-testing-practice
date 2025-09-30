function analyzeArray(arr) {

  if (!Array.isArray(arr) || !arr.every(val => typeof val === 'number') || arr.length === 0) {
    throw new Error('The "arr" parameter must be of type array that must not be empty and contain only values of type number.');
  }

  function findAverage(arr) {
    const sum = arr.reduce((acc, num) => {
      acc += num;
      return acc;
    }, 0);
    return sum/arr.length;
  }

  return {
    average: findAverage(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}

module.exports = analyzeArray;