// !=======Level order traversal in spiral form

// !===========Links ===============
// * https://www.geeksforgeeks.org/level-order-traversal-in-spiral-form/#:~:text=To%20print%20the%20nodes%20in,else%20from%20right%20to%20left.
// * https://practice.geeksforgeeks.org/problems/level-order-traversal-in-spiral-form/1/?page=1&category[]=Stack&sortBy=submissions

// !======================Method 1 (Recursive) ============================
// * To print the nodes in spiral order, nodes at different levels should be printed in alternating order.
// *  An additional Boolean variable ltr is used to change printing order of levels.
// * If ltr is 1 then printGivenLevel() prints nodes from left to right else from right to left.
// * Value of ltr is flipped in each iteration to change the order.

// * Time Complexity: O(n2). Worst case occurs in case of skewed trees.
//* Auxiliary Space: O(n) for call stack since using recursion

/*
function height(node) {
  if (node === null) return 0;

  return 1 + Math.max(height(node.left), height(node.right));
}

const ans = [];
let ltr = false;
function findSpiral(root) {
  if (root === null) return ans;

  for (let i = 1; i <= height(root); i++) {
    findSpiralUtil(root, i);
    ltr = !ltr;
  }
}

function findSpiralUtil(node, level) {
  if (node === null) return;

  if (level === 1) ans.push(node.data);
  else if (level > 1) {
    if (ltr) {
      findSpiralUtil(node.left, level - 1);
      findSpiralUtil(node.right, level - 1);
    } else {
      findSpiralUtil(node.right, level - 1);
      findSpiralUtil(node.left, level - 1);
    }
  }
}

*/

// !=================Method 2(Iterative) ==============
// * We can print spiral order traversal in O(n) time and O(n) extra space. The idea is to use two stacks.
// *  We can use one stack for printing from left to right and other stack for printing from right to left.
// *  In every iteration, we have nodes of one level in one of the stacks. We print the nodes, and push nodes of next level in other stack.

function findSpiral(root) {
  const ans = [];
  if (root === null) {
    return ans;
  }

  let s1 = []; //* For levels to be printed from right to left

  let s2 = []; //* For levels to be printed from left to right

  //* Push first level to first stack 's1'
  s1.push(root);

  while (s1.length > 0 || s2.length > 0) {
    //* Print nodes of current level from
    //* s1 and push nodes of next level to s2
    while (s1.length > 0) {
      let temp = s1.pop();
      ans.push(temp.data);

      //* Note that is right is pushed before left
      if (temp.right) s2.push(temp.right);
      if (temp.left) s2.push(temp.left);
    }

    while (s2.length > 0) {
      const temp = s2.pop();
      ans.push(temp.data);

      //* Note that is left is pushed before right
      if (temp.left) s1.push(temp.left);
      if (temp.right) s1.push(temp.right);
    }
  }

  return ans;
}
