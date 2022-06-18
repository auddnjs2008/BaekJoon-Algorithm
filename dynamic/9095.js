const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, ...numbers] = inputs;

const memo = [];

memo[1] = 1;
memo[2] = 2;
memo[3] = 4;

for (let i = 4; i < 11; i++) {
  memo[i] = memo[i - 3] + memo[i - 2] + memo[i - 1];
}

for (let i = 0; i < numbers.length; i++) {
  console.log(memo[numbers[i]]);
}
