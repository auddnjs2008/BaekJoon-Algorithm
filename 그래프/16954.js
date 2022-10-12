const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const map = input.map((column) => column.split(""));

const isValid = (y, x) => x >= 0 && y >= 0 && x < 8 && y < 8;
const dr = [0, -1, 0, 1, 1, 1, 0, -1, -1];
const dc = [0, 1, 1, 1, 0, -1, -1, -1, 0];

const bfs = () => {
  const Q = [[7, 0]];
  time = 0;

  while (Q.length) {
    const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
    let length = Q.length;
    for (let i = 0; i < length; i++) {
      const [r, c] = Q.shift();
      if (map[r][c] === "#") {
        continue;
      }
      if (r === 0 && c === 7) {
        return 1;
      }

      for (let j = 0; j < 9; j++) {
        const nr = r + dr[j];
        const nc = c + dc[j];
        if (!isValid(nr, nc)) continue;
        if (map[nr][nc] === "#" || visited[nr][nc]) continue;
        visited[nr][nc] = 1;
        Q.push([nr, nc]);
      }
    }
    map.pop();
    map.unshift([".", ".", ".", ".", ".", ".", ".", "."]);
    time += 1;
    if (time === 9) {
      return 1;
    }
  }

  return 0;
};

console.log(bfs());
