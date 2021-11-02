/**
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted
 * in non-decreasing order.
 */

/**
 * @function {getSortedSqures}
 * @param {Array} array
 * @returns {Array} - returns array with number squres in sorted order
 */

// Soulution 1
// function getSortedSqures(array) {
//   //O(nlogn);
//   const sortedSquares = new Array(array.length).fill(0);
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     sortedSquares[index] = element * element;
//   } //n
//   return sortedSquares.sort((a, b) => a - b); //nlogn
// }
//solution 3
// function getSortedSqures(array) {
//   return array.map((item) => item * item).sort((a, b) => a - b); //nlogn
// }
// solution 2
function getSortedSqures(array) {
  const sortedSquares = new Array(array.length).fill(0);
  let left = 0;
  let right = array.length - 1;
  for (let index = array.length - 1; index >= 0; index--) {
    const leftValue = array[left];
    const rightValue = array[right];
    if (Math.abs(leftValue) > Math.abs(rightValue)) {
      sortedSquares[index] = leftValue * leftValue;
      left++;
    } else {
      sortedSquares[index] = rightValue * rightValue;
      right--;
    } //O(n)
  }
  return sortedSquares;
}

exports.getSortedSqures = getSortedSqures;