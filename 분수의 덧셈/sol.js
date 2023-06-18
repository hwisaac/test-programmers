function solution(numer1, denom1, numer2, denom2) {
  // 두 분수의 분모를 최소 공배수로 구함
  const lcm = getLeastCommonMultiple(denom1, denom2);

  // 각 분수의 분자에 최소 공배수를 곱하여 같은 분모로 만듦
  const newNumer1 = numer1 * (lcm / denom1);
  const newNumer2 = numer2 * (lcm / denom2);

  // 분자를 더하고 기약 분수로 나타내기 위해 최대 공약수를 구함
  const sumNumer = newNumer1 + newNumer2;
  const gcd = getGreatestCommonDivisor(sumNumer, lcm);

  // 분자와 분모를 최대 공약수로 나누어 기약 분수로 만듦
  const simplifiedNumer = sumNumer / gcd;
  const simplifiedDenom = lcm / gcd;

  return [simplifiedNumer, simplifiedDenom];
}

// 최대 공약수 계산 함수
function getGreatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }
  return getGreatestCommonDivisor(b, a % b);
}

// 최소 공배수 계산 함수
function getLeastCommonMultiple(a, b) {
  return (a * b) / getGreatestCommonDivisor(a, b);
}
