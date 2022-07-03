// !========== Check if a given Binary Tree is SumTree
// * . A SumTree is a Binary Tree where the value of a node is equal to the sum of the nodes present in its left subtree and right subtree
// *  An empty tree is SumTree and the sum of an empty tree can be considered as 0. A leaf node is also considered as SumTree.

// !===============Links ==============
// * https://www.geeksforgeeks.org/check-if-a-given-binary-tree-is-sumtree/
// * https://practice.geeksforgeeks.org/problems/sum-tree/0/?page=1&category[]=Tree&sortBy=submissions#

// !=============Method 1 ===================
// * Get the sum of nodes in the left subtree and right subtree. Check if the sum calculated is equal to the root’s data.
// *  Also, recursively check if the left and right subtrees are SumTrees.

// * Time Complexity: O(n2) in the worst case. The worst-case occurs for a skewed tree.

// * Auxiliary Space: O(n) for stack space

/*

function isSumTree(root) {
  let ls, rs;

  if (root === null || (root.left === null && root.right === null)) return true;

  ls = sum(root.left);
  rs = sum(root.right);

  if (root.data === ls + rs && isSumTree(root.left) && isSumTree(root.right)) {
    return true;
  }

  return false;
}

function sum(node) {
  if (node === null) return 0;

  return node.data + sum(node.left) + sum(node.right);
}

*/

// !=================Method 2(Tricky) ==================
// * Method 1 uses sum() to get the sum of nodes in left and right subtrees. Method 2 uses the following rules to get the sum directly.
// * If the node is a leaf node then the sum of the subtree rooted with this node is equal to the value of this node.
// * If the node is not a leaf node then the sum of the subtree rooted with this node is twice the value of this node (Assuming that the tree rooted with this node is SumTree).

function isLeaf(node) {
  if (node === null) return false;

  if (node.left === null && node.right === null) return true;

  return false;
}

function isSumTree(root) {
  let ls, rs;
  if (root === null && isLeaf(root)) return true;

  if (isSumTree(root.left) && isSumTree(root.right)) {
    //* Get the sum of nodes in left subtree
    if (node.left === null) ls = 0;
    else if (isLeaf(root.node)) ls = root.left.data;
    else ls = 2 * root.left.data;

    if (node.right === null) rs = 0;
    else if (isLeaf(root.node)) rs = root.right.data;
    else rs = 2 * root.right.data;

    if (node.data === ls + rs) return true;
    else return false;
  }

  return false;
}
