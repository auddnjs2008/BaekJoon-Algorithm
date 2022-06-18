const input = require("fs").readFileSync("./input.txt").toString().trim();

const n = +input;

const dp = Array.from({ length: n + 1 }, (v, i) => i);

function solve() {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (Math.pow(j, 2) > i) {
        break;
      }

      dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1);
    }
  }
  console.log(dp[n]);
}

solve();
