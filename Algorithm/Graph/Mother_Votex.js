// !=============== Find a Mother Vertex in a Graph
// * A mother vertex in a graph G = (V, E) is a vertex v such that all other vertices in G can be reached by a path from v.

// * How to find mother vertex?
// * Case 1:- Undirected Connected Graph : In this case, all the vertices are mother vertices as we can reach to all the other nodes in the graph.
// * Case 2:- Undirected/Directed Disconnected Graph : In this case, there is no mother vertices as we cannot reach to all the other nodes in the graph.
// * Case 3:- Directed Connected Graph : In this case, we have to find a vertex -v in the graph such that we can reach to all the other nodes in the graph through a directed path

//!===================== A Naive approach
// * A trivial approach will be to perform a DFS/BFS on all the vertices and find whether we can reach all the vertices from that vertex. This approach takes O(V(E+V)) time, which is very inefficient for large graphs.

function findMotherVertex(V, adj) {
  for (let i = 0; i < V; i++) {}
}

// !=================Efficient approch ( Kosaraju’s Strongly Connected Component Algorithm.) =========
// * In a graph of strongly connected components, mother vertices are always vertices of source component in component graph. The idea is based on below fact.
// * If there exist mother vertex (or vertices), then one of the mother vertices is the last finished vertex in DFS. (Or a mother vertex has the maximum finish time in DFS traversal).
// * A vertex is said to be finished in DFS if a recursive call for its DFS is over, i.e., all descendants of the vertex have been visited.

// * How does the above idea work?
// * Let the last finished vertex be v. Basically, we need to prove that there cannot be an edge from another vertex u to v if u is not another mother vertex (Or there cannot exist a non-mother vertex u such that u-→v is an edge).
// *  There can be two possibilities.
// * Recursive DFS call is made for u before v. If an edge u-→v exists, then v must have finished before u because v is reachable through u and a vertex finishes after all its descendants.
// * Recursive DFS call is made for v before u. In this case also, if an edge u-→v exists, then either v must finish before u (which contradicts our assumption that v is finished at the end) OR u should be reachable from v (which means u is another mother vertex)

// !=================Method 3(Topological sort)=========

function findMotherVertex(V, adj) {
  const visited = new Array(V).fill(false);
  const st = [];

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      dfs(i, adj, visited, st);
    }
  }
  // * Top of the stack can ve mother-votex.
  // * We need to verify

  // * reset visited array
  for (let i = 0; i < V; i++) {
    visited[i] = false;
  }

  const res = st.pop();
  dfs(res, adj, visited, st);

  if (visited.every((ele) => ele === true)) return res;

  return -1;
}

function dfs(u, adj, visisted, st) {
  visisted[u] = true;

  for (let v of adj[u]) {
    if (!visisted[v]) {
      dfs(v, adj, visisted, st);
    }
  }

  st.push(u);
}

const adj = [[2, 3], [0], [1], [4], []];

console.log(findMotherVertex(5, adj));
