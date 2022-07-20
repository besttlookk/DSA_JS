// !========Count BST nodes that lie in a given range

// !===============Links ================
// * https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1?page=2&category[]=Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/count-bst-nodes-that-are-in-a-given-range/
// !==================Method 1==============
/*
let count = 0;
function getCount(root, low, high) {
  if (root === null) return;

  if (root.data >= low && root.data <= high) count++;
  getCount(root.left, low, high);
  getCount(root.right, low, high);

  return count;
}
*/

// !=================Method 2================
// * The idea is to traverse the given binary search tree starting from root.
// * For every node being visited, check if this node lies in range, if yes, then add 1 to result and recur for both of its children.
// * If current node is smaller than low value of range, then recur for right child, else recur for left child.

function getCount(root, low, high) {
  //* Base Case
  if (root == null) return 0;

  //* If current node is in range, then
  //* include it in count and recur for
  //* left and right children of it
  if (root.data >= low && root.data <= high)
    return 1 + getCount(root.left, low, high) + getCount(root.right, low, high);
  else if (root.data < low) return this.getCount(root.right, low, high);
  // Else recur for left child
  else return this.getCount(root.left, low, high);
}
