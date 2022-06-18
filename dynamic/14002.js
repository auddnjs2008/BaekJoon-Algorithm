const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const A = input[0].split(" ").map((v) => +v);

const dp = Array(N).fill(0);
let arr = [];

for (let i = 0; i < N; i++) {
  let max = 0;
  let maxIdx = -1;
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j] && dp[j] > max) {
      max = dp[j];
      maxIdx = j;
    }
  }
  dp[i] = max + 1;
  arr[i] = maxIdx !== -1 ? arr[maxIdx].concat(A[i]) : [A[i]];
}

let answer = Math.max(...dp);

console.log(answer);
console.log(arr[dp.indexOf(answer)].join(" "));
