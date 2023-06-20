const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [_, ...papers] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(papers) {
  let result;

  return result;
}

solution(papers); //?
