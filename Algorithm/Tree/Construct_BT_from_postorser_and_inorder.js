// !===== Tree from Postorder and Inorder

// !==================== Links ===================
// * https://practice.geeksforgeeks.org/problems/tree-from-postorder-and-inorder/1?page=3&category[]=Tree&sortBy=submissions
// *

let postIndex = 0;
function buildTree(ino, post, n) {
  const map = new Map();
  postIndex = n - 1;

  for (let i = 0; i < n; i++) {
    map.set(ino[i], i);
  }

  return buildTreeUtil(post, n, 0, n - 1, map);
}

function buildTreeUtil(post, n, start, end, map) {
  if (start > end || preIndex < 0) return null;

  const tNode = new Node(post[preIndex--]);

  if (start === end) return tNode;

  //* Else find the index of this node in Inorder traversal
  let inIndex = map.get(tNode.data);

  tNode.right = buildTreeUtil(post, n, inIndex + 1, end, map);
  tNode.left = buildTreeUtil(post, n, start, inIndex - 1, map);

  return tNode;
}
