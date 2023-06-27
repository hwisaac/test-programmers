export default function getDivisors(n) {
  const divisors = [];
  const sqrtN = Math.floor(Math.sqrt(n));

  // 작은 약수를 구합니다.
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      divisors.push(i);

      // i가 sqrtN보다 작을 때, 대응되는 큰 약수를 구합니다.
      if (i !== sqrtN) {
        divisors.push(n / i);
      }
    }
  }

  return divisors;
}
