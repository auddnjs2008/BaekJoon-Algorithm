const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const houses = input.map((v) => v.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const cnt = [];

const bfs = (node) => {};
