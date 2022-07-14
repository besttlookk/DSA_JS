// !=========Max Level Sum in Binary Tree

// !=Links
// * https://practice.geeksforgeeks.org/problems/max-level-sum-in-binary-tree/1/
// * https://www.geeksforgeeks.org/find-level-maximum-sum-binary-tree/

// !=============Method 1(Level order)

function maxLevelSum(root) {
  if (!root) return 0;
  const q = [];
  let max = -Infinity;
  let count = 0;
  let curr = root;

  q.push(curr);
  q.push(null);

  while (q.length !== 0) {
    curr = q.shift();

    if (curr === null) {
      max = Math.max(max, count);

      if (q.length === 0) return max;

      count = 0;
      q.push(null);
      continue;
    }

    count += curr.data;

    curr.left && q.push(curr.left);
    curr.right && q.push(curr.right);
  }
}
