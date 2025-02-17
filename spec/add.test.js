const add = require('../src/modules/add');

test('adds 0 + 2 equals 2', () => {
  expect(add(0, 2)).toBe(2);
});

test('adds 5 + 5 equals 10', () => {
  expect(add(5, 5)).toBe(20);
});

test('adds 4 + 3 equals 7', () => {
  expect(add(4, 3)).toBe(7);
});

test('adds 2 + 2 equals 4', () => {
  expect(add(2, 2)).toBe(4);
});

test('adds 2 + 3 equals 5', () => {
  expect(add(2, 3)).toBe(5);
});