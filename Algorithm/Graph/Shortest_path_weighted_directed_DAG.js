// ! Shortest Path in Directed Acyclic Graph

// !====links
// * https://www.geeksforgeeks.org/shortest-path-for-directed-acyclic-graphs/

// * We initialize distances to all vertices as infinite and distance to source as 0, then we find a topological sorting of the graph
// * Topological Sorting of a graph represents a linear ordering of the graph
// * . Once we have topological order (or linear representation), we one by one process all vertices in topological order. For every vertex being processed, we update distances of its adjacent using distance of current vertex.
// * Once we have topological order (or linear representation), we one by one process all vertices in topological order. For every vertex being processed, we update distances of its adjacent using distance of current vertex.

class Graph {
  constructor(v) {
    this.V = v;
    this.adj = new Map();
  }

  addEdge(u, v, w) {
    if (this.adj.has(u)) {
      const temp = this.adj.get(u);
      temp.push([v, w]);
    } else {
      this.adj.set(u, [[v, w]]);
    }
  }

  printAdj() {
    console.log(this.adj);
  }

  shortestPath(s) {
    const st = [];
    const visited = new Array(this.V).fill(false);

    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        this.topologicalSort(s, st, visited);
      }
    }

    return st;
  }

  topologicalSort(s, st, visited) {
    visited[s] = true;

    const list = this.adj.get(s);
    const n = list.length;

    console.log(list.length);

    for (let i = 0; i < n; i++) {
      const neighbour = list[i];
      if (!visited[neighbour[0]]) {
        this.topologicalSort(neighbour[0], st, visited);
      }
    }

    st.push(s);
  }
}

const g = new Graph(6);
g.addEdge(0, 1, 5);
g.addEdge(0, 2, 3);
g.addEdge(1, 3, 6);
g.addEdge(1, 2, 2);
g.addEdge(2, 4, 4);
g.addEdge(2, 5, 2);
g.addEdge(2, 3, 7);
g.addEdge(3, 4, -1);
g.addEdge(4, 5, -2);

// g.printAdj();

console.log(g.shortestPath(1));
