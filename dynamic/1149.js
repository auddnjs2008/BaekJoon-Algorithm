const inputs = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = inputs.shift();

const house = [];

inputs.forEach((input) => house.push(input.split(" ").map((v) => +v)));

for (let i = 1; i < house.length; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 0) {
      house[i][j] += Math.min(house[i - 1][1], house[i - 1][2]);
    } else if (j === 1) {
      house[i][j] += Math.min(house[i - 1][0], house[i - 1][2]);
    } else if (j === 2) {
      house[i][j] += Math.min(house[i - 1][0], house[i - 1][1]);
    }
  }
}

console.log(Math.min(...house[N - 1]));
