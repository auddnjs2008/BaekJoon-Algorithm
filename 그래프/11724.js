const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [node, line] = input[0].split(" ").map((v) => +v);

const graph = Array.from(new Array(node + 1), (v) => []);
let visited = Array(node + 1).fill(false);
let ans = 0;

for (let i = 1; i <= line; i++) {
  const [start, end] = input[i].split(" ").map((v) => +v);
  graph[start].push(end);
  graph[end].push(start);
}

const dfs = (start) => {
  visited[start] = true;
  for (let i = 0; i < graph[start].length; i++) {
    const next = graph[start][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
};

for (let i = 1; i < graph.length; i++) {
  if (!visited[i]) {
    dfs(i);
    ans++;
  }
}

console.log(ans);
