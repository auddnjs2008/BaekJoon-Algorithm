const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const lines = input.map((v) => v.split(" ").map((i) => +i));

const graph = Array.from({ length: n + 1 }, (v) => []);
const visited = Array(n + 1).fill(false);

let ans = 0;

lines.forEach((line) => {
  const [from, to] = line;
  graph[from].push(to);
  graph[to].push(from);
});

const dfs = (node) => {
  if (visited[node]) return;

  visited[node] = true;

  for (let i = 0; i < graph[node].length; i++) {
    if (!visited[graph[node][i]]) {
      dfs(graph[node][i]);
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
