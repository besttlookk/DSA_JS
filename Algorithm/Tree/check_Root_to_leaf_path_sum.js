// !===================Root to leaf path sum
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

// !================Links
// * https://practice.geeksforgeeks.org/problems/root-to-leaf-path-sum/1/
// * https://www.geeksforgeeks.org/root-to-leaf-path-sum-equal-to-a-given-number/

// !===========Method 1(recursion)

// * Recursively check if left or right child has path sum equal to ( number – value at the current node)
// *  Strategy: subtract the node value from the sum when recurring down, and check to see if the sum is 0 you reach the leaf node.

/*
function hasPathSum(root, S) {

  let ans = false;
  let subSum = S - root.data;

  // * If leaf node and sum reach to zero
  if (subSum == 0 && root.left == null && root.right == null)
    return (ans = true);
  if (root.left != null)
    // ans || hasPathSum... has no utility if the ans is false
    ans = ans || hasPathSum(root.left, subSum);

  if (root.right != null)
    // But if it is true then we can afunction calling hasPathSum
    // here as answer has already been found
    ans = ans || hasPathSum(root.right, subSum);
  return ans;
}
*/
// !========short
function hasPathSum(root, S) {
  if (root === null) return false;
  S -= root.key;

  // * If leaf node and sum reach to zero
  if (root.left === null && root.right === null) {
    if (S === 0) return true;
    else return false;
  }

  if (hasPathSum(root.left, S) === true) return true;
  if (hasPathSum(root.right, S) === true) return true;

  return false;
}

let root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

console.log(hasPathSum(root, 21));
