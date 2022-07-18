// !=========Lowest Common Ancestor in a BST
// *  For Binary search tree, while traversing the tree from top to bottom the first node which lies in between the two numbers n1 and n2 is the LCA of the nodes

// !===========Links
// * https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1/?page=1&category[]=Binary%20Search%20Tree&sortBy=submissions

function LCA(root, n1, n2) {
  if (root === null) return null;

  // If both n1 and n2 are smaller than root,
  // then LCA lies in left
  if (root.data > n1 && root.data > n2) return lca(root.left, n1, n2);

  // If both n1 and n2 are greater than root,
  // then LCA lies in right
  if (root.data < n1 && root.data < n2) return lca(root.right, n1, n2);

  // * one is either low or high
  return root;
}
