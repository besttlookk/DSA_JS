// !==========Deletion in a Binary Tree

// !======Links
// * https://practice.geeksforgeeks.org/problems/deletion-in-a-binary-tree/1/
// * https://www.geeksforgeeks.org/deletion-binary-tree/

// !=========
//* 1. Starting at the root, find the deepest and rightmost node in the binary tree and the node which we want to delete.
//* 2. Replace the deepest rightmost node’s data with the node to be deleted.
//* 3. Then delete the deepest rightmost node.

function deletionBT(root, key) {
  const q = [];
  let keyNode = null;
  let pr = null;
  let pl = null;
  let curr = root;

  q.push(curr);

  while (q.length !== 0) {
    curr = q.shift();

    if (curr.data === key) keyNode = curr;

    if (curr.left) {
      q.push(curr.left);
      pl = curr;
      pr = null;
    }

    if (curr.right) {
      q.push(curr.right);
      pl = null;
      pr = curr;
    }
  }

  if (keyNode) {
    keyNode.data = curr.data;

    if (pl) pl.left = null;
    if (pr) pr.right = null;
  }

  return root;
}
