// !======== Prim’s Minimum Spanning Tree (MST)

// *  In this implementation, we are always considering the spanning tree to start from the root of the graph, and this is the basic difference between Kruskal’s Minimum Spanning Tree and Prim’s Minimum Spanning tree.

//!============Links ==================
// * https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/
// * https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1?page=1&category[]=Graph&sortBy=submissions

// !===================Method 1 ================
function spanningTree(arr, v, e) {
  // * Create graph
  const g = new Graph(v);

  // * add vertices
  for (let i = 0; i < v; i++) {
    g.addVertex(i);
  }

  // * addEdge
  for (let i = 0; i < arr.length; i++) {
    g.addEdge(arr[i][0], arr[i][1], arr[i][2]); //* (u,v,w)
  }

  console.log(g.adj);

  //* Array to store constructed MST
  // * Edges that has been inclued
  let parent = new Array(v).fill(-1); //* this is used to print spanning tree

  //* Key values used to pick minimum weight edge in cut
  let key = new Array(v).fill(Number.MAX_VALUE); //* Minimum spanning can be find from the

  //* To represent set of vertices included in MST
  let mstSet = new Array(v).fill(false);

  //* Always include first 1st vertex in MST.
  //* Make key 0 so that this vertex is picked as first vertex.
  key[0] = 0;
  parent[0] = -1; //* First node is always root of MST

  //* The MST will have V vertices
  for (let count = 0; count < v - 1; count++) {
    //* Pick the minimum key vertex from the
    //* set of vertices not yet included in MST
    let u = getMinKey(key, mstSet);

    //* Add the picked vertex to the MST Set
    mstSet[u] = true;

    // * using Adj list let the list for u
    // * list is a array of [u,v,w]
    const list = g.adj[u];

    for (let neighbour of list) {
      if (mstSet[neighbour[0]] === false && neighbour[1] < key[neighbour[0]]) {
        key[neighbour[0]] = neighbour[1];
        parent[neighbour[0]] = u;
      }
    }
  }

  // * caluclate sum
  let weight = 0;
  for (let i = 0; i < key.length; i++) {
    weight += Number(key[i]);
  }

  return weight;
}

function getMinKey(key, mstSet) {
  let min = Number.MAX_VALUE;
  let minIndex = -1;

  for (let i = 0; i < key.length; i++) {
    if (mstSet[i] === false && key[i] < min) {
      min = key[i];
      minIndex = i;
    }
  }

  return minIndex;
}

class Graph {
  constructor(v) {
    this.v = v;
    this.adj = [];
  }

  addEdge(u, v, w) {
    this.adj[u].push([v, w]);
    // !if undirected graph..then only add below line
    this.adj[v].push([u, w]);
  }

  addVertex(i) {
    this.adj[i] = [];
  }
}

// !====Example  1=============
// const arr = [
//   [0, 1, 5],
//   [1, 2, 3],
//   [0, 2, 1],
// ];

// console.log(spanningTree(arr, 3, 3));

// !===========Example 2==========

const arr = [
  [0, 1, 3],
  [1, 3, 3],
  [1, 5, 10],
  [2, 4, 6],
  [2, 6, 9],
  [3, 6, 8],
  [4, 5, 6],
];

console.log(spanningTree(arr, 7, 7));
// 7 7
// 0 1 3
// 1 3 3
// 1 5 10
// 2 4 6
// 2 6 9
// 3 6 8
// 4 5 6
