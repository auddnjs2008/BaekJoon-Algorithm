const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, S] = input.shift().split(" ").map(Number);
const numbers = input[0].split(" ").map(Number);

let output = 0;

const recursion = (i, sum) => {
  if (i === N) return;

  sum += numbers[i];
  if (sum === S) output++;

  recursion(i + 1, sum);
  recursion(i + 1, sum - numbers[i]);
};

recursion(0, 0);
console.log(output);
