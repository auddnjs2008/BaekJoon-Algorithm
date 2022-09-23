const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

// 시간초과

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((item) => item.split("").map(Number));
const isValid = (x, y) => x >= 0 && y >= 0 && y < N && x < M;
const isVisited = Array.from({ length: N }, () => Array(M).fill(false));
let result = Number.MAX_SAFE_INTEGER;
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const bfs = () => {
  const queue = [[0, 0, 1, true]];

  while (queue.length) {
    const [x, y, length, canBreak] = queue.shift();

    if (x === M - 1 && y === N - 1) {
      result = Math.min(result, length);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [mx, my] = [x + directions[i][0], y + directions[i][1]];
      if (isValid(mx, my) && !isVisited[my][mx]) {
        isVisited[my][mx] = true;
        if (map[my][mx] === 0) {
          queue.push([mx, my, length + 1, canBreak]);
        } else if (map[my][mx] === 1 && canBreak) {
          queue.push([mx, my, length + 1, false]);
        }
      }
    }
  }
};
bfs();
console.log(result === Number.MAX_SAFE_INTEGER ? -1 : result);
