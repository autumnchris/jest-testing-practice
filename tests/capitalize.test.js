const capitalize = require('../capitalize');

describe('\"capitalize\" function tests', () => {
  test('capitalize(\'hello\') should return a value', () => {
    expect(capitalize('hello')).toBeDefined();
  });
  test('capitalize(\'hello\') should be truthy', () => {
    expect(capitalize('hello')).toBeTruthy();
  });
  test('capitalize(\'hello\') should return a string', () => {
    expect(typeof capitalize('hello')).toBe('string');
  });
  test('capitalize(\'hello\') should return the string \"Hello\"', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  test('capitalize(\'thiS is A tEst.\') should return the string \"This is a test.\"', () => {
    expect(capitalize('thiS is A tEst.')).toBe('This is a test.');
  });
  test('capitalize(\'123abc\') should return the string \"123abc\"', () => {
    expect(capitalize('123abc')).toBe('123abc');
  });
  test('capitalize(\'\') should return an error', () => {
    expect(capitalize('')).toBe('ERROR: The \"str\" parameter must be of type string containing a value.');
  });
  test('capitalize(new Date()) should return an error', () => {
    expect(capitalize(new Date())).toBe('ERROR: The \"str\" parameter must be of type string containing a value.');
  });
});