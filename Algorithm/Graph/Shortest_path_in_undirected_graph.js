// !===============Shortest Path in unweighted graph

// !=====Links

// !

// * We will use BFS and maintain parent arr.
function shortestPath(V, adj, src, dest) {
  // * do bfs
  const que = [];
  que.push(0);
  const visited = new Array(V).fill(false);
  const parent = new Array(V);
  visited[0] = true;
  parent[0] = -1;

  while (que.length) {
    const front = que.shift();

    for (let neighbour of adj[front]) {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        parent[neighbour] = front;
        que.push(neighbour);
      }
    }
  }

  // * prepare shortest path
  let current = dest;
  const ans = [];

  while (current !== src) {
    const temp = parent[current];
    ans.push(temp);
    current = temp;
  }

  ans.reverse();

  return ans;
}
