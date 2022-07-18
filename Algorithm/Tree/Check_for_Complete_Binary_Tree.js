// !=== Check whether a given Binary Tree is Complete or not

// !===========Links
// * https://www.geeksforgeeks.org/check-if-a-given-binary-tree-is-complete-tree-or-not/
// * https://practice.geeksforgeeks.org/problems/complete-binary-tree/1

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
