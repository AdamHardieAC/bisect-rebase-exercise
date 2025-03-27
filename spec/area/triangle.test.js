const triangleArea = require('../../src/modules/area/triangle');

test('triangleArea with base 10 and height 2 equals 10', () => {
  expect(triangleArea(10, 2)).toBe(10);
});

test('triangleArea with base 4 and height 3 equals 6', () => {
  expect(triangleArea(4, 3)).toBe(6);
});

test('triangleArea with base 5 and height 5 equals 12.5', () => {
  expect(triangleArea(5, 5)).toBe(12.5);
});

test('triangleArea with base 0 and height 5 equals 0', () => {
  expect(triangleArea(0, 5)).toBe(0);
});

test('triangleArea with base 7 and height 8 equals 28', () => {
  expect(triangleArea(7, 8)).toBe(28);
});