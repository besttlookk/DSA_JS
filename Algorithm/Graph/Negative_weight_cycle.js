// !=============Negative weight cycle

// !=============links =================
// * https://practice.geeksforgeeks.org/problems/negative-weight-cycle3504/1?page=1&category[]=Graph&sortBy=submissions

// !================Method(Bellman-ford-algo)============
// * relaxation for n -1 times for each edges

function isNegativeWeightCycle(n, edges) {
  const dist = new Array(n).fill(Number.MAX_VALUE);
  dist[0] = 0;

  for (let count = 0; count < n - 1; count++) {
    for (let [u, v, w] of edges) {
      dist[v] = Math.min(dist[v], dist[u] + w);
    }
  }

  for (let [u, v, w] of edges) {
    if (dist[u] + w < dist[v]) {
      return 1;
    }
  }

  return 0;
}
