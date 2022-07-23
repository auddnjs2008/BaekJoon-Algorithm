const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const numbers = input[0].split(" ").map(Number);

const max = numbers.reduce((pre, cur) => pre + cur, 0);

const checked = Array(max + 1).fill(false);

const recursion = (i, sum) => {
  if (i === N) return;

  sum += numbers[i];
  checked[sum] = true;
  recursion(i + 1, sum);
  recursion(i + 1, sum - numbers[i]);
};

recursion(0, 0);

let result = 0;

for (let i = 1; i < checked.length; i++) {
  if (!checked[i]) {
    result = i;
    break;
  }
}

console.log(result ? result : checked.length);
