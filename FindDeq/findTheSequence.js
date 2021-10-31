function findTheSubSeq(arr1, arr2) {
  let i = 0;
  j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      j += 1;
    }
    i += 1;
  }

  if (j == arr2.length) {
    return true;
  }

  return false;
}
// let res=findTheSubSeq([1,-2,6,7,15],[6,15]);
let res=findTheSubSeq([1,-2,6,7,15],[15,-2]);
console.log('res: ', res);