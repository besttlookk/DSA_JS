// !=======Tarjan’s Algorithm to find Strongly Connected Components
// * Tarjan Algorithm is based on the following facts:
//*  # DFS search produces a DFS tree/forest
//* #  Strongly Connected Components form subtrees of the DFS tree.
//* # If we can find the head of such subtrees, we can print/store all the nodes in that subtree (including the head) and that will be one SCC.
//* #  There is no back edge from one SCC to another (There can be cross edges, but cross edges will not be used while processing the graph).

// * To find the head of an SCC, we calculate disc and low array (as done for articulation point, bridge, and biconnected component).
// *  low[u] indicates the earliest visited vertex (the vertex with minimum discovery time) that can be reached from a subtree rooted with u. A node u is head if disc[u] = low[u].

// * Disc: This is the time when a node is visited 1st time while DFS traversal.

// * Then later on DFS will be performed on each of its children v one by one, Low value of u can change it in two cases:

// *  # Case1 (Tree Edge): If node v is not visited already, then after the DFS of v is complete, a minimum of low[u] and low[v] will be updated to low[u].
// * low[u] = min(low[u], low[v]);
// *  # Case 2 (Back Edge): When child v is already visited, then a minimum of low[u] and Disc[v] will be updated to low[u].
// * low[u] = min(low[u], disc[v]);

// !================Links ==============
// * https://practice.geeksforgeeks.org/problems/strongly-connected-component-tarjanss-algo-1587115621/1?page=2&category[]=Graph&sortBy=submissions
// * https://www.geeksforgeeks.org/tarjan-algorithm-find-strongly-connected-components/

// !===================Solution
// * Time Complexity: O(V+E)
let time = 0;
const res = [];
function tarjans(V, adj) {
  const disc = new Array(V).fill(-1); //* Discovery time. It is fixed
  const low = new Array(V).fill(-1); //* lowest discovery node available. It is flexible
  const inStack = new Array(V).fill(false);
  const st = [];

  for (let i = 0; i < V; i++) {
    if (disc[i] === -1) {
      dfs(i, disc, low, st, inStack, V, adj);
    }
  }
  res.sort((a, b) => a[0] - b[0]);
  return res;
}

function dfs(u, disc, low, st, inStack, V, adj) {
  disc[u] = low[u] = time;
  time++;
  st.push(u);
  inStack[u] = true;

  for (let v of adj[u]) {
    if (disc[v] === -1) {
      //* If v is not visited
      dfs(v, disc, low, st, inStack, V, adj);
      // * when normal edge track back
      low[u] = Math.min(low[v], low[u]);
    } else if (inStack[v]) {
      //* if v is visited. Identify between back edge and cross edge
      low[u] = Math.min(low[u], disc[v]);
    }
  }

  // * AFter traversal check if u is head node of not
  // * that is if low[u] === disc[u]
  // * if it is pop from the stack until we reach this head node
  if (low[u] === disc[u]) {
    const list = [];

    while (st[st.length - 1] !== u) {
      const top = st.pop();
      list.push(top);
      inStack[top] = false;
    }

    const top = st.pop();
    list.push(top);
    inStack[top] = false;

    list.sort((a, b) => a - b);

    res.push(list);
  }
}

const adj = [[2, 3], [0], [1], [4], []];
console.log(tarjans(5, adj));
