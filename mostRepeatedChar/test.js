const mostRepeatedChar = require('./index');

describe('mostRepeatedChar', () => {
  it('Debe retornar la letra mas repetida en el string', () => {
    expect(mostRepeatedChar('hello')).toBe('l');
    expect(mostRepeatedChar('mississippi')).toBe('i');
    expect(mostRepeatedChar('aaaaaabbbccc')).toBe('a');
    expect(mostRepeatedChar('abcde')).toBe('a');
  });

  it('Debe retornar un string vacio si se le pasa un string vacio', () => {
    expect(mostRepeatedChar('')).toBe('');
  });
});