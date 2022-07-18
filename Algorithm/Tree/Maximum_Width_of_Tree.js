// !==========Maximum Width of Tree =================

// * NOTE THIS METHOD DOES NOT CONSIDER NULL NODE

// *The width of a tree for any level is defined as the number of nodes between the two extreme nodes of that level including the NULL node in between.

class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

// !=======Links
// * https://practice.geeksforgeeks.org/problems/maximum-width-of-tree/1/
// * https://www.geeksforgeeks.org/maximum-width-of-a-binary-tree/

// !=================Method 1(Level order traversal) ============
function getMaxWidth(root) {
  if (!root) return 0;
  const q = [];
  let max = Number.MIN_VALUE;
  let count = 0;
  let curr = root;

  q.push(curr);
  q.push(null);

  while (q.length !== 0) {
    curr = q.shift();

    if (curr === null) {
      max = Math.max(max, count);

      if (q.length === 0) return max;

      count = 0;
      q.push(null);
      continue;
    }

    count++;

    curr.left && q.push(curr.left);
    curr.right && q.push(curr.right);
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(8);
root.right.right.left = new Node(6);
root.right.right.right = new Node(7);

console.log(getMaxWidth(root));
