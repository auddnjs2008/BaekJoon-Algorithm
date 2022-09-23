const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const coins = input.map((coin) => Number(coin));
const dp = Array(K + 1).fill(0);
dp[1] = 1;

for (let i = 2; i < K + 1; i++) {
  for (let j = 0; j < coins.length; j++) {
    if (i - coins[j] > 0) {
      dp[i] = dp[i] + dp[i - coins[j]];
    }
  }
}

console.log(dp[K]);
