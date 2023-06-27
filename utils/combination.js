/** nCk */
export default function combination(n, k) {
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
