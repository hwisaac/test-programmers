const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  let result = '';
  const maxLen = Math.max(...input.map((word) => word.length));

  for (let i = 0; i < maxLen; i++) {
    for (word of input) {
      if (word[i]) {
        result += word[i];
      }
    }
  }
  return result;
}
console.log(solution(input));
