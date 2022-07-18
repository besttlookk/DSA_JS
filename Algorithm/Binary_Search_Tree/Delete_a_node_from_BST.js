// !========Delete a node from BST

// !==========Links
// * https://practice.geeksforgeeks.org/problems/delete-a-node-from-bst/1/?page=1&category[]=Binary%20Search%20Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/

// !===================Method 1 ===================
function deleteNode(root, x) {
  if (!root) return null;
  if (root.data > x) {
    root.left = deleteNode(root.left, x);
  } else if (root.data < x) {
    root.right = deleteNode(root.right, x);
  } else {
    // * DEAL WITH 3 CASE
    if (!root.right) {
      return root.left;
    } else if (!root.left) {
      return root.right;
    } else {
      const succ = insucc(root);
      // * swap value
      temp = succ.data;
      succ.data = root.data;
      root.data = temp;
      // * since we have copies value from right side...we need a new right child for this node
      root.right = deleteNode(root.right, x);
    }
  }
  return root;
}

// *
function insucc(node) {
  node = node.right;
  while (node.left) {
    node = node.left;
  }

  return node;
}
