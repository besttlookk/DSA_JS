// !===========Normal BST to Balanced BST
function buildBalancedTree(root) {
  const inArr = [];

  inorder(root, inArr);

  return buildTree(inArr, 0, inArr.length - 1);
}

function buildTree(arr, start, end) {
  if (start > end) return null;

  /* Get the middle element and make it root */
  let mid = parseInt((start + end) / 2);
  let node = new Node(arr[mid]);

  node.left = buildTree(arr, start, mid - 1);

  node.right = buildTree(arr, mid + 1, end);

  return node;
}

function inorder(root, arr) {
  if (root === null) return;

  inorder(root.left, arr);

  arr.push(root.data);

  inorder(root.right, arr);
}
