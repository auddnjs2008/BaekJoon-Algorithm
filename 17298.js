const inputs = require("fs").readFileSync("./input.txt").toString().split("\n");

const len = +inputs[0];

const inputArr = inputs[1].split(" ");
const stack = [];
const result = Array.from({ length: len }, (m, i) => -1);

for (let i = 0; i < len; i++) {
  const cur = inputArr[i];

  while (stack.length && inputArr[stack[stack.length - 1]] < inputArr[i]) {
    result[stack.pop()] = cur;
  }

  stack.push(i);
}

console.log(result.join(" "));
