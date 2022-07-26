// !=============Bellman–Ford Algorithm

// * Key Points of Bellman Ford Algorithm
//* 1. It will work for Negative weights
//* 2.  Helps to detect negative cycle
// * 3. will not work for negative cycle
// * 4. will only work for directed graph
// * 5. In case of undirected graph ,convert it into directed graph
// * 6. Time complexity is -O(N-1)*E which is more than Dijkstra's algorithm but this algo helps to detect negative cycle in graph

/**
 * @param {number} v
 * @param {number[][]} arr
 * @param {number} s
 * @returns {number}
 */

// * Differnec from Dijkstra algo: in this we do not maintain processed node and also we do not find minimum distnace.
// * in this we apply condition for each node each v - 1 times

// !==============links ===========
// * https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1
// * https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/

// !======================Method 1 ==============
// * arr is the list of [u,v,w]
/*
function bellman_ford(v, arr, s) {
  const dist = new Array(v).fill(Number.MAX_VALUE);
  dist[s] = 0;

  // const parent = new Array(v).fill(-1);

  //* Find shortest path for all vertices
  for (let count = 0; count < v - 1; count++) {
    for (let [u, v, w] of arr) {
      // * relaxation condition
      // ! Only differnece part from prims algo
      // if (dist[u] !== Number.MAX_VALUE && dist[u] + w < dist[v]) {
      //   parent[v] = u;
      //   dist[v] = Number(dist[u]) + Number(w);
      // }

      dist[v] = Math.min(dist[v], dist[u] + w);
    }
  }

  //* Step 3: check for negative-weight cycles. The above step guarantees shortest distances if graph doesn't contain
  //* negative weight cycle. If we get a shorter path, then there is a cycle.

  for (let [u, v, w] of arr) {
    // * relaxation condition
    // ! Only differnece part from prims algo
    if (dist[u] + w < dist[v]) {
      return -1;
    }
  }

  return dist;
}
*/
// const E = [
//   [0, 1, 5],
//   [1, 0, 3],
//   [1, 2, -1],
//   [2, 0, 1],
// ];

// !======================Method 2(optimized method)==========
function bellman_ford(v, arr, s) {
  const dist = new Array(v).fill(Number.MAX_VALUE);
  dist[s] = 0;

  const parent = new Array(v).fill(-1);
  let updated;

  //* Find shortest path for all vertices
  for (let count = 0; count < arr.length; count++) {
    updated = false;
    for (let [u, v, w] of arr) {
      // * relaxation condition
      // ! Only differnece part from prims algo
      if (dist[u] !== Number.MAX_VALUE && dist[u] + w < dist[v]) {
        parent[v] = u;
        dist[v] = Number(dist[u]) + Number(w);
        updated = true;
      }
      if (updated === false) return dist;
    }
  }

  if (updated === true) {
    for (let [u, v, w] of arr) {
      // * relaxation condition
      // ! Only differnece part from prims algo
      if (dist[u] + w < dist[v]) {
        return -1;
      }
    }
  }

  return dist;
}

const E = [
  [0, 1, -1],
  [1, 0, 3],
  [1, 2, 4],
  [2, 0, 3],
];

console.log(bellman_ford(3, E, 0));
