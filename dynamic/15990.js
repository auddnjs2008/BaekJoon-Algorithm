const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, ...numbers] = inputs;
const result = [];
const nums = numbers.map((v) => +v);

const MOD = 1000000009;
const SIZE = 100000;
const dp = Array.from({ length: SIZE + 1 }, () => new Array(4).fill(0));

dp[1][1] = dp[2][2] = dp[3][1] = dp[3][2] = dp[3][3] = 1;

for (let i = 4; i < SIZE + 1; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
}

nums.forEach((num) => {
  const value = (dp[num][1] + dp[num][2] + dp[num][3]) % MOD;
  result.push(value);
});

console.log(result.join("\n").trim());
