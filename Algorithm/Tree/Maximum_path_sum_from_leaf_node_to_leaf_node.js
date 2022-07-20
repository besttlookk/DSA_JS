// !=====================Maximum Path Sum between 2 Leaf Nodes

// * (Note: If the tree is right-most or left-most tree then first we have to adjust the tree such that both the right and left are not null.
// * Left-most means if the right of super root of the tree is null and right-most tree means if left of  super root of the tree is null.)

// !======================Links ========================
// * https://practice.geeksforgeeks.org/problems/maximum-path-sum/1?page=1&category[]=Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/find-maximum-path-sum-two-leaves-binary-tree/

let max = -Infinity;
function maxPathSum(root) {
  if (root.left == null || root.right == null) {
    root = setTree(root);
  }
  maxPathSumUtil(root);
  return max;
}

function maxPathSumUtil(node) {
  // Base Case
  if (node == null) return 0;

  if (node.left == null && node.right == null) return node.data;

  let l = findMaxUtil(node.left);
  let r = findMaxUtil(node.right);

  if (node.left !== null && node.right !== null) {
    let max_single = Math.max(l, r) + node.data;

    max = Math.max(max, l + r + node.data);

    return max_single;
  } else if (node.left === null) {
    return node.data + r;
  } else {
    return node.data + l;
  }
}

function setTree(root) {
  let temp = new Node(0);
  // if tree is left most
  if (root.right == null) {
    root.right = temp;
  } else {
    // if tree is right most
    root.left = temp;
  }

  return root;
}
