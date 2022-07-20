// !======Check whether BST contains Dead End

// !===========Links
// * https://www.geeksforgeeks.org/check-whether-bst-contains-dead-end-not/
// * https://practice.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1?page=4&category[]=Tree&sortBy=submissions

// !==================Method 1 (recursion)

function isDeadEnd(root, min = 1, max = Infinity) {
  if (root === null) return false;

  if (min === max) return true;

  return (
    isDeadEnd(root.left, min, root.data - 1) ||
    isDeadEnd(root.right, root.data + 1, max)
  );
}
