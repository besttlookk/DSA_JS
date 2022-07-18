// !=========Links
// * https://practice.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree1528/1
// * https://www.geeksforgeeks.org/check-if-two-trees-are-mirror/

function areMirror(a, b) {
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
