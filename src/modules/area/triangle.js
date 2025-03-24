const multiply = require("../multiply");
const division = require("../division");

function triangleArea(base, height) {
  return division(multiply(base, height), 2);
}
module.exports = triangleArea;