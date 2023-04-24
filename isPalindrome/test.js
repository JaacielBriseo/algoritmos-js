const isPalindrome = require('./index');

describe('isPalindrome', () => {
  test('Retorna true para strings palindromos', () => {
    expect(isPalindrome('level')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('deified')).toBe(true);
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    expect(isPalindrome('A Santa at NASA')).toBe(true);
  });

  test('Retorna false para strings no-palindromos', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
    expect(isPalindrome('not a palindrome')).toBe(false);
    expect(isPalindrome('Palindrome with a capital P')).toBe(false);
  });

  test('Retorna true para strings vacios', () => {
    expect(isPalindrome('')).toBe(true);
  });
});