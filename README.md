# 알고리즘 공부

## int 대신 bigint 를 써야 하는 경우는 언제일까?

`bigint`는 JavaScript의 숫자 데이터 타입 중 하나로, 정수형을 표현하는 데 사용됩니다. `bigint`는 정수의 크기에 제한이 없으며, 표현 가능한 범위가 상당히 큽니다.

`bigint`를 사용해야 하는 경우는 일반적으로 다음과 같은 상황입니다:

- 매우 큰 정수를 다룰 때: JavaScript의 기본 숫자 타입인 `number`는 **64비트 부동소수점 형식을 사용**하므로, 표현 가능한 정수의 범위에 제한이 있습니다. `bigint`를 사용하면 매우 큰 정수를 정확하게 표현할 수 있습니다.

> JavaScript의 `number` 데이터 타입은 64비트 부동소수점 형식을 사용하며, **53비트가 정수 부분을 표현하고 나머지 비트가 소수점 및 지수를 표현합니다.** 이로 인해 `number`로 표현 가능한 정수의 범위는 대략 **-9,007,199,254,740,992**부터 **9,007,199,254,740,992**까지입니다. 이 범위를 벗어나는 정수는 `number`로 정확하게 표현할 수 없으며, 부동소수점 형식으로 인해 정밀도 손실이 발생할 수 있습니다.


- 정밀도가 요구되는 계산: `bigint`는 정수에 대해 정밀한 연산을 수행할 수 있습니다. 예를 들어, 매우 큰 정수의 나눗셈이나 거듭제곱 연산을 정확하게 수행해야 할 때 `bigint`를 사용할 수 있습니다.
- 큰 정수를 다루는 암호화나 해시 알고리즘: 보안 관련 작업에서는 종종 매우 큰 정수를 다루어야 합니다. `bigint`를 사용하면 암호화 알고리즘, 해시 함수 등에서 큰 정수를 표현하고 조작할 수 있습니다.
예시로, 매우 큰 정수를 다루는 경우 `bigint`를 사용할 수 있습니다.

```javascript
const largeNumber = BigInt('123456789012345678901234567890');
console.log(largeNumber); // 123456789012345678901234567890n

const result = largeNumber ** 2n;
console.log(result); // 152415787532388367504953515625361987875019051701600625822754882812100900n
```

위의 코드에서는 `BigInt()` 함수를 사용하여 매우 큰 정수를 생성하고, `**` 연산자를 사용하여 제곱을 계산합니다. 이처럼 `bigint`를 사용하면 매우 큰 정수를 정확하게 표현하고 다룰 수 있습니다.

## 실수의 소수점 버리기 연산 속도 비교 ()

![](readMeImages/2023-06-20-13-38-17.png)

> `~~` > `Math.floor` > `parseInt` <br />
> 순으로 빠르다.

## 문자열을 배열로 바꿀 때 속도 비교
다음 코드는 모두 문자열 `const inputString = "Hello, World!"` 을 배열로 바꾼다.

- `Array.from(inputString)`
- `[...inputString]`
- `inputString.split('')`

성능측정

```js
const inputString = "Hello, World!";

// Array.from(str) 성능 측정
console.time("Array.from");
for (let i = 0; i < 100000; i++) {
  Array.from(inputString);
}
console.timeEnd("Array.from");

// [...str] 성능 측정
console.time("Spread operator");
for (let i = 0; i < 100000; i++) {
  [...inputString];
}
console.timeEnd("Spread operator");

// str.split('') 성능 측정
console.time("str.split");
for (let i = 0; i < 100000; i++) {
  inputString.split('');
}
console.timeEnd("str.split");
```

크롬:
![](readMeImages/2023-06-20-14-13-34.png)


nodejs:
![](readMeImages/2023-06-20-14-14-33.png)

## 배열 만들기

**10*10 2차원 배열 ( 내용은 0 으로 채워짐 )**
```js
const ARR_SIZE = 10;
const arr = new Array(ARR_SIZE).fill(0).map(() => new Array(ARR_SIZE).fill(0));
```

> 주의: 다음과 같이 작성하면 안된다. `fill` 인자로 `mutable` 인자를 전달하지 않도록 주의

```js
const ARR_SIZE = 10;
const arr = new Array(ARR_SIZE).fill(new Array(ARR_SIZE).fill(0))
```


## 제곱 연산하기 비교 : `**` vs `Math.pow`

> `**` 연산자가 더 빠르다.


```js
function benchmarkMathPow(x, y, iterations) {
  console.time('Math.pow');
  for (let i = 0; i < iterations; i++) {
    Math.pow(x, y);
  }
  console.timeEnd('Math.pow');
}

function benchmarkExponentiationOperator(x, y, iterations) {
  console.time('**');
  for (let i = 0; i < iterations; i++) {
    x ** y;
  }
  console.timeEnd('**');
}

// 벤치마크 테스트 실행
const x = 2;
const y = 10;
const iterations = 100000000;

benchmarkMathPow(x, y, iterations); // 크롬: 82.3ms, nodeJS: 2.25ms
benchmarkExponentiationOperator(x, y, iterations); // 크롬: 78.87 ms , nodeJS: 2.130s

```