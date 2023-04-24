const countVowels = require('./index.js')

test('Contar el numero de vocales en el string', () => {
  expect(countVowels('hello')).toBe(2);
  expect(countVowels('world')).toBe(1);
  expect(countVowels('')).toBe(0);
  expect(countVowels('aeiou')).toBe(5);
  expect(countVowels('H3ll0 w0rld!')).toBe(0);
});