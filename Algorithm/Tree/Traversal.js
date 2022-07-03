// !=============Traversal
// * Unlike linear data structures (Array, Linked List, Queues, Stacks, etc) which have only one logical way to traverse them, trees can be traversed in different ways.
/*
                  1
                /  \
              2     3
            /  \
          4     5
*/
// * Depth First Traversals:
// *  (a) Inorder (Left, Root, Right) : 4 2 5 1 3
// *  (b) Preorder (Root, Left, Right) : 1 2 4 5 3
// *  (c) Postorder (Left, Right, Root) : 4 5 2 3 1
// * Breadth-First or Level Order Traversal: 1 2 3 4 5

// ! Uses of Inorder :
// * # In the case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order.
// * # To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversal s reversed can be used.

// ! Uses of Preorder
// * Preorder traversal is used to create a copy of the tree.
// * Preorder traversal is also used to get prefix expression on an expression tree.

// ! Uses of Postorder
// * Postorder traversal is used to delete the tree.
// * Postorder traversal is also useful to get the postfix expression of an expression tree.

// !=============Links
// * https://practice.geeksforgeeks.org/problems/postorder-traversal/0/?page=1&category[]=Tree&sortBy=submissions
// * https://practice.geeksforgeeks.org/problems/level-order-traversal/0/?page=1&category[]=Tree&sortBy=submissions
// * https://practice.geeksforgeeks.org/problems/preorder-traversal/0/?page=1&category[]=Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/

// !===============Inorder =================
function inOrderUtil(root, res) {
  if (root === null) return;

  // !go left first
  inOrderUtil(root.left, res);
  res.push(root.data);
  inOrderUtil(root.right, res);
}

function inOrder(root) {
  let res = [];
  if (root === null) return res;

  inOrderUtil(root, res);

  return res;
}

// !=============== Preorder traversal ==============

function preorderUtil(root, res) {
  if (root === null) return;

  res.push(root.data);
  preorderUtil(root.left, res);
  preorderUtil(root.right, res);
}

function preorder(root) {
  let res = [];
  if (root === null) return res;

  preorder(root, res);

  return res;
}

// !==========PostOrder ==============

function postOrderUtil(root, res) {
  if (root === null) return;

  postOrderUtil(root.left, res);
  postOrderUtil(root.right, res);
  res.push(root.data);
}

function postOrder(root) {
  let res = [];

  if (root === null) return res;

  postOrderUtil(root, res);

  return res;
}
