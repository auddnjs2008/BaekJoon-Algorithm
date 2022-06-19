const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, ...nums] = inputs;

const dp = [0, 1, 2, 4];
const numbers = nums.map((v) => +v);
const max = Math.max(...numbers);
const result = [];

for (let i = 4; i <= max; i++) {
  dp[i] = (dp[i - 3] + dp[i - 2] + dp[i - 1]) % 1000000009;
}

numbers.forEach((item) => result.push(dp[item]));

console.log(result.join("\n").trim());
