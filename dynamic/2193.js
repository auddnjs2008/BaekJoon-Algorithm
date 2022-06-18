const input = require("fs").readFileSync("./input.txt").toString().trim();

const dp = Array.from({ length: 91 }, (v) => [0, 0]);

dp[1][0] = 0;
dp[1][1] = 1;

dp[2][0] = 1;
dp[2][1] = 0;

for (let i = 3; i <= +input; i++) {
  dp[i][0] = BigInt(dp[i - 1][0]) + BigInt(dp[i - 1][1]);
  dp[i][1] = BigInt(dp[i - 1][0]);
}

console.log(dp[+input][0] + dp[+input][1]);
