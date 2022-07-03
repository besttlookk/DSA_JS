// ! =============Links ===========
// * https://www.geeksforgeeks.org/print-left-view-binary-tree/
// * https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1/?page=1&category[]=Tree&sortBy=submissions

// !========== Print Left View of a Binary Tree
// *  Left view of a Binary Tree is set of nodes visible when tree is visited from left side.

// !===============Method 1(recursive) ==========
// * The left view contains all nodes that are first nodes in their levels.
// * A simple solution is to do level order traversal and print the first node in every level.

//  * . We can keep track of the level of a node by passing a parameter to all recursive calls.
// *  The idea is to keep track of the maximum level also.
// * Whenever we see a node whose level is more than maximum level so far, we print the node because this is the first node in its level (Note that we traverse the left subtree before right subtree).

// * Time Complexity: The function does a simple traversal of the tree, so the complexity is O(n).
// * Auxiliary Space: O(n), due to the stack space during recursive call.
/*
let max_level = 0;

function leftView(root) {
  let res = [];
  if (root === null) return res;
  leftViewUtil(root, 1, res);
  return res;
}

function leftViewUtil(node, level, res) {
  //* Base Case
  if (node === null) {
    return;
  }

  //* If this is the first node of its level
  // if (level === res.length) {
  //   res.push(node.data);
  // }

  if (level > max_level) {
    max_level = level;
    res.push(node.data);
  }

  // Recur for left and right subtrees
  this.leftViewUtil(node.left, level + 1, res);
  this.leftViewUtil(node.right, level + 1, res);
}

*/

// !================Method 2( level order traversal based solution)
// * If we observe carefully, we will see that our main task is to print the left most node of every level.
// * So, we will do a level order traversal on the tree and print the leftmost node at every level

// * Time Complexity: O(n), where n is the number of nodes in the binary tree.
// *  Auxiliary Space: O(n) since using space for auxiliary queue

/*

function leftView(root) {
  if (root == null) return;
  let q = [];
  let res = [];
  q.push(root);

  while (q.length) {
    //* number of nodes at current level
    let n = q.length;

    for (let i = 1; i <= n; i++) {
      const tempNode = q.shift();

      // *only print the first element
      if (i === 1) res.push(tempNode.data);

      //* Add left node to queue
      if (tempNode.left !== null) q.push(tempNode.left);

      //* Add right node to queue
      if (tempNode.right !== null) q.push(tempNode.right);
    }
  }

  return res;
}
*/

// !===================Method 3: (Using hashmap).==============
// *  we insert a null pointer in the first and as reach that null pointer we mark bool as true and take the next element as our left view element
function leftView(root) {
  const res = [];
  if (root === null) return res;

  leftViewUtil(root, 0, res);

  return res;
}

function leftViewUtil(node, level, res) {
  if (node === null) return;

  if (!res[level]) res.push(node.data);

  leftViewUtil(node.left, level + 1, res);
  leftViewUtil(node.right, level + 1, res);
}
