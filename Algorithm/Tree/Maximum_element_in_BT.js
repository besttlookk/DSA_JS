// !========
function maximum(node) {
  if (node === null) return -Infinity;

  return Math.max(node.data, Math.max(maximum(node.left), maximum(node.right)));
}
