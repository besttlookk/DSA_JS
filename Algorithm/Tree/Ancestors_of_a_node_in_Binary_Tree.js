// !=============Ancestors in Binary Tree

// !============Links
// * https://practice.geeksforgeeks.org/problems/ancestors-in-binary-tree/1/
// * https://www.geeksforgeeks.org/print-ancestors-of-a-given-node-in-binary-tree/

// !==========
const ans = [];
function AncestorsUtil(root, target) {
  if (root === null) return false;

  // * breaking condition
  if (root.data === target) return true;

  // *  If target is present in either left or right subtree of this node, then print this node

  if (AncestorsUtil(root.left, target) || AncestorsUtil(root.right, target)) {
    ans.push(root.data);
    return true;
  }

  return false;
}

function Ancestors(root, target) {
  AncestorsUtil(root, target);
  return ans;
}
