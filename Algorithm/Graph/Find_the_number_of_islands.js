// !====Find the number of islands
// * A graph where all vertices are connected with each other has exactly one connected component, consisting of the whole graph.
// * Such a graph with only one connected component is called a Strongly Connected Graph.

// * This is a variation of the standard problem: “Counting the number of connected components in an undirected graph”.

// * Note: An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically or diagonally i.e., in all 8 directions.

/**
 * @param {string[][]} grid
 * @returns {number}
 */
// !================links
// * https://www.geeksforgeeks.org/find-number-of-islands/
// * https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1?page=1&category[]=Graph&sortBy=submissions
// * https://www.geeksforgeeks.org/find-the-number-of-islands-set-2-using-disjoint-set/

// !===================Method(using DFS) : without creating visited matrix:============
// * The problem can be easily solved by applying DFS() on each component.
// *in each DFS() call, a component or a sub-graph is visited.

// *  Time complexity: O(ROW x COL)
// *  Auxiliary Space: O(1), as we are not using any extra space.
/*
function numIslands(grid) {
  const row = grid.length;
  if (!row) return;
  const col = grid[0].length;

  let count = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        count++;

        markCurrentIsland(grid, i, j, row, col);
      }
    }
  }

  return count;
}

function markCurrentIsland(grid, i, j, row, col) {
  if (i >= row || j >= col || i < 0 || j < 0 || grid[i][j] !== "1") return;

  grid[i][j] = "2";

  // * mark for all 4 neighbour
  markCurrentIsland(grid, i, j - 1, row, col); //*LEFT
  markCurrentIsland(grid, i, j + 1, row, col); //* RIGHT
  markCurrentIsland(grid, i - 1, j, row, col); //* UP
  markCurrentIsland(grid, i + 1, j, row, col); //* DOWN

  // !if all 8 direction has been asked add below code
  markCurrentIsland(grid, i - 1, j - 1, row, col); //* UP LEFT
  markCurrentIsland(grid, i - 1, j + 1, row, col); //* UP RIGHT
  markCurrentIsland(grid, i + 1, j - 1, row, col); //* DOWN LEFT
  markCurrentIsland(grid, i + 1, j + 1, row, col); //* DOWN RIGHT
}
*/
// !======================Method 2(Disjoint Set) ===================
//  *  The idea is to consider all 1 values as individual sets. Traverse the matrix and do a union of all adjacent 1 vertices.

class DisjointSet {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n).fill(0);
    this.n = n;
    this.initialisePar();
  }

  initialisePar() {
    for (let i = 0; i < this.n; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (this.parent[x] === x) {
      return x;
    }

    return (this.parent[x] = this.find(this.parent[x]));
  }

  union(x, y) {
    const xRoot = this.find(x);
    const yRoot = this.find(v);

    if (xRoot === yRoot) return;

    if (this.rank[xRoot] > this.rank[yRoot]) {
      this.parent[yRoot] = xRoot;
    } else if (this.rank[xRoot] > this.rank[yRoot]) {
      this.parent[xRoot] = yRoot;
    } else {
      this.parent[xRoot] = yRoot;
      this.rank[yRoot] = this.rank[yRoot] + 1;
    }
  }
}
function numIslands(grid) {
  const row = grid.length;
  if (!row) return;
  const col = grid[0].length;

  const ds = new DisjointSet(row * col);

  let count = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {}
  }
}
// !=================Example 1
// const grid = [
//   ["0", "1", "1", "1", "0", "0", "0"],
//   ["0", "0", "1", "1", "0", "1", "0"],
// ];

// !==========example 2

const grid = [
  ["0", "1", "0"],
  ["0", "1", "0"],
  ["0", "0", "0"],
  ["1", "1", "0"],
  ["1", "0", "1"],
  ["0", "1", "1"],
  ["1", "1", "1"],
  ["0", "1", "1"],
  ["1", "0", "1"],
];

console.log(numIslands(grid));
