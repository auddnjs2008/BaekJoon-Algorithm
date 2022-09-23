const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const coins = input.map((coin) => Number(coin));
let result = 0;
let remainCoin = K;
const maxIndex = coins.findIndex((coin) => K < coin);
const startIndex = maxIndex !== -1 ? maxIndex - 1 : coins.length - 1;

for (let i = startIndex; i >= 0; i--) {
  const use = Math.floor(remainCoin / coins[i]);
  remainCoin -= use * coins[i];
  result += use;
  if (remainCoin === 0) break;
}

console.log(result);
