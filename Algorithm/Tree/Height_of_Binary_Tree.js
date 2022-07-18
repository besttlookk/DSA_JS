// ! ==== Write a Program to Find the Maximum Depth or Height of a Tree

// !===========Links
// * https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/
// * https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1/

// !==============Method 1(recursive) =============
// * Recursively calculate height of left and right subtrees of a node and assign height to the node as max of the heights of two children plus 1

// * Time Complexity: O(n) (Please see our post Tree Traversal for details)

// * Auxiliary Space: O(n) due to recursive calls.
function height(node) {
  if (node === null) return 0;

  return Math.max(height(node.left), height(node.right)) + 1;
}

// !=============Method 2(iterative)
// * Another method to solve this problem is to do Level Order Traversal.
// * While doing the level order traversal, while adding Nodes at each level to Queue, we have to add NULL Node so that whenever it is encountered, we can increment the value of variable and that level get counted.

function height(node) {
  let q = [];
  q.push(node);
  q.push(null);
  let height = 0;

  while (q.length !== 0) {
    node = q.shift();

    if (node === null) {
      height++;
      if (q.length === 0) return height;
      q.push(null);
      continue;
    } else {
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
  }
}

// !================Method 3(iterative + without null)

function height(node) {
  let q = [];
  q.push(node);
  let height = 0;

  while (q.length !== 0) {
    const size = q.length;

    for (let i = 0; i < size; i++) {
      node = q.shift();

      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    height++;
  }
  return height;
}
