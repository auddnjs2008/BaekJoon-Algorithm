const input = require("fs").readFileSync("./input.txt").toString().split(" ");

// 유클리드 호제법 사용
// 2개의 자연수 a,b 에 대하여  a를 b로 나눈 나머지를 r이라 하면 a와 b의 최대공약수는  b와 r의 최대공약수와 같다.
// 이 성질에 따라 b를 r로 나눈 나머지를 r'로 구하고
// r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이되었을 때 나누는 수가 a와 b의 최대공약수이다.

// 최소공배수는 두 수를 곱한것을 최대공약수로 나누어주면 된다.

const gcd = (minNum, maxNum) => {
  return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
};

const lcd = (minNum, maxNum, gcd) => {
  return (minNum * maxNum) / gcd;
};

const gcdValue = gcd(input[0], input[1]);

console.log(gcdValue);
console.log((lcd(input[0], input[1], gcdValue) + "").trim());
