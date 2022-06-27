const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const K = +input.shift();

while (K--) {
  const [v, e] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  const lines = input.splice(0, 2).map((s) => s.split(" ").map((i) => +i));
}
