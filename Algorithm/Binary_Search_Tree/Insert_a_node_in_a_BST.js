// !=============Insert a node in a BST
// * Note: If K is already present in the BST, don't modify the BST.

// * A new key is always inserted at the leaf.
// * We start searching a key from the root until we hit a leaf node. Once a leaf node is found, the new node is added as a child of the leaf node.
// !=======Links
// * https://practice.geeksforgeeks.org/problems/insert-a-node-in-a-bst/0/?page=1&category[]=Binary%20Search%20Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/

// !=============Method 1 (Iterative)============
function insert(node, data) {
  if (node === null) {
    return new Node(data);
  }

  if (node.data > data) {
    node.left = insert(node.left, data); //* we are getting changed left side
  } else if (node.data < data) {
    node.right = insert(node.right, data);
  }

  return node;
}
