const caesarCipher = require('../caesar-cipher');

describe('Caesar Cipher function tests.', () => {
  describe('Valid input tests.', () => {
    describe('Typical inputs.', () => {
      test('Shifts both the lowercase and uppercase letters of a string by 3.', () => {
        expect(caesarCipher('xyzXYZ', 3)).toBe('abcABC');
      });
      test('Shifts both the lowercase and uppercase letters of a string by 5 while ignoring spaces and special characters.', () => {
        expect(caesarCipher('thiS is A tEst 123!$;&,', 5)).toBe('ymnX nx F yJxy 123!$;&,');
      });
    });
    describe('Edge cases.', () => {
      test('Returns the string as is.', () => {
        expect(caesarCipher('abcABC', 0)).toBe('abcABC');
      }); 
      test('Shifts both the lowercase and uppercase letters of a string by -2.', () => {
        expect(caesarCipher('abcABC', -2)).toBe('yzaYZA');
      });
      test('Returns the string as is.', () => {
        expect(caesarCipher('abcABC', 26)).toBe('abcABC');
      });
      test('Shifts both the lowercase and uppercase letters of a string by 3.', () => {
        expect(caesarCipher('xyzXYZ', 29)).toBe('abcABC');
      });
      test('Shifts all the lowercase and uppercase letters of a string by 1.', () => {
        expect(caesarCipher('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 1)).toBe('bcdefghijklmnopqrstuvwxyzaBCDEFGHIJKLMNOPQRSTUVWXYZA');
      });
    });
  });
  describe('Invalid input tests.', () => {
    test('Throws an error if the string is empty.', () => {
      expect(() => caesarCipher('', 5)).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if the shift factor is a decimal number.', () => {
      expect(() => caesarCipher('abc', 5.3)).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if the first argument is a date.', () => {
      expect(() => caesarCipher(new Date(), 5)).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if the first argument is a number.', () => {
      expect(() => caesarCipher(5, 5)).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if the first argument is null.', () => {
      expect(() => caesarCipher(null, 5)).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if the first argument is an array.', () => {
      expect(() => caesarCipher([], 5)).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if the first argument is an object.', () => {
      expect(() => caesarCipher({}, 5)).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if the first argument is a boolean.', () => {
      expect(() => caesarCipher(true, 5)).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if the second argument is a string.', () => {
      expect(() => caesarCipher('abc', '5')).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if the second argument is a date.', () => {
      expect(() => caesarCipher('abc', new Date())).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if the second argument is null.', () => {
      expect(() => caesarCipher('abc', null)).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if the second argument is an array.', () => {
      expect(() => caesarCipher('abc', [])).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
        test('Throws an error if the second argument is an object.', () => {
      expect(() => caesarCipher('abc', {})).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
        test('Throws an error if the second argument is a boolean.', () => {
      expect(() => caesarCipher('abc', true)).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if the second argument is undefined.', () => {
      expect(() => caesarCipher('abc')).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
    test('Throws an error if there are no arguments.', () => {
      expect(() => caesarCipher()).toThrow('The "str" parameter must be of type string containing a value and the "shiftFactor" parameter must be of type number that is an integer.');
    });
  });
});