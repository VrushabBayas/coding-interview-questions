const { nonConstructibleChange } = require("./index");

test('Should return empty array if pair not found', () => {
  const result=4;
  expect(nonConstructibleChange([1,2,5])).toStrictEqual(result)
});
test('Should return empty array if pair not found', () => {
  const result=20;
  expect(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toStrictEqual(result)
});
test('Should return empty array if pair not found', () => {
  const result=55;
  expect(nonConstructibleChange( [1, 5, 1, 1, 1, 10, 15, 20, 100])).toStrictEqual(result)
});
test('Should return empty array if pair not found', () => {
  const result=3;
  expect(nonConstructibleChange([6, 4, 5, 1, 1, 8, 9])).toStrictEqual(result)
});

