const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, cards] = inputs;

const cardArr = cards.split(" ").map((v) => +v);

const dp = Array(+n + 1).fill(0);

for (let i = 1; i <= +n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + cardArr[j - 1]);
  }
}

console.log(dp[n]);
