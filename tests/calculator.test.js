const {
  add,
  subtract,
  multiply,
  divide
} = require('../calculator');

describe('\"calculator\" object tests', () => {

  describe('\"add\" function tests', () => {
    test('add(2, 2) should return a value', () => {
      expect(add(2, 2)).toBeDefined();
    });
    test('add(2, 2) should return a number', () => {
      expect(typeof add(2, 2)).toBe('number');
    });
    test('add(2, 2) should return the number 4', () => {
      expect(add(2, 2)).toBe(4);
    });
    test('add(2, -4) should return the number -2', () => {
      expect(add(2, -4)).toBe(-2);
    });
    test('add(0.2, 4) should return the number 4.2', () => {
      expect(add(0.2, 4)).toBe(4.2);
    });
    test('add(\'2\', 2) should return an error', () => {
      expect(add('2', 2)).toBe('ERROR: The \"num1\" parameter and the \"num2\" parameter must be of type number.');
    });
    test('add(2, \'2\') should return an error', () => {
      expect(add(2, '2')).toBe('ERROR: The \"num1\" parameter and the \"num2\" parameter must be of type number.');
    });
  });

  describe('\"subtract\" function tests', () => {
    test('subtract(2, 2) should return a value', () => {
      expect(subtract(2, 2)).toBeDefined();
    });
    test('subtract(2, 2) should return a number', () => {
      expect(typeof subtract(2, 2)).toBe('number');
    });
    test('subtract(2, 2) should return the number 0', () => {
      expect(subtract(2, 2)).toBe(0);
    });
    test('subtract(2, -4) should return the number 6', () => {
      expect(subtract(2, -4)).toBe(6);
    });
    test('subtract(0.2, 4) should return the number -3.8', () => {
      expect(subtract(0.2, 4)).toBe(-3.8);
    });
    test('subtract(\'2\', 2) should return an error', () => {
      expect(subtract('2', 2)).toBe('ERROR: The \"num1\" parameter and the \"num2\" parameter must be of type number.');
    });
    test('subtract(2, \'2\') should return an error', () => {
      expect(subtract(2, '2')).toBe('ERROR: The \"num1\" parameter and the \"num2\" parameter must be of type number.');
    });
  });

  describe('\"multiply\" function tests', () => {
    test('multiply(2, 2) should return a value', () => {
      expect(multiply(2, 2)).toBeDefined();
    });
    test('multiply(2, 2) should return a number', () => {
      expect(typeof multiply(2, 2)).toBe('number');
    });
    test('multiply(2, 2) should return the number 4', () => {
      expect(multiply(2, 2)).toBe(4);
    });
    test('multiply(2, -4) should return the number -8', () => {
      expect(multiply(2, -4)).toBe(-8);
    });
    test('multiply(0.2, 4) should return the number 0.8', () => {
      expect(multiply(0.2, 4)).toBe(0.8);
    });
    test('multiply(\'2\', 2) should return an error', () => {
      expect(multiply('2', 2)).toBe('ERROR: The \"num1\" parameter and the \"num2\" parameter must be of type number.');
    });
    test('multiply(2, \'2\') should return an error', () => {
      expect(multiply(2, '2')).toBe('ERROR: The \"num1\" parameter and the \"num2\" parameter must be of type number.');
    });
  });

  describe('\"divide\" function tests', () => {
    test('divide(2, 2) should return a value', () => {
      expect(divide(2, 2)).toBeDefined();
    });
    test('divide(2, 2) should return a number', () => {
      expect(typeof divide(2, 2)).toBe('number');
    });
    test('divide(2, 2) should return the number 1', () => {
      expect(divide(2, 2)).toBe(1);
    });
    test('divide(2, -4) should return the number -0.5', () => {
      expect(divide(2, -4)).toBe(-0.5);
    });
    test('divide(0.2, 4) should return the number 0.05', () => {
      expect(divide(0.2, 4)).toBe(0.05);
    });
    test('divide(\'2\', 2) should return an error', () => {
      expect(divide('2', 2)).toBe('ERROR: The \"num1\" parameter and the \"num2\" parameter must be of type number.');
    });
    test('divide(2, \'2\') should return an error', () => {
      expect(divide(2, '2')).toBe('ERROR: The \"num1\" parameter and the \"num2\" parameter must be of type number.');
    });
    test('divide(2, 0 should return an error', () => {
      expect(divide(2, 0)).toBe('ERROR: The \"num2\" parameter cannot have a value of 0.');
    });
  });
});