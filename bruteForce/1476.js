const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let result = 1;
const date = [1, 1, 1];

const checkRoop = () => {
  return date[0] === input[0] && date[1] === input[1] && date[2] === input[2];
};

while (!checkRoop()) {
  date[0] = date[0] < 15 ? date[0] + 1 : 1;
  date[1] = date[1] < 28 ? date[1] + 1 : 1;
  date[2] = date[2] < 19 ? date[2] + 1 : 1;
  result++;
}

console.log(result);
