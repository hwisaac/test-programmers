import getGCD from './getGCD';

export default function gcdOfNums(nums) {
  return nums.reduce((acc, curr) => getGCD(acc, curr));
}
