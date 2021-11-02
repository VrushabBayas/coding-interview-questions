const { getSortedSqures } = require("./index");

test("Test 1", () => {
  const ipArray = [1, 2, 3, 5, 6, 8, 9];
  expect(getSortedSqures(ipArray)).toStrictEqual([1, 4, 9, 25, 36, 64, 81]);
});

test("Test 2", () => {
  const ipArray = [1];
  expect(getSortedSqures(ipArray)).toStrictEqual([1]);
});

test("Test 3", () => {
  const ipArray = [1, 2, 3, 4, 5];
  expect(getSortedSqures(ipArray)).toStrictEqual([1, 4, 9, 16, 25]);
});

test("Test 4", () => {
  const ipArray = [1, 2];
  expect(getSortedSqures(ipArray)).toStrictEqual([1, 4]);
});

test("Test 5", () => {
  const ipArray = [0];
  expect(getSortedSqures(ipArray)).toStrictEqual([0]);
});

test("Test 6", () => {
  const ipArray = [-1];
  expect(getSortedSqures(ipArray)).toStrictEqual([1]);
});

test("Test 7", () => {
  const ipArray = [-10, -5, 0, 5, 10];
  expect(getSortedSqures(ipArray)).toStrictEqual([0, 25, 25, 100, 100]);
});
test("Test 8", () => {
  const ipArray = [-3, -1, 0, 4, 7];
  expect(getSortedSqures(ipArray)).toStrictEqual([0, 1, 9, 16, 49]);
});
