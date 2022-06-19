const input = +require("fs").readFileSync("./input.txt").toString().trim();

const dp = [0, 3, 7];

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}

console.log(dp[input]);
