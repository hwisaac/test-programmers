# Euclid 알고리즘을 이용한 gcd

JavaScript에서 두 수의 최대공약수(GCD: Greatest Common Divisor)를 구하는 가장 기본적인 방법은 유클리드 알고리즘을 사용하는 것입니다. 아래에 이를 활용하여 최대공약수를 찾는 함수를 제공하겠습니다.

```javascript
function gcd(a, b) {
    if (b === 0) return a;

    return gcd(b, a % b);
}
```

이 함수는 두 개의 숫자를 인수로 받아 최대공약수를 계산하고 반환합니다. 숫자 a를 b로 나눈 나머지가 0이면, b가 최대공약수입니다. 그렇지 않으면 이 함수는 b와 a % b (a를 b로 나눈 나머지)를 인수로 자신을 재귀적으로 호출합니다. 이 알고리즘은 결국 최대공약수를 찾을 때까지 두 숫자의 나머지를 계속 계산합니다.

함수의 수행 시간은 주어진 두 숫자의 크기와 상관없이 두 숫자의 최대공약수를 찾기 위해 필요한 재귀 호출의 횟수에 의해 결정됩니다.

유클리드 알고리즘이 상당히 효율적인 이유는, 각 재귀 호출에서 최소한 하나의 숫자가 절반 이상 줄어들기 때문입니다. 이로 인해 이 알고리즘의 시간 복잡도는 **로그 성능**을 보입니다. 즉, 큰 숫자에 대해서도 매우 빠르게 동작합니다.

## euclidGCD vs getGCD

 getGCD와 euclidGCD는 모두 유클리드 호제법을 사용하여 최대공약수(GCD)를 계산하는 함수입니다. 하지만 두 함수의 구현 방식이 약간 다릅니다. 성능 비교를 위해 각 함수의 성능 측정을 수행해보겠습니다.

```javascript
// getGCD 함수 성능 측정
const startTime1 = performance.now();
getGCD(123456789, 987654321);
const endTime1 = performance.now();
const executionTime1 = endTime1 - startTime1;

// euclidGCD 함수 성능 측정
const startTime2 = performance.now();
euclidGCD(123456789, 987654321);
const endTime2 = performance.now();
const executionTime2 = endTime2 - startTime2;

console.log(`getGCD 함수 실행 시간: ${executionTime1}ms`); // 0.1ms 약간 더 빠른듯?
console.log(`euclidGCD 함수 실행 시간: ${executionTime2}ms`); // 0.1ms
```

실행 결과는 다양한 요인에 따라 다를 수 있으므로 참고용으로 사용하시기 바랍니다. 일반적으로는 두 함수의 성능 차이는 미미할 것으로 예상됩니다. 유클리드 호제법 자체가 최적화된 알고리즘이기 때문에 성능 차이가 크게 나지 않습니다.

그러나 `euclidGCD` 함수가 재귀적으로 자기 자신을 호출하기 때문에 재귀 깊이가 깊어질 경우 스택 오버플로우가 발생할 수 있습니다. 반면 `getGCD` 함수는 반복문을 사용하여 구현되었기 때문에 재귀 깊이의 제한이 없고, 재귀적 호출에 따른 오버헤드가 없습니다. 따라서 **매우 큰 숫자의 최대공약수를 계산해야 할 때는 `getGCD` 함수가 조금 더 효율적일 수 있습니다.**

결론적으로, 대부분의 상황에서 두 함수의 성능 차이는 미비하며 유의미한 차이가 나지 않을 것으로 예상됩니다. 따라서 성능 측면에서 큰 차이가 없다면 가독성과 코드의 목적에 따라 어떤 함수를 선택하셔도 됩니다.