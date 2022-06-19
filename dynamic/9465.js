const input = +require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();
