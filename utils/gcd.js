export default function euclidGCD(a, b) {
  return b === 0 ? a : euclidGCD(b, a % b);
}
