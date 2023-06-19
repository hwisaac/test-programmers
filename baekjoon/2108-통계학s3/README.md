## 문제
수를 처리하는 것은 통계학에서 상당히 중요한 일이다. 통계학에서 N개의 수를 대표하는 기본 통계값에는 다음과 같은 것들이 있다. 단, N은 홀수라고 가정하자.

- 산술평균 : N개의 수들의 합을 N으로 나눈 값
- 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
- 최빈값 : N개의 수들 중 가장 많이 나타나는 값
- 범위 : N개의 수들 중 최댓값과 최솟값의 차이
N개의 수가 주어졌을 때, 네 가지 기본 통계값을 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 수의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 단, N은 홀수이다. 그 다음 N개의 줄에는 정수들이 주어진다. 입력되는 정수의 절댓값은 4,000을 넘지 않는다.

## 출력
첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.

둘째 줄에는 중앙값을 출력한다.

셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.

넷째 줄에는 범위를 출력한다.

## 예제 입력 1 
```
5
1
3
8
-2
2
```

## 예제 출력 1 

```
2
2
1
10
```

## 예제 입력 2 
```
1
4000
```

## 예제 출력 2 

```
4000
4000
4000
0
```

예제 입력 3 
```
5
-1
-2
-3
-1
-2
```

예제 출력 3 
```
-2
-2
-1
2
```

예제 입력 4 
```
3
0
0
-1
```

예제 출력 4 
```
0
0
0
1
```
(0 + 0 + (-1)) / 3 = -0.333333... 이고 이를 첫째 자리에서 반올림하면 0이다. -0으로 출력하면 안된다.


## 알고리즘 분류
- 수학
- 구현
- 정렬

## 풀이

```js
const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let [N, ...numbers] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(N, numbers) {
  // 1. 산술평균 계산
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  const mean = Math.round(sum / N);

  // 2. 중앙값 계산
  const sorted = numbers.sort((a, b) => a - b);
  const median = sorted[Math.floor(N / 2)];

  // 3. 최빈값 계산
  const frequency = new Map();
  for (let i = 0; i < N; i++) {
    const num = numbers[i];
    frequency.set(num, frequency.has(num) ? frequency.get(num) + 1 : 1);
  }
  const maxFrequency = Math.max(...frequency.values());
  const modes = [];
  for (const [key, value] of frequency) {
    if (value === maxFrequency) {
      modes.push(key);
    }
  }
  const mode = modes.length > 1 ? modes[1] : modes[0];

  // 4. 범위 계산
  const range = Math.max(...numbers) - Math.min(...numbers);

  // 결과 반환
  return [mean, median, mode, range];
}

// 결과 출력
console.log(solution(N, numbers).join(' '));
```

해당 함수에서는 다음과 같은 과정을 수행합니다:

- 산술평균 계산: 입력된 수들의 합을 수의 개수로 나눈 값을 구합니다.
- 중앙값 계산: 수들을 오름차순으로 정렬한 뒤, 중앙에 위치하는 값을 구합니다.
- 최빈값 계산: 입력된 수들의 빈도를 계산하여 가장 많이 나타나는 값과 그 개수를 구합니다. 최빈값이 여러 개인 경우 두 번째로 작은 값을 선택합니다.
- 범위 계산: 입력된 수들 중 최댓값과 최솟값의 차이를 구합니다.
각각의 계산 결과를 배열로 묶어 반환합니다.