// !=========Strongly Connected Components(Kosaraju’s algorithm.) ===========
// * A directed graph is strongly connected if there is a path between all pairs of vertices.
// * A strongly connected component (SCC) of a directed graph is a maximal strongly connected subgraph.

// * Create an empty stack ‘S’ and do DFS traversal of a graph. In DFS traversal, after calling recursive DFS for adjacent vertices of a vertex, push the vertex to stack.
// * Reverse directions of all arcs to obtain the transpose graph.
// * One by one pop a vertex from S while S is not empty. Let the popped vertex be ‘v’. Take v as source and do DFS (call DFSUtil(v)). The DFS starting from v prints strongly connected component of v.

// !=============Links
// * https://www.geeksforgeeks.org/strongly-connected-components/
// * https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1?page=1&category[]=Graph&sortBy=submissions

// !===================Solution ===============

// * Steps:-

//* Do a topological sort and store in a stack.
//* Create a transpose adjacency list.
//* Start traversing according to topological sort and transpose adjacency matrix.
//* Start popping elements from stack. If it is not visited, then it will contribute in a new component. Do dfs traversal on it to it's adjacent nodes.

function kosaraju(V, adj) {
  const st = [];
  const visited = new Array(V).fill(false);

  // * STEP 1:
  // * First time traverse kerne se pata nahi lagega SSC ka
  // * Sort all nodes based on their finishing time[TOPOLOGICAL SORT]
  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      dfs(i, st, visited, adj);
    }
  }

  // * STEP 2:
  // * Transpose of graph
  const rev = reverse(adj, V);

  for (let i = 0; i < V; i++) {
    visited[i] = false;
  }

  // * STEP 3
  // * DFS applied agained on the basic of topological sort
  let count = 0;
  while (st.length) {
    const curr = st.pop();

    if (visited[curr] === false) {
      count++;
      dfs2(curr, visited, rev);
    }
  }

  return count;
}

function dfs(i, st, visited, adj) {
  visited[i] = true;

  for (neigh of adj[i]) {
    if (!visited[neigh]) {
      dfs(neigh, st, visited, adj);
    }
  }

  st.push(i);
}

function reverse(adj, V) {
  const rev = {};

  for (let i = 0; i < V; i++) {
    rev[i] = [];
  }

  for (let i = 0; i < V; i++) {
    for (let j of adj[i]) {
      rev[j].push(i);
    }
  }

  return rev;
}

function dfs2(i, visited, adj) {
  visited[i] = true;

  for (neigh of adj[i]) {
    if (!visited[neigh]) {
      dfs2(neigh, visited, adj);
    }
  }
}
const adj = [[2, 3], [0], [1], [4], []];
console.log(kosaraju(5, adj));
