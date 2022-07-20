// !========Duplicate subtree in Binary Tree

// !=============Links
// * https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1?page=3&category[]=Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/check-binary-tree-contains-duplicate-subtrees-size-2/

// !================Method 1

// * An Efficient solution based on tree serialization and hashing.
let map = new Map();

function dupSub(root) {
  dupSubUtil(root);

  for (const value of map.values()) {
    if (value >= 2) return true;
  }

  return false;
}

function dupSubUtil(root) {
  if (root === null) return "$";
  let str = "";

  // * we are not considering leaf node as subtree
  if (root.left === null && root.right === null) {
    str = root.data.toString();

    return str;
  }

  str += root.data.toString();

  str += dupSubUtil(root.left);
  str += dupSubUtil(root.right);

  if (map.has(str)) {
    map.set(str, map.get(str) + 1);
  } else {
    map.set(str, 1);
  }

  return str;
}
