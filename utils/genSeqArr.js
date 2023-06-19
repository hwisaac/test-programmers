export default function genSeqArr(n) {
  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    result[i] = i + 1;
  }

  return result;
}
