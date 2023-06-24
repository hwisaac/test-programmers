const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
  function combination(n, k) {
    const memo = [];

    function calculateCombination(n, k) {
      if (k === 0 || k === n) return 1;
      if (memo[n] && memo[n][k]) return memo[n][k];

      if (!memo[n]) {
        memo[n] = [];
      }

      const result =
        calculateCombination(n - 1, k - 1) + calculateCombination(n - 1, k);
      memo[n][k] = result;
      return result;
    }

    return calculateCombination(n, k);
  }
  
  // 예시 사용법
  const n = 5;
  const k = 3;
  const result = combination(n, k);
  console.log(result);