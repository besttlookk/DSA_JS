// ! Transpose of a directed graph
// * Transpose of a directed graph G is another directed graph on the same set of vertices with all of the edges reversed compared to the orientation of the corresponding edges in G.
// !=================links===============
// * https://www.geeksforgeeks.org/transpose-graph/

// !================When graph is represened as adj list==============

// * For the adjacency list representation, we will maintain an initially empty adjacency list representation of the transpose.
// * Then, we scan through every list in the original graph.
// * If we are in the list corresponding to vertex v and see u as an entry in the list, then we add an entry of v to the list in the transpose
// * graph corresponding to vertex u
// * Since this only requires a scan through all of the lists, it only takes time O(|E| + |V |)

function transposeGraph(adj, transpose, v) {
  for (let i = 0; i < v; i++) {
    for (let j = 0; j < adj[i].length; j++) {
      addEdge(transpose, adj[i][j], i);
    }
  }

  return transpose;
}

function addEdge(adj, src, dest) {
  adj[src].push(dest);
}

let v = 5;
let adj = new Array(v).fill(0).map(() => new Array());
addEdge(adj, 0, 1);
addEdge(adj, 0, 4);
addEdge(adj, 0, 3);
addEdge(adj, 2, 0);
addEdge(adj, 3, 2);
addEdge(adj, 4, 1);
addEdge(adj, 4, 3);

console.log({ adj });

let transpose = new Array(v).fill(0).map(() => new Array());

console.log(transposeGraph(adj, transpose, v));
