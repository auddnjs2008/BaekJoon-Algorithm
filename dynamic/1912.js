const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const nums = input[0].split(" ").map((v) => +v);

const dp = Array(N - 1).fill(0);

dp[0] = nums[0];

for (let i = 1; i < N; i++) {
  dp[i] = nums[i] > nums[i] + dp[i - 1] ? nums[i] : nums[i] + dp[i - 1];
}

console.log(Math.max(...dp));
