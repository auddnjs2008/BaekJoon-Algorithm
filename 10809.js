const input = require("fs").readFileSync("./input.txt").toString();

const answer = Array.from({ length: 26 }, (v, i) => -1);

for (let i = 0; i < input.length; i++) {
  const index = input[i].charCodeAt(0) - 97;
  if (answer[index] === -1) {
    answer[index] = i;
  }
}

console.log(answer.join(" "));
