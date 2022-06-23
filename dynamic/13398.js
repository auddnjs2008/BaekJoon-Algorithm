const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();

const numbers = input[0].split(" ").map((v) => +v);
const dp = Array(n).fill(0);
dp[0] = numbers[0];

function solve(numbers, dp) {
  for (let i = 1; i < numbers.length; i++) {
    dp[i] = Math.max(numbers[i], dp[i - 1] + numbers[i]);
  }
}

solve(numbers, dp);

console.log(dp);
