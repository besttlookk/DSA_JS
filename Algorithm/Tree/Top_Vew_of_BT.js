// !=========== Print Nodes in Top View of Binary Tree =============
// * Top view of a binary tree is the set of nodes visible when the tree is viewed from the top.
// * A node x is there in output if x is the topmost node at its horizontal distance
// * Horizontal distance of left child of a node x is equal to horizontal distance of x minus 1, and that of right child is horizontal distance of x plus 1.

// !==========Links ==================
// * https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/
// * https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/0/?page=1&category[]=Tree&sortBy=submissions

// !============================Method 1 ====================
//* The idea is to do something similar to vertical Order Traversal.
//* Like vertical Order Traversal, we need to put nodes of same horizontal distance together.
// *  We do a level order traversal so that the topmost node at a horizontal node is visited before any other node of same horizontal distance below it.
// * Hashing is used to check if a node at given horizontal distance is seen or not.

// * Unlike vertical travesal we will only print the first node at given hd.

// * for bottom view same hi code hoga bas hum map ke liye condition nahi daalenge..aur value ko update hone denge

class Pair {
  constructor(hd, node) {
    this.hd = hd;
    this.node = node;
  }
}

function topView(root) {
  const que = [];
  const map = new Map();
  let hd = 0;
  const res = [];

  que.push(new Pair(hd, root));

  while (que.length) {
    const temp = que.shift();
    hd = temp.hd;
    const node = temp.node;

    // * Ager is hd ke liye map me value set nahi ha tabhi set karo
    if (!map.has(hd)) {
      map.set(hd, node.data); //* kyuki ek hi value rehne wali hai to array use kerne ka koi matlab nahi banta
    }

    if (node.left) que.push(new Pair(hd - 1, node.left));
    if (node.right) que.push(new Pair(hd + 1, node.right));
  }

  Array.from(map)
    .sort((a, b) => a[0] - b[0])
    .forEach((item) => res.push(item[1]));

  return res;
}
