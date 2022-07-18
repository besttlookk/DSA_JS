// !==== Convert a given Binary Tree to Doubly Linked List
// * The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL.
// * The order of nodes in DLL must be the same as in Inorder for the given Binary Tree.
// * The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// !================Links
// * https://www.geeksforgeeks.org/in-place-convert-a-given-binary-tree-to-doubly-linked-list/
// * https://www.geeksforgeeks.org/convert-a-given-binary-tree-to-doubly-linked-list-set-2/
// * https://www.geeksforgeeks.org/convert-given-binary-tree-doubly-linked-list-set-3/
// * https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1

// !================Method 1(In- order traversal) ==============

let prev = null;
let head = null;
function bToDLLUtil(root) {
  if (root === null) return;

  // * handle left side
  bToDLLUtil(root.left);

  // * handle current node
  if (prev === null) head = root;
  else {
    root.left = prev;
    prev.right = root;
  }
  prev = root;

  // * handle right side
  bToDLLUtil(root.right);
}

function bToDLL(root) {
  bToDLLUtil(root);

  return head;
}
