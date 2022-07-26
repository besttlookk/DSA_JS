// !============Kruskals Algo
// * Below are the steps for finding MST using Kruskal’s algorithm
// * 1. Sort all the edges in non-decreasing order of their weight.
// * 2. Pick the smallest edge. Check if it forms a cycle with the spanning tree formed so far. If cycle is not formed, include this edge. Else, discard it.
// * 3. Repeat step#2 until there are (V-1) edges in the spanning tree.

// * Step #2 uses the Union-Find algorithm to detect cycles

// !==================Links =================
// * https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1?page=1&category[]=Graph&sortBy=submissions
// * https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/

// !==================Using set ===============

function spanningTree(arr, v, e) {
  let min_sum = 0;
  // *  Sort the array according to weight
  // * Sorting it in desecding order
  arr.sort((x, y) => y[2] - x[2]);

  const parent = [];
  const rank = new Array(v).fill(0);

  for (let i = 0; i < v; i++) {
    parent[i] = i;
  }

  // ! as size or array keep changing we can not use : arr.length
  for (let i = 0; i < e; i++) {
    const edge = arr.pop();

    const uPar = findParent(edge[0], parent);
    const vPar = findParent(edge[1], parent);

    if (uPar !== vPar) {
      min_sum += edge[2];
      union(edge[0], edge[1], parent, rank);
    }
  }

  return min_sum;
}

function union(a, b, par, rank1) {
  const aRoot = findParent(a, par);
  const bRoot = findParent(b, par);
  // * if both are laready connected return
  if (aRoot === bRoot) return;

  if (rank1[aRoot] < rank1[bRoot]) {
    par[aRoot] = bRoot;
  } else if (rank1[aRoot] > rank1[bRoot]) {
    par[bRoot] = aRoot;
  } else {
    par[bRoot] = aRoot;
    rank1[aRoot] = rank1[aRoot] + 1;
  }
}

function findParent(x, par) {
  if (par[x] != x) {
    par[x] = findParent(par[x], par);
  }

  return par[x];
}

// !===================Example 1
// const arr = [
//   [0, 1, 3],
//   [1, 3, 3],
//   [1, 5, 10],
//   [2, 4, 6],
//   [2, 6, 9],
//   [3, 6, 8],
//   [4, 5, 6],
// ];

// console.log(spanningTree(arr, 7, 7));

// !==================Example 2 ============

const arr = [
  [0, 1, 6],
  [0, 2, 3],
  [1, 3, 9],
  [0, 3, 1],
  [2, 3, 6],
];

console.log(spanningTree(arr, 4, 5));
// 4 5
// 0 1 6
// 0 2 3
// 1 3 9
// 0 3 1
// 2 3 6
