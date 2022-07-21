// !==================Links ================
// * https://practice.geeksforgeeks.org/problems/topological-sort/1?page=1&category[]=Graph&sortBy=submissions

// !============ Using DFS ==============
// * ONLY APPLICABLE FOR DAG
function topoSort(V, adj) {
  const visited = new Array(V).fill(false);
  const st = [];
  const res = [];

  // * Normal dfs
  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      topoSortUtil(i, adj, visited, st);
    }
  }

  // * copying element from stack to res
  while (st.length !== 0) {
    res.push(st.pop());
  }

  return res;
}

function topoSortUtil(i, adj, visisted, st) {
  visisted[i] = true;

  for (let neighbour of adj[i]) {
    if (!visisted[neighbour]) {
      topoSortUtil(neighbour, adj, visisted, st);
    }
  }

  // * Return hone time stack me daalna hai
  st.push(i);
}

// !====================Using BST (Kahn's algo) ==============

function topoSort(V, adj) {
  // ! Find indegree
  const inDegree = findInDegree(adj, V);

  // ! Zero indegree walo ko queue me push ker do
  const que = [];
  for (let i = 0; i < V; i++) {
    if (inDegree[i] === 0) que.push(i);
  }

  //! do bfs
  const ans = [];
  while (que.length) {
    const front = que.shift();
    ans.push(front);

    // * get the list from adj
    const list = adj[front];

    for (let neighbour of list) {
      // * since front ko deal ker chuke...to indegree reduce
      inDegree[neighbour]--;

      // * ager kisi ki indegree zero ho to queue me push
      if (inDegree[neighbour] === 0) que.push(neighbour);
    }
  }

  return ans;
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
