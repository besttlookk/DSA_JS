// !===Check if all leaves are at same level

// !===Links
// * https://www.geeksforgeeks.org/check-leaves-level/
// * https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1

// !================Method(iterative level order) ==========
function check(root) {
  if (root == null) return true;
  const que = [];
  let level = 0;
  que.push(root);
  let result = Number.MAX_VALUE;

  while (que.length) {
    const size = que.length;
    level++;

    for (let i = 0; i < size; i++) {
      const temp = que.shift();

      if (temp.left !== null) {
        que.push(temp.left);

        //* if its leaf node
        if (temp.left.left == null && temp.left.right == null) {
          //* If it's first leaf node,
          //* then update result
          if (result == Number.MAX_VALUE) result = level;
          // If it's not first leaf node,
          // then compare the level with
          // level of previous leaf node.
          else if (result != level) return false;
        }
      }

      if (temp.right !== null) {
        que.push(temp.right);

        //* if its leaf node
        if (temp.right.left == null && temp.right.right == null) {
          //* If it's first leaf node,
          //* then update result
          if (result == Number.MAX_VALUE) result = level;
          // If it's not first leaf node,
          // then compare the level with
          // level of previous leaf node.
          else if (result != level) return false;
        }
      }
    }
  }
  return true;
}
