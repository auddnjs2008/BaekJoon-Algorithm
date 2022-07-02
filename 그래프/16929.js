const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const map = input.map((v) => v.split(""));
const visited = Array.from({ length: N }, (v) => Array(M).fill(false));
const isValid = (x, y) => x >= 0 && y >= 0 && x < M && y < N;

let flag = false; // 재귀 탈출을 위한 플래그
let start;
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const DFS = (x, y, cnt) => {
  if (flag) return;

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [directions[i][0] + x, directions[i][1] + y];
    if (!isValid(nx, ny)) continue;
    if (map[ny][nx] !== map[start[1]][start[0]]) continue;

    if (!visited[ny][nx]) {
      visited[ny][nx] = true;
      DFS(nx, ny, cnt + 1);
      visited[ny][nx] = false;
      continue;
    } else if (cnt >= 4 && nx === start[0] && ny === start[1]) {
      flag = 1;
      return;
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    start = [j, i];
    visited[i][j] = true;
    DFS(j, i, 1);
    visited[i][j] = false;
    if (flag) break;
  }
}
console.log(flag ? "Yes" : "No");
