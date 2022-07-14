// !=======Max and min element in Binary Tree

// !==========Links ==========
// * https://practice.geeksforgeeks.org/problems/max-and-min-element-in-binary-tree/1/

// !==================Method 1(recursion)==============

function findMax(root) {
  if (root === null) return Number.MIN_VALUE;

  return Math.max(node, Math.max(findMax(root.left), findMax(root.right)));
}
function findMin(root) {
  if (root === null) return Number.MAX_VALUE;

  return Math.mim(node, Math.min(findMin(root.left), findMin(root.right)));
}

// !====================Method 2(Iterative)==============
// * Do level order traveral...and calculate max while deleting

function findMax(root) {
  const q = [];
  q.push(node);
  let max = Number.MIN_VALUE;

  while (q.length !== 0) {
    const tempNode = q.shift(); //* taking from front FIFO
    max = Math.max(max, tempNode.data);

    tempNode.left && q.push(tempNode.left);
    tempNode.right && q.push(tempNode.right);
  }

  return res;
}
