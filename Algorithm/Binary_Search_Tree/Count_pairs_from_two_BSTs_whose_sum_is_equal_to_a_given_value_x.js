// !========Count pairs from two BSTs whose sum is equal to a given value x

// !=============Links============
// * https://www.geeksforgeeks.org/count-pairs-from-two-bsts-whose-sum-is-equal-to-a-given-value-x/
// * https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1

// !=============Method(hashing)=============

// TC: O(m + n)
// SC: O(n)
let count = 0;
function countPairs(root1, root2, x) {
  const set = new set();

  addToSet(root2, set);

  findPair(root1, x, set);

  return count;
}

function findPair(root, x, set) {
  if (!root) return;

  findPair(root.left, x, set);

  if (set.has(x - root.data)) count++;

  findPair(root.right, x, set);
}

function addToSet(root, set) {
  if (!root) return;

  inorder(root.left, set);

  set.add(root.data);

  inorder(root.right, set);
}

// !===============Method 2 (Searching) ===============

function countPairs(root1, root2, x) {
  if (!root1 || !root2) return;
}
