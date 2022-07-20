// !========Print adjacency list
/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[][]}
 */
// !===========Links=====
// * https://practice.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1

function printGraph(V, adj) {
  let ans = [];
  for (let i = 0; i < V; i++) {
    let temp = [i];
    temp.push(...adj[i]);
    ans[i] = temp;
  }

  return ans;
}

// !========Input ====
// * 1 -> 4
// * 0 -> 2 -> 3 -> 4
// * 1 -> 3
// * 1 -> 2 -> 4
// * 0 -> 1 -> 3

// !Output
// * 0 -> 1 -> 4
// * 1 -> 0 -> 2 -> 3 -> 4
// * 2 -> 1 -> 3
// * 3 -> 1 -> 2 -> 4
// * 4 -> 0 -> 1 -> 3
