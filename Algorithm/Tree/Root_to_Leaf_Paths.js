// !======Root to Leaf Paths

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

// !============Links =============
// * https://practice.geeksforgeeks.org/problems/root-to-leaf-paths/1/
// * https://www.geeksforgeeks.org/given-a-binary-tree-print-all-root-to-leaf-paths/

// !==============Method 1 (In-order traversal) ==========
/*
const ans = [];
const st = [];
function Paths(root) {
  inorder(root);

  return ans;
}

function inorder(root) {
  if (!root) return;

  // * Push every node
  st.push(root);
  inorder(root.left);
  // * TODO
  if (root.left === null && root.right === null) {
    ans.push(...st);
    ans.push("#");
  }

  inorder(root.right);
}

*/

// !==================Method 2 ===================
function Paths(root) {
  let ans = [];
  let st = [];

  pathRecur(root, ans, st);

  return ans;
}

function pathRecur(node, ans, st) {
  if (node == null) return;

  st.push(node.data);

  //* it's a leaf, so print the path that lead to here
  if (node.left == null && node.right == null) {
    console.log({ st });
    ans.push([...st]);
  }

  pathRecur(node.left, ans, st);
  pathRecur(node.right, ans, st);

  st.pop();
}

let root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

console.log(Paths(root));
