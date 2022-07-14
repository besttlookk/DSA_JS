// !======= Diameter of a Binary Tree

// * The diameter of a tree (sometimes called the width) is the number of nodes on the longest path between two end nodes

// * The diameter of a tree T is the largest of the following quantities:
// * # the diameter of T’s left subtree.
// * # the diameter of T’s right subtree.
// * # the longest path between leaves that goes through the root of T (this can be computed from the heights of the subtrees of T)

// !===================Links =======
// * https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1/
// * https://www.geeksforgeeks.org/diameter-of-a-binary-tree/

// !=============Method 1(recursion)===========

// * Time Complexity: O(n2)
// * Auxiliary Space: O(n) for call stack
/*
function height(node) {
  if (node == null) return 0;

  return 1 + Math.max(height(node.left), height(node.right));
}

function diameter(root) {
  //* Base Case when tree is empty
  if (root == null) return 0;

  //* Get the height of left and right sub-trees
  let lheight = height(root.left);
  let rheight = height(root.right);

  //* Get the diameter of left and right sub-trees
  let ldiameter = diameter(root.left);
  let rdiameter = diameter(root.right);

  return Math.max(lheight + rheight + 1, ldiameter, rdiameter);
}
*/

// !================Method 2 ==============
// * The above implementation can be optimized by calculating the height in the same recursion rather than calling a height() separately.
// * This optimization reduces time complexity to O(n).
let ans = 0;

function height(node) {
  if (node === null) return 0;

  const lh = height(node.left);
  const rh = height(node.right);

  ans = Math.max(ans, 1 + lh + rh);

  return 1 + Math.max(lh, rh);
}

function diameter(root) {
  height(root);
  return ans;
}
