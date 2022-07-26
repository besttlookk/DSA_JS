// !===========Clone an Undirected Graph

// !================Links
// * https://leetcode.com/problems/clone-graph/

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
  visited[node.val] = cloneNode;

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
