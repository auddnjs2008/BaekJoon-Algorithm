const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("")
  .sort();

const answer = Array.from({ length: 26 }, (v, i) => 0);

let stack = [];

for (let i = 0; i < input.length; i++) {
  if (stack.length === 0 || stack[stack.length - 1] === input[i]) {
    stack.push(input[i]);
  } else if (stack[stack.length - 1] !== input[i]) {
    const index = stack[stack.length - 1].charCodeAt(0) - 97;
    answer[index] += stack.length;
    stack = [];
    stack.push(input[i]);
  }
}

if (stack) {
  const index = stack[stack.length - 1].charCodeAt(0) - 97;
  answer[index] += stack.length;
}

console.log(answer.join(" "));
