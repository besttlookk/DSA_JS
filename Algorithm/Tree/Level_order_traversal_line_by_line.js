// !========== Print level order traversal line by line

// !==========Links ====
// * https://practice.geeksforgeeks.org/problems/level-order-traversal-line-by-line/1/?page=2&category[]=Tree&sortBy=submissions#

// !==========Method 1 ===========

function levelOrder(node) {
  const que = [];
  que.push(node);
  que.push(null);
  const res = [];

  while (que.length !== 0) {
    const temp = que.shift();

    if (temp === null) {
      if (que.length === 0) return res;
      res.push("$");
      que.push(null);
      continue;
    }

    res.push(temp.data);

    if (temp.left !== null) que.push(temp.left);
    if (temp.right !== null) que.push(temp.right);
  }

  return res;
}
