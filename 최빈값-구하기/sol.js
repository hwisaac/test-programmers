function solution(array) {
  const frequency = new Map();

  // 각 숫자의 빈도를 계산하여 frequency Map에 저장
  for (let num of array) {
    if (frequency.has(num)) {
      frequency.set(num, frequency.get(num) + 1);
    } else {
      frequency.set(num, 1);
    }
  }

  let maxFrequency = 0;
  let mode = -1;

  // frequency Map을 순회하며 최빈값을 찾음
  for (let [num, count] of frequency) {
    if (count > maxFrequency) {
      maxFrequency = count;
      mode = num;
    } else if (count === maxFrequency) {
      // 최빈값이 여러 개인 경우 -1을 반환
      mode = -1;
    }
  }

  return mode;
}
