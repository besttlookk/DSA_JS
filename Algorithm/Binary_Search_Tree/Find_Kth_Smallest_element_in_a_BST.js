// !===k-th smallest element in BST

// !====Links====
// * https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1
// * https://www.geeksforgeeks.org/find-k-th-smallest-element-in-bst-order-statistics-in-bst/

// !===============
let count = 0;
let ans = -1;
function KthSmallestElement(root, K) {
  helper(root, K);

  return ans;
}

function helper(root, K) {
  if (root == null || count >= K) return;

  //* Follow reverse inorder traversal so that the
  //* largest element is visited first

  helper(root.left, K);

  count++;

  if (K === count) return root.data;
  helper(root.right, K);
}
