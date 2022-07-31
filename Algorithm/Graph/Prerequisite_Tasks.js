// !============Find whether it is possible to finish all tasks or not from given dependencies

// *  If there is a cycle in the graph, then it is not possible to finish all tasks (because in that case there is no any topological order of tasks).
// * Both BFS and DFS can be used to solve it.
//*  Since pair is inconvenient for the implementation of graph algorithms, we first transform it to a graph. If task u is a prerequisite of task v, we will add a directed edge from node u to node v.

// !==================Links
// * https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/
// * https://practice.geeksforgeeks.org/problems/prerequisite-tasks/1?page=2&category[]=Graph&sortBy=submissions
// * https://practice.geeksforgeeks.org/problems/course-schedule/1?page=3&category[]=Graph&sortBy=submissions

// !====================Method 1(cycle detection using DFS)
function isPossible(prerequisites, n, p) {
  const adj = makeGraph(prerequisites, n);

  const visited = new Array(n).fill(false);
  const dfsVisited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // * if cycle present return false
      if (dfs(adj, visited, dfsVisited, i)) return false;
    }
  }

  return true;
}

function makeGraph(prerequisite, n) {
  const adj = [];

  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }

  for (let pre of prerequisite) {
    adj[pre[1]].push(pre[0]);
  }

  return adj;
}

function dfs(adj, visited, dfsVisited, node) {
  visited[node] = true;
  dfsVisited[node] = true;

  for (let neighbor of adj[node]) {
    if (!visited[neighbor] && dfs(adj, visited, dfsVisited, neighbor))
      return true;
    else if (dfsVisited[neighbor]) return true;
  }

  dfsVisited[node] = false;
  return false;
}

// !===============================Method 2 (Topological sort: BFS)

const arr = [
  [1, 0],
  [0, 1],
];

console.log(isPossible(arr, 2, 2));

// N = 4, P = 3
