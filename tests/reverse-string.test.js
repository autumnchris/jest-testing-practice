const reverseString = require('../reverse-string');

describe('\"reverseString\" function tests', () => {
  test('reverseString(\'hello\') should return a value', () => {
    expect(reverseString('hello')).toBeDefined();
  });
  test('reverseString(\'hello\') should be truthy', () => {
    expect(reverseString('hello')).toBeTruthy();
  });
  test('reverseString(\'hello\') should return a string', () => {
    expect(typeof reverseString('hello')).toBe('string');
  });
  test('reverseString(\'hello\') should return the string \"olleh\"', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  test('reverseString(\'thiS is A tEst.\') should return the string \".tsEt A si Siht\"', () => {
    expect(reverseString('thiS is A tEst.')).toBe('.tsEt A si Siht');
  });
  test('reverseString(\'123abc\') should return the string \"cba321\"', () => {
    expect(reverseString('123abc')).toBe('cba321');
  });
  test('reverseString(\'\') should return an error', () => {
    expect(reverseString('')).toBe('ERROR: The \"str\" parameter must be of type string containing a value.');
  });
  test('reverseString(new Date()) should return an error', () => {
    expect(reverseString(new Date())).toBe('ERROR: The \"str\" parameter must be of type string containing a value.');
  });
});