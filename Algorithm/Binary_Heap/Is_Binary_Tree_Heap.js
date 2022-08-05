// !============Is Binary Tree Heap
// *  Binary tree need to fulfill the following two conditions for being a heap –

//* It should be a complete tree (i.e. all levels except last should be full).
//* Every node’s value should be greater than or equal to its child node (considering max-heap

// * We check each of the above condition separately, for checking completeness isComplete and for checking heap isHeapUtil function are written.

// !====================Links
// * https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1?page=1&category[]=Heap&sortBy=submissions
// * https://www.geeksforgeeks.org/check-if-a-given-binary-tree-is-heap/
// !=====================Solution ===========

function countNode(root) {
  if (root === null) return 0;

  return 1 + countNode(root.left) + countNode(root.right);
}

function isComplete(root, index, count) {
  if (root === null) return true;

  if (index >= count) return false;

  return (
    isComplete(root.left, 2 * index + 1, count) &&
    isComplete(root.right, 2 * index + 2, count)
  );
}

// * Every Node can have 2 children, 0 child (last level nodes) or 1 child (there can be at most one such node).
// * If Node has No child then it’s a leaf node and returns true (Base case)
function isHeapUtil(root) {
  // * leaf node is a valid heap
  if (root.left == null && root.right == null) return true;

  //* node will be in second last level
  // * If Node has one child (it must be left child because it is a complete tree) then we need to compare this node with its single child only.

  if (root.right == null) {
    // check heap property at Node
    // No recursive call ,
    // because no need to check last level
    return root.key > root.left.key;
  }

  const isLeft = isHeapUtil(root.left);
  const isRight = isHeapUtil(root.right);

  if (
    isLeft &&
    isRight &&
    root.key > root.left.key &&
    root.key > root.right.key
  )
    return true;
  else return false;
}
function isHeap(root) {
  const nodeCount = countNode(root);

  return isComplete(root, 0, nodeCount) && isHeapUtil(root);
}
