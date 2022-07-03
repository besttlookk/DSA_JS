// !======= Count Leaves in Binary Tree
// * A node is a leaf node if both left and right child nodes of it are NULL.

// !===========Method 1(recursive)===================
// * Since this program is similar to traversal of tree, time and space complexities will be same as Tree traversal
function countLeaves(root) {
  if (root === null) return 0;

  if (root.left === null && root.right === null) return 1;

  return countLeaves(root.left) + countLeaves(root.right);
}
