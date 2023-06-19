function solution(array) {
  array.sort((a, b) => a - b);
  var answer = array[Math.floor((array.length - 1) / 2)];
  return answer;
}
const array = [-2, -1, 0, -3, -4, 1, 2];
solution(array);
