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
    const newArr = [...arr];

    const mathmin = Math.min(...newArr.slice(s, e + 1).filter((n) => n > k));

    if (mathmin > Number.MAX_SAFE_INTEGER) {
      return -1;
    }
    return mathmin;
  }

const arr = [0, 1, 2, 4, 3];
const queries = [[0, 4, 2],[0, 3, 2],[0, 2, 2]]

solution(arr, queries) //?