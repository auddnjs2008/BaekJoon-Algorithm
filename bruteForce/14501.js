const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();

const works = input.map((i) => i.split(" ").map(Number));

const dp = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  const [valid, payment] = works[i];
  if (i + valid > n) continue;
  dp[i] += payment;
  for (let j = i + valid; j < n; j++) {
    dp[j] = Math.max(dp[i], dp[j]);
  }
}

console.log(Math.max(...dp));
