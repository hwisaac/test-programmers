function solution(s1, s2) {
  const count = {};

  for (const element of s1) {
    count[element] = (count[element] || 0) + 1;
  }

  let totalCount = 0;

  for (const element of s2) {
    if (count[element] > 0) {
      totalCount++;
      count[element]--;
    }
  }

  return totalCount;
}
