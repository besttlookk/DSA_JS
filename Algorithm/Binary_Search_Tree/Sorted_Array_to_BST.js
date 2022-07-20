// !===============Array to BST

// !======Links
// * https://practice.geeksforgeeks.org/problems/array-to-bst4443/1
// * https://www.geeksforgeeks.org/sorted-array-to-balanced-bst/

// !==========
// * Get the Middle of the array and make it root.
// * Recursively do same for left half and right half.
// *

// * follow pre order
function sortedArrayToBST(nums, start = 0, end = nums.length - 1) {
  if (start > end) return null;

  /* Get the middle element and make it root */
  let mid = parseInt((start + end) / 2);
  let node = new Node(nums[mid]);

  node.left = sortedArrayToBST(nums, start, mid - 1);

  node.right = sortedArrayToBST(nums, mid + 1, end);

  return node;
}
