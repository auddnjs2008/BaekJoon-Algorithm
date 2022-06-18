const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const nums = input[0].split(" ").map((v) => +v);

const dp = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  const values = [1];
  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j]) {
      values.push(dp[j] + 1);
    }
  }
  dp[i] = Math.max(...values);
}

console.log(Math.max(...dp));
