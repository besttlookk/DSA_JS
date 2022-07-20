// !======================Links ==================
// * https://practice.geeksforgeeks.org/problems/largest-bst/1?page=1&category[]=Binary%20Search%20Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/largest-bst-binary-tree-set-2/

let MAX = Number.MAX_VALUE;
let MIN = Number.MIN_VALUE;
class nodeInfo {
  constructor(size, max, min, isBST) {
    this.size = size;
    this.max = max;
    this.min = min;
    this.isBST = isBST;
  }
}

function largestBst(root) {
  return largestBstUtil(root).size;
}

function largestBstUtil(root) {
  //* Base cases : When tree is empty or it has one child.
  if (root === null) {
    return new nodeInfo(0, MIN, MAX, true);
  }

  // * if it is a leaf node
  if (root.left === null && root.right === null) {
    return new nodeInfo(1, root.data, root.data, true);
  }

  // * for current node... let the node info for left subtree and right subtree
  let left = largestBstUtil(root.left);
  let right = largestBstUtil(root.right);

  if (
    left.isBST &&
    right.isBST &&
    root.data > left.max &&
    root.data < right.min
  ) {
    const size = left.size + right.size + 1;
    const min = Math.min(Math.min(left.min, right.min), root.data); //* this is the to handle case where min === MAX
    const max = Math.max(Math.max(left.max, right.max), root.data);

    return new nodeInfo(size, max, min, true);
  }

  //* If whole tree is not BST, return maximum of left and right subtrees
  const size = Math.max(left.size, right.size);

  return new nodeInfo(size, 0, 0, false);
}
