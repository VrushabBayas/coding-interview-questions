const findTheSum = require('./targetSum');

test('Should return empty array if pair not found', () => {
  const result=[];
  expect(findTheSum([1,3,5,9],15)).toStrictEqual(result)
})
test('Should return  array of pair if found', () => {
  const result=[3,5];
  expect(findTheSum([1,3,5,9],8)).toStrictEqual(result)
})
