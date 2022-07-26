// !============
/**
 * @param {number} n
 * @param {number[][]} adj
 * @return {number}
 */
// !=============Links ==============
// * https://practice.geeksforgeeks.org/problems/detect-cycle-using-dsu/1?page=1&category[]=Disjoint%20Set&sortBy=submissions

function detectCycle(n, adj) {
  const parent = [];
  const rank = new Array(n).fill(0);

  // * making parent of each element to its own
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  // * for each vertex
  for (let i = 0; i < n; i++) {
    for (let neighbor of adj[i]) {
      if (parent[i] === parent[neighbor] && i < neighbor) return true;

      union(i, neighbor, parent, rank);
    }
  }

  return false;
}

function find(x, par) {
  if (par[x] === x) {
    return x;
  }

  return (par[x] = find(par[x], par));
}

// * Uinion without rank
function union(x, y, par, rank) {
  const xRoot = find(x, par);
  const yRoot = find(y, par);

  if (xRoot === yRoot) return;

  if (rank[xRoot] > rank[yRoot]) {
    par[yRoot] = xRoot;
  } else if (rank[xRoot] < rank[yRoot]) {
    par[xRoot] = yRoot;
  } else {
    par[xRoot] = yRoot;
    rank[yRoot] = rank[yRoot] + 1;
  }
}
