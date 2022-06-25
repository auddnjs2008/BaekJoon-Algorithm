const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const goalChannel = +input.shift();
const brokenNumber = +input.shift();
let curChannel = 100;
const brokenBtns = input.split(" ").map((v) => +v);
let push = 0;
let pushNumber = "";

for (let i = 0; i < goalChannel.length; i++) {
  let number = +goalChannel[i];

  if (!brokenBtns.include(number)) {
    pushNumber += number;
  } else {
  }
}
