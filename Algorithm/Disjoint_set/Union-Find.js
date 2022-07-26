// !=====Union-Find

/**
 * @param {number} a
 * @param {number} b
 * @param {number[]} par
 * @param {number[]} rank1
 * @param {number} x
 * @param {number} y
 */

// !===========Links===
// * https://practice.geeksforgeeks.org/problems/union-find/1?page=1&category[]=Disjoint%20Set&sortBy=submissions
// * https://www.geeksforgeeks.org/union-find/
// !=====================Solution
// * for path compression we need to modify find operation

//Function to merge two nodes a and b.
function union_(a, b, par, rank1) {
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

//Function to check whether 2 nodes are connected or not.
function isConnected(x, y, par, rank1) {
  return findParent(x, par) === findParent(y, par);
}

// * Function to return root node or name of the set
// * Find operation without path compression
/*
function findParent(x, par) {
  // * base case: if parent of x is itself return x
  if (par[x] === x) return x;

  return findParent(par[x], par);
}
*/

// * Find operation with path compression
// * we will keep changing the par of element to its root
function findParent(x, par) {
  if (par[x] != x) {
    par[x] = findParent(par[x], par);
  }

  return par[x];
}
