const squareRoot = require('../src/modules/squareRoot');

test('squareRoot 49 equals 7', () => {
  expect(squareRoot(49)).toBe(7);
});

test('squareRoot 25 equals 5', () => {
  expect(squareRoot(25)).toBe(5);
});

test('squareRoot 16 equals 4', () => {
  expect(squareRoot(16)).toBe(4);
});

test('squareRoot 9 equals 3', () => {
  expect(squareRoot(9)).toBe(3);
});

test('squareRoot 4 equals 2', () => {
  expect(squareRoot(4)).toBe(2);
});