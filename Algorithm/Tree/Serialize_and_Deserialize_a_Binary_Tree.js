// !==========Serialize and Deserialize a Binary Tree
// * Serialization is to store a tree in an array so that it can be later restored and Deserialization is reading tree back from the array.
// * Note: The structure of the tree must be maintained. Multiple nodes can have the same data.

// * Following are some simpler versions of the problem:
// * A) If given Tree is Binary Search Tree?
// *    If the given Binary Tree is Binary Search Tree, we can store it by either storing preorder or postorder traversal.
// *    In case of Binary Search Trees, only preorder or postorder traversal is sufficient to store structure information.

// * B) If given Binary Tree is Complete Tree?
// *  A Binary Tree is complete if all levels are completely filled except possibly the last level and all nodes of last level are as left as possible (Binary Heaps are complete Binary Tree).
// *  For a complete Binary Tree, level order traversal is sufficient to store the tree.
// *  We know that the first node is root, next two nodes are nodes of next level, next four nodes are nodes of 2nd level and so on.

// * If given Binary Tree is Full Tree?
// *    A full Binary is a Binary Tree where every node has either 0 or 2 children.
// *    It is easy to serialize such trees as every internal node has 2 children.
// *    We can simply store preorder traversal and store a bit with every node to indicate whether the node is an internal node or a leaf node.

// * How to store a general Binary Tree?
// *  A simple solution is to store both Inorder and Preorder traversals. This solution requires space twice the size of Binary Tree.
// *  We can save space by storing Preorder traversal and a marker for NULL pointers.

// !====================Links ==============
// * https://practice.geeksforgeeks.org/problems/serialize-and-deserialize-a-binary-tree/1?page=3&category[]=Tree&sortBy=submissions
/**
 * @param {Node} root
 * @returns {number[]}
 */

//Function to serialize a tree and return a list containing nodes of tree.
let serial = [];
serialize(root);
{
  if (root === null) {
    arr.push(-1);
    return;
  }

  arr.push(root.data);
  serialize(root.left);
  serialize(root.right);

  return serial;
}

/**
 * @param {number[]} A
 * @returns {Node}
 */

//Function to deserialize a list and construct the tree
deSerialize(A);
{
  //your code here
}
