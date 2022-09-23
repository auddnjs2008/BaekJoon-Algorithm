const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const [K, N] = input.shift().split(" ").map(Number);

const numbers = input.map(Number);

const minNumber = Math.min(...numbers);

let answer = K;

const binarySearch = () => {
  let head = 0;
  let tail = minNumber;

  while (head <= tail) {
    let mid = Math.floor((head + tail) / 2);
    const cuttedLines = numbers.reduce(
      (acc, cur) => acc + Math.floor(cur / mid),
      0
    );
    if (cuttedLines < N) {
      tail = mid - 1;
    } else if (cuttedLines >= N) {
      head = mid + 1;
      answer = Math.max(answer, mid);
    }
  }
};

binarySearch();
console.log(answer);
