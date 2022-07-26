// !===========Floyd Warshall
// * The Floyd Warshall Algorithm is for solving the All Pairs Shortest Path problem.
// * The problem is to find shortest distances between every pair of vertices in a given edge weighted directed Graph.

// !===============Links
// * https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1
// * https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/

// !============Solution
// * Time Complexity: O(V3)
//* Auxiliary Space: O(V2)

function shortest_distance(matrix) {
  const v = matrix.length;

  // * make v*v 2D matrix
  let dist = Array.from(Array(v), () => new Array(v).fill(0));

  // * copy the given matrix into distance martix
  for (let i = 0; i < v; i++) {
    for (let j = 0; j < v; j++) {
      dist[i][j] = matrix[i][j];
    }
  }

  // * Add all vertices one by one to the set of intermediate vertices.
  for (let k = 0; k < v; k++) {
    //* Pick all vertices as source one by one
    for (let i = 0; i < v; i++) {
      // * Pick all vertices as destination for the above picked source
      for (let j = 0; j < v; j++) {
        // * If any intermidiate value is not known we will skip
        if (dist[i][k] === -1 || dist[k][j] === -1) continue;

        if (dist[i][j] === -1) dist[i][j] = dist[i][k] + dist[k][j];
        else dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  // * check for negative edge cycle
  // * if dist for source to source comes negative .That means there is negative edge cycle present(Idially it should be zero)
  for (let i = 0; i < v; i++) {
    if (dist[i][i] < 0) {
      console.log("Negative edge cycle present");
      return;
    }
  }
}

var graph = [
  [0, 5, Infinity, 10],
  [Infinity, 0, 3, Infinity],
  [Infinity, Infinity, 0, 1],
  [Infinity, Infinity, Infinity, 0],
];

console.log(shortest_distance(graph));
