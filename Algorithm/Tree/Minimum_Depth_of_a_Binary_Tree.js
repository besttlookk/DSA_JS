// !=====Minimum Depth of a Binary Tree===
// * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// * Note that the path must end on a leaf node.

// !============Links =================
// * https://practice.geeksforgeeks.org/problems/minimum-depth-of-a-binary-tree/1?page=3&category[]=Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/#:~:text=The%20minimum%20depth%20is%20the,Binary%20Tree%20is%20also%202.

// !======Method 1(recursive)======================================================================

function minDepth(root) {
  // Corner case. Should never be hit unless the code is
  // called on root = NULL
  if (root == null) return 0;

  // Base case : Leaf Node. This accounts for height = 1.
  if (root.left == null && root.right == null) return 1;

  // If left subtree is NULL, recur for right subtree
  if (root.left == null) return minDepth(root.right) + 1;

  // If right subtree is NULL, recur for left subtree
  if (root.right == null) return minDepth(root.left) + 1;

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

// !=================Iterative==========================
function minDepth(root) {
  if (!root) return 0;
  let q = [];
  q.push(root);
  let height = 0;

  while (q.length !== 0) {
    const size = q.length;
    height++;

    for (let i = 0; i < size; i++) {
      root = q.shift();

      if (root.left === null && root.right === null) {
        return height;
      }
      root.left && q.push(root.left);
      root.right && q.push(root.right);
    }
  }
  return height;
}
