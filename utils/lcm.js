import gcd from './gcd';

export default function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
