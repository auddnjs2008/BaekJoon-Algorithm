const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const houses = input.map((v) => v.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
]; // x,y
const cnt = [];

const isValid = (x, y) => x >= 0 && y >= 0 && x <= N - 1 && y <= N - 1;

let nodeNum = 0;

const bfs = (node) => {
  const queue = [node];

  visited[node[1]][node[0]] = true;

  while (queue.length) {
    const [curX, curY] = queue.shift();
    nodeNum++;
    for (let i = 0; i < 4; i++) {
      const [mX, mY] = dir[i];
      const lX = mX + curX;
      const lY = mY + curY;
      if (isValid(lX, lY) && !visited[lY][lX] && houses[lY][lX]) {
        visited[lY][lX] = true;
        queue.push([lX, lY]);
      }
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (houses[i][j] && !visited[i][j]) {
      bfs([j, i]);
      cnt.push(nodeNum);
      nodeNum = 0;
    }
  }
}
cnt.sort((a, b) => a - b);
console.log(cnt.length);
console.log(cnt.join("\n").trim());
