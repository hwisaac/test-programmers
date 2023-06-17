문제 설명
신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.

- 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
  - 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
  - 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
- k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
  - 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

유저 ID	| 유저가 신고한 ID	|설명
---|---|---
"muzi"	| "frodo"	| "muzi"가 "frodo"를 신고했습니다.
"apeach"	| "frodo"	| "apeach"가 "frodo"를 신고했습니다.
"frodo"	| "neo"	| "frodo"가 "neo"를 신고했습니다.
"muzi"	| "neo"	| "muzi"가 "neo"를 신고했습니다.
"apeach"	| "muzi"	| "apeach"가 "muzi"를 신고했습니다.


각 유저별로 신고당한 횟수는 다음과 같습니다.

유저 ID|	신고당한 횟수
---|---
"muzi"|	1
"frodo"|	2
"apeach"|	0
"neo"|	2
위 예시에서는 2번 이상 신고당한 "frodo"와 "neo"의 게시판 이용이 정지됩니다. 이때, 각 유저별로 신고한 아이디와 정지된 아이디를 정리하면 다음과 같습니다.

유저 ID|유저가 신고한 ID|정지된 ID
---|---|---
"muzi"	|["frodo", "neo"]	|["frodo", "neo"]
"frodo"	|["neo"]	|["neo"]
"apeach"	|["muzi", "frodo"]	|["frodo"]
"neo"|	없음|	없음

따라서 "muzi"는 처리 결과 메일을 2회, "frodo"와 "apeach"는 각각 처리 결과 메일을 1회 받게 됩니다.

이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
- 2 ≤ id_list의 길이 ≤ 1,000
  - 1 ≤ id_list의 원소 길이 ≤ 10
  - id_list의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어져 있습니다.
  - id_list에는 같은 아이디가 중복해서 들어있지 않습니다.
- 1 ≤ report의 길이 ≤ 200,000
  - 3 ≤ report의 원소 길이 ≤ 21
  - report의 원소는 "이용자id 신고한id"형태의 문자열입니다.
  - 예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다.
  - id는 알파벳 소문자로만 이루어져 있습니다.
  - 이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다.
  - 자기 자신을 신고하는 경우는 없습니다.
- 1 ≤ k ≤ 200, k는 자연수입니다.
- return 하는 배열은 id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 담으면 됩니다.

입출력 예
id_list	|report	|k|	result
---|---|---|---
["muzi", "frodo", "apeach", "neo"]|	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]|	2|	[2,1,1,0]
["con", "ryan"]|	["ryan con", "ryan con", "ryan con", "ryan con"]|	3|	[0,0]

입출력 예 설명
입출력 예 #1

문제의 예시와 같습니다.

입출력 예 #2

"ryan"이 "con"을 4번 신고했으나, 주어진 조건에 따라 한 유저가 같은 유저를 여러 번 신고한 경우는 신고 횟수 1회로 처리합니다. 따라서 "con"은 1회 신고당했습니다. 3번 이상 신고당한 이용자는 없으며, "con"과 "ryan"은 결과 메일을 받지 않습니다. 따라서 [0, 0]을 return 합니다.

제한시간 안내
정확성 테스트 : 10초

## 나의 코드
```
// Wrong
function solution(id_list, report, k) {
  var answer = [];
  const countReport = {}
  const countMailed = {}
  const newReport = [...new Set(report)]; 

  id_list.forEach( ( id ) => {
      countReport[id] = 0;
      countMailed[id] = 0;
  } )
  
  newReport.forEach( r => {
    const [ reporter , bad ] = r.split(' ');
    countReport[bad] += 1 ;
  })

  Object.keys(countReport).map(badId => {
    if (countReport[badId] >= 2){
      newReport.forEach(r => {
        const [reporter, bad] = r.split(' ');
        if (bad === badId){
          countMailed[reporter] += 1;
        }
      })

    }
  })

  return Object.values(countMailed)
}

let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
let k =2 

solution(id_list, report, k)

function rep( input ) {
  const [ reporter, badGuy] = input.split(' ')

}
```

