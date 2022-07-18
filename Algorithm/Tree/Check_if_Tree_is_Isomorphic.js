// !=========Check if Tree is Isomorphic

// !=====links
// *https://www.geeksforgeeks.org/tree-isomorphism-problem/
// * https://practice.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1

function isIsomorphic(root1, root2) {
  //* Both roots are NULL, trees isomorphic by definition
  if (root1 == null && root2 == null) {
    return true;
  }

  //* Exactly one of the root1 and root2 is NULL,
  //* trees not isomorphic
  if (root1 == null || root2 == null) {
    return false;
  }

  if (root1.data != root2.data) {
    return false;
  }

  //* There are two possible cases for
  //* root1 and root2 to be isomorphic
  //* Case 1: The subtrees rooted at
  //* these nodes have NOT been
  //* "Flipped".
  // Both of these subtrees have to be isomorphic.
  // Case 2: The subtrees rooted at these nodes
  // have been "Flipped"
  return (
    (isIsomorphic(root1.left, root2.left) &&
      isIsomorphic(root1.right, root2.right)) ||
    (isIsomorphic(root1.left, root2.right) &&
      isIsomorphic(root1.right, root2.left))
  );
}
