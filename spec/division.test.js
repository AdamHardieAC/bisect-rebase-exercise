const division = require('../src/modules/division');

test('divides 2 / 1 equals 2', () => {
  expect(division(2, 1)).toBe(2);
});

test('divides 5 / 5 equals 1', () => {
  expect(division(5, 5)).toBe(1);
});

test('divides 21 / 7 equals 3', () => {
  expect(division(21, 7)).toBe(3);
});

test('divides 4 / 2 equals 2', () => {
  expect(division(4, 2)).toBe(2);
});

test('divides 64 / 8 equals 8', () => {
  expect(division(64, 8)).toBe(8);
});