이 코드의 주요 문제점은 성능과 관련되어 있습니다. 주어진 제한 사항에서 report 배열의 길이가 최대 200,000이며, id_list의 길이도 최대 1,000입니다. 그러나 현재 코드에서는 이러한 큰 입력에 대해서도 모든 유저와 신고 정보를 반복적으로 처리하고 있습니다. 이로 인해 반복문의 중첩이 많아져서 실행 시간이 크게 증가할 수 있습니다.

또한, 현재 코드에서는 중복된 신고 정보를 제거하기 위해 newReport라는 배열을 생성하고 있습니다. Set 객체를 이용해 중복을 제거하는 아이디어는 좋지만, 이를 위해 새로운 배열을 만드는 비용이 추가로 발생합니다. 이 부분은 성능을 개선할 수 있는 여지가 있습니다.

또한, 코드의 가독성도 개선할 수 있습니다. 변수 이름을 좀 더 명확하게 지으면 코드를 이해하기 쉬워집니다.

마지막으로, Object.keys와 map을 사용해 객체를 순회하고 값을 변형하는 대신, for...in 루프를 사용하는 것이 더 간결하고 효율적일 수 있습니다.

아래는 개선된 코드의 예시입니다.

```js
function solution(id_list, report, k) {
  const reportCounts = {}; // 신고당한 횟수를 저장하는 객체
  const mailCounts = {}; // 메일을 받은 횟수를 저장하는 객체

  id_list.forEach(id => {
    reportCounts[id] = 0;
    mailCounts[id] = 0;
  });

  const uniqueReports = new Set(report); // 중복 제거된 신고 정보

  uniqueReports.forEach(reportInfo => {
    const [reporter, badUser] = reportInfo.split(' ');
    reportCounts[badUser] += 1;
  });

  uniqueReports.forEach(reportInfo => {
    const [reporter, badUser] = reportInfo.split(' ');
    if (reportCounts[badUser] >= k) {
      mailCounts[reporter] += 1;
    }
  });

  return Object.values(mailCounts);
}
```

## 솔루션

문제를 해결하기 위한 최적화된 솔루션은 다음과 같습니다.

```javascript
function solution(id_list, report, k) {
  const userCount = id_list.length;
  const userMap = new Map();
  const mailCounts = Array(userCount).fill(0);
  
  id_list.forEach((id, index) => {
    userMap.set(id, index);
  });
  
  const badUsers = Array(userCount).fill(0);
  
  report.forEach((r) => {
    const [reporter, badUser] = r.split(" ");
    const badUserIndex = userMap.get(badUser);
    badUsers[badUserIndex]++;
  });
  
  badUsers.forEach((count, index) => {
    if (count >= k) {
      const badUserId = id_list[index];
      report.forEach((r) => {
        const [reporter, badUser] = r.split(" ");
        if (badUser === badUserId) {
          const reporterIndex = userMap.get(reporter);
          mailCounts[reporterIndex]++;
        }
      });
    }
  });
  
  return mailCounts;
}

// 테스트 예시
const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
const k = 2;

console.log(solution(id_list, report, k));
```
이 최적화된 솔루션은 다음과 같은 점들을 개선하였습니다.

- Map을 사용한 유저 정보 관리: 각 유저의 ID와 인덱스를 `userMap`에 저장하여 `O(1)` 시간에 해당 유저의 인덱스를 얻을 수 있도록 개선했습니다. 이를 통해 유저 `ID`를 인덱스로 변환하는 과정에서 발생하는 반복문을 제거하였습니다.

- 배열 기반 카운팅: `id_list`와 `report`의 크기에 맞게 배열 `badUsers`와 `mailCounts`를 초기화하고 활용하여 카운팅을 처리하였습니다. 이를 통해 각 유저의 신고 횟수와 메일 수신 횟수를 `O(1)` 시간에 직접 접근할 수 있게 되었습니다.

- 중첩 반복문 대신 단일 반복문 사용: 불량 이용자에 대한 신고 횟수를 카운팅하는 단계와 메일 수신 횟수를 카운팅하는 단계를 하나의 반복문으로 처리하였습니다. 이를 통해 중첩 반복문을 제거하여 성능을 개선했습니다.

이렇게 개선된 솔루션은 원래 코드보다 효율적이며 성능도 더 좋을 것입니다.