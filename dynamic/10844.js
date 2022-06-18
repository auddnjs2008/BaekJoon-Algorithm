const input = require("fs").readFileSync("./input.txt").toString().trim();
const Divide = 1000000000;

let arr = [];
arr[0] = [];
arr[1] = new Array(10).fill(1);
arr[1][0] = 0;

for (let i = 1; i < +input; i++) {
  arr[i + 1] = new Array(10).fill(0);
  arr[i + 1][1] += arr[i][0] % Divide;
  for (let k = 1; k < arr[i].length - 1; k++) {
    arr[i + 1][k - 1] += arr[i][k] % Divide;
    arr[i + 1][k + 1] += arr[i][k] % Divide;
  }
  arr[i + 1][8] += arr[i][9] % Divide;
}

console.log(arr[+input].reduce((a, v) => a + v, 0) % Divide);
