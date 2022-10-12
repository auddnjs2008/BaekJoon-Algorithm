const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const coins = input.map((coin) => Number(coin));
const dp = Array(K + 1).fill(0);
dp[1] = 1;

console.log(dp[K]);
