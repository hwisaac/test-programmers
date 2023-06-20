export default function isPalindrome(word) {
  let l = 0;
  let r = word.length - 1;

  while (l < r) {
    if (word[l] !== word[r]) return false;
    l++;
    r--;
  }
  return true;
}
