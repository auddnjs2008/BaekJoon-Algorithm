const input = require("fs").readFileSync("./input.txt").toString();

const arr = [];
let result = "";

for (let i = input.length - 1; i >= 0; i--) {
  result = input[i] + result;
  arr.push(result);
}

arr.sort();

console.log(arr.join("\n"));
