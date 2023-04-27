const findLargestNumber = require('./index.js');

describe('findLargestNumber', () => {
	test('Retorna el numero mas grande en un array de numeros positivos', () => {
		const array = [1, 2, 3, 4, 5];
		expect(findLargestNumber(array)).toBe(5);
	});

	test('Retorna el numero mas grande en un array de numeros negativos', () => {
		const array = [-1, -2, -3, -4, -5];
		expect(findLargestNumber(array)).toBe(-1);
	});

	test('Retorna el numero mas grande en un array de numeros positivos y negativos', () => {
		const array = [-5, 2, -3, 0, 4];
		expect(findLargestNumber(array)).toBe(4);
	});
});
