## 이분검색
> 이분 검색(Binary Search, `O(log N)`) 알고리즘은 **정렬된 배열**에서 특정한 값을 찾는 탐색 알고리즘입니다.

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    if (arr[mid] === target) return mid;

    if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// 사용 예시
const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 7;

const resultIndex = binarySearch(arr, target);
console.log(resultIndex); // 3
```

위의 코드에서는 binarySearch 함수를 정의하여 이분 검색 알고리즘을 구현합니다. 함수는 정렬된 배열 arr과 찾고자 하는 target 값을 인자로 받습니다.

알고리즘의 주요 단계는 다음과 같습니다:

- 초기에 left 변수를 0으로, right 변수를 배열의 길이 - 1로 설정합니다.
- left와 right를 비교하면서 반복문을 수행합니다.
- 중간 인덱스인 mid를 계산합니다.
- arr[mid]의 값이 target과 일치하는지 확인합니다. 일치한다면 mid를 반환합니다.
- arr[mid]의 값이 target보다 작으면 오른쪽 부분 배열을 탐색하기 위해 left 값을 mid + 1로 업데이트합니다.
- arr[mid]의 값이 target보다 크면 왼쪽 부분 배열을 탐색하기 위해 right 값을 mid - 1로 업데이트합니다.
- 반복문을 계속 진행하여 left가 right보다 작거나 같은 동안 탐색을 반복합니다.
- 반복문을 탈출하면 타겟 값이 배열에 존재하지 않는 경우이므로 -1을 반환합니다.

### 이분검색 알고리즘 특징

- 이분 검색 알고리즘은 탐색 범위를 절반씩 줄여가며 탐색하는 특성으로 인해 매우 빠른 속도를 가지고 있습니다. 따라서 대량의 데이터를 효율적으로 탐색하는데 사용됩니다. 그러나 이분 검색을 사용하기 위해서는 정렬된 배열이 필요하므로, 정렬되지 않은 배열에서는 사용할 수 없습니다.
- 이분 검색은 데이터를 효율적으로 탐색하는 알고리즘으로 널리 사용되며, 검색 속도가 중요한 상황에서 많이 활용됩니다.


### 이분검색이 비효율적인 경우
이분 검색을 사용할 수 없거나 비효율적인 경우는 다음과 같습니다:

- **정렬되지 않은 배열**: 이분 검색은 정렬된 배열에서만 사용할 수 있습니다. 정렬되지 않은 배열에서는 이분 검색을 적용하기 전에 배열을 정렬해야 합니다. 정렬 과정이 추가로 필요하므로 시간 복잡도가 증가하게 됩니다.
- **데이터의 삽입과 삭제가 빈번한 경우**: 이분 검색은 배열의 내부 구조가 변하지 않는 가정하에 동작합니다. 데이터의 삽입이나 삭제가 빈번하게 발생하는 경우에는 이분 검색의 장점을 활용할 수 없습니다. 삽입이나 삭제가 발생할 때마다 배열을 재정렬해야 하기 때문에 성능이 저하됩니다.
- **탐색 대상이 조건에 따라 일정한 패턴을 가지는 경우**: 이분 검색은 배열의 중간 요소와 찾고자 하는 값의 비교를 통해 탐색 범위를 줄여가며 값을 찾아내는 방식입니다. 하지만 탐색 대상이 조건에 따라 일정한 패턴을 가지고 있다면, 이분 검색의 장점을 활용하기 어렵습니다. 예를 들어, 배열의 요소들이 균등한 간격으로 증가하는 경우나 특정 규칙에 따라 배열이 구성된 경우에는 이분 검색이 비효율적일 수 있습니다.
- **작은 데이터 크기**: 데이터의 크기가 작은 경우에는 이분 검색보다 선형 검색(linear search)이 더 효율적일 수 있습니다. 작은 데이터 크기에서는 이분 검색의 추가적인 연산 비용이 더 크게 들 수 있으며, 선형 검색이 더 간단하고 빠른 결과를 얻을 수 있습니다.