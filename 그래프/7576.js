const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input.shift().split(" ").map(Number); //x, y

const box = input.map((v) => v.split(" ").map(Number));

const visited = Array.from({ length: N }, (v) => Array(M).fill(false));

const isValid = (x, y) => x >= 0 && y >= 0 && x < M && y < N;

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let day = 0;

const bfs = (node) => {
  const queue = [node];

  while (queue.length) {
    const [curX, curY] = queue.shift();
  }
};
