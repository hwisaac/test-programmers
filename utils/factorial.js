/** k! */
export function factorial(k) {
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

export default function bigFactorial(k) {
  const memo = [];

  function calculateFactorial(k) {
    if (k === 0n || k === 1n) return 1n;
    if (memo[k]) return memo[k];
    const result = calculateFactorial(k - 1n) * k;
    memo[k] = result;
    return result;
  }

  return calculateFactorial(BigInt(k));
}
