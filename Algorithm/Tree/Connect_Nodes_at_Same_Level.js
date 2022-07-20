// !==============Connect Nodes at Same Level
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.nextRight = null;
  }
}
// !================================Links

// * https://practice.geeksforgeeks.org/problems/connect-nodes-at-same-level/1?page=2&category[]=Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/connect-nodes-level-level-order-traversal/

// !===================Method 1(Level order)====================

function connect(p) {
  const que = [];

  que.push(p);

  while (que.length) {
    const size = que.length;

    for (let i = 0; i < size; i++) {
      const temp = que.shift();

      if (i === size - 1) {
        temp.nextRight = null;
      } else {
        temp.nextRight = que[0];
      }

      temp.left && que.push(temp.left);
      temp.right && que.push(temp.right);
    }
  }
}
