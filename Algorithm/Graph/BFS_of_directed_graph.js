// !======BFS of graph
/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */

// !=====links
// * https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1?page=1&category[]=Graph&sortBy=submissions

// !========
function bfsOfGraph(V, adj) {
  let ans = [];
  const visited = {};
  const que = [0];
  visited[0] = true;

  while (que.length) {
    let temp = que.shift();

    ans.push(temp);

    const list = adj[temp];

    for (let i = 0; i < list.length; i++) {
      if (!visited[list[i]]) {
        visited[list[i]] = true;
        que.push(list[i]);
      }
    }
  }

  return ans;
}
