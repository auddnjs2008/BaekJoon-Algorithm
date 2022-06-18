const input = require("fs").readFileSync("./input.txt").toString().trim();

const decimal = parseInt(input, 2);
const eightValue = decimal.toString(8);

console.log(eightValue);
