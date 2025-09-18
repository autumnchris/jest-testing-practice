const {
  add,
  subtract,
  multiply,
  divide
} = require('../calculator');

describe('Calculator tests.', () => {
  describe('Add function tests.', () => {
    describe('Valid input tests.', () => {
      test('Add two positive integers.', () => {
        expect(add(2, 2)).toBe(4);
      });
      test('Add a positive integer and a negative integer.', () => {
        expect(add(2, -4)).toBe(-2);
      });
      test('Add an integer and a decimal number.', () => {
        expect(add(0.2, 4)).toBe(4.2);
      });
    });
    describe('Invalid input tests.', () => {
      test('Throws an error if the first number is of type string.', () => {
        expect(() => add('2', 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second number is of type string.', () => {
        expect(() => add(2, '2')).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if one or more inputs are undefined.', () => {
        expect(() => add(2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
    });
  });
  describe('Subtract function tests.', () => {
    describe('Valid input tests.', () => {
      test('Subtract two positive integers.', () => {
        expect(subtract(2, 2)).toBe(0);
      });
      test('Subtract a positive integer and a negative integer.', () => {
        expect(subtract(2, -4)).toBe(6);
      });
      test('Subtract an integer and a decimal number.', () => {
        expect(subtract(0.2, 4)).toBe(-3.8);
      });
    });
    describe('Invalid input tests.', () => {
      test('Throws an error if the first number is of type string.', () => {
        expect(() => subtract('2', 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second number is of type string.', () => {
        expect(() => subtract(2, '2')).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if one or more inputs are undefined.', () => {
        expect(() => subtract(2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
    });
  });
  describe('Multiply function tests.', () => {
    describe('Valid input tests.', () => {
      test('Multiply two positive integers.', () => {
        expect(multiply(2, 2)).toBe(4);
      });
      test('Multiply a positive integer and a negative integer.', () => {
        expect(multiply(2, -4)).toBe(-8);
      });
      test('Multiply an integer and a decimal number.', () => {
        expect(multiply(0.2, 4)).toBe(0.8);
      });
    });
    describe('Invalid input tests.', () => {
      test('Throws an error if the first number is of type string.', () => {
        expect(() => multiply('2', 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second number is of type string.', () => {
        expect(() => multiply(2, '2')).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if one or more inputs are undefined.', () => {
        expect(() => multiply(2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
    });
  });
  describe('Divide function tests.', () => {
    describe('Valid input tests.', () => {
      test('Divide two positive integers.', () => {
        expect(divide(2, 2)).toBe(1);
      });
      test('Divide a positive integer and a negative integer.', () => {
        expect(divide(2, -4)).toBe(-0.5);
      });
      test('Divide an integer and a decimal number.', () => {
        expect(divide(0.2, 4)).toBe(0.05);
      });
    });
    describe('Invalid input tests.', () => {
      test('Throws an error if the first number is of type string.', () => {
        expect(() => divide('2', 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second number is of type string.', () => {
        expect(() => divide(2, '2')).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second number is 0.', () => {
        expect(() => divide(2, 0)).toThrow('The "num2" parameter cannot have a value of 0.');
      });
      test('Throws an error if one or more inputs are undefined.', () => {
        expect(() => divide(2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
    });
  });
});