class Pair {
  constructor(hd, node) {
    this.hd = hd;
    this.node = node;
  }
}

function bottomView(root) {
  const que = [];
  const map = new Map();
  let hd = 0;
  const res = [];

  que.push(new Pair(hd, root));

  while (que.length) {
    const temp = que.shift();
    hd = temp.hd;
    const node = temp.node;

    // *
    map.set(hd, node.data);

    if (node.left) que.push(new Pair(hd - 1, node.left));
    if (node.right) que.push(new Pair(hd + 1, node.right));
  }

  Array.from(map)
    .sort((a, b) => a[0] - b[0])
    .forEach((item) => res.push(item[1]));

  return res;
}
