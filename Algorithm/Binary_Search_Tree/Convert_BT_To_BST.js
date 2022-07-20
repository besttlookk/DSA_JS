// !===== Binary Tree to Binary Search Tree Conversion

// !===============Links
// * https://www.geeksforgeeks.org/binary-tree-to-binary-search-tree-conversion/
// * https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1

// !==============Method 1 =================

function binaryTreeToBST(root) {
  const inArr = [];
  inorder(root, inArr);

  inArr.sort((a, b) => a - b);

  let index = 0;
  arrayToBST(root, inArr);

  return root;
}

function arrayToBST(root, arr) {
  //* Base Case
  if (root == null) return;

  arrayToBST(root.left, arr);

  root.data = arr[index];
  index++;

  arrayToBST(root.right, arr);
}

function inorder(root, arr) {
  if (!root) return;

  inorder(root.left);
  arr.push(root.data);
  inorder(root.right);
}
