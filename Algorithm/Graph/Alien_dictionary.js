// !============ Alien Dictionary

// !=============Links =============
// * https://practice.geeksforgeeks.org/problems/alien-dictionary/1?page=1&category[]=Graph&curated[]=1&sortBy=submissions
// * https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/

// !===================Solution (Topological sort) =============

class Graph {
  constructor(v) {
    this.v = v;
    this.adj = new Array(v);

    // * initialize all vertex of the adj list
    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }
}

function findOrder(dict, N, K) {
  const g = new Graph(K);
  const st = [];
  const visited = new Array(K).fill(false);
  let result = "";

  for (let i = 0; i < N - 1; i++) {
    const word1 = dict[i];
    const word2 = dict[i + 1];

    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      // * when we find letter which do not match. we make a edge out of it
      // * u ==> v (v is greater than u)
      // * We need to convert letter into index number using ASCII value
      if (word1[j] !== word2[j]) {
        g.addEdge(
          word1.charCodeAt(j) - "a".charCodeAt(0),
          word2.charCodeAt(j) - "a".charCodeAt(0)
        );
        break;
      }
    }
  }

  for (let i = 0; i < K; i++) {
    if (!visited[i]) {
      topologicalSort(i, visited, st, g.adj);
    }
  }

  while (st.length) {
    const x = st.pop() + "a".charCodeAt(0);
    result += String.fromCharCode(x);
  }

  return result;
}

function topologicalSort(u, visited, st, adj) {
  visited[u] = true;

  for (let v of adj[u]) {
    if (!visited[v]) {
      topologicalSort(v, visited, st, adj);
    }
  }

  st.push(u);
}

// !=================+Example
console.log(findOrder(["baa", "abcd", "abca", "cab", "cad"], 5, 4));
