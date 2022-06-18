const inputs = require("fs").readFileSync("./input.txt").toString().split("\n");
const answer = [];

for (let j = 0; j < inputs.length; j++) {
  const arr = [0, 0, 0, 0];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "") continue;
    if (input[i] >= "A" && input[i] <= "Z") {
      arr[1] += 1;
    } else if (input[i] >= "a" && input[i] <= "z") {
      arr[0] += 1;
    } else if (input[i] === " ") {
      arr[3] += 1;
    } else if (/[0-9]/g.test(input[i])) {
      arr[2] += 1;
    }
  }

  answer.push(arr.join(" "));
}

console.log(answer.join("\n"));
