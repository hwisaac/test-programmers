# 배열 만들기 2
## 문제 설명
정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

## 제한사항
1 ≤ l ≤ r ≤ 1,000,000
## 입출력 예
l|r|result
---|---|---
5|555|[5, 50, 55, 500, 505, 550, 555]
10|20|[-1]
## 입출력 예 설명
입출력 예 #1

- 5 이상 555 이하의 0과 5로만 이루어진 정수는 작은 수부터 5, 50, 55, 500, 505, 550, 555가 있습니다. 따라서 [5, 50, 55, 500, 505, 550, 555]를 return 합니다.
입출력 예 #2

- 10 이상 20 이하이면서 0과 5로만 이루어진 정수는 없습니다. 따라서 [-1]을 return 합니다.


## 내 풀이

```js
function solution(l, r) {
  var answer = [];

  for (let i = l; i <= r; i++) {
    if (i % 5 === 0 && isZeroFive(i)) {
      answer.push(i);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

function isZeroFive(n) {
  return [...String(n).matchAll(/[^05]/g)].length === 0;
}

```
몇 가지 문제점과 개선할 점이 있습니다:

정규식 사용의 비효율성: isZeroFive 함수에서 사용된 정규식 /[^05]/g은 0과 5를 제외한 다른 숫자를 찾기 위해 사용됩니다. 그러나 이 방식은 정규식을 사용하는 비효율적인 방법입니다. 대신에 간단하게 숫자를 문자열로 변환한 후에 문자열 메서드인 includes를 사용하여 0과 5가 아닌 문자를 찾을 수 있습니다.

문자열 변환: isZeroFive 함수에서 String(n)을 사용하여 숫자를 문자열로 변환하는 방식은 비효율적입니다. 대신에 숫자를 직접 사용하고, 나머지 연산자를 이용하여 자릿수를 확인하는 방법이 더 간단하고 성능적으로 우수합니다.

문자열 메서드 사용: isZeroFive 함수에서 matchAll을 사용하여 정규식에 일치하는 모든 문자열을 찾은 후 배열의 길이를 계산하는 방식은 복잡합니다. 대신에 String(n)을 사용하여 숫자를 문자열로 변환한 후, includes 메서드를 사용하여 0과 5가 아닌 문자가 있는지 확인하는 것이 간단하고 성능적으로 우수합니다.

개선된 코드는 다음과 같습니다:

```javascript
function solution(l, r) {
  const answer = [];

  for (let i = l; i <= r; i++) {
    if (i % 5 === 0 && isZeroFive(i)) {
      answer.push(i);
    }
  }

  return answer.length === 0 ? [-1] : answer;
}

function isZeroFive(n) {
  while (n > 0) {
    const digit = n % 10;
    if (digit !== 0 && digit !== 5) {
      return false;
    }
    n = Math.floor(n / 10);
  }

  return true;
}
```

개선된 코드는 정규식을 사용하지 않고, 숫자를 직접 처리하여 자릿수를 확인하고 0과 5가 아닌 경우를 필터링합니다. 이를 통해 코드의 성능과 가독성이 개선됩니다.
