const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
  
  function solution(l, r) {
    var answer = [];

    for (let i = l; i <= r; i++) {
      if (i % 5 === 0 && isZeroFive(i)) {
        answer.push(i);
      }
    }
    return answer.length === 0 ? [-1] : answer;
  }

function isZeroFive(n) {
  return [...String(n).matchAll(/[^05]/g)].length === 0;
}
