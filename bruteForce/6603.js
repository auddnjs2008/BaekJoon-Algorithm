const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
// 조합 문제이다.

const getCombination = (arr, selectNumber) => {
  const result = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combinations = getCombination(rest, selectNumber - 1);

    const attached = combinations.map((item) => [fixed, ...item]);
    result.push(...attached);
  });

  return result;
};

while (input[0] !== "0") {
  const inputArr = input.shift().split(" ").map(Number);
  const n = inputArr.shift();

  const result = getCombination([...inputArr], 6);
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].join(" ");
  }
  console.log(result.join("\n"));
  if (input[0].length !== 2) console.log();
}
