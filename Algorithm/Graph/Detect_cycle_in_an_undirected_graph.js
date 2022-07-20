// !===========Detect cycle in an undirected graph
// * There is a cycle in a graph only if there is a back edge present in the graph.
// * A back edge is an edge that is joining a node to itself (self-loop) or one of its ancestor in the tree produced by DFS.
// !=============Links
// * https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1?page=1&category[]=Graph&sortBy=submissions
// * https://www.geeksforgeeks.org/detect-cycle-undirected-graph/

// !================Using BFS- Iterarive===========
function isCycle(V, adj) {
  const visited = Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (detectCycle(i, -1, adj, visited)) return true;
    }
  }

  return false;
}

function detectCycle(i, parent, adj, visited) {
  const que = [];

  que.push([i, parent]);
  visited[i] = true;

  while (que.length) {
    const temp = que.shift();
    const front = temp[0];
    const par = temp[1];

    const neighbours = adj[front];

    for (let i = 0; i < neighbours.length; i++) {
      const neighbour = neighbours[i];

      // ! Ager visisted hai...per wo khud parent ho "front" ka to ignore nahi to cycle present hai

      if (!visited[neighbour]) {
        visited[neighbour] = true;
        que.push([neighbour, front]);
      } else if (par !== neighbour) {
        return true;
      }
    }
  }

  return false;
}

// !===============Using DFS ==============
function isCycle(V, adj) {
  const visited = Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (detectCycle(i, -1, adj, visited)) return true;
    }
  }

  return false;
}

function detectCycle(i, parent, adj, visited) {
  visited[i] = true;

  const neighbours = adj[i];

  for (let i = 0; i < neighbours.length; i++) {
    const neighbour = neighbours[i];

    // ! Ager visisted hai...per wo khud parent ho "front" ka to ignore nahi to cycle present hai

    if (!visited[neighbour]) {
      if (detectCycle(neighbour, i, adj, visited)) return true;
    } else if (parent !== neighbour) {
      return true;
    }
  }
  return false;
}
