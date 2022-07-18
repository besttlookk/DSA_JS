// !=========Search a node in a binary tree

// !=======Links
// * https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/
// * https://practice.geeksforgeeks.org/problems/search-a-node-in-bst/1/

function search(root, x) {
  if (root === null) return false;

  if (root.data < x) return search(root.right, x);
  else if (root.data > x) return search(root.left, x);
  else return true;
}
