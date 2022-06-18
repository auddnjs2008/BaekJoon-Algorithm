const input = require("fs").readFileSync("./input.txt").toString().trim();
// 2 * input 의 직사각형을 1*2 2*1 로 채우는 방법

const memo = {
  1: 1,
  2: 2,
};

for (let i = 3; i <= +input; i++) {
  memo[i] = (memo[i - 2] + memo[i - 1]) % 10007;
}

console.log(memo[+input]);
