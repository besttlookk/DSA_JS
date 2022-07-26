// !=============Bipartite Graph
// * A Bipartite Graph is a graph whose vertices can be divided into two independent sets, U and V such that every edge (u, v) either connects a vertex from U to V or a vertex from V to U.
// * In other words, for every edge (u, v), either u belongs to U and v to V, or u belongs to V and v to U. We can also say that there is no edge that connects vertices of same set.

// * A bipartite graph is possible if the graph coloring is possible using two colors such that vertices in a set are colored with the same color.

// * Note that it is possible to color a cycle graph with even cycle using two colors.

// * It is not possible to color a cycle graph with odd cycle using two colors.

/**
 * @param {number[]} arr
 * @param {number} v
 * @param {number} e
 * @returns {boolean}
 */

// !=====Links
// * https://practice.geeksforgeeks.org/problems/bipartite-graph/1?page=1&category[]=Graph&sortBy=submissions
// * https://www.geeksforgeeks.org/bipartite-graph/

// !==================Method 1 (using Breadth First Search (BFS))==================
// * 1. Assign RED color to the source vertex (putting into set U).
// * 2. Color all the neighbors with BLUE color (putting into set V).
// * 3. Color all neighbor’s neighbor with RED color (putting into set U).
// * 4. This way, assign color to all vertices such that it satisfies all the constraints of m way coloring problem where m = 2.
// * 5. While assigning colors, if we find a neighbor which is colored with same color as current vertex, then the graph cannot be colored with 2 vertices (or graph is not Bipartite)

function isBipartite(V, adj) {
  const colArr = new Array(V).fill(-1);

  // * We have to also consider for disconnected graph
  for (let i = 0; i < V; i++) {
    if (colArr[i] === -1) {
      if (bfs(V, adj, colArr, i) === false) return false;
    }
  }

  return true;
}

function bfs(V, adj, colArr, node) {
  const que = [];
  que.push(node);

  // * assign first node color 1
  colArr[node] = 1;

  while (que.length) {
    const currNode = que.shift();
    const currColor = colArr[currNode];

    for (let neighbor of adj[currNode]) {
      if (colArr[neighbor] === -1) {
        //* unvisted node
        colArr[neighbor] = 1 - currColor;
        que.push(neighbor);
      } else if (colArr[neighbor] === currColor) return false;
    }
  }

  return true;
}

const adj = [[2, 3], [3], [3], [0, 1, 2]];

console.log(isBipartite(4, adj));
