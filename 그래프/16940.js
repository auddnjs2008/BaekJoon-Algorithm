const { formatWithOptions } = require("util");

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const result = input.pop().split(" ").map(Number); // 1 3 2 4

let order = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const index = result.findIndex((item) => item === i + 1);
  order[i] = index + 1;
}

let isRight = 0;

const graphInfo = input.map((v) => v.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, (v) => []);
const visited = Array(N + 1).fill(false);

graphInfo.forEach((info) => {
  const [from, to] = info;
  graph[from].push(to);
  graph[to].push(from);
  graph[from].sort((a, b) => a - b);
  graph[to].sort((a, b) => a - b);
});

const bfs = (node) => {
  const queue = [node];
  let seq = 2;

  while (queue.length) {
    const curNode = queue.shift();
    for (let i = 0; i < graph[curNode].length; i++) {
      const nextNode = graph[curNode][i];

      if (!visited[nextNode] && order[nextNode - 1] === seq) {
        visited[nextNode] = true;
        seq++;
        queue.push(nextNode);
      } else if (order[nextNode - 1] !== seq) {
        isRight = 0;
        return;
      }
    }
  }

  isRight = 1;
  return;
};

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    visited[i] = true;
    bfs(i);
    if (isRight === 1) break;
  }
}

console.log(isRight);
