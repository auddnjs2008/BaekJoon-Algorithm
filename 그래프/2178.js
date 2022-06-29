const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((v) => v.split("").map(Number));
const visited = Array.from({ length: N }, (v) => Array(M).fill(false));
const isValid = (x, y) => x >= 0 && y >= 0 && x < M && y < N;
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let result = Infinity;

const bfs = (node) => {
  const queue = [node];

  while (queue.length) {
    const [curX, curY, cnt] = queue.shift();

    if (curX === M - 1 && curY === N - 1) {
      result = Math.min(result, cnt);
      return;
    }

    for (let i = 0; i < directions.length; i++) {
      const [mX, mY] = directions[i];
      const afterX = mX + curX;
      const afterY = mY + curY;
      if (
        isValid(afterX, afterY) &&
        !visited[afterY][afterX] &&
        maze[afterY][afterX]
      ) {
        visited[afterY][afterX] = true;
        queue.push([afterX, afterY, cnt + 1]);
      }
    }
  }
};

bfs([0, 0, 1]);

console.log(result);
