// !========== Check for Balanced Tree
// * A tree is height balanced if difference between heights of left and right subtrees is not more than one for all nodes of tree

// !============Method 1 ===============
function isBalanced(root) {
  //your code here
}

function height(node) {
  if (node === null) return 0;

  const lh = height(node.left);
  const rh = height(node.right);

  return Math.max(lh, rh) + 1;
}
