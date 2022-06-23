const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();

const numbers = input[0].split(" ").map((v) => +v);

const dp = Array.from({ length: 2 }, (v) => Array(n).fill(1));

let result = 0;

for (let i = 1; i < n; i++) {
  const values = [1];
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      values.push(dp[0][j] + 1);
    }
  }

  dp[0][i] = Math.max(...values);
}

for (let i = n - 2; i >= 0; i--) {
  const values = [1];
  for (let j = n - 1; j > i; j--) {
    if (numbers[i] > numbers[j]) {
      values.push(dp[1][j] + 1);
    }
  }
  dp[1][i] = Math.max(...values);
}

for (let i = 0; i < n; i++) {
  if (result < dp[0][i] + dp[1][i]) {
    result = dp[0][i] + dp[1][i];
  }
}

console.log(result - 1);
