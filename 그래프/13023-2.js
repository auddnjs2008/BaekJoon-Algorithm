const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const relationships = input.map((v) => v.split(" ").map((i) => +i));

const arr = Array.from({ length: N }, (v) => []);
const check = Array.from({ length: N }, (v) => 0);
let result = 0;

relationships.forEach((item) => {
  const [from, to] = item;
  arr[from].push(to);
  arr[to].push(from);
});

const dfs = (node, cnt) => {
  check[node] = 1;
  if (cnt === 5) {
    result = 1;
    return;
  }

  for (let i = 0; i < arr[node].length; i++) {
    if (check[arr[node][i]] === 0) {
      dfs(arr[node][i], cnt + 1);
    }
  }

  check[node] = 0;
};

for (let i = 0; i < arr.length; i++) {
  dfs(i, 1);
}

console.log(result);
