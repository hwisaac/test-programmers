# 단일 연결 리스트(Singly Linked List)
> 삽입 삭제에 유리하다

- 앞부분에 삽입/제거 작업이 빈번하면 단방향 연결 리스트는 좋은 대안이다.
- 인덱스를 통해 접근해야 할 때 오래걸리므로 Array 를 사용해야 한다.

Insertion | Removal | Searching | Access
--- | --- | ---| --- 
O(1) | O(1) or O(N) | O(N) | O(N)

Array 는 index 관리, 삽입, 제거 에는 시간이 많이 든다. Searching 은 매우 빠르다.

