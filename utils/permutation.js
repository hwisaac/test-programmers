export default function permutation(n, k) {
  const result = [];

  function backtrack(temp, used) {
    if (temp.length === k) {
      result.push([...temp]);
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (used[i]) continue;

      temp.push(i);
      used[i] = true;
      backtrack(temp, used);
      temp.pop();
      used[i] = false;
    }
  }

  backtrack([], {});
  return result.length;
}

// 예시 사용법
const n = 4;
const k = 3;
const result = permutation(n, k);
console.log(result); // 24
