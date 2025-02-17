const square = require('../src/modules/square');

test('square 7 equals 49', () => {
  expect(square(7)).toBe(49);
});

test('square 5 equals 25', () => {
  expect(square(5)).toBe(25);
});

test('square 4 equals 16', () => {
  expect(square(4)).toBe(16);
});

test('square 3 equals 9', () => {
  expect(square(3)).toBe(9);
});

test('square 2 equals 4', () => {
  expect(square(2)).toBe(4);
});