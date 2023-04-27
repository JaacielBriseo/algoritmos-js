const getObjectPropertyNames = require('./index.js');

describe('getObjectPropertyNames', () => {
	test('Retorna un arreglo con los keys del objecto', () => {
		const obj = { a: 1, b: 'hello', c: true };
		expect(getObjectPropertyNames(obj)).toEqual(['a', 'b', 'c']);
	});

	test('Retorna un array vacio si el objeto viene vacio', () => {
		const obj = {};
		expect(getObjectPropertyNames(obj)).toEqual([]);
	});
});
