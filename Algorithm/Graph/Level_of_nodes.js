// !================:evel of nodes

/**
 * @param {number} V
 * @param {number[][]} adj
 * @param {number} X
 * @returns {number}
 */

// !============ Links
// * https://practice.geeksforgeeks.org/problems/level-of-nodes-1587115620/1?page=2&category[]=Graph&sortBy=submissions

// !==================Solution(BFS)===============
function nodeLevel(V, adj, X) {
  const que = [];

  const visited = new Array(V).fill(false);

  visited[0] = true;
  que.push(0);
  depth = -1;

  while (que.length) {
    depth++;
    const size = que.length;

    for (let i = 0; i < size; i++) {
      const front = que.shift();

      if (front === X) {
        return depth;
      }

      for (let v of adj[front]) {
        if (!visited[v]) {
          que.push(v);
          visited[v] = true;
        }
      }
    }
  }

  return -1;
}
