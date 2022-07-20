// !====== Finding in and out degrees of all vertices in a graph

// * Traverse adjacency list for every vertex, if size of the adjacency list of vertex i is x then the out degree for i = x and increment the in degree of every vertex that has an incoming edge from i.
// * Repeat the steps for every vertex and print the in and out degrees for all the vertices in the end.

// !=============Links
// * https://www.geeksforgeeks.org/finding-in-and-out-degrees-of-all-vertices-in-a-graph/

function findInOutDegree(adjList, n) {
  const inDegree = new Array(n).fill(0);
  const outDegree = new Array(n).fill(0);

  for (let i = 0; i < adjList.length; i++) {
    const list = adjList[i];

    outDegree[i] = list.length;

    for (let j = 0; j < list.length; j++) {
      inDegree[list[j]]++;
    }
  }
}
