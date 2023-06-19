import gcd from './euclidGCD';

export default function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
