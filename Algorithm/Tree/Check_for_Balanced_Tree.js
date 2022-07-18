// !========== Check for Balanced Tree
// * A tree is height balanced if difference between heights of left and right subtrees is not more than one for all nodes of tree

// !===============Links ============
// * https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/
// * https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1
// !============Method 1 ===============
// * Time Complexity: O(n^2) in case of full binary tree.
//* Auxiliary Space: O(n) space for call stack since using recursion
function isBalanced(root) {
  if (root === null) return true;

  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}

function height(node) {
  if (node === null) return 0;

  const lh = height(node.left);
  const rh = height(node.right);

  return Math.max(lh, rh) + 1;
}
