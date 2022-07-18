// !======Predecessor and Successor
// * To find Predecessor of a node: one left ==> extreme right
// * to find sucesssor : one right ==> extreme left

// * incase of leaf node. use the updated value
// !=========Links==============
// * https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1/
// * https://www.geeksforgeeks.org/inorder-predecessor-successor-given-key-bst/

function findPreSuc(root, pre = null, suc = null, key) {
  if (!root) return;

  if (root.data === key) {
    // * keep updating pre and suc
    if (root.left) pre = inpre(root);
    if (root.right) suc = insuc(root);
    return;
  }

  if (root.data > key) {
    suc = root;
    findPreSuc(root.left, pre, suc, key);
  } else if (root.data < key) {
    pre = root;
    findPreSuc(root.right, pre, suc, key);
  }
}

// * one left and then extreme right
function inpre(node) {
  node = node.left;

  while (node.right !== null) {
    node = node.right;
  }
  return node;
}

// * one right and then extreme left
function insuc(node) {
  node = node.right;

  while (node.left !== null) {
    node = node.left;
  }
  return node;
}
