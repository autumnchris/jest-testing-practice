const reverseString = require('../reverse-string');

describe('Reverse String function tests.', () => {
  describe('Valid input tests.', () => {
    describe('Typical inputs.', () => {
      test('Reverses the characters of a string containing a single word.', () => {
        expect(reverseString('hello')).toBe('olleh');
      });
      test('Reverses the characters of a string containing punctuation and white space while preserving capitalization.', () => {
        expect(reverseString('thiS is A tEst.')).toBe('.tsEt A si Siht');
      });
    });
    describe('Edge cases.', () => {
      test('Returns the string as is if it contains just one character.', () => {
        expect(reverseString('a')).toBe('a');
      });
      test('Reverses the characters of a string with white space at the end of the string.', () => {
        expect(reverseString('a ')).toBe(' a');
      });
    });
  });
  describe('Invalid input tests.', () => {
    test('Throws an error if the string is empty.', () => {
      expect(() => reverseString('')).toThrow('The "str" parameter must be of type string containing a value.');
    });
    test('Throws an error if the input is a date.', () => {
      expect(() => reverseString(new Date())).toThrow('The "str" parameter must be of type string containing a value.');
    });
    test('Throws an error if the input is a number.', () => {
      expect(() => reverseString(1)).toThrow('The "str" parameter must be of type string containing a value.');
    });
    test('Throws an error if the input is null.', () => {
      expect(() => reverseString(null)).toThrow('The "str" parameter must be of type string containing a value.');
    });
    test('Throws an error if the input is undefined.', () => {
      expect(() => reverseString()).toThrow('The "str" parameter must be of type string containing a value.');
    });
    test('Throws an error if the input is an array.', () => {
      expect(() => reverseString([])).toThrow('The "str" parameter must be of type string containing a value.');
    });
    test('Throws an error if the input is an object.', () => {
      expect(() => reverseString({})).toThrow('The "str" parameter must be of type string containing a value.');
    });
    test('Throws an error if the input is a boolean.', () => {
      expect(() => reverseString(true)).toThrow('The "str" parameter must be of type string containing a value.');
    });
  });
});