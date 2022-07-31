// !=========== Eulerian path and circuit for undirected graph
// * ---What is WALK?
// * Any random traversal in a graph(V and E both can be repeated)
// * ---What is TRAIL?
// * A walk in which no edge is repeated(V can be repeated)

// *--- What is Euler circuit?
// * A trail which starts and end at same vertex

// * Therefor condition for euler circuit is:
// * 1. Start and end vertex should be the same
// * 2. Each vertex can only be traversed once

// *---What is Euler graph?
// * A graph having euler circuit[ All the edge should have even degree]
// * All edges in a graph must be present in a single component
// * All other component should not have any edge and hence should be of size 1-vertex only
// * all the vertex with non zero degree are connected in a component. Rest all have 0 vertex
// * A graph with no edge is a euler graph

// * -- What is Euler Path?
// * Euler Path is a path that visites every edge exactly once.
// * Euler circuit is a euler path with one more condtion of no start and end virtex be same

// *----What is semi- eulerian
// * Its a euler path but not euler circuit.
// * that is start edge and end edge need not to be same
// * EXACTLY 2 virtes must have odd degree(start and end virtex)
// * All virtex with non zero degree is connected

// !-=============How to identify  euler graph / semi-eulerian graph / non-eulerian graph[Two step process] ========
// * STEP 1. connectvity check
// * check if all the edge is present in a component
// * Find a node with degree > 0
// * If no such edge found : EULER GRAPH
// * ELSE do DFS and mark all edge in a component. Check if any node with degree > 0 is unvisited.
// * IF TRUE: Non-EULER GRAPH

// * STEP 2: Count odd degree nodes [use adj list]
// * countOddDegree == 0: Euler Graph
// * countOddDegree == 2: Semi-Euler Graph
// * countOddDegree > 2: non Euler Graph

// *No of virties of odd degree in an undiretd graph is even

// * TC :O(V + E)

// * returns 1 if graph contains Eulerian Path, 2 if graph contains Eulerian Circuit 0 otherwise.

// !==============Links
// * https://practice.geeksforgeeks.org/problems/euler-circuit-and-path/1
// * https://practice.geeksforgeeks.org/problems/euler-circuit-in-a-directed-graph/1
// * https://practice.geeksforgeeks.org/problems/eulerian-path-in-an-undirected-graph5052/1?page=1&sortBy=submissions&searchQuery=euler
// * https://www.geeksforgeeks.org/eulerian-path-and-circuit/

function isEularCircuit(V, Adj) {
  if (!isConnectedGraph(V, Adj)) return 0; //* Multi-edge graph. All non-zero degree vertex should be connected

  // * Count odd degree vertex
  let countOddDegree = 0;

  for (let i = 0; i < V; i++) {
    if (Adj[i].length & 1) {
      countOddDegree++;
    }
  }

  // * If count > 2: Non euler
  if (countOddDegree > 2) return 0;

  return countOddDegree === 0 ? 2 : 1;
}

function isConnectedGraph(V, adj) {
  const visited = new Array(V + 1).fill(false);
  let node = -1; //* Node to start DFS
  // * Find a node to start DFS using Adj list
  for (let i = 0; i < V; i++) {
    if (adj[i].length > 0) {
      node = i; //* FOUND EDGE TO TRAVERSE
      break;
    }
  }
  // * If no-egde is found: It is a Euler graph
  if (node === -1) return true;

  // * Do DFS traversal
  dfs(visited, node, adj);

  // * Check if all non-zero verties are visited
  for (let i = 0; i < V; i++) {
    if (visited[i] === false && adj[i].length > 0) {
      return false; //* We have edges in multi-component
    }
  }

  return true;
}

function dfs(visited, u, adj) {
  visited[u] = true;

  for (let v of adj[u]) {
    if (!visited[v]) {
      dfs(visited, v, adj);
    }
  }
}

const adj = [
  [1, 2],
  [0, 2],
  [0, 1],
];

console.log(isEularCircuit(3, adj));
