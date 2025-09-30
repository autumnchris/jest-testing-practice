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
      test('Throws an error if the first argument is a string.', () => {
        expect(() => add('2', 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is a date.', () => {
        expect(() => add(new Date(), 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is an array.', () => {
        expect(() => add([], 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is an object.', () => {
        expect(() => add({}, 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is null.', () => {
        expect(() => add(null, 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is a boolean.', () => {
        expect(() => add(true, 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is a string.', () => {
        expect(() => add(2, '2')).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is a date.', () => {
        expect(() => add(2, new Date())).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is an array.', () => {
        expect(() => add(2, [])).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is an object.', () => {
        expect(() => add(2, {})).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is null.', () => {
        expect(() => add(2, null)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is a boolean.', () => {
        expect(() => add(2, true)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is undefined.', () => {
        expect(() => add(2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if there are no arguments.', () => {
        expect(() => add()).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
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
      test('Throws an error if the first argument is a string.', () => {
        expect(() => subtract('2', 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is a date.', () => {
        expect(() => subtract(new Date(), 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is an array.', () => {
        expect(() => subtract([], 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is an object.', () => {
        expect(() => subtract({}, 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is null.', () => {
        expect(() => subtract(null, 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is a boolean.', () => {
        expect(() => subtract(true, 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is a string.', () => {
        expect(() => subtract(2, '2')).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is a date.', () => {
        expect(() => subtract(2, new Date())).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is an array.', () => {
        expect(() => subtract(2, [])).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is an object.', () => {
        expect(() => subtract(2, {})).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is null.', () => {
        expect(() => subtract(2, null)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is a boolean.', () => {
        expect(() => subtract(2, true)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is undefined.', () => {
        expect(() => subtract(2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if there are no arguments.', () => {
        expect(() => subtract()).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
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
      test('Throws an error if the first argument is a string.', () => {
        expect(() => multiply('2', 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is a date.', () => {
        expect(() => multiply(new Date(), 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is an array.', () => {
        expect(() => multiply([], 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is an object.', () => {
        expect(() => multiply({}, 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is null.', () => {
        expect(() => multiply(null, 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is a boolean.', () => {
        expect(() => multiply(true, 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is a string.', () => {
        expect(() => multiply(2, '2')).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is a date.', () => {
        expect(() => multiply(2, new Date())).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is an array.', () => {
        expect(() => multiply(2, [])).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is an object.', () => {
        expect(() => multiply(2, {})).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is null.', () => {
        expect(() => multiply(2, null)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is a boolean.', () => {
        expect(() => multiply(2, true)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is undefined.', () => {
        expect(() => multiply(2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if there are no arguments.', () => {
        expect(() => multiply()).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
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
      test('Throws an error if the second argument is 0.', () => {
        expect(() => divide(2, 0)).toThrow('The "num2" parameter cannot have a value of 0.');
      });
      test('Throws an error if the first argument is a string.', () => {
        expect(() => divide('2', 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is a date.', () => {
        expect(() => divide(new Date(), 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is an array.', () => {
        expect(() => divide([], 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is an object.', () => {
        expect(() => divide({}, 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is null.', () => {
        expect(() => divide(null, 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the first argument is a boolean.', () => {
        expect(() => divide(true, 2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is a string.', () => {
        expect(() => divide(2, '2')).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is a date.', () => {
        expect(() => divide(2, new Date())).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is an array.', () => {
        expect(() => divide(2, [])).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is an object.', () => {
        expect(() => divide(2, {})).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is null.', () => {
        expect(() => divide(2, null)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is a boolean.', () => {
        expect(() => divide(2, true)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if the second argument is undefined.', () => {
        expect(() => divide(2)).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
      test('Throws an error if there are no arguments.', () => {
        expect(() => divide()).toThrow('The "num1" parameter and the "num2" parameter must be of type number.');
      });
    });
  });
});