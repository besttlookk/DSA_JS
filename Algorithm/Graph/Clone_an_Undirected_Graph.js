// !===========Clone an Undirected Graph

// !================Links
// * https://leetcode.com/problems/clone-graph/
// * https://practice.geeksforgeeks.org/problems/clone-graph/1?page=2&category[]=Graph&curated[]=7&sortBy=submissions

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (node === null) return null;

  const visited = new Array(1000).fill(null);
  const cloneNode = new Node(node.val);
  visited[node.val] = cloneNode; //* In place of true we put clone node

  // * iterate for all the neighbours
  for (let curr of node.neighbors) {
    // * if clone has not been created
    if (visited[curr.val] === null) {
      const currClone = new Node(curr.val);
      cloneNode.neighbors.push(currClone);
      dfs(curr, currClone, visited); //* curr represent
    } else {
      cloneNode.neighbors.push(visited[curr.val]);
    }
  }

  return cloneNode;
};

function dfs(curr, currClone, visited) {
  visited[currClone.val] = currClone; //*

  // * iterate for all the neighbours
  for (let ele of curr.neighbors) {
    // * if clone has not been created
    if (visited[ele.val] === null) {
      const newNode = new Node(ele.val);
      currClone.neighbors.push(newNode);
      dfs(ele, newNode, visited);
    } else {
      currClone.neighbors.push(visited[ele.val]); //* visited array contains actual node not just value
    }
  }
}

// !====================MMethod 2(Using Two Clone) ================
var cloneGraph = function (node) {
  const que1 = [];
  const que2 = [];

  que1.push(node);
  cloneNode = new Node(node.val);
  que2.push(cloneNode);

  while (que1.length) {
    const front1 = que1.shift();
    front1.val = -1;
    const front2 = que2.shift();

    for (let ele in front1.neighbors) {
      if (ele.val !== -1) {
        que1.push(ele);
        eleClone = new Node(ele.val);
        front2.neighbors.push(eleClone);
        que2.push(eleClone);
      }
    }
  }

  return cloneNode;
};
