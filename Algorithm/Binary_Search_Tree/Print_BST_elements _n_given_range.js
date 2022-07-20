// !=========Print BST elements in given range

// !===============Links ===============
// * https://practice.geeksforgeeks.org/problems/print-bst-elements-in-given-range/1?page=3&category[]=Tree&sortBy=submissions

let res = [];
function printNearNodes(root, low, high) {
  if (root === null) return;

  if (root.data >= low && root.data <= high) res.push(root.data);

  printNearNodes(root.left, low, high);
  printNearNodes(root.right, low, high);

  return res;
}
