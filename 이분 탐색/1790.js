const input = require("fs").readFileSync("./input.txt").toString();

const [N, K] = input.split(" ").map(Number);

let number = "";

for (let i = 1; i <= N; i++) {
  number += i;
}

const binarySearch = () => {
  let realNumber = +number;
  let start = 0;
  let end = realNumber.length - 1;

  console.log(start, end);
};

binarySearch();
