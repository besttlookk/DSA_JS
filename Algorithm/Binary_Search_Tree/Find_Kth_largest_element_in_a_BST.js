// !=====================Find Kth largest element in a BST

// !=================Links
// * https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1
// * https://www.geeksforgeeks.org/kth-largest-element-in-bst-when-modification-to-bst-is-not-allowed/
// * https://www.geeksforgeeks.org/kth-largest-element-bst-using-constant-extra-space/#:~:text=To%20find%20Kth%20largest%20element%20in%20a%20Binary%20search%20tree,traversal%20and%20print%20the%20data.

// !==================Method 1==============
// * The idea is to do reverse inorder traversal of BST. Keep a count of nodes visited.

let count = 0;
function kthLargest(root, K) {
  if (root == null || count >= K) return;

  //* Follow reverse inorder traversal so that the
  //* largest element is visited first

  kthLargest(root.right, K);

  count++;

  if (K === count) return root.data;

  kthLargest(root.left, K);
}
