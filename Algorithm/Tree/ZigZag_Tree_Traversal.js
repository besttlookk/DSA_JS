// !============ZigZag Tree Traversal

// !==============Links
// * https://www.geeksforgeeks.org/zigzag-tree-traversal/
// * https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1/

// !=================Method 1(Level order traversal)=========
function zigZagTraversal(root) {
  const q = [];
  q.push(root);
  let leftToRight = false;
  const ans = [];

  while (q.length) {
    const size = q.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const curr = q.shift();
      level.push(curr.data);

      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    leftToRight = !leftToRight;
    if (!leftToRight) {
      level.reverse();
    }

    ans.push([...level]);
  }

  return ans;
}
