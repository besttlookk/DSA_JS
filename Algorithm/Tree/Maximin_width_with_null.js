class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

// !=============Links ===========
// * https://www.geeksforgeeks.org/maximum-width-of-a-binary-tree-with-null-value/?ref=rp
// * https://www.geeksforgeeks.org/maximum-width-of-a-binary-tree-with-null-values-set-2/?ref=rp

/*
function getMaxWidth(root) {
  if (root == null) {
    return 0;
  }

  const q = [];

  q.push([root, 0]);
  let maxWidth = 1;

  while (q.length) {
    let size = q.length;
    let first, last;

    for (i = 0; i < size; i++) {
      let temp = q[0][0];
      let id = q[0][1];

      q.shift();

      //* First Node
      if (i == 0) {
        first = id;
      }

      //* Last Node
      if (i == size - 1) {
        last = id;
      }

      if (temp.left) q.push([temp.left, id * 2 + 1]);
      if (temp.right) q.push([temp.right, id * 2 + 2]);
    }
    maxWidth = Math.max(maxWidth, last - first + 1);
  }

  return maxWidth;
}
*/
// !====================Little variation to avoid overflow

function getMaxWidth(root) {
  if (root == null) {
    return 0;
  }

  const q = [];

  q.push([root, 0]);
  let maxWidth = 1;

  while (q.length) {
    let size = q.length;
    let min = q[0][1];
    let first, last;

    for (i = 0; i < size; i++) {
      let temp = q[0][0];
      let id = q[0][1] - min;

      q.shift();

      //* First Node
      if (i == 0) {
        first = id;
      }

      //* Last Node
      if (i == size - 1) {
        last = id;
      }

      if (temp.left) q.push([temp.left, id * 2 + 1]);
      if (temp.right) q.push([temp.right, id * 2 + 2]);
    }
    maxWidth = Math.max(maxWidth, last - first + 1);
  }

  return maxWidth;
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
