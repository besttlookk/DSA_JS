// ! =========== Print a Binary Tree in Vertical Order
// * We need to check the Horizontal Distances from the root for all nodes.
// * If two nodes have the same Horizontal Distance (HD), then they are on the same vertical line.
// *  The idea of HD is simple. HD for root is 0, a right edge (edge connecting to right subtree) is considered as +1 horizontal distance and a left edge is considered as -1 horizontal distance.
// * We can do preorder traversal of the given Binary Tree. While traversing the tree, we can recursively calculate HDs.
// * We initially pass the horizontal distance as 0 for root
// *  For left subtree, we pass the Horizontal Distance as Horizontal distance of root minus 1.
// * For right subtree, we pass the Horizontal Distance as Horizontal Distance of root plus 1.
// * For every HD value, we maintain a list of nodes in a hash map. Whenever we see a node in traversal, we go to the hash map entry and add the node to the hash map using HD as a key in a map.

// * If there are multiple nodes passing through a vertical line, then they should be printed as they appear in level order traversal of the tree.

// !===================Links ===============
// * https://practice.geeksforgeeks.org/problems/print-a-binary-tree-in-vertical-order/1/?page=1&category[]=Tree&sortBy=submissions
// * https://www.geeksforgeeks.org/print-binary-tree-vertical-order-set-2/
// * https://www.geeksforgeeks.org/print-a-binary-tree-in-vertical-order-set-3-using-level-order-traversal/

// !===========Method 1(Level order traversal) ===============

class Pair {
  constructor(hd, node) {
    this.hd = hd;
    this.node = node;
  }
}

function verticalOrder(root) {
  if (root === null) return;

  //* Create a map and store vertical order in map using function getVerticalOrder()
  let map = new Map();

  let hd = 0;

  //* Create queue to do level order
  //* traversal. Every item of queue
  //* contains node and horizontal
  //* distance.
  let que = [];

  que.push(new Pair(hd, root));

  while (que.length) {
    const temp = que.shift();

    hd = temp.hd;
    let node = temp.node;

    //* insert this node's data in array of hash
    if (map.has(hd)) {
      const a1 = map.get(hd);
      a1.push(node.data);
      map.set(hd, a1);
    } else {
      const a1 = [];
      a1.push(node.data);
      map.set(hd, a1);
    }

    // * handle level order
    if (node.left) que.push(new Pair(hd - 1, node.left));
    if (node.right) que.push(new Pair(hd + 1, node.right));
  }

  return mapToArray(map);
}

function mapToArray(map) {
  // * Map:{ 1 => 20, -1 => 30, 2 => 50, 0 => 10, 3 => 90 }
  // sort the map vale according to increasing order of hd(horizontal distance)
  const res = [];
  const arr = Array.from(map).sort((a, b) => a[0] - b[0]); //* arr = [ [ -1, [30] ], [ 0, [10,5] ], [ 1, [20] ], [ 2, [50] ], [ 3, [90] ] ]
  arr.forEach((item) => {
    res.push(...item[1]);
  });

  return res;
}
