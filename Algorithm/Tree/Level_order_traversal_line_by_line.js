// !========== Print level order traversal line by line

class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

// !==========Links ====
// * https://practice.geeksforgeeks.org/problems/level-order-traversal-line-by-line/1/?page=2&category[]=Tree&sortBy=submissions#
// * https://www.geeksforgeeks.org/print-level-order-traversal-line-line/

// !==========Method 1 (adding null)===========
/*
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
*/
// !===============Method 2(without adding null)

function levelOrder(node) {
  const que = [];
  que.push(node);
  const res = [];

  while (que.length !== 0) {
    const size = que.length;

    for (i = 0; i < size; i++) {
      const temp = que.shift();
      res.push(temp.data);

      if (temp.left !== null) que.push(temp.left);
      if (temp.right !== null) que.push(temp.right);
    }

    res.push("$");
  }

  return res;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

console.log(levelOrder(root));
