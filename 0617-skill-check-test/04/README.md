# 후보키
## 문제 설명

프렌즈대학교 컴퓨터공학과 조교인 제이지는 네오 학과장님의 지시로, 학생들의 인적사항을 정리하는 업무를 담당하게 되었다.

그의 학부 시절 프로그래밍 경험을 되살려, 모든 인적사항을 데이터베이스에 넣기로 하였고, 이를 위해 정리를 하던 중에 후보키(Candidate Key)에 대한 고민이 필요하게 되었다.

후보키에 대한 내용이 잘 기억나지 않던 제이지는, 정확한 내용을 파악하기 위해 데이터베이스 관련 서적을 확인하여 아래와 같은 내용을 확인하였다.

- 관계 데이터베이스에서 릴레이션(Relation)의 튜플(Tuple)을 유일하게 식별할 수 있는 속성(Attribute) 또는 속성의 집합 중, 다음 두 성질을 만족하는 것을 후보 키(Candidate Key)라고 한다.
  - 유일성(uniqueness) : 릴레이션에 있는 모든 튜플에 대해 유일하게 식별되어야 한다.
  - 최소성(minimality) : 유일성을 가진 키를 구성하는 속성(Attribute) 중 하나라도 제외하는 경우 유일성이 깨지는 것을 의미한다. 즉, 릴레이션의 모든 튜플을 유일하게 식별하는 데 꼭 필요한 속성들로만 구성되어야 한다.
제이지를 위해, 아래와 같은 학생들의 인적사항이 주어졌을 때, 후보 키의 최대 개수를 구하라.

학번 | 이름 | 전공 | 학년
---|---|---|---
100 | ryan | music | 2
200 | apeach | math | 2
300 | tube | computer |3
400 | con | computer |1
500 | muzi | music |3
600 | apeach | music |2


위의 예를 설명하면, 학생의 인적사항 릴레이션에서 모든 학생은 각자 유일한 "학번"을 가지고 있다. 따라서 "학번"은 릴레이션의 후보 키가 될 수 있다.
그다음 "이름"에 대해서는 같은 이름("apeach")을 사용하는 학생이 있기 때문에, "이름"은 후보 키가 될 수 없다. 그러나, 만약 ["이름", "전공"]을 함께 사용한다면 릴레이션의 모든 튜플을 유일하게 식별 가능하므로 후보 키가 될 수 있게 된다.
물론 ["이름", "전공", "학년"]을 함께 사용해도 릴레이션의 모든 튜플을 유일하게 식별할 수 있지만, 최소성을 만족하지 못하기 때문에 후보 키가 될 수 없다.
따라서, 위의 학생 인적사항의 후보키는 "학번", ["이름", "전공"] 두 개가 된다.

릴레이션을 나타내는 문자열 배열 relation이 매개변수로 주어질 때, 이 릴레이션에서 후보 키의 개수를 return 하도록 solution 함수를 완성하라.

#### 제한사항

- relation은 2차원 문자열 배열이다.
- relation의 컬럼(column)의 길이는 1 이상 8 이하이며, 각각의 컬럼은 릴레이션의 속성을 나타낸다.
- relation의 로우(row)의 길이는 1 이상 20 이하이며, 각각의 로우는 릴레이션의 튜플을 나타낸다.
- relation의 모든 문자열의 길이는 1 이상 8 이하이며, 알파벳 소문자와 숫자로만 이루어져 있다.
- relation의 모든 튜플은 유일하게 식별 가능하다.(즉, 중복되는 튜플은 없다.)

#### 입출력 예

relation|result
---|---
[["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]	| 2

#### 입출력 예 설명
입출력 예 #1
문제에 주어진 릴레이션과 같으며, 후보 키는 2개이다.

## 풀이

```js
function solution(relation) {
  const rowLen = relation.length;
  const colLen = relation[0].length;

  // 모든 열의 조합을 구함
  const allCombinations = [];
  for (let i = 1; i <= colLen; i++) {
    getCombinations([], 0, i);
  }
  function getCombinations(combination, start, length) {
    if (length === 0) {
      allCombinations.push(combination);
      return;
    }
  
    for (let i = start; i < colLen; i++) {
      getCombinations([...combination, i], i + 1, length - 1);
    }
  }
  
  // 유일성을 만족하는 후보 키 찾기
  const uniqueKeys = [];
  for (const combination of allCombinations) {
    const keySet = new Set();
    for (let row = 0; row < rowLen; row++) {
      const key = combination.map((col) => relation[row][col]).join("-");
      keySet.add(key);
    }
    if (keySet.size === rowLen) {
      uniqueKeys.push(combination);
    }
  }

  // 최소성을 만족하는 후보 키 찾기
  const minimalKeys = new Set(uniqueKeys);
  for (let i = 0; i < uniqueKeys.length; i++) {
    for (let j = i + 1; j < uniqueKeys.length; j++) {
      if (
        uniqueKeys[i].every((col) => uniqueKeys[j].includes(col))
      ) {
        minimalKeys.delete(uniqueKeys[j]);
      }
    }
  }

  return minimalKeys.size;
}

```

위의 코드는 주어진 릴레이션에서 후보 키의 개수를 구하는 함수 solution입니다.

- 먼저, `allCombinations` 배열에 모든 열의 조합을 구합니다. `getCombinations` 함수를 재귀적으로 호출하여 가능한 모든 조합을 생성하고, `allCombinations` 배열에 추가합니다.

- `uniqueKeys` 배열을 만들어서 유일성을 만족하는 후보 키를 저장합니다. 각 조합에 대해 모든 행을 탐색하면서 해당 열의 값을 조합하여 키를 만들고, `keySet`에 추가합니다. 이후 `keySet`의 길이가 전체 행의 개수와 같으면 유일성을 만족하는 키이므로 `uniqueKeys`에 추가합니다.

- 최소성을 만족하는 후보 키를 찾기 위해 `minimalKeys` 집합을 만들고, `uniqueKeys`를 순회하면서 중복되는 키를 제거합니다. 두 개의 키가 중복되는지 확인하기 위해 every 함수를 사용하여 두 번째 키의 모든 열이 첫 번째 키에 포함되는지 검사하고, 포함되면 `minimalKeys`에서 제거합니다.

- `minimalKeys` 집합의 크기를 반환하여 후보 키의 개수를 구합니다.

- `getCombinations` 함수는 재귀적으로 가능한 모든 조합을 생성하는 함수입니다. `combination` 배열에 현재 조합의 열 인덱스를 저장하고, start 인덱스부터 시작하여 `length` 길이까지의 조합을 생성합니다. 재귀적으로 호출하여 모든 조합을 구합니다.

이 코드 역시 가능한 모든 조합을 생성하여 유일성과 최소성을 검사하는 방식으로 문제를 해결합니다.

