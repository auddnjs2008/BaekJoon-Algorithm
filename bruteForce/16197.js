const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number); // 세로  가로
const coin = [];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const board = input.map((v) => v.split(""));
function checkDrop(x, y) {
  // 떨어지면 참, 떨어지지 않았으면 거짓
  if (x < 0 || y < 0 || x >= N || y >= M) return true;
  return false;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === "o") coin.push([i, j]);
  }
}

let min = Number.MAX_SAFE_INTEGER;

const checkWall = (x, y, idx) => {
  const [nx, ny] = [x + dx[idx], y + dy[idx]];
  if (board[nx]) {
    if (board[nx][ny] === "#") return [x, y];
  }
  return [nx, ny];
};

const dfs = (cnt, x1, y1, x2, y2) => {
  if (cnt >= min) return;
  if (cnt > 10) return;
  if (checkDrop(x1, y1) && checkDrop(x2, y2)) return;
  if (checkDrop(x1, y1) || checkDrop(x2, y2)) {
    min = Math.min(min, cnt);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const [nx1, ny1] = checkWall(x1, y1, i);
    const [nx2, ny2] = checkWall(x2, y2, i);
    dfs(cnt + 1, nx1, ny1, nx2, ny2);
  }
};

dfs(0, coin[0][0], coin[0][1], coin[1][0], coin[1][1]);
if (min === Number.MAX_SAFE_INTEGER) console.log(-1);
else {
  console.log(min);
}
