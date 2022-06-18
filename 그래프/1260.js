const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let dfsArr = [];
let bfsArr = [];
const [node, line, start] = input[0].split(" ").map((v) => +v);

const graph = Array.from(new Array(node + 1), (v) => []);
let visited = Array(node + 1).fill(false);

for (let i = 1; i <= line; i++) {
  const [one, two] = input[i].split(" ").map((v) => +v);
  graph[one].push(two);
  graph[two].push(one);
}

graph.forEach((element) => {
  element.sort((a, b) => a - b);
});

const dfs = (v) => {
  if (visited[v]) return;

  visited[v] = true;
  dfsArr.push(v);
  graph[v].forEach((vertex) => {
    if (!visited[vertex]) {
      dfs(vertex);
    }
  });
};

const bfs = (vStart) => {
  const willVisit = [vStart];
  let v;

  while (willVisit.length !== 0) {
    v = willVisit.shift();

    if (visited[v]) continue;

    visited[v] = true;
    bfsArr.push(v);
    graph[v].forEach((vertex) => {
      if (!visited[vertex]) {
        willVisit.push(vertex);
      }
    });
  }
};

dfs(start);
visited = visited.map((v) => false);
bfs(start);
console.log(dfsArr.join(" "));
console.log(bfsArr.join(" "));
