// !==========distance between two given nodes of a Binary Tree

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

// !===================Links
// * https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1
// * https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/

function findLCA(root, n1, n2) {
  if (root === null) return null;

  if (root.data === n1 || root.data === n2) return root;

  const left = findLCA(root.left, n1, n2);
  const right = findLCA(root.right, n1, n2);

  if (!left) return right;
  if (!right) return left;

  return root;
}

function findLevel(root, a, level) {
  if (root === null) {
    return -1;
  }
  if (root.data === a) {
    return level;
  }
  let left = findLevel(root.left, a, level + 1);

  // * if left me a mil gaya to
  if (left !== -1) {
    return left;
  }
  return findLevel(root.right, a, level + 1);
}

function findDist(root, a, b) {
  const lca = findLCA(root, a, b);

  return findLevel(lca, a, 0) + findLevel(lca, b, 0);
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);

console.log(findDist(root, 4, 5));
