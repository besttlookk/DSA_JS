// !========== Convert a given tree to its Sum Tree

// !============links
// * https://www.geeksforgeeks.org/convert-a-given-tree-to-sum-tree/

// !==========Method 1(Recursion)

function toSumTree(root) {
  if (root === null) return 0;

  let old_value = root.data;

  root.data = toSumTree(root.left) + toSumTree(root.right);

  return root.data + old_value;
}
