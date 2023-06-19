const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [N, ...numbers] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

  function countingSort(arr, maxValue) {
    const count = new Array(maxValue + 1).fill(0);
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }
  
    for (let i = 0; i <= maxValue; i++) {
      while (count[i] > 0) {
        result.push(i);
        count[i]--;
      }
    }
  
    return result;
  }