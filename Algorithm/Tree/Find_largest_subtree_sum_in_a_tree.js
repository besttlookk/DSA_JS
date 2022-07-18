// !===Find largest subtree sum in a tree

// !====Links
// * https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/#:~:text=Approach%20%3A%20Do%20post%20order%20traversal,and%20right%20node%20subtree%20sum.

// !==========Method 1 (Post order traversal)

let max = -Infinity;

function findLargestSubtreeSum(root) {
  if (root === null) return 0;

  const ls = findLargestSubtreeSum(root.left);
  const rs = findLargestSubtreeSum(root.right);

  max = Math.max(max, ls + rs + root.data);

  return ls + rs + root.data;
}
