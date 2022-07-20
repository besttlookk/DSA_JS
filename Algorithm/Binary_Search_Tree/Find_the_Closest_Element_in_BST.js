// !==========Find the Closest Element in BST

// * A simple solution for this problem is to store Inorder traversal of given binary search tree in an auxiliary array and then by taking absolute difference of each element find the node having minimum absolute difference with given target value K in linear time.

// !=============links===========
// * https://practice.geeksforgeeks.org/problems/find-the-closest-element-in-bst/1?page=3&category[]=Tree&sortBy=submissions

// !==================
let min = Infinity;
function minDiffUtil(root, k) {
  if (root === null) return;

  if (k === root.data) {
    min = 0;
    return;
  }

  min = Math.min(min, Math.abs(k - root.data));

  if (k > root.data) minDiffUtil(root.right, k);
  else minDiffUtil(root.left, k);
}

function minDiff(root, k) {
  minDiffUtil(root, k);
  return min;
}
