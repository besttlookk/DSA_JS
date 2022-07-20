// !===K distance from root

// !======links
// * https://practice.geeksforgeeks.org/problems/k-distance-from-root/1?page=2&category[]=Tree&sortBy=submissions

// !================Method 1(level-order travesal)

function Kdistance(root, k) {
  let level = 0;
  const que = [];
  que.push(root);
  const ans = [];
  let found = false;

  while (que.length) {
    const size = que.length;

    for (let i = 0; i < size; i++) {
      const temp = que.shift();

      if (level === k) {
        ans.push(temp.data);
        found = true;
      }

      temp.left && que.push(temp.left);
      temp.right && que.push(temp.right);
    }

    if (found) break;
    level++;
  }

  return ans;
}
