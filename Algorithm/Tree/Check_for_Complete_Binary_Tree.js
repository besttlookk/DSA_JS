// !=== Check whether a given Binary Tree is Complete or not

// * A complete binary tree is a binary tree whose all levels except the last level are completely filled and all the leaves in the last level are all to the left side.

// !===========Links
// * https://www.geeksforgeeks.org/check-if-a-given-binary-tree-is-complete-tree-or-not/
// * https://practice.geeksforgeeks.org/problems/complete-binary-tree/1
// * https://www.geeksforgeeks.org/check-whether-binary-tree-complete-not-set-2-recursive-solution/

// !==========Method 1(iterative)==========
// * The method 2 of level order traversal post can be easily modified to check whether a tree is Complete or not.
// *  To understand the approach, let us first define the term ‘Full Node’. A node is ‘Full Node’ if both left and right children are not empty (or not NULL).
// * The approach is to do a level order traversal starting from the root. In the traversal, once a node is found which is NOT a Full Node, all the following nodes must be leaf nodes.
// * Also, one more thing needs to be checked to handle the below case: If a node has an empty left child, then the right child must be empty

function isComplete(root) {
  //* Base Case: An empty tree
  //* is complete Binary Tree
  if (root == null) return true;

  let que = [];

  //* Create a flag variable which will be set true
  //* when a non full node is seen
  let flag = false;

  que.push(root);

  while (que.length) {
    const temp = que.shift();

    //* Check if left child is present
    if (temp.left !== null) {
      //* If we have seen a non full node,
      //* and we see a node with non-empty
      //* left child, then the given tree is not
      //* a complete Binary Tree

      if (flag === true) return false;

      que.push(temp.left);
    } else {
      // If this a non-full node, set the flag as true
      flag = true;
    }

    /* Check if right child is present*/
    if (temp.right !== null) {
      // If we have seen a non full node,
      // and we see a node with non-empty
      // right child, then the given tree
      // is not a complete Binary Tree
      if (flag == true) return false;

      // push Right Child
      que.push(temp.right);
    }

    //* If this a non-full node,
    //* set the flag as true
    else flag = true;
  }

  //* If we reach here, then the
  //* tree is complete Binary Tree
  return true;
}

// !========================Method 2(Recursive) ================
// * Calculate the number of nodes (count) in the binary tree.
// * Start recursion of the binary tree from the root node of the binary tree with index (i) being set as 0 and the number of nodes in the binary (count).
// * If the current node under examination is NULL, then the tree is a complete binary tree. Return true.
// * If index (i) of the current node is greater than or equal to the number of nodes in the binary tree (count) i.e. (i>= count), then the tree is not a complete binary. Return false.
// * Recursively check the left and right sub-trees of the binary tree for same condition. For the left sub-tree use the index as (2*i + 1) while for the right sub-tree use the index as (2*i + 2).

// * The time complexity of the above algorithm is O(n).
function isComplete(root) {
  const nodeCount = countNodes(root);
  return isCompleteUtil(root, 0, nodeCount);
}

function isCompleteUtil(root, index, nodeCount) {
  //* An empty tree is complete
  if (root == null) return true;

  //* If index assigned to current node is more than
  //* number of nodes in tree, then tree is not complete

  if (index >= nodeCount) return false;

  //* Recur for left and right subtrees
  return (
    isCompleteUtil(root.left, 2 * index + 1, nodeCount) &&
    isCompleteUtil(root.right, 2 * index + 2, nodeCount)
  );
}

//* This function counts the number of nodes in a binary tree

function countNodes(root) {
  if (root == null) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
}
