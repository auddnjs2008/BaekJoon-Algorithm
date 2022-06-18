const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ");

// nCm  => n! / (n-m)!* m!
let result = 0;

const cal = (first, second) => {
  if (first === 0 || second === 0) return 1;

  let upNum = 1;
  let downNum = 1;
  for (let i = first; i > first - second; i--) {
    upNum *= i;
  }

  for (let i = 1; i <= second; i++) {
    downNum *= i;
  }

  return upNum / downNum;
};

const num = cal(+input[0], +input[1]) + "";

for (let i = num.length - 1; i >= 0; i--) {
  if (num[i] === "0") result++;
  else break;
}

console.log(result);
