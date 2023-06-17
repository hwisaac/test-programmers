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

