// !===== Check if a binary tree is subtree of another binary tree =========

// !============Links
// * https://www.geeksforgeeks.org/check-if-a-binary-tree-is-subtree-of-another-binary-tree/
// * https://www.geeksforgeeks.org/check-binary-tree-subtree-another-binary-tree-set-2/
// * https://practice.geeksforgeeks.org/problems/check-if-subtree/0/?page=1&category[]=Tree&sortBy=submissions

// !=======================Method 1 ==============================
// * for every node check if both are identical

// * Time Complexity: Time worst-case complexity of above solution is O(mn) where m and n are number of nodes in given two trees.
// * Auxiliary space: O(n)

/*
function isSubTree(T, S) {
  // *
  if (S === null) return true;

  // *
  if (T === null) return false;

  // * check if both tree are identical. If yes
  if (isIdentical(T, S)) return true;

  // * If the tree with root as current node doesn't match then try left and right subtrees one by one

  return isSubTree(T.left, S) || isSubTree(T.right, S);
}

function isIdentical(root1, root2) {
  if (root1 === null && root2 === null) return true;

  if (root1 === null || root2 === null) return false;

  //* Check if the data of both roots is same and data of left and right subtrees are also same

  return (
    root1.data === root2.data &&
    isIdentical(root1.left, root2.left) &&
    isIdentical(root1.right, root2.right)
  );
}

*/

// !===================Method 2===============
// *  The idea is based on the fact that inorder and preorder/postorder uniquely identify a binary tree.
// *  Tree S is a subtree of T if both inorder and preorder traversals of S are substrings of inorder and preorder traversals of T respectively.
// * Following are detailed steps.
// * #1 Find inorder and preorder traversals of T, and store them in two auxiliary arrays inT[] and preT[].
// * #2  Find inorder and preorder traversals of S, and store them in two auxiliary arrays inS[] and preS[].
// * $3  If inS[] is a subarray of inT[] and preS[] is a subarray preT[], then S is a subtree of T. Else not.

// function isSubtree(T, S) {
//   // base cases
//   if (S == null) return true;
//   if (T == null) return false;
// }
