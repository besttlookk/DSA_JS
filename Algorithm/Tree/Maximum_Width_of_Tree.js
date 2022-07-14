// !==========Maximum Width of Tree

// !=======Links
// * https://practice.geeksforgeeks.org/problems/maximum-width-of-tree/1/
// * https://www.geeksforgeeks.org/maximum-width-of-a-binary-tree/

// !=================Method 1(Level order traversal) ============
function getMaxWidth(root) {
  if (!root) return 0;
  const q = [];
  let max = Number.MIN_VALUE;
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

    count++;

    curr.left && q.push(curr.left);
    curr.right && q.push(curr.right);
  }
}
