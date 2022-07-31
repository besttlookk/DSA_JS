// !===============Water Connection Problem============

// !===================Links =====================
// * https://www.geeksforgeeks.org/water-connection-problem/
// * https://practice.geeksforgeeks.org/problems/water-connection-problem5822/1?page=1&category[]=Graph&curated[]=7&sortBy=submissions

// !=================Solution 1(DFS)
// *Since, tanks can be installed only on the houses having outgoing pipe and no incoming pipe, therefore these are appropriate houses to start DFS from i.e. perform DFS from such unvisited houses.

// * First find the starting nodes, then do the dfs from them.

// * n == no of hourse
// * p = Water pipes
// * a is array of outgoing house
// * b is array of incoming house
// * d is a array of diameter (a ===> b)
function solve(n, p, a, b, d) {
  const set = new Set(); //* To store node which has only outgoing node
  const adj = new Array(n + 1);
  const ans = [];

  for (let i = 0; i <= n; i++) {
    adj[i] = [];
  }

  for (let i = 0; i < p; i++) {
    adj[a[i]].push([b[i], d[i]]);
    // * store all the node in the set from array "a" bcoz all are outgoing node
    set.add(a[i]);
  }

  // * remove all the nodes from set which are in "b" bcoz thse are also incomin node
  for (let i = 0; i < p; i++) {
    set.delete(b[i]);
  }

  for (let u of set) {
    dfs(u, u, adj, ans, Number.MAX_VALUE);
  }

  return ans;
}

function dfs(u, start, adj, ans, d) {
  // * check if u is end-point or not
  if (adj[u].length === 0) {
    // * we have reched the end of line
    ans.push([start, u, d]);
    return;
  }

  for (let [v, w] of adj[u]) {
    dfs(v, start, adj, ans, Math.min(d, w)); //* we want minimum diameter of the pipe
  }

  return;
}

// !=====================Example 1 ======
const a = [7, 5, 4, 2, 9, 3];
const b = [4, 9, 6, 8, 7, 1];
const d = [98, 72, 10, 22, 17, 66];
console.log(solve(9, 6, a, b, d));
