// !=====Sum of Leaf Nodes
// !=======Links
// * https://practice.geeksforgeeks.org/problems/sum-of-leaf-nodes/1?page=3&category[]=Tree&sortBy=submissions

// !=============
let sum = 0;
function SumofLeafNodes(root) {
  if (root === null) return 0;

  if (root.left === null && root.right === null) {
    sum += root.data;
  }

  SumofLeafNodes(root.left);
  SumofLeafNodes(root.right);

  return sum;
}
