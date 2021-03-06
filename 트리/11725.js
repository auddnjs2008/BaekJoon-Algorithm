const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const tree = Array.from({ length: N + 1 }, () => new Array());

input.map((val) => {
  const [from, to] = val.split(" ").map(Number);
  tree[from].push(to);
  tree[to].push(from);
});

let check = Array.from({ length: N + 1 }, () => 0);

function bfs() {
  const queue = [];
  check[1] = 1;

  for (let next of tree[1]) {
    check[next] = 1;
    queue.push(next);
  }

  while (queue.length) {
    const node = queue.shift();
    for (let next of tree[node]) {
      if (check[next]) continue;
      check[next] = node; // next 인덱스에는  부모노드 를 넣는다.
      queue.push(next);
    }
  }
}

bfs();

check = check.slice(2);

let result = "";

check.map((v) => (result += `${v}\n`));

console.log(result.trim());
