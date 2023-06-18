function solution(nums) {
  const maxSpecies = nums.length / 2;
  const set = new Set(nums);

  const speciesCount = set.size;

  if (speciesCount > maxSpecies) {
    return maxSpecies;
  } else {
    return speciesCount;
  }
}

Math.floor(-1.2); //?
