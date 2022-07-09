const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number); // N * M    x  * y

const map = input.map((v) => v.split("").map(Number));

const visited = Array.from({ length: M }, () => Array(N).fill(false));

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const isValid = (x, y) => x >= 0 && y >= 0 && x < N && y < M;

let result = Infinity;

const bfs = (x, y, breakNum) => {
  const queue = [[x, y, breakNum]];

  while (queue.length) {
    const [curX, curY, curBreakNum] = queue.shift();

    if (curX === N - 1 && curY === M - 1) {
      result = Math.min(result, curBreakNum);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [afterX, afterY] = [
        directions[i][0] + curX,
        directions[i][1] + curY,
      ];
      if (isValid(afterX, afterY) && !visited[afterY][afterX]) {
        visited[afterY][afterX] = true;

        map[afterY][afterX] === 1
          ? queue.push([afterX, afterY, curBreakNum + 1])
          : queue.unshift([afterX, afterY, curBreakNum]);
      }
    }
  }
};

visited[0][0] = true;
bfs(0, 0, 0);

console.log(result);
