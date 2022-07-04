const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const map = input.map((v) => v.split(" ").map(Number));

const visited = Array.from({ length: N }, (v) => Array(N).fill(false));

const isValid = (x, y) => x >= 0 && y >= 0 && x < N && y < N;
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let cnt = 1;
let result = Infinity;

const bfs = (node) => {
  const queue = [node];

  while (queue.length) {
    const [curX, curY] = queue.shift();

    map[curY][curX] = cnt;

    for (let i = 0; i < 4; i++) {
      const [afterX, afterY] = [
        directions[i][0] + curX,
        directions[i][1] + curY,
      ];
      if (
        isValid(afterX, afterY) &&
        !visited[afterY][afterX] &&
        map[afterY][afterX]
      ) {
        visited[afterY][afterX] = true;
        queue.push([afterX, afterY]);
      }
    }
  }

  cnt++;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && map[i][j]) {
      bfs([j, i]);
    }
  }
}

const findShortRoad = () => {};
