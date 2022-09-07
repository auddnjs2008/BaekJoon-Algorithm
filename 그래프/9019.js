const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let T = +input.shift();

const Calculator = {
  D: (number) => (number < 9999 ? number * 2 : number % 10000),
  S: (number) => (number !== 0 ? number - 1 : 9999),
  L: (number) => {
    const stringArr = String(number).split("");
    stringArr.push(stringArr.shift());
    return +stringArr.join("");
  },
  R: (number) => {
    const stringArr = String(number).split("");
    stringArr.unshift(stringArr.pop());
    return +stringArr.join("");
  },
};

while (T--) {
  const [start, end] = input.shift().split(" ").map(Number);
  const isVisited = new Array(10000).fill(false);
  isVisited[start] = true;
  const bfs = () => {
    const queue = [[start, ""]];

    while (queue.length) {
      const [firstNumber, directions] = queue.shift();
      if (firstNumber === end) {
        console.log(directions);
        return;
      }

      Object.keys(Calculator).forEach((key) => {
        const afterValue = Calculator[key](firstNumber);
        if (!isVisited[afterValue] && afterValue < 10000 && afterValue > 0) {
          isVisited[afterValue] = true;
          queue.push([afterValue, directions + key]);
        }
      });
    }
  };

  bfs();
}
