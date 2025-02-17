const multiply = require('../src/modules/multiply');

test('multiply 7 * 2 equals 14', () => {
  expect(multiply(7, 2)).toBe(14);
});

test('multiply 5 * 5 equals 25', () => {
  expect(multiply(5, 5)).toBe(25);
});

test('multiply 4 * 3 equals 12', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('multiply 5 * 3 equals 15', () => {
  expect(multiply(5, 3)).toBe(15);
});

test('multiply 2 * 3 equals 6', () => {
  expect(multiply(2, 3)).toBe(6);
});