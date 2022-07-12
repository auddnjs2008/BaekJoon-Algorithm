const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const tree = Array.from({ length: N + 1 }, () => new Array());

input.map((str) => {
  const [node, ...nextInfo] = str.split(" ").map(Number);
  for (let i = 0; i < nextInfo.length - 1; i += 2) {
    tree[node].push([nextInfo[i], nextInfo[i + 1]]);
  } // (다음 노드, 거리) 쌍으로 입력을 받는다.
});

let check = Array.from({ length: N + 1 }, () => 0);
let max = { node: 0, dist: Number.MIN_SAFE_INTEGER };
// max 변수에는 최대 거리와 최대 거리의 노드가 들어간다.

function dfs(node, dist) {
  check[node] = 1;
  if (max.dist < dist) max = { node, dist };
  for (let [nextNode, nextDist] of tree[node]) {
    if (check[nextNode]) continue;
    dfs(nextNode, dist + nextDist);
  }
}

dfs(1, 0); // 임의의 노드 (1번 노드 선택)
// 처음 가장 먼 노드를 찾는다.
max.dist = Number.MIN_SAFE_INTEGER;
check = new Array(N + 1).fill(0);

dfs(max.node, 0);
console.log(max.dist);
