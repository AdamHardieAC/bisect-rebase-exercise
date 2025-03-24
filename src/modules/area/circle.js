const multiply = require("../multiply");

function circleArea(radius) {
  return multiply(Math.PI, multiply(radius, radius));
}

module.exports = circleArea;