# Trial Division 을 이용한 소수 판정

```js
function isPrime(n) {
  if (n < 2 || n % 2 === 0) {
    return false;
  }

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
```

위의 소수를 판정하는 함수는 **"Trial Division"** 알고리즘을 적용한 것입니다. **Trial Division**은 가장 간단한 소수 판정 알고리즘 중 하나입니다. 주어진 정수 n에 대해 2부터 n의 제곱근까지의 수로 나누어보면서 나누어지는지를 확인합니다.

Trial Division은 간단하고 이해하기 쉬우며 작은 수의 소수 판정에는 효과적인 알고리즘입니다. 그러나 `n`이 크고 소수 여부를 반복적으로 판정해야 할 때는 다른 효율적인 알고리즘을 사용하는 것이 좋습니다.


# 에라토스테네스의 체로 소수 판정하기

`n`이 큰 경우에도 효율적으로 소수 여부를 판정하기 위해 소수 판정 알고리즘 중 하나인 **"Sieve of Eratosthenes"**를 사용할 수 있습니다. 이 알고리즘은 주어진 범위 내의 모든 소수를 찾는데 효율적입니다. 아래는 JavaScript로 **Sieve of Eratosthenes** 알고리즘을 적용하여 소수를 판정하는 함수의 예시입니다.

```javascript
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  const primes = new Array(n + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes[n];
}

// 예시 사용법
const n = 13;
const result = isPrime(n);
console.log(result); // true
```

1. 위의 코드에서 `isPrime` 함수는 주어진 정수 `n`이 소수인지 판정합니다. 먼저, `n`이 `2`보다 작으면 소수가 아니므로 `false`를 반환합니다.

2. primes 배열을 초기화하여 0부터 `n`까지 모든 수를 소수로 가정합니다. `primes[i]`가 `true`인 경우 `i`는 소수로 간주합니다. 초기값으로 `0`과 `1`을 `false`로 설정하여 소수가 아니라고 표시합니다.

3. Sieve of Eratosthenes 알고리즘을 적용하여 소수를 판정하는데, `2`부터 `sqrt(n)`까지의 수에 대해 반복합니다. `primes[i]`가 `true`인 경우에만 내부 반복문을 실행하여 `i`의 배수들을 소수가 아니라고 표시합니다. 이렇게 `primes` 배열을 업데이트하면서 소수를 판정합니다.

4. 마지막으로 `primes[n]` 값을 반환하여 `n`이 소수인지를 판정합니다.

Sieve of Eratosthenes 알고리즘은 주어진 범위 내의 모든 소수를 효율적으로 판정하는 방법이므로, 큰 수에 대해서도 빠르게 소수를 판정할 수 있습니다. 위의 예시 코드는 입력된 `n`이 소수인지를 판정하는 `isPrime` 함수를 구현한 것입니다.