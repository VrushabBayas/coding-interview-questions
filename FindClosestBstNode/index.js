class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findClosestValueInBst = (tree, target, closest) => {
  let currentNode = tree;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      break;
    }
  }

  return closest;
};

module.exports = { findClosestValueInBst, Node };
