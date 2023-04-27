const sumIntegersUpTo = require('./index.js')

describe("sumIntegersUpTo", () => {
  test("returns the sum of all integers up to n", () => {
    expect(sumIntegersUpTo(5)).toEqual(15);
    expect(sumIntegersUpTo(10)).toEqual(55);
    expect(sumIntegersUpTo(15)).toEqual(120);
  });

  test("returns 0 if n is 0", () => {
    expect(sumIntegersUpTo(0)).toEqual(0);
  });

  test("returns 0 if n is negative", () => {
    expect(sumIntegersUpTo(-5)).toEqual(0);
  });
});