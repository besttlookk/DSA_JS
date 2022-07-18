// !========================Right View of BT ==================

// !================Method 1 (Using Queue) ============
/*
function rightView(root) {
  const q = [];
  const res = [];
  q.push(root);

  while (q.length) {
    // * find the number of node at that level
    const n = q.length;

    for (let i = 1; i <= n; i++) {
      const temp = q.shift();

      //* if last element of current level
      if (i === n) {
        res.push(temp.data);
      }

      if (temp.left) q.push(temp.left);
      if (temp.right) q.push(temp.right);
    }
  }

  return res;
}
*/
// !=============Method 2 (hashinh)===========

function rightView(root) {
  const res = [];
  if (!root) return res;

  rightVewUtil(root, 0, res);

  return res;
}

function rightVewUtil(node, level, res) {
  if (node === null) return;

  res[level] = node.data; //* ager right me v node hoga to wo left wale ko over-ride ker dega

  rightVewUtil(node.left, level + 1, res);
  rightVewUtil(node.right, level + 1, res);
}
