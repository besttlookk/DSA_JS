// !============= Convert a Binary Tree into its Mirror Tree ======
// * Mirror of a Tree: Mirror of a Binary Tree T is another Binary Tree M(T) with left and right children of all non-leaf nodes interchanged.

// !===================Links =============
// * https://practice.geeksforgeeks.org/problems/mirror-tree/0/?page=1&category[]=Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/write-an-efficient-c-function-to-convert-a-tree-into-its-mirror-tree/

// !==============Method 1 (Recursive)================

// *  Worst-case Time complexity is O(n) and for space complexity, If we don’t consider the size of the recursive stack for function calls then O(1) otherwise O(h) where h is the height of the tree.

/*
function mirror(node) {
  if (node === null) return node;

  let left = mirror(node.left);
  let right = mirror(node.right);

  node.right = left;
  node.left = right;

  return node;
}
*/
// !==========Method 2(Iterative) ====
// * The idea is to do queue based level order traversal. While doing traversal, swap left and right children of every node.

function mirror(node) {
  const que = [];
  if (node === null) return que;

  que.push(root);

  while (que.length) {
    const curr = que.shift();

    const temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;

    if (curr.left) que.push(curr.left);
    if (curr.right) que.push(curr.right);
  }

  return node;
}
