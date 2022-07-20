// !=============Links
// * https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/
// * https://practice.geeksforgeeks.org/problems/maximum-path-sum-from-any-node/1/

// !========Maximum path sum from any node

//* For each node there can be four ways that the max path goes through the node:
// * 1. Node only
// * 2. Max path through Left Child + Node
// * 3. Max path through Right Child + Node
// * 4. Max path through Left Child + Node + Max path through Right Child

// * The idea is to keep trace of four paths and pick up the max one in the end.
// * An important thing to note is, root of every subtree need to return maximum path sum such that at most one child of root is involved.
// * This is needed for parent function call. In below code, this sum is stored in ‘max_single’ and returned by the recursive function.
let val;
function findMaxSum(root) {
  // Initialize result
  // int res2 = Integer.MIN_VALUE;
  val = Number.MIN_VALUE;

  // Compute and return result
  findMaxUtil(root);
  return val;
}

function findMaxUtil(node) {
  // Base Case
  if (node == null) return 0;

  // l and r store maximum path sum going through left and
  // right child of root respectively
  let l = findMaxUtil(node.left);
  let r = findMaxUtil(node.right);

  //* Max path for parent call of root. This path must include at-most one child of root
  // * this is for path connecting upper part.
  // * so we have to return only one end which gives the max
  let max_single = Math.max(Math.max(l, r) + node.data, node.data);

  //* Max Top represents the sum when the Node under
  //* consideration is the root of the maxsum path and no
  //* ancestors of root are there in max sum path
  // * this is for overall selection.
  let max_top = Math.max(max_single, l + r + node.data);

  //* Store the Maximum Result.
  // * if max_top gets highter than previous value chnage the prev value
  val = Math.max(val, max_top);

  return max_single;
}
