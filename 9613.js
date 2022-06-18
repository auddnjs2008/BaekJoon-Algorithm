const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, ...numbers] = input;

let sum = 0;
let answer = [];

const gcd = (one, two) => {
  return one % two === 0 ? two : gcd(two, one % two);
};

numbers.forEach((number) => {
  sum = 0;
  const arr = number.split(" ");
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum += gcd(+arr[i], +arr[j]);
      console.log(gcd(+arr[i], +arr[j]));
    }
  }
  answer.push(sum);
});

console.log(answer.join("\n").trim());
