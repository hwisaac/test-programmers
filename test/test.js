const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
  
  function solution(arr, queries) {
    for ([s, e, k] of queries) {
      for (let i = s; i <= e; i++) {
        if (i % k === 0) {
          arr[i] += 1;
        }
      }
    }
    return arr;
  }

solution([0,1,2,4,3], [[0,4,1], [0,3,2], [0,3,3]]) //?