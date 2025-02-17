const subtract = require('../src/modules/subtract');

test('subtracts 7 - 2 equals 5', () => {
  expect(subtract(7, 2)).toBe(5);
});

test('subtracts 5 - 5 equals 0', () => {
  expect(subtract(5, 5)).toBe(0);
});

test('subtracts 4 - 3 equals 1', () => {
  expect(subtract(4, 3)).toBe(1);
});

test('subtracts 5 - 3 equals 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('subtracts 2 - 3 equals -1', () => {
  expect(subtract(2, 3)).toBe(-1);
});