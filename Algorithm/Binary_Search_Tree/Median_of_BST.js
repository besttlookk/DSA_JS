// !================= links
// * https://practice.geeksforgeeks.org/problems/median-of-bst/1

// !=============Method 1 ===========
let n = 0;
let curr = null;
let prev = null;
let c = 1;
let x = Math.floor(n / 2) + 1;
let f = 0;

function findMedian(root) {
  countNodes(root);

  if (n % 2 !== 0) {
    return curr.data;
  } else {
    return (curr.data + prev.data) / 2;
  }
}

function helper(root) {
  if (!root) return;

  helper(root.left);

  if (prev === null) {
    prev = root;
    c++;
  } else if (c === k) {
    c++;
    curr = root;
    f = 1;
    return;
  } else if (f === 0) {
    c++;
    prev = root;
  }

  helper(root.left);
}

function countNodes(root) {
  if (!root) return;

  countNodes(root.left);
  n++;
  countNodes(root.right);
}
