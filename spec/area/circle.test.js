const circleArea = require('../../src/modules/area/circle');

test('circleArea with radius 1 equals Math.PI', () => {
  expect(circleArea(1)).toBeCloseTo(Math.PI);
});

test('circleArea with radius 2 equals 4*Math.PI', () => {
  expect(circleArea(2)).toBeCloseTo(4 * Math.PI);
});

test('circleArea with radius 0 equals 0', () => {
  expect(circleArea(0)).toBe(0);
});

test('circleArea with radius 3 equals 9*Math.PI', () => {
  expect(circleArea(3)).toBeCloseTo(9 * Math.PI);
});