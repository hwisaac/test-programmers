function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const equal = [];
  const greater = [];

  for (let num of arr) {
    if (num < pivot) {
      less.push(num);
    } else if (num > pivot) {
      greater.push(num);
    } else {
      equal.push(num);
    }
  }

  return quickSort(greater).concat(equal, quickSort(less));
}

// 예시 사용법
const numbers = [3, 3];
const sortedNumbers = quickSort(numbers);
console.log(sortedNumbers);

function quickSort2(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const equal = [];
  const greater = [];

  for (let num of arr) {
    if (num < pivot) {
      less.push(num);
    } else if (num > pivot) {
      greater.push(num);
    } else {
      equal.push(num);
    }
  }
  return [...quickSort2(less), ...equal, ...quickSort2(greater)];
}
const sortedNumbers2 = quickSort2(numbers);
console.log(sortedNumbers2);
