/** 에라토스테네스의 체(Sieve of Eratosthenes)를 이용한 소수 판정 */
export default function isPrime(n) {
  if (n < 2) {
    return false;
  }

  // 초기화: 0부터 n까지 모든 수를 소수로 가정합니다.
  const primes = new Array(n + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  // Sieve of Eratosthenes 알고리즘을 적용하여 소수를 판정합니다.
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes[n];
}
