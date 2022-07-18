// !=====Construct BST from given preorder traversal

// !================Links====
// * https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/
// * https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversal-set-3-naive-method/?ref=rp
// * https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/
// * https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversal-set-2/?ref=rp

// !================Method 1 ( O(n2) time complexity ) ====================
/*
let preIndex = 0;
function constructTree(pre) {
  let size = pre.length;
  return constructTreeUtil(pre, 0, size - 1);
}

function constructTreeUtil(pre, low, high) {
  //*Base Case
  if (low > high) return null;

  //* The first node in preorder traversal is root. So take
  //* the node at preIndex from pre[] and make it root,
  //* and increment preIndex
  let root = new Node(pre[preIndex++]);

  //* If the current subarray has onlye one element,
  //* no need to recur
  if (low === high) return root;

  let r_root = -1;

  //* Search for the first element greater than root
  for (let i = low; i < high + 1; i++) {
    if (pre[i] > root.data) {
      r_root = i;
      break;
    }
  }

  //* If no elements are greater than the current root,
  //* all elements are left children
  //* so assign root appropriately
  if (r_root == -1) r_root = preIndex + (high - low);

  // Use the index of element found in preorder to divide
  // preorder array in two parts. Left subtree and right
  // subtree
  root.left = constructTreeUtil(pre, preIndex, r_root - 1);

  root.right = constructTreeUtil(pre, r_root, high);

  return root;
}
*/
// !==============Method 2 (n^2 time com)====================
/*
function constructTree(pre) {
  let root = null;

  for (let i = 0; i < pre.length; i++) {
    buildTree(root, pre[i]);
  }

  return root;
}

function buildTree(root, ele) {
  if (!root) {
    return new Node(ele);
  }

  if (root.data > ele) {
    root.left = buildTree(root.left, ele);
  } else {
    root.right = buildTree(root.right, ele);
  }

  return root;
}
*/
// !====================Method 3 ( O(n) time complexity ):==============
// * The trick is to set a range {min .. max} for every node. Initialize the range as {INT_MIN .. INT_MAX}.

let preIndex = 0;
function constructTree(pre, size) {
  if (size === 0) return null;

  const treeRoot = pre[0];
  if (size === 1) return treeRoot;

  constBST(pre, size, treeRoot, Number.MIN_VALUE, Number.MAX_VALUE);
}

function constBST(pre, n, curr, min, max) {
  // * before going left do boundry check
  if (preIndex === n || pre[preIndex] < min || pre[preIndex] > max)
    return preIndex;

  if (pre[preIndex] < curr.data) {
    curr.left = new Node(pre[preIndex++]);

    preIndex = constBST(pre, n, curr.left, min, curr.data - 1);
  }

  // * before going right do boundry check
  if (preIndex === n || pre[preIndex] < min || pre[preIndex] > max)
    return preIndex;

  curr.right = new Node(pre[preIndex++]);

  preIndex = constBST(pre, n, curr.right, curr.data + 1, max);

  return preIndex;
}

// !===============Method 1 (preorder && inorder) ==========
// * We know that the inorder traversal of the BST gives the element in non-decreasing manner.
// * Hence we can sort the given preorder traversal to obtain the inorder traversal of the binary search tree.

// * Time Complexity: Sorting takes O(nlogn) time for sorting and constructing using preorder and inorder traversals takes linear time. Hence overall time complexity of the above solution is O(nlogn).
//* Auxiliary Space: O(n).
