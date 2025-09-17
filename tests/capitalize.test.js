const capitalize = require('../capitalize');

describe('Capitalize function tests.', () => {
  describe('Valid input tests.', () => {
    describe('Typical inputs.', () => {
      test('Checks if input is a string.', () => {
        expect(typeof capitalize('hello')).toBe('string');
      });
      test('Capitalizes the first letter of a single word.', () => {
        expect(capitalize('hello')).toBe('Hello');
      });
      test('Capitalizes the first letter of a string but ignores the other characters.', () => {
        expect(capitalize('thiS is A tEst.')).toBe('ThiS is A tEst.');
      });
    });
    describe('Edge cases.', () => {
      test('Returns the same string if it starts with a number.', () => {
        expect(capitalize('123abc')).toBe('123abc');
      });
      test('Capitalizes the first letter when there is ony one character in the string.', () => {
        expect(capitalize('a')).toBe('A');
      });
      test('Returns the same string if it starts with a special character.', () => {
        expect(capitalize('&hello')).toBe('&hello');
      });
      test('Returns the same string if it starts with a white space.', () => {
        expect(capitalize(' hello')).toBe(' hello');
      });
    });
  });
  describe('Invalid input tests.', () => {
    test('Throws an error if the string is empty.', () => {
      expect(() => capitalize('')).toThrow('The \"str\" parameter must be of type string containing a value.');
    });
    test('Throws an error if the input is not a string.', () => {
      expect(() => capitalize(new Date())).toThrow('The \"str\" parameter must be of type string containing a value.');
    });
  });
});