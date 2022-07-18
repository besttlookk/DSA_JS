// !====Sum of nodes on the longest path from root to leaf node

// !=========Links
// * https://www.geeksforgeeks.org/sum-nodes-longest-path-root-leaf-node/
// * https://practice.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1

// !==========Method 1

function sumOfLongRootToLeafPath(root) {
  // * at index 1 :height
  // * at index 2: sum
  // * choose sum only if height is more
  const ans = solve(root);

  return ans[1];
}

function solve(root) {
  if (root === null) return [0, 0];

  const left = solve(root.left);
  const right = solve(root.right);

  // * check height of left and right.
  // * which ever height is heigher get that value
  if (left[0] > right[0]) return [left[0] + 1, left[1] + root.data];
  if (left[0] < right[0]) return [right[0] + 1, right[1] + root.data];
  // * if height is equal in both side
  else return [left[0] + 1, Math.max(left[1], right[1]) + root.data];
}
