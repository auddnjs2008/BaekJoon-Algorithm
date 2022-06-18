const inputs = require("fs").readFileSync("./input.txt").toString().split("\n");

const len = +inputs[0];

const arr = inputs[1].split(" ");
const map = arr.reduce((prev, cur) => {
  if (prev[cur]) {
    prev[cur] += 1;
  } else {
    prev[cur] = 1;
  }
  return prev;
}, {});

const stack = [];

const result = Array.from({ length: len }, (m, i) => -1);

for (let i = 0; i < len; i++) {
  const cur = map[arr[i]];

  while (stack.length && map[arr[stack[stack.length - 1]]] < map[arr[i]]) {
    result[stack.pop()] = arr[i];
  }

  stack.push(i);
}

console.log(result.join(" "));
