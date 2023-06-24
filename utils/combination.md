# Combination
조합(Combination)을 구하는 함수를 성능적으로 우수하게 작성하기 위해 동적 계획법(Dynamic Programming)의 개념을 활용할 수 있습니다. 동적 계획법은 중복 계산을 피하고 계산 결과를 메모이제이션(Memoization)하여 성능을 향상시키는 방법입니다. 아래는 JavaScript로 조합을 구하는 함수의 예시입니다.

```javascript
function combination(n, k) {
  const memo = [];

  function calculateCombination(n, k) {
    if (k === 0 || k === n) return 1;
    if (memo[n] && memo[n][k]) return memo[n][k];
    
    if (!memo[n]) {
      memo[n] = [];
    }
    
    const result = calculateCombination(n - 1, k - 1) + calculateCombination(n - 1, k);
    memo[n][k] = result;
    return result;
  }

  return calculateCombination(n, k);
}

// 예시 사용법
const n = 5;
const k = 3;
const result = combination(n, k);
console.log(result); // 10
```
위의 코드는 `combination` 함수를 사용하여 `n`과 `k`의 조합을 구합니다. 함수 내부에서 `memo`라는 배열을 사용하여 중복 계산을 피하고 이전에 계산한 결과를 저장합니다.

`calculateCombination` 함수는 재귀적으로 호출되면서 조합을 계산합니다. k가 0이거나 k와 n이 같을 경우 1을 반환합니다. 이때, `memo` 배열에 이미 계산된 결과가 있다면 그 값을 반환합니다.

만약 `memo` 배열에 저장된 값이 없다면, `calculateCombination` 함수를 재귀적으로 호출하여 조합을 계산하고 그 결과를 `memo` 배열에 저장합니다. 이렇게 중복 계산을 피하고 메모이제이션을 수행하면서 조합을 구합니다.

위의 예시 코드는 동적 계획법을 활용하여 성능적으로 우수한 조합 함수를 구현한 것입니다. 이를 통해 입력된 정수 `n`과 `k`를 사용하여 조합을 구하고, 결과를 반환합니다.

