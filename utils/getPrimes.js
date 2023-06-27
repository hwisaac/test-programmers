/** 정수 n을 입력받아서 n 이하의 소수를 배열로 반환 하는 함수 */
export default function getPrimes(n) {
  // 초기화: 모든 수를 소수로 가정합니다.
  const primes = new Array(n + 1).fill(true);

  // 0과 1은 소수가 아니므로 false로 설정합니다.
  primes[0] = false;
  primes[1] = false;

  const sqrtN = Math.sqrt(n);
  // Sieve of Eratosthenes 알고리즘을 적용합니다.
  for (let i = 2; i <= sqrtN; i++) {
    if (primes[i]) {
      // i의 배수들을 모두 소수가 아닌 것으로 체크합니다.
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  // primes 배열에서 소수인 수들을 필터링하여 primes 배열을 반환합니다.
  return primes.reduce((result, isPrime, num) => {
    if (isPrime) {
      result.push(num);
    }
    return result;
  }, []);
}
