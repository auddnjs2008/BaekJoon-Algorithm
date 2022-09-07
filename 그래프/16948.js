const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const isVisited = Array.from({ length: N }, () => Array(N).fill(false));

const numbers = input[0].split(" ").map(Number);

const directions = [
  [-2, -1],
  [-2, 1],
  [0, -2],
  [0, 2],
  [2, -1],
  [2, 1],
];

const isValid = (x, y) => x >= 0 && y >= 0 && x < N && y < N;

const start = [numbers[0], numbers[1], 0];
const end = [numbers[2], numbers[3]];

let result = Infinity;

const bfs = () => {
  const queue = [start];

  while (queue.length) {
    const [sx, sy, move] = queue.shift();
    if (sx === end[0] && sy === end[1]) {
      result = Math.min(result, move);
      return;
    }

    for (let i = 0; i < directions.length; i++) {
      const [mx, my] = [sx + directions[i][0], sy + directions[i][1]];
      if (isValid(mx, my) && !isVisited[my][mx]) {
        isVisited[my][mx] = true;
        queue.push([mx, my, move + 1]);
      }
    }
  }
};

bfs();
if (result === Infinity) result = -1;
console.log(result);
