const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const tree = Array.from({ length: N + 1 }, () => new Array());

input.forEach((str) => {
  const [to, from, value] = str.split(" ").map(Number);
  tree[to].push([from, value]);
  tree[from].push([to, value]);
});

let check = Array(N + 1).fill(0);

const maxNode = { node: 0, dist: Number.MIN_SAFE_INTEGER };

const bfs = (node, dist) => {
  check[node] = 1;
  const queue = [[node, dist]];

  while (queue.length) {
    const [curNode, curDist] = queue.shift();
    if (maxNode.dist < curDist) {
      maxNode.dist = curDist;
      maxNode.node = curNode;
    }
    for (let nextNode of tree[curNode]) {
      if (check[nextNode[0]]) continue;
      check[nextNode[0]] = 1;
      queue.push([nextNode[0], curDist + nextNode[1]]);
    }
  }
};

bfs(1, 0);
maxNode.dist = Number.MIN_SAFE_INTEGER;
check = Array(N + 1).fill(0);

bfs(maxNode.node, 0);

console.log(maxNode.dist);
