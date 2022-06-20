const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

for (let i = 0; i < T; i++) {
  const n = +input[i * 3];
  const up = input[i * 3 + 1].split(" ").map((v) => +v);
  const down = input[i * 3 + 2].split(" ").map((v) => +v);

  const dp = [[0, up[0], down[0]]];
  for (let j = 1; j < n; j++) {
    dp[j] = [
      Math.max(...dp[j - 1]),
      Math.max(dp[j - 1][0], dp[j - 1][2]) + up[j],
      Math.max(dp[j - 1][0], dp[j - 1][1]) + down[j],
    ];
  }
  console.log(Math.max(...dp[n - 1]));
}
