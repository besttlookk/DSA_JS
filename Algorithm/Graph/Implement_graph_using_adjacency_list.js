// !================Queue===============
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    // adding element to the queue
    this.items.push(element);
  }

  dequeue() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  front() {
    // returns the Front element of
    // the queue without removing it.
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }
}

// !=== Adjacency List to represent a graph

// create a graph class
class Graph {
  //* defining vertex array and
  //* adjacent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map(); //* key of a map holds a vertex and values hold an array of an adjacent node.
  }

  //! functions to be implemented

  //* addVertex(v)
  // *  It adds the vertex v as key to adjList and initializes its values with an array.
  addVertex(v) {
    //* initialize the adjacent list with a null array
    this.AdjList.set(v, []);
  }

  //! addEdge(v, w)
  // * It adds an edge between the src and dest.
  addEdge(v, w) {
    //* get the list for vertex v and put the
    //* vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);

    //* Since graph is undirected,
    //* add an edge from w to v also
    this.AdjList.get(w).push(v);
  }

  //! printGraph()
  printGraph() {
    // get all the vertices
    var get_keys = this.AdjList.keys();

    // iterate over the vertices
    for (var i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      var get_values = this.AdjList.get(i);
      var conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of get_values) conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }

  //! bfs(v)
  // * Time Complexity: O(V+E), where V is the number of nodes and E is the number of edges.
  //*  Auxiliary Space: O(V)
  bfs(startingNode) {
    // create a visited object
    var visited = {};

    // Create an object for queue
    var q = new Queue();

    // add the starting node to the queue
    visited[startingNode] = true;
    q.enqueue(startingNode);

    // loop until queue is empty
    while (!q.isEmpty()) {
      // get the element from the queue
      var getQueueElement = q.dequeue();

      // passing the current vertex to callback function
      console.log(getQueueElement);

      // get the adjacent list for current vertex
      var get_List = this.AdjList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for (var i in get_List) {
        var neigh = get_List[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      }
    }
  }
  //! dfs(v)
  dfs(startingNode) {
    var visited = {};

    this.DFSUtil(startingNode, visited);
  }

  // Recursive function which process and explore
  // all the adjacent vertex of the vertex with which it is called
  DFSUtil(vert, visited) {
    visited[vert] = true;
    console.log(vert);

    var get_neighbours = this.AdjList.get(vert);

    for (var i in get_neighbours) {
      var get_elem = get_neighbours[i];
      if (!visited[get_elem]) this.DFSUtil(get_elem, visited);
    }
  }

  isCycle(V, adj) {
    const visited = new Array(V).fill(false);

    for (let i = 0; i < V; i++) {
      if (!visited[i] && this.detectCycle(i, -1, adj, visited)) {
        return true;
      }
    }

    return false;
  }

  detectCycle(i, parent, adj, visited) {
    const que = [];

    que.push([i, parent]);
    visited[i] = true;

    while (que.length !== 0) {
      const temp = que.shift();
      const front = temp[0];
      const parent = temp[1];

      const neighbours = adj.get(front);

      for (let i = 0; i < neighbours.length; i++) {
        const neighbour = neighbours[i];

        if (!visited[neighbour]) {
          visited[neighbour] = true;
          que.push([neighbour, front]);
        } else if (visited[neighbour] && parent !== neighbour) {
          return true;
        }
      }
    }

    return false;
  }
}

//! Using the above implemented graph class
/*
var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");
*/
// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
// g.printGraph();

// console.log("BFS");
// g.bfs("A");

// !===

let g = new Graph(4);
let vertices = [0, 1, 2, 3];

for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

g.addEdge(1, 2);
g.addEdge(2, 3);

console.log(g.isCycle(4, g.AdjList));
