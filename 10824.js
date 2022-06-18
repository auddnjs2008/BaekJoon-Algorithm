const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split(" ")
  .map((i) => i + "");

const result = Number(inputs[0] + inputs[1]) + Number(inputs[2] + inputs[3]);

console.log(result);
