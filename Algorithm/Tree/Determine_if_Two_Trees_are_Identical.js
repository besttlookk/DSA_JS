// !========Determine if Two Trees are Identical
// * Two trees are identical when they have same data and arrangement of data is also same.
// * To identify if two trees are identical, we need to traverse both trees simultaneously, and while traversing we need to compare data and children of the trees.

// !============Method 1 ======
/*
function isIdentical(root1, root2) {
  //* 1. both empty
  if (root1 == null && root2 == null) return true;

  //* 2. both non-empty -> compare them
  if (root1 !== null && root2 !== null) {
    return (
      root1.data === root2.data &&
      isIdentical(root1.left, root2.left) &&
      isIdentical(root1.right, root2.right)
    );
  }

  //* 3. one empty, one not -> false
  return false;
}

*/

// !=============Method 2 ==========
// * Another approach can be thinking that if two trees are identical, their preorder, inorder and postorder traversals will also be same.
// * For this we can find one traversal, say inorder, and if it is same for both the trees, can we say the given trees are identical?  No, because we can have two trees with same inorder traversal, still they can be non-identical.
// * Solution: To tackle such edge cases, we should find all the traversal for both the trees and see if they are equal. If yes, the given trees are identical else not.
