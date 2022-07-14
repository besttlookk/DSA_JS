// !======= Count Leaves in Binary Tree
// * A node is a leaf node if both left and right child nodes of it are NULL.

// !====links
// * https://practice.geeksforgeeks.org/problems/count-leaves-in-binary-tree/1/

// !===========Method 1(recursive)===================
// * Since this program is similar to traversal of tree, time and space complexities will be same as Tree traversal
function countLeaves(root) {
  if (root === null) return 0;

  if (root.left === null && root.right === null) return 1;

  return countLeaves(root.left) + countLeaves(root.right);
}

// !==============Mether 2(leverl order traversal- iterative)

function countLeaves(root) {
  const q = [];
  let count = 0;
  q.push(root);

  while (q.length !== 0) {
    const tempNode = q.shift(); //* taking from front FIFO
    if (!tempNode.left && !tempNode.right) count++;

    tempNode.left && q.push(tempNode.left);
    tempNode.right && q.push(tempNode.right);
  }

  return count;
}
