// * Ceil Value Node: Node with the smallest data larger than or equal to the key value.

// !==============Links============
// * https://practice.geeksforgeeks.org/problems/implementing-ceil-in-bst/1
// * https://www.geeksforgeeks.org/floor-and-ceil-from-a-bst/?ref=lbp

// !======================Method 1(recursion) ==================
// * Time complexity: O(logn)
// * Auxiliary Space: O(logn)
/*
function findCeil(root, input) {
  //* Base case
  if (root == null) {
    return -1;
  }

  //* We found equal key
  if (root.data == input) {
    return node.data;
  }

  //* If root's key is smaller,
  //* ceil must be in right subtree
  if (root.data < input) {
    return findCeil(root.right, input);
  }

  //* Else, either left subtree or root
  //* has the ceil value
  let ceil = findCeil(root.left, input);

  return ceil >= input ? ceil : root.data;
}
*/
// !====================Method 2(Iterative Approach)==============
let ceil;
function findCeil(root, input) {
  ceil = -1;

  findCeilHelper(root, input);

  return ceil;
}

function findCeilHelper(root, input) {
  while (root !== null) {
    if (root.data === input) {
      ceil = root.data;
      return;
    }

    if (input > root.data) {
      root = root.right;
    } else {
      ceil = root.data;
      root = root.left;
    }
  }
  return;
}
