// !===DFS of Graph

// !========Link
// * https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1?page=1&category[]=Graph&sortBy=submissions

//!
let ans = [];
function dfsOfGraph(V, adj) {
  let visited = {};

  dfsUtil(0, visited, adj);

  return ans;
}

function dfsUtil(v, visited, adj) {
  visited[v] = true;
  ans.push(v);

  const list = adj[v];

  for (let i = 0; i < list.length; i++) {
    const ele = list[i];
    if (!visited[ele]) {
      dfsUtil(ele, visited, adj);
    }
  }
}
