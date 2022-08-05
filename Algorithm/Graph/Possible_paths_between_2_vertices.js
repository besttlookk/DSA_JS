// !===============Possible paths between 2 vertices
/**
 * @param {number} V
 * @param {number[][]} adj
 * @param {number} source
 * @param {number} destination
 * @returns {number}
 */
// !==================links
// * https://practice.geeksforgeeks.org/problems/possible-paths-between-2-vertices-1587115620/1?page=2&category[]=Graph&sortBy=submissions
// * https://practice.geeksforgeeks.org/problems/count-the-paths4332/1?page=2&category[]=Graph&sortBy=submissions

// !=============================Method 1 ===================
let count = 0;
function countPaths(V, adj, source, destination) {
  dfs(source, destination, adj);

  return count;
}

function dfs(src, des, adj) {
  if (src === des) {
    count++;
    return;
  }

  for (let v of adj[src]) {
    dfs(v, des, adj);
  }
}

const adj = [[1, 2, 4], [3, 4], [4], [2], []];

console.log(countPaths(5, adj, 0, 4));
