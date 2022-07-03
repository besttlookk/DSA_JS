// ! ==== Write a Program to Find the Maximum Depth or Height of a Tree

// !===========Links
// * https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/

// !==============Method 1 =============
// * Recursively calculate height of left and right subtrees of a node and assign height to the node as max of the heights of two children plus 1

// * Time Complexity: O(n) (Please see our post Tree Traversal for details)

// * Auxiliary Space: O(n) due to recursive calls.
function height(node) {
  if (node === null) return 0;

  return Math.max(height(node.left), height(node.right)) + 1;
}
