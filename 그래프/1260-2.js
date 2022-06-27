const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m, start] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const lines = input.map((v) => v.split(" ").map((i) => +i));

const nodes = Array.from({ length: n + 1 }, (v) => []);
let check = Array(n + 1).fill(false);

let dfsArr = [];
let bfsArr = [];

lines.forEach((line) => {
  const [from, to] = line;
  nodes[from].push(to);
  nodes[to].push(from);
});

nodes.forEach((node) => node.sort((a, b) => a - b));

const dfs = (v) => {
  if (check[v]) return;

  check[v] = true;
  dfsArr.push(v);
  nodes[v].forEach((vertex) => {
    if (!check[vertex]) {
      dfs(vertex);
    }
  });
};

const bfs = (vStart) => {
  const queue = [vStart];
  let v;

  while (queue.length) {
    v = queue.shift();
    if (check[v]) continue;
    check[v] = true;
    bfsArr.push(v);
    nodes[v].forEach((vertex) => {
      if (!check[vertex]) {
        queue.push(vertex);
      }
    });
  }
};

dfs(start);

check = check.map((v) => false);

bfs(start);

console.log(dfsArr.join(" ").trim());
console.log(bfsArr.join(" ").trim());
