const analyzeArray = require('../analyze-array');

describe('Analyze Array function tests.', () => {
  describe('Valid input tests.', () => {
    describe('Typical inputs.', () => {
      test('Returns object containing the average, min, max, and length of an array of values of type number.', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
          average: 4,
          min: 1,
          max: 8,
          length: 6
        });
      });
    });
    describe('Edge cases.', () => {
      test('Returns object containing the average, min, max, and length of an array of one value of type number.', () => {
        expect(analyzeArray([5])).toEqual({
          average: 5,
          min: 5,
          max: 5,
          length: 1
        });
      });
      test('Returns object containing the average, min, max, and length of an array containing both positive and negative numbers.', () => {
        expect(analyzeArray([3, -6, 2, 7, -1])).toEqual({
          average: 1,
          min: -6,
          max: 7,
          length: 5
        });
      });
      test('Returns object containing the average, min, max, and length of an array containing both integers and decimal numbers.', () => {
        expect(analyzeArray([2.6, 3, 4.2, 2, 3])).toEqual({
          average: 2.96,
          min: 2,
          max: 4.2,
          length: 5
        });
      });
    });
  });
  describe('Invalid input tests.', () => {
    test('Throws an error if the array is empty.', () => {
      expect(() => analyzeArray([])).toThrow('The "arr" parameter must be of type array that must not be empty and contain only values of type number.');
    });
    test('Throws an error if the array contains a value that is not of type number.', () => {
      expect(() => analyzeArray([5, '5'])).toThrow('The "arr" parameter must be of type array that must not be empty and contain only values of type number.');
    });
    test('Throws an error if the input is a date.', () => {
      expect(() => analyzeArray(new Date())).toThrow('The "arr" parameter must be of type array that must not be empty and contain only values of type number.');
    });
    test('Throws an error if the input is a number.', () => {
      expect(() => analyzeArray(5)).toThrow('The "arr" parameter must be of type array that must not be empty and contain only values of type number.');
    });
    test('Throws an error if the input is null.', () => {
      expect(() => analyzeArray(null)).toThrow('The "arr" parameter must be of type array that must not be empty and contain only values of type number.');
    });
        test('Throws an error if the input is undefined.', () => {
      expect(() => analyzeArray()).toThrow('The "arr" parameter must be of type array that must not be empty and contain only values of type number.');
    });
  });
});