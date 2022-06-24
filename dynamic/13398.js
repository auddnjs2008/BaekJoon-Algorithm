var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin").toString().split("\n");
var cases = Number(inputs[0]);
inputs = inputs[1].split(" ").map((v) => Number(v));
var dp = [inputs[0]];
var dp2 = [inputs[0]];
for (var i = 1; i < cases; i++) {
  dp[i] = inputs[i] > inputs[i] + dp[i - 1] ? inputs[i] : inputs[i] + dp[i - 1];
}
for (var i = 1; i < cases; i++) {
  dp2[i] =
    dp[i - 1] > inputs[i] + dp2[i - 1] ? dp[i - 1] : inputs[i] + dp2[i - 1];
}
var dpMax = Math.max(...dp);
var dp2Max = Math.max(...dp2);
console.log(Math.max(dpMax, dp2Max));
