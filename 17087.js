const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [number, cur] = input[0].split(" ");
let gcdValue;
const brothers = input[1].split(" ");

const gcd = (one, two) => {
  return one % two === 0 ? two : gcd(two, one % two);
};

for (let i = 0; i < brothers.length; i++) {
  if (brothers.length === 1) break;
  const curValue = Math.abs(+brothers[i] - +cur);

  if (!gcdValue) gcdValue = gcd(Math.abs(+brothers[1] - +cur), curValue);
  else gcdValue = gcd(curValue, gcdValue);
}

console.log(gcdValue ? gcdValue : Math.abs(+brothers[0] - +cur));
