// !=====Populate Inorder Successor for all nodes
class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
    this.next = null; //* this is the extra pointer
  }
}
// !=======Links
// * https://www.geeksforgeeks.org/populate-inorder-successor-for-all-nodes/
// * https://practice.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1

let prev = null;

// * Inorder traversal
function populateNext(root) {
  if (root === null) return;

  populateNext(root.left);

  if (prev !== null) {
    prev.next = root;
  }
  prev = root;

  populateNext(root.right);
}
