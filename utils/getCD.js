export default function getCommonDivisors(n, m) {
  const commonDivisors = [];
  const gcdValue = gcd(n, m);
  const sqrtGCD = Math.sqrt(gcdValue);

  // 최대공약수의 약수를 구합니다.
  for (let i = 1; i <= sqrtGCD; i++) {
    if (gcdValue % i === 0) {
      commonDivisors.push(i);

      // i가 최대공약수의 제곱근보다 작을 때, 대응되는 큰 약수를 구합니다.
      if (i !== sqrtGCD) {
        commonDivisors.push(gcdValue / i);
      }
    }
  }

  return commonDivisors;
}

// 최대공약수를 구하는 유클리드 호제법을 적용합니다.
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
