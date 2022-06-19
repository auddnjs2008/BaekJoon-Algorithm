const input = +require("fs").readFileSync("./input.txt").toString().trim();

const dp = Array.from({ length: input + 1 }, () => []);

dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i <= input; i++) {
  for (let j = 0; j < dp[i - 1].length; j++) {
    const value = [...dp[i - 1]];

    dp[i][j] = value.slice(0, j + 1).reduce((acc, cur) => acc + cur) % 10007;
  }
}

console.log(dp[input].reduce((acc, cur) => acc + cur) % 10007);
