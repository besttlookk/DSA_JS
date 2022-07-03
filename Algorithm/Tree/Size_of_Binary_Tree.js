// !=============Links
// * https://practice.geeksforgeeks.org/problems/size-of-binary-tree/1/?page=3&category[]=Tree&sortBy=submissions

// !=============Method 1
function getSize(root) {
  if (root === null) return 0;

  return 1 + getSize(root.left) + getSize(root.right);
}
