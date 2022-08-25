const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const board = new Array(101).fill(null).map((_, index) => index);
const info = input.map((item) => item.split(" ").map(Number));

info.forEach((item) => {
  const [start, end] = item;
  board[start] = end;
});

const visited = new Array(101).fill(-1);

const bfs = () => {
  const queue = [1]; // 1번째 칸부터 시작;
  visited[1] = 0;
  while (queue.length) {
    const cur = queue.shift();

    for (let i = 1; i < 7; i++) {
      let next = cur + i;
      if (next > 100) continue;

      next = board[next];
      if (visited[next] === -1) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }
};
bfs();

console.log(visited[100]);
