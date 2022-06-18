const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, numbers] = inputs;

const cards = numbers.split(" ").map((v) => +v);

const dp = Array(+n + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= +n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j] + cards[j - 1]);
  }
}

console.log(dp[+n]);
