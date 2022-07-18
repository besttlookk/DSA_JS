// !====== A program to check if a binary tree is BST or not
// * A binary search tree (BST) is a node based binary tree data structure which has the following properties.
// *   # The left subtree of a node contains only nodes with keys less than the node’s key.
// *   # The right subtree of a node contains only nodes with keys greater than the node’s key.
// *   # Both the left and right subtrees must also be binary search trees.

// !=======Links ===========
// * https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
//  * https://practice.geeksforgeeks.org/problems/check-for-bst/1/?page=1&category[]=Tree&sortBy=submissions

// !======== METHOD 1 (Simple but Wrong) ============
//  * For each node, check if the left node of it is smaller than the node and right node of it is greater than the node.

/*
function isBST(node) {
  if (node == null) return true;

  //* False if left is > than node 
  if (node.left != null && node.left.data > node.data) return false;

  //* False if right is < than node 
  if (node.right != null && node.right.data < node.data) return false;

  //* False if, recursively, the left or right is not a BST 
  if (!isBST(node.left) || !isBST(node.right)) return false;

  //* Passing all that, it's a BST 
  return true;
}
*/

// !===============METHOD 2 (Correct but not efficient)
//  * For each node, check if max value in left subtree is smaller than the node and min value in right subtree greater than the node.

//  * It is assumed that you have helper functions minValue() and maxValue() that return the min or max int value from a non-empty tree

function minValue(node) {}

// !=============METHOD 3 (Correct and Efficient):
// * Method 2 above runs slowly since it traverses over some parts of the tree many times.
// *  A better solution looks at each node only once.
// * The trick is to write a utility helper function isBSTUtil(struct node* node, int min, int max) that traverses down the tree keeping track of the narrowing min and max allowed values as it goes, looking at each node only once.
// * The initial values for min and max should be INT_MIN and INT_MAX — they narrow from there.

// * Note: This method is not applicable if there are duplicate elements with value INT_MIN or INT_MAX.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function isBST(root) {
  return isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

function isBSTUtil(node, min, max) {
  //* an empty tree is BST
  if (node === null) return true;

  //* false if this node violates the min/max constraints
  if (node.data < min || node.data > max) return false;

  //* otherwise check the subtrees recursively tightening the min/max constraints
  //* Allow only distinct values

  return (
    isBSTUtil(node.left, min, node.data - 1) &&
    isBSTUtil(node.right, node.data + 1, max)
  );
}
