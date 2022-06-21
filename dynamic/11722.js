const [n, arrs] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = arrs.split(" ").map((v) => +v);

const dp = Array(+n).fill(1);

for (let i = 1; i < +n; i++) {
  const values = [1];
  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      values.push(dp[j] + 1);
    }
  }
  dp[i] = Math.max(...values);
}

console.log(Math.max(...dp));
