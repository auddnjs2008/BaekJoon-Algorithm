const [n, arrs] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = arrs.split(" ").map((v) => +v);
const dp = Array(+n).fill(0);
dp[0] = numbers[0];

for (let i = 1; i < +n; i++) {
  let maxIndex = -1;
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      if (max < dp[j]) {
        max = dp[j];
        maxIndex = j;
      }
    }
  }
  dp[i] = maxIndex !== -1 ? numbers[i] + dp[maxIndex] : numbers[i];
}

console.log(Math.max(...dp));
