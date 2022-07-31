//!==========Function to find if the given edge is a bridge in graph.
// !====links===
// * https://practice.geeksforgeeks.org/problems/bridge-edge-in-graph/1?page=2&category[]=Graph&sortBy=submissions

// !=============Solution ===============

function isBridge(V, adj, c, d) {
  const visited = new Array(V).fill(false);

  this.dfs(c, visited, adj, c, d);

  return +!visited[d];
}

function dfs(u, visited, adj, c, d) {
  visited[u] = true;

  for (let v of adj[u]) {
    // * "c" node ho ker "d" node nhi jana hai
    // * iske baad v ager hum "d" node tak pahoch gaye...iska matlab "d" node tak jaane ka aur v way hai...so edge(c,d) is not the bridge
    if (!visited[v] && (u !== c || v !== d)) {
      this.dfs(v, visited, adj, c, d);
    }
  }
}
