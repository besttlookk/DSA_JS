// !==== Print all nodes that don't have sibling

// !==============Links
// * https://www.geeksforgeeks.org/print-nodes-dont-sibling-binary-tree/

// !===============Method 1(recursive) =============
// * This is a typical tree traversal question.
// 8 We start from the root and check if the node has one child, if yes then print the only child of that node. If the node has both children, then recur for both the children.
const res = [];
function noSibling(root) {
  if (root === null) return;

  //* If this is an internal node, recur for left
  //* and right subtrees
  if (root.left != null && root.right != null) {
    noSibling(root.left);
    noSibling(root.right);
  } else if (root.right != null) {
    res.push(root.right.data);
    noSibling(root.right);
  } else if (root.left != null) {
    res.push(root.left.data);
    noSibling(root.left);
  }

  return res;
}
