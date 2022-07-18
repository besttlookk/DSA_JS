// !=========Lowest Common Ancestor in a Binary Tree

// !==========Links
// * https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1/
// * https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/

//! =============Method 1 (recursive)=========
function lca(root, n1, n2) {
  if (root === null) return null;

  if (root.data === n1 || root.data === n2) return root;

  const left = lca(root.left, n1, n2);
  const right = lca(root.right, n1, n2);

  if (!left) return right;
  if (!right) return left;

  return root;
}
