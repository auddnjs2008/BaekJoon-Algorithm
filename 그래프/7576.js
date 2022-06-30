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

const bfs = (queue) => {
  while (queue.length) {
    const [curX, curY, cnt] = queue.shift();
    day = Math.max(day, cnt);
    for (let i = 0; i < 4; i++) {
      const [mX, mY] = directions[i];
      const afterX = curX + mX;
      const afterY = curY + mY;

      if (
        isValid(afterX, afterY) &&
        !visited[afterY][afterX] &&
        box[afterY][afterX] === 0
      ) {
        visited[afterY][afterX] = true;
        box[afterY][afterX] = 1;
        queue.push([afterX, afterY, cnt + 1]);
      }
    }
  }
};
const queue = [];
let zero = false;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) {
      queue.push([j, i, 0]);
      visited[i][j] = true;
    } else if (box[i][j] === 0) {
      zero = true;
    }
  }
}

if (!zero) {
  day = 0;
} else {
  bfs(queue);
  for (let i = 0; i < N; i++) {
    if (box[i].includes(0)) {
      day = -1;
      break;
    }
  }
}

console.log(day);
