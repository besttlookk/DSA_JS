// !======== Boundary Traversal of binary tree ===============
// * Given a binary tree, print boundary nodes of the binary tree Anti-Clockwise starting from the root.
// * The boundary includes left boundary, leaves, and right boundary in order without duplicate nodes. (The values of the nodes may still be duplicates.)
// * The "left boundary" is defined as the path from the "root" to the "left-most node".
// * The right boundary is defined as the path from the root to the right-most node
// *  If the root doesn’t have left subtree or right subtree, then the root itself is left boundary or right boundary.
// * Note this definition only applies to the input binary tree, and not apply to any subtrees.
// * The left-most node is defined as a leaf node you could reach when you always firstly travel to the left subtree if it exists
// *  If not, travel to the right subtree. Repeat until you reach a leaf node.
// * The right-most node is also defined in the same way with left and right exchanged.

// !==============Links =============
// * https://www.geeksforgeeks.org/boundary-traversal-of-binary-tree/
// * https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/0/?page=1&category[]=Tree&sortBy=submissions

// !=============Method 1===========
// * 1. Print the left boundary in top-down manner.
// * 2. Print all leaf nodes from left to right, which can again be sub-divided into two sub-parts:
// *    ..2.1 Print all leaf nodes of left sub-tree from left to right.
// *    …..2.2 Print all leaf nodes of right subtree from left to right.
// * 3. Print the right boundary in bottom-up manner.
// * We need to take care of one thing that nodes are not printed again. e.g. The left most node is also the leaf node of the tree.

let ans = [];
function boundary(root) {
  if (!root) return;

  ans.push(root.data);

  //* Print the left boundary in top-down manner.
  printBoundaryLeft(root.left);

  //* Print all leaf nodes
  printLeaves(root.left);
  printLeaves(root.right);

  //* Print the right boundary in bottom-up manner
  printBoundaryRight(root.right);

  return ans;
}

function printBoundaryLeft(node) {
  if (node === null) return;

  if (node.left !== null) {
    //* to ensure top down order, print the node
    //* before calling itself for left subtree
    ans.push(node.data);
    printBoundaryLeft(node.left);
  } else if (node.right !== null) {
    ans.push(node.data);
    printBoundaryLeft(node.right);
  }

  //* do nothing if it is a leaf node, this way we avoid duplicates in output
}

//* Print the nodes in BOTTOM UP manner
function printBoundaryRight(node) {
  if (node === null) return;

  if (node.right !== null) {
    //* to ensure bottom up order, first call for right
    // subtree, then print this node
    printBoundaryRight(node.right);
    ans.push(node.data);
  } else if (node.left !== null) {
    printBoundaryRight(node.left);
    ans.push(node.data);
  }
  //* do nothing if it is a leaf node, this way we avoid
  //* duplicates in output
}

//* A simple function to print leaf nodes of a binary tree
function printLeaves(node) {
  if (node == null) return;

  printLeaves(node.left);
  //* Print it if it is a leaf node
  if (node.left === null && node.right === null) ans.push(node.data);
  printLeaves(node.right);
}
