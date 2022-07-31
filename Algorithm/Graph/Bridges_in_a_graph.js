// !===============Bridges in a graph

// !==========Links
// * https://www.geeksforgeeks.org/bridge-in-a-graph/#:~:text=An%20edge%20in%20an%20undirected,increases%20number%20of%20disconnected%20components.

// !====================Method 1(Tarjans Algo) ====
let time = 0;
function bridge(V, adj) {
  const dist = new Array(V).fill(-1);
  const low = new Array(V).fill(-1);
  const parent = new Array(v).fill(-1);
  const bridges = [];

  for (let i = 0; i < V; i++) {
    if (dist[i] === -1) {
      dfs(i, dist, low, parent, adj, bridges);
    }
  }

  return bridges.length ? bridges : [-1];
}

function dfs(u, dist, low, parent, ap, adj, bridges) {
  dist[u] = time;
  low[u] = time;
  time++;

  for (let v of adj[u]) {
    if (dist[v] === -1) {
      parent[v] = u;
      dfs(v, dist, low, parent, ap, adj);
      // * update low while backtracking
      low[u] = Math.min(low[u], low[v]);

      if (low[v] > dist[u]) {
        bridges.push([u, v]);
      }
    }

    // * If visited and that means it is a back-edge
    // * and also that back-edge node is not parent
    else if (v !== parent[u]) {
      low[u] = Math.min(low[u], dist[v]);
    }
  }
}
