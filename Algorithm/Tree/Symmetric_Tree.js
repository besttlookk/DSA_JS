// !====================Symmetric Tree

// !===============Links ==============
// * https://practice.geeksforgeeks.org/problems/symmetric-tree/1?page=2&category[]=Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/symmetric-tree-tree-which-is-mirror-image-of-itself/

function isSymmetric(root) {
  return isMirror(root, root);
}

function isMirror(a, b) {
  /* Base case : Both empty */
  if (a == null && b == null) return true;

  // If only one is empty
  if (a == null || b == null) return false;

  /*
   * Both non-empty, compare them recursively Note that in recursive calls, we
   * pass left of one tree and right of other tree
   */
  return (
    a.data == b.data && areMirror(a.left, b.right) && areMirror(a.right, b.left)
  );
}
