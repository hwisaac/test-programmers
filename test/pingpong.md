## 문제
3. 핑퐁 게임
    
일련의 숫자가 있고, 이 숫자는 1씩 증가, 또는 감소한다. N 번째의 숫자가 있을 시에, 이 숫자가 7의 배수(7, 14, 21)이거나 7이란 숫자를 포함할 시에 (7, 17, 27) 방향을 바꾼다.

즉, 1, 2, 3, 4, 5, 6, [7], 6, 5, 4, 3, 2, 1, [0], 1, 2, [3], 2, 1, 0, [-1], 0, 1

과 같이 숫자는 진행한다. (첫번째 7은 7번째, 두번째 0은 14번째, 세번째 3은 17번째, 네번째 -1은 21번째)

다음의 제약 하에 pingpong(x)의 함수를 작성하라. 예시의 인풋과 아웃풋은 다음과 같다.

pingpong(8) = 6

pingpong(22)=0

pingpong(68)=2

pingpong(100)=2

- For Loop / While 또는 Array를 쓰지 말 것
- Assignment 를 쓰지 말 것. 즉, 변수 할당을 하지 말 것.
- 스트링을 쓰지 말 것.

## 풀이

```js
function pingpong(n) {
    function helper(i, val, direction) {
        if (i > n) {
            return val;
        } else if (i % 7 == 0 || i.toString().includes('7')) {
            return helper(i + 1, val - direction, -direction);
        } else {
            return helper(i + 1, val + direction, direction);
        }
    }

    return helper(1, 1, 1);
}

```

하지만, 제약조건 중에서 "스트링을 쓰지 말 것" 이라는 것이 있는데, 위의 코드에서 i.toString().includes('7') 부분은 숫자에 '7'이 포함되어 있는지를 확인하기 위해 숫자를 문자열로 변환하는 작업을 하고 있습니다. 이를 제거하려면 더 복잡한 방법을 사용해야 하는데, 그러한 방법은 아래와 같습니다:

```javascript
function pingpong(n) {
    function has7(i) {
        if (i < 7) {
            return false;
        } else if (i % 10 === 7) {
            return true;
        } else {
            return has7(Math.floor(i / 10));
        }
    }

    function helper(i, val, direction) {
        if (i > n) {
            return val;
        } else if (i % 7 == 0 || has7(i)) {
            return helper(i + 1, val - direction, -direction);
        } else {
            return helper(i + 1, val + direction, direction);
        }
    }

    return helper(1, 1, 1);
}
```

위의 코드에서 `has7` 함수는 주어진 숫자가 `7`을 포함하는지를 재귀적으로 확인하며, 이 함수는 문자열 변환 없이 `7`을 포함하는지 확인할 수 있게 해줍니다.


