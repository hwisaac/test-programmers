팩토리얼(Factorial)을 구하는 함수를 성능적으로 우수하게 작성하기 위해 동적 계획법(Dynamic Programming)의 개념을 활용할 수 있습니다. 동적 계획법은 중복 계산을 피하고 계산 결과를 메모이제이션(Memoization)하여 성능을 향상시키는 방법입니다. 아래는 JavaScript로 팩토리얼을 구하는 함수의 예시입니다.

```javascript
function factorial(k) {
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
```
위의 코드는 `factorial` 함수를 사용하여 `k`의 팩토리얼을 구합니다. 함수 내부에서 `memo`라는 배열을 사용하여 중복 계산을 피하고 이전에 계산한 결과를 저장합니다.

`calculateFactorial` 함수는 재귀적으로 호출되면서 팩토리얼을 계산합니다. `k`가 `0`이거나 `1`일 경우 `1`을 반환합니다. 이때, `memo` 배열에 이미 계산된 결과가 있다면 그 값을 반환합니다.

만약 `memo` 배열에 저장된 값이 없다면, `calculateFactorial` 함수를 재귀적으로 호출하여 팩토리얼을 계산하고 그 결과를 `memo` 배열에 저장합니다. 이렇게 중복 계산을 피하고 메모이제이션을 수행하면서 팩토리얼을 구합니다.

위의 예시 코드는 동적 계획법을 활용하여 성능적으로 우수한 팩토리얼 함수를 구현한 것입니다. 이를 통해 입력된 정수 `k`를 사용하여 팩토리얼을 구하고, 결과를 반환합니다.