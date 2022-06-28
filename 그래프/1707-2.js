const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let K = +input.shift();

const SET_A = 1;
const SET_B = 2;

const bfs = (start, graph, visited) => {
  visited[start] = SET_A;

  const stack = [start];

  while (stack.length) {
    const node = stack.pop();
    const curSet = visited[node];
    const nextSet = curSet === SET_A ? SET_B : SET_A;

    if (!graph[node]) {
      continue;
    }

    for (let i = 0; i < graph[node].length; i++) {
      const adjNode = graph[node][i];
      if (visited[adjNode] === curSet) {
        return false;
      }

      if (!visited[adjNode]) {
        visited[adjNode] = nextSet;
        stack.push(adjNode);
      }
    }
  }
  return true;
};

const output = Array(K).fill("YES");

for (let i = 0; i < K; i++) {
  const [V, E] = input.shift().split(" ").map(Number);
  const edges = input.splice(0, E).map((v) => v.split(" ").map(Number));

  const graph = edges.reduce((acc, v) => {
    const [from, to] = v;

    if (acc[from]) {
      acc[from].push(to);
    } else {
      acc[from] = [to];
    }

    if (acc[to]) {
      acc[to].push(from);
    } else {
      acc[to] = [from];
    }

    return acc;
  }, {});

  const visited = Array(V + 1).fill(0);

  for (let j = 1; j <= V; j++) {
    if (visited[j]) {
      continue;
    }

    if (!bfs(j, graph, visited)) {
      output[i] = "NO";
      break;
    }
  }
}

console.log(output.join("\n"));
