// !============= Convert a Binary Tree into its Mirror Tree ======
// * Mirror of a Tree: Mirror of a Binary Tree T is another Binary Tree M(T) with left and right children of all non-leaf nodes interchanged.

// !===================Links =============
// * https://practice.geeksforgeeks.org/problems/mirror-tree/0/?page=1&category[]=Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/write-an-efficient-c-function-to-convert-a-tree-into-its-mirror-tree/

// !==============Method 1 (Recursive)================

// *  Worst-case Time complexity is O(n) and for space complexity, If we don’t consider the size of the recursive stack for function calls then O(1) otherwise O(h) where h is the height of the tree.

// * (1)  Call Mirror for left-subtree    i.e., Mirror(left-subtree)
// * (2)  Call Mirror for right-subtree  i.e., Mirror(right-subtree)
// * (3)  Swap left and right subtrees.
// temp = left-subtree
// left-subtree = right-subtree
// right-subtree = temp
/*
function mirror(node) {
  if (node === null) return node;

  let left = mirror(node.left); //* get updated left tree
  let right = mirror(node.right); //* get updated right tree

  //* excahge
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

    // * Important part..before storing the left and right child in the queue. exchange them
    const temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;

    if (curr.left) que.push(curr.left);
    if (curr.right) que.push(curr.right);
  }

  return node;
}
