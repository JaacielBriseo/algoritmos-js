const reverseString = require('./index');

test('Reversea un string correctamente', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('Reversea un string correctamente', () => {
  expect(reverseString('  abcd')).toEqual('dcba  ');
});

test('Reversea un string correctamente',()=>{
  expect(reverseString(' ')).toEqual(' ')
})