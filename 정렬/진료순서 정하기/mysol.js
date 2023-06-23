function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a); // 76,24,3
  return emergency.map((v) => sorted.indexOf(v) + 1);
}

const emergency = [3, 76, 24];

solution(emergency); // [3,1,2]
