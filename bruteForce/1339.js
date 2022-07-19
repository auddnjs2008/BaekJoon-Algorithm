const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const words = input.map((s) => s.split(""));
let value = 9;
const dictionary = {};

for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words[i].length; j++) {
    dictionary[words[i][j]] = dictionary[words[i][j]]
      ? dictionary[words[i][j]] + Math.pow(10, words[i].length - j)
      : Math.pow(10, words[i].length - j);
  }
}

Object.keys(dictionary)
  .sort((a, b) => dictionary[b] - dictionary[a])
  .forEach((item) => {
    dictionary[item] = value;
    value--;
  });

let result = 0;
for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words[i].length; j++) {
    words[i][j] = dictionary[words[i][j]];
  }
  result += +words[i].join("");
}

console.log(result);
