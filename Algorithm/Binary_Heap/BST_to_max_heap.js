// !================BST to max heap
class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}
// !====================links
// * https://practice.geeksforgeeks.org/problems/bst-to-max-heap/1?page=1&category[]=Heap&curated[]=7&sortBy=submissions
// * https://www.geeksforgeeks.org/convert-bst-to-max-heap/

// !==================Solution
// * 1. Create an array arr[] of size n, where n is the number of nodes in the given BST.
// * 2. Perform the inorder traversal of the BST and copy the node values in the arr[] in sorted order.
// * 3. Now perform the postorder traversal of the tree.
// * 4. While traversing the root during the postorder traversal, one by one copy the values from the array arr[] to the nodes.
function convertToMaxHeapUtil(root) {
  let arr = [];

  inorderTraversal(root, arr);
}

function inorderTraversal(root, arr) {
  if (root === null) return;

  inorderTraversal(root.left);
  arr.push(root.data);
  inorderTraversal(root.right);

  BSTToMaxHeap(root, arr, 0);
}

// * for maxheap do postorder traversal
let i = 0;
function BSTToMaxHeap(root, arr) {
  if (root === null) return;

  BSTToMaxHeap(root.left, arr);

  BSTToMaxHeap(root.right, arr);

  root.data = arr[i++];
}
