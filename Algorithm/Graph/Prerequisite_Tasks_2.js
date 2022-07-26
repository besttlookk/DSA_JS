// !========== Find the ordering of tasks from given dependencies
// *  We can consider this problem as a graph (related to topological sorting) problem
// *  Now, this problem is equivalent to finding a topological ordering of nodes/tasks (using topological sorting) in the graph represented by prerequisites
// *  If there is a cycle in the graph, then it is not possible to finish all tasks
// * Since pair is inconvenient for the implementation of graph algorithms, we first transform it to a graph.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// !=================Links =============
// * https://www.geeksforgeeks.org/find-the-ordering-of-tasks-from-given-dependencies/
// * https://leetcode.com/problems/course-schedule-ii/

// !===============Method 1( DFS based algorithm for Topological Sort. ) ===============

var findOrder = function (numCourses, prerequisites) {
  const adj = makeGraph(numCourses, prerequisites);
  const order = [];
  const st = [];

  const visited = new Array(numCourses).fill(false);
  const dfsVisited = new Array(numCourses).fill(false);

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      if (dfs(numCourses, adj, st, visited, dfsVisited, i)) {
        // * if cycle present
        return [];
      }
    }
  }

  while (st.length !== 0) {
    order.push(st.pop());
  }

  return order;
};

function dfs(n, adj, st, visisted, dfsVisited, node) {
  visisted[node] = true;
  dfsVisited[node] = true;

  for (let neighbor of adj[node]) {
    if (
      !visisted[neighbor] &&
      dfs(n, adj, st, visisted, dfsVisited, neighbor)
    ) {
      return true;
    } else if (dfsVisited[neighbor]) return true;
  }

  st.push(node);
  dfsVisited[node] = false;
  return false;
}

function makeGraph(n, prerequisite) {
  // const adj = new Array(n).fill([]);
  const adj = [];

  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }
  for (let pre of prerequisite) {
    adj[pre[1]].push(pre[0]);
  }

  return adj;
}

// const prerequisites = [
//   [1, 0],
//   [2, 0],
//   [3, 1],
//   [3, 2],
// ];

const prerequisites = [
  [0, 1],
  [1, 0],
];
console.log(findOrder(2, prerequisites));
