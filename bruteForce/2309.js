const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const sum = input.reduce((pre, cur) => pre + cur);
const notPeople = [];
const result = [];

for (let i = 0; i < input.length - 1; i++) {
  const diff = sum - 100;
  for (let j = i + 1; j < input.length; j++) {
    if (diff === input[i] + input[j]) {
      notPeople.push(i, j);
      break;
    }
  }

  if (notPeople.length === 2) break;
}

for (let i = 0; i < input.length; i++) {
  if (!notPeople.includes(i)) {
    result.push(input[i]);
  }
}

console.log(
  result
    .sort((a, b) => a - b)
    .join("\n")
    .trim()
);
