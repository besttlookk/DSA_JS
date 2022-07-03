// !========= Find the node with minimum value in a Binary Search Tree===========
// * This is quite simple. Just traverse the node from root to left recursively until left is NULL. The node whose left is NULL is the node with minimum value.

function minValue(root) {
  if (root === null) return null;
  let current = root;
  while (current.left !== null) current = current.left;

  return current.data;
}
