const input = +require("fs").readFileSync("./input.txt").toString().trim();

const dp = Array(input + 1).fill(0);

dp[2] = 3;

for (let i = 4; i <= input; i = i + 2) {
  let result = 0;
  for (let j = i - 2; j >= 0; j = j - 2) {
    if (j === 0) {
      result += 2;
    } else if (j === i - 2) {
      result += dp[j] * dp[2];
    } else {
      result += dp[j] * 2;
    }
  }
  dp[i] = result;
}

console.log(dp[input]);
