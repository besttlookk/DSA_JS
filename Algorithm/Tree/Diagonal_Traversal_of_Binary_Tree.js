// !===========Diagonal Traversal of Binary Tree
// * Observation : root and root->right values will be prioritized over all root->left values.

// !============Links ================
// * https://practice.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1
// * https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/
function diagonal(root) {
  const res = [];
  const q = [];
  if (!root) return res;
  q.push(root);

  while (q.length) {
    let curr = q.shift();

    while (curr) {
      if (curr.left) q.push(curr.left);

      res.push(curr.data);

      curr = curr.right;
    }
  }

  return res;
}
