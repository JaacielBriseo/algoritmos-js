const sumOfNumbers = require('./index.js');

describe('sumOfNumbers', () => {
	it('Debe retornar la suma de los numeros dentro del array', () => {
		expect(sumOfNumbers([1, 2, 3])).toBe(6);
		expect(sumOfNumbers([-1, 0, 1])).toBe(0);
		expect(sumOfNumbers([4, 5, 6, 7])).toBe(22);
		expect(sumOfNumbers([])).toBe(0);
	});
});
