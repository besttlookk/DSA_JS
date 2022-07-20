// !======Maximum difference between node and its ancestor

// * If we are at leaf node then just return its value because it can’t be ancestor of any node.
// * Then at each internal node we will try to get minimum value from left subtree and right subtree and calculate the difference between node value and this minimum value and according to that we will update the result.
// !==========Links
// * https://www.geeksforgeeks.org/maximum-difference-between-node-and-its-ancestor-in-binary-tree/
// * https://practice.geeksforgeeks.org/problems/maximum-difference-between-node-and-its-ancestor/1?page=3&category[]=Tree&sortBy=submissions

// !=================Method 1================

class Node {
  constructor(key) {
    this.key = key;
    this.left = this.right = null;
  }
}

let max = -Infinity;
function maxDiff(root) {
  maxDiffUtil(root);

  return max;
}

// * we have to return minimum value..
function maxDiffUtil(root) {
  if (root === null) return Infinity;

  //* If leaf node then just return node's value
  if (root.left === null && root.right === null) return root.key;

  let lsMin = maxDiffUtil(root.left);
  let rsMin = maxDiffUtil(root.right);

  console.log({ lsMin });
  console.log({ rsMin });

  let min = Math.min(lsMin, rsMin);

  console.log({ min });

  max = Math.max(max, root.key - min);

  return Math.min(min, root.key);
}

let root = new Node(8);
root.left = new Node(3);
root.left.left = new Node(1);
root.left.right = new Node(6);
root.left.right.left = new Node(4);
root.left.right.right = new Node(7);

root.right = new Node(10);
root.right.right = new Node(14);
root.right.right.left = new Node(13);

console.log(maxDiff(root));
