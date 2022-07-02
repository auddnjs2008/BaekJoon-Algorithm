const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const mapInfo = input.map((v) => v.split(" ").map(Number));
const map = Array.from({ length: N + 1 }, (v) => []);
const visited = Array(N + 1).fill(0);
let flag = 0;
let cycle;

mapInfo.forEach((info) => {
  const [from, to] = info;
  map[from].push(to);
  map[to].push(from);
});

const findCycleDFS = (cnt, node) => {
  if (flag) return;

  for (let i = 0; i < map[node].length; i++) {
    const nextNode = map[node][i];

    if (!visited[nextNode]) {
      visited[nextNode] = 1;
      findCycleDFS(cnt + 1, nextNode);
      visited[nextNode] = 0;
    } else if (cnt >= 3 && nextNode === start) {
      flag = 1;
      cycle = visited.slice(); // 체크 배열 복사
      return;
    }
  }
};

let start;

for (let i = 1; i <= N; i++) {
  start = i;
  visited[i] = 1;
  findCycleDFS(1, i);
  visited[i] = 0;
  if (flag) break;
}

let result = [];

const bfs = (node) => {
  const queue = [node];
  let dist = 0;
  const check2 = new Array(N + 1).fill(0);
  check2[node] = 1;

  while (true) {
    dist++;
    const iterator = queue.length;
    for (let i = 0; i < iterator; i++) {
      const from = queue.shift();
      for (let to of map[from]) {
        if (cycle[to]) {
          return dist;
        }

        if (!check2[to]) {
          check2[to] = 1;
          queue.push(to);
        }
      }
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (cycle[i]) {
    result.push(0);
    continue;
  }
  result.push(bfs(i));
}

console.log(result.join(" ").trim());
