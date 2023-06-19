const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [N, ...numbers] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(N, numbers) {
  const result = [];
  const limit = Math.min(...numbers);

  for (let m = 2; m < limit; m++) {
    if (isTheM(m, numbers)) {
      result.push(m);
    }
  }

  return result;
}

function isDivided(m, x) {
  return Math.abs(x) % m === 0;
}
function isEqual(m, a, b) {
  return isDivided(m, a - b);
}
function isTheM(m, numbers) {
  let l = 0;
  let r = 1;

  while (r < numbers.length) {
    if (!isEqual(m, numbers[l], numbers[r])) return false;
    l++;
    r++;
  }
  return true;
}

console.log(solution(N, numbers).join(' '));
