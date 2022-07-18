// !=========Maximum sum of Non-adjacent nodes

// !============Links=========
// * https://practice.geeksforgeeks.org/problems/maximum-sum-of-non-adjacent-nodes/1
// * https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/

// !==========Method 1==============
// * We can solve this problem by considering the fact that both node and its children can’t be in sum at the same time

let map = new Map();

function getMaxSum(root) {
  if (!root) return 0;

  if (map.has(root)) return map.get(root);

  // * case 1: when we include current node
  let inc = root.data;
  if (root.left) {
    inc += getMaxSum(root.left.left);
    inc += getMaxSum(root.left.right);
  }
  if (root.right) {
    inc += getMaxSum(root.right.left);
    inc += getMaxSum(root.right.right);
  }

  let exc = getMaxSum(root.left) + getMaxSum(root.right);

  map.set(root, Math.max(inc, exc));

  return map.get(root);
}
