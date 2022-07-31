// !=========== Articulation Points (or Cut Vertices) in a Graph
// * A vertex in an undirected connected graph is an articulation point (or cut vertex) if removing it (and edges through it) disconnects the graph.
// * Articulation points represent vulnerabilities in a connected network – single points whose failure would split the network into 2 or more components.
// !============Links
// * https://practice.geeksforgeeks.org/problems/articulation-point-1/1?page=3&category[]=Graph&sortBy=submissions
// * https://practice.geeksforgeeks.org/problems/articulation-point2616/1?page=4&category[]=Graph&sortBy=submissions

// !=============Method 1(Using Targans algo)
let time = 0;
function articulationPoints(V, adj) {
  const dist = new Array(V).fill(-1);
  const low = new Array(V).fill(-1);
  const parent = new Array(v).fill(-1);
  const ap = new Array(v).fill(false);
  const res = [];

  for (let i = 0; i < V; i++) {
    if (dist[i] === -1) {
      dfs(i, dist, low, parent, ap, adj);
    }
  }

  for (let i = 0; i < V; i++) {
    if (ap[i]) {
      res.push(i);
    }
  }

  return res.length ? res : [];
}

function dfs(u, dist, low, parent, ap, adj) {
  dist[u] = time;
  low[u] = time;
  time++;
  let children = 0;

  for (let v of adj[u]) {
    if (dist[v] === -1) {
      children++;
      parent[v] = u;
      dfs(v, dist, low, parent, ap, adj);
      // * update low while backtracking
      low[u] = Math.min(low[u], low[v]);

      //* Case !: U is a root
      if (parent[u] === -1 && children > 1) {
        ap[u] = true;
      }

      // * if neighbour node has no back edge
      if (parent !== -1 && low[v] >= dist[u]) {
        ap[u] = true;
      }
    }

    // * If visited and that means it is a back-edge
    // * and also that back-edge node is not parent
    else if (v !== parent[u]) {
      low[u] = Math.min(low[u], dist[v]);
    }
  }
}
