// !======Connected Components in an undirected graph

// !=======Links
// * https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/
// * https://practice.geeksforgeeks.org/problems/number-of-provinces/1?page=2&category[]=Graph&sortBy=submissions

function numProvinces(V, adj) {
  const visited = new Array(V).fill(false);
  const adjList = new Array(V);

  for (let i = 0; i < V; i++) {
    adjList[i] = [];
  }

  // Create Adj
  for (let i = 0; i < V; i++) {
    for (let j = 0; j < V; j++) {
      if (adj[i][j] === 1 && i != j) adjList[i].push(j);
    }
  }

  // * Find connected component
  let count = 0;
  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      count++;
      dfs(i, adjList, visited);
    }
  }

  return count;
}

function dfs(u, adj, visited) {
  visited[u] = true;

  for (let v of adj[u]) {
    if (!visited[v]) {
      dfs(v, adj, visited);
    }
  }
}
