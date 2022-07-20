// !===========Floor value of bst

// !===============Links
// * https://www.geeksforgeeks.org/floor-in-binary-search-tree-bst/
// * https://www.geeksforgeeks.org/floor-and-ceil-from-a-bst/?ref=lbp

// !=================Method 1 (Iterative) ================

let floor;
function findCeil(root, input) {
  floor = -1;

  findCeilHelper(root, input);

  return floor;
}

function findCeilHelper(root, input) {
  while (root !== null) {
    if (root.data === input) {
      floor = root.data;
      return;
    }

    if (input > root.data) {
      root = root.right;
      floor = root.data;
    } else {
      root = root.left;
    }
  }
  return;
}
