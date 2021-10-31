function findTheSum(array, targetNum) {
  const nums = {};
  for (const num of array) {
    let temp = targetNum - num;
    if (nums[temp]) {
      return [temp, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

module.exports = findTheSum;
