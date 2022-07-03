// !====== Construct Tree from given Inorder and Preorder traversals

// !===========Method 1 ===========

// * Time Complexity: O(n^2). The worst case occurs when the tree is left-skewed. Example Preorder and Inorder traversals for worst-case are {A, B, C, D} and {D, C, B, A}.
/*
let preIndex = 0;
function buildTree(inorder, preorder, n, inStart = 0, inEnd = n - 1) {
  if (inStart > inEnd || preIndex >= n) return null;

  //* Pick current node from Preorder  traversal using preIndex and  increment preIndex
  let tNode = new Node(preorder[preIndex++]);

  //* If this node has no children then return
  if (inStart == inEnd) return tNode;

  //* Else find the index of this  node in Inorder traversal
  let inIndex = search(inorder, inStart, inEnd, tNode.data);

  //* Using index in Inorder traversal,
  //* construct left and right subtress
  tNode.left = buildTree(inorder, preorder, inStart, inIndex - 1);
  tNode.right = buildTree(inorder, preorder, inIndex + 1, inEnd);

  return tNode;
}

function search(arr, start, end, value) {
  for (let i = start; i <= end; i++) {
    if (arr[i] === value) return i;
  }
}
*/
// !===================Method 2(Efficient Approach ) ==================
// * . We store indexes of inorder traversal in a hash table. So that search can be done O(1) time.

let preIndex = 0;

function buildTreeUtil(preorder, n, inStart, inEnd, map) {
  if (inStart > inEnd || preIndex >= n) return null;

  const tNode = new Node(preorder[preIndex++]);

  if (inStart === inEnd) return tNode;

  //* Else find the index of this node in Inorder traversal
  let inIndex = map.get(tNode.data);

  tNode.left = buildTreeUtil(preorder, inStart, inIndex - 1, map);
  tNode.right = buildTreeUtil(preorder, inIndex + 1, inEnd, map);

  return tNode;
}

function buildTree(inorder, preorder, n) {
  const map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i);
  }

  return buildTreeUtil(preorder, n, 0, n - 1, map);
}
