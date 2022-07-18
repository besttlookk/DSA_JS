// !==========all root to leaf path sum
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

// !======Links
// * https://www.geeksforgeeks.org/find-all-root-to-leaf-path-sum-of-a-binary-tree/#:~:text=Start%20from%20the%20root%20node,nodes%20of%20the%20binary%20tree.

// !===========Method
let ans = 0;
function PathsSum(root) {
  let st = [];

  pathRecur(root, st);

  return ans;
}

function pathRecur(node, st) {
  if (node == null) return;

  st.push(node.data);

  //* it's a leaf, so print the path that lead to here
  if (node.left == null && node.right == null) {
    const sum = findSum([...st]);
    ans += sum;
  }
  pathRecur(node.left, st);
  pathRecur(node.right, st);

  st.pop();
}

function findSum(arr) {
  return arr.reduce((acc, item) => {
    return item + parseInt(acc);
  }, 0);
}

let root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

console.log(PathsSum(root));
