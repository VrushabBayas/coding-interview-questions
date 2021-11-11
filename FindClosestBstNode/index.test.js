const { findClosestValueInBst, Node } = require("./index");

it("Test Case #1", function () {
  const root = new Node(10);
  root.left = new Node(5);
  root.left.left = new Node(2);
  root.left.left.left = new Node(1);
  root.left.right = new Node(5);
  root.right = new Node(15);
  root.right.left = new Node(13);
  root.right.left.right = new Node(14);
  root.right.right = new Node(22);
  const expected = 13;
  expect(findClosestValueInBst(root, 12, root.value)).toStrictEqual(expected);
});
