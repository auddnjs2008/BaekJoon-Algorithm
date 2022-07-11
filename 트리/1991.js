// 전위 순회: 뿌리 -> 왼쪽 자식 -> 오른쪽 자식
// 중위 순회: 왼쪽자식 -> 뿌리 -> 오른쪽 자식
// 후위 순회: 왼쪽 자식 -> 오른쪽 자식 -> 뿌리

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const tree = {};

for (let i = 0; i < N; i++) {
  const [node, left, right] = input[i].split(" ");
  tree[node] = [left, right];
}

let result = "";

function preorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  result += node;
  preorder(lt);
  preorder(rt);
}

function inorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  inorder(lt);
  result += node;
  inorder(rt);
}

function postorder(node) {
  if (node === ".") return;
  const [lt, rt] = tree[node];
  postorder(lt);
  postorder(rt);
  result += node;
}

preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");
result += "\n";

console.log(result);
