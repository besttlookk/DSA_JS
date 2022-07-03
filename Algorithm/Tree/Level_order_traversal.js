//! ============= Level Order Binary Tree Traversal
// * Level order traversal of a tree is breadth first traversal for the tree.

// !================= Links ==============
// * https://www.geeksforgeeks.org/level-order-tree-traversal/
// * https://practice.geeksforgeeks.org/problems/level-order-traversal/1/?page=1&category[]=Tree&sortBy=submissions

// !========= Method 1 (Use function to print a current level + Recursion )

// * Time Complexity: O(n^2) in worst case. For a skewed tree, printGivenLevel() takes O(n) time where n is the number of nodes in the skewed tree.
// * So time complexity of printLevelOrder() is O(n) + O(n-1) + O(n-2) + .. + O(1) which is O(n^2).

// * Auxiliary Space:  O(n) in the worst case. For a skewed tree, printGivenLevel() uses O(n) space for call stack.
// * For a Balanced tree, the call stack uses O(log n) space, (i.e., the height of the balanced tree).

/*
function height(node) {
  if (node === null) return 0;

  return 1 + Math.max(height(hode.left), height(node.right));
}
function levelOrder(node) {
  for (let i = 1; i <= height(node); i++) {
    printCurrentLevel(node, i);
  }
}

function printCurrentLevel(node, level) {
  if (node === null) return;

  // * root node
  if (level === 1) return node.data;
  else if (level > 1) {
    printCurrentLevel(node.left, level - 1); //* Jab tak level 1 nahi hota...level kam kerte jaao
    printCurrentLevel(node.right, level - 1);
  }
}

*/

// !=========== Method 2 (Using queue) =================

// * Time Complexity: O(n) where n is the number of nodes in the binary tree.
// * Auxiliary Space: O(n) where n is the number of nodes in the binary tree.
/*
function levelOrder(node) {
  const q = [];
  const res = [];
  q.push(node);

  while (q.length !== 0) {
    const tempNode = q.shift(); //* taking from front FIFO
    res.push(tempNode.data);

    tempNode.left && q.push(tempNode.left);
    tempNode.right && q.push(tempNode.right);
  }

  return res;
}

*/

// * If we want to print level by level

function levelOrder(node) {
  const q = [];
  const str = "";
  q.push(node);
  q.push(null); //* it will indicate the end of level

  while (q.length !== 0) {
    const tempNode = q.shift(); //* taking from front FIFO
    if (tempNode === null) {
      console.log(str);
      if (q.length === 0) return;
      q.push(null);
      str = "";
      continue;
    }

    str += `${tempNode.data} `;

    tempNode.left && q.push(tempNode.left);
    tempNode.right && q.push(tempNode.right);
  }

  return res;
}
