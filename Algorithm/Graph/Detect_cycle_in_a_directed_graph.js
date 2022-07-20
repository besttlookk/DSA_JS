// !===========Detect cycle in a directed graph

// !===============Links
// * https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1?page=1&category[]=Graph&sortBy=submissions

// !==========Solution using Depth First Search or DFS==============

function isCyclic(V, adj) {
  const visited = new Array(V).fill(false);
  const dfsVisited = new Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!visited[i] && dfsCycle(i, adj, visited, dfsVisited)) return true;
  }

  return false;
}

function dfsCycle(i, adj, visisted, dfsVisited) {
  visisted[i] = true;
  dfsVisited[i] = true;

  for (let neighbour of adj[i]) {
    if (!visisted[neighbour] && dfsCycle(neighbour, adj, visisted, dfsVisited))
      return true;
    else if (dfsVisited[neighbour]) return true;
  }

  dfsVisited[i] = false;
  return false;
}

// !===================Using BFS(Topological sort) =========
function isCyclic(V, adj) {
  // ! Find indegree
  const inDegree = findInDegree(adj, V);

  // ! Zero indegree walo ko queue me push ker do
  const que = [];
  for (let i = 0; i < V; i++) {
    if (inDegree[i] === 0) que.push(i);
  }

  //! do bfs
  let count = 0; //* for valid topological sort...count shoud be equal to n .
  while (que.length) {
    const front = que.shift();

    count++;

    // * get the list from adj
    const list = adj[front];

    for (let neighbour of list) {
      // * since front ko deal ker chuke...to indegree reduce
      inDegree[neighbour]--;

      // * ager kisi ki indegree zero ho to queue me push
      if (inDegree[neighbour] === 0) que.push(neighbour);
    }
  }

  return count === V ? false : true;
}

function findInDegree(adjList, n) {
  const inDegree = new Array(n).fill(0);

  for (let i = 0; i < adjList.length; i++) {
    const list = adjList[i];

    for (let j = 0; j < list.length; j++) {
      inDegree[list[j]]++;
    }
  }

  return inDegree;
}
