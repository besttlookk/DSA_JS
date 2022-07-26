// !===============Implementing Dijkstra Algorithm
// * Maintain a set of processed nodes.
// * Assign all node with distance value as INFINITY axcept source node(Zero)
// * Repeat following unless all verties are included:
// *  Pick min value vertex which has not been processed.
// * include this selected node in processed node
// * update all the adjacent node distance if NEW DISTANCE IS SMALLER than previous

// !==================Prims algo Vs Dijkstra Algo =================
// * Only differnce is in checking condition and updating condition
// * Prims algo:
// *  if(v node not processed && dist[v] > w[v]) dist[v] = w[v]

// * Dijkstra algo:
// *  if(v node not process && dist[v] > dist[u] + w[v]) dist[v] = dist[u] + w[v]

// !=================== Dijkstra Algo Vs Bellman-ford =================
// * Both can not find shortest path for graph with ive edge cut cycle.
// * But Dijkstra can not find if graph has negative edge weight cycle while Bellman-ford can.

// * Dijkstra[O(E*logV)] algo is much faster than Bellman=ford[O(V * E)]

// !=================links
// * https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1?page=1&category[]=Graph&sortBy=submissions
// * https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
// * https://www.geeksforgeeks.org/dijkstras-algorithm-for-adjacency-list-representation-greedy-algo-8/

// !========================Method 1(Using Array as set) ========================
// * Time Complexity: O(E log V)
class Solution {
  //Function to find the shortest distance of all the vertices
  //from the source vertex S.
  dijkstra(V, Adj, S) {
    const dist = new Array(V).fill(Number.MAX_VALUE);
    dist[S] = 0;

    const set = new Array(V).fill(false); //* same as mstset of Prims algo

    //* Find shortest path for all vertices
    for (let count = 0; count < V - 1; count++) {
      //* Pick the minimum distance vertex from the set of vertices not yet  processed.
      //* u is always equal to "S" in first iteration.
      let u = this.getMinDistance(dist, set, V);

      set[u] = true; //* this new vertex is not been includes in the set

      // * From adj getting the array of [v, w]
      const list = Adj[u];

      for (let neighbour of list) {
        // * relaxation condition
        // ! Only differnece part from prims algo
        if (dist[u] + neighbour[1] < dist[neighbour[0]]) {
          dist[neighbour[0]] = dist[u] + neighbour[1];
        }
      }
    }

    return dist;
  }

  getMinDistance(dist, set, V) {
    let min = Number.MAX_VALUE;
    let minIndex = -1;

    // * if set me nahi hai..to minimum distance wale ke index ko find karo
    for (let i = 0; i < V; i++) {
      if (set[i] === false && dist[i] <= min) {
        min = dist[i];
        minIndex = i;
      }
    }
    return minIndex;
  }
}

// !=======================Method 2(Using MinHeap) ===================

class MinHeap {
  constructor() {
    this.array = [];
    this.size = 0;
    this.pos = [];
  }

  newNode(v, dist) {
    return [v, dist];
  }
}
