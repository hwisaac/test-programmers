const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
  
  function solution(arr, queries) {
    var answer = [];
    for ([s, e, k] of queries) {
      let min = run(arr, s, e, k);
      answer.push(min);
    }
    return answer;
  }

function run(arr, s, e, k) {
  let min = -1;
  for (let i = s; i <= e; i++) {
    if (k < arr[i]) {
      min = arr[i] < min ? arr[i] : min;
    }
  }
  return min;
}