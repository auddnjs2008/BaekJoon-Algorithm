const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const map = input.map((v) => v.split(""));

const isValid = (x, y) => x >= 0 && y >= 0 && x < M && y < N;

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const BFS = (node) => {
  const queue = [node];
  while (queue.length) {
    const [curX, curY, startX, startY] = queue.shift();
  }
};
