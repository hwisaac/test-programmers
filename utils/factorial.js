export default function factorial(k) {
  const memo = [];

  function calculateFactorial(k) {
    if (k === 0 || k === 1) return 1;
    if (memo[k]) return memo[k];

    const result = k * calculateFactorial(k - 1);
    memo[k] = result;
    return result;
  }

  return calculateFactorial(k);
}

// 예시 사용법
const k = 4;
const result = factorial(k);
console.log(result); // 24
