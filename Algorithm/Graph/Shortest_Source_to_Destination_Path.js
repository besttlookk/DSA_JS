// !===================== Shortest Distance in a Binary Maze ======================
// * SIMILAR QUESTION BELOW

// !===============Links
// * https://practice.geeksforgeeks.org/problems/shortest-source-to-destination-path3544/1?page=1&category[]=Graph&curated[]=1&sortBy=submissions
// * https://www.geeksforgeeks.org/shortest-path-in-a-binary-maze/

// !===================Method 1: Using Backtracking

// * Time complexity: O(4^MN)
// * Space complexity: O(MN)

// * source = [y, x]
/*
function shortestPath(grid, source, destination) {
  const sr = source[0];
  const sc = source[1];
  const dr = destination[0];
  const dc = destination[1];

  // * Check for inValid cases
  if (grid.length === 0 || grid[sr][sc] !== 1 || grid[dr][dc] !== 1) return -1;

  const row = grid.length;
  const col = grid[0].length;

  //* construct an `M × N` matrix to keep track of visited cells
  let visited = [];
  for (var i = 0; i < row; i++) visited.push(new Array(col).fill(false));

  let dist = Number.MAX_SAFE_INTEGER;

  dist = findShortestPath(grid, sr, sc, dr, dc, row, col, dist, 0, visited);

  if (dist != Number.MAX_SAFE_INTEGER) return dist;
  return -1;
}

function findShortestPath(
  grid,
  sr,
  sc,
  dr,
  dc,
  row,
  col,
  min_dist,
  dist,
  visited
) {
  // * Check if we reached the destination successfully
  if (sr === dr && sc === dc) {
    return Math.min(min_dist, dist);
  }

  // * Mark this co-ordinated visited
  visited[sr][sc] = true;

  // * Go right if possible
  if (isSafe(sr, sc + 1, row, col, grid, visited)) {
    min_dist = findShortestPath(
      grid,
      sr,
      sc + 1,
      dr,
      dc,
      row,
      col,
      min_dist,
      dist + 1,
      visited
    );
  }

  // * Go left if possible
  if (isSafe(sr, sc - 1, row, col, grid, visited)) {
    min_dist = findShortestPath(
      grid,
      sr,
      sc - 1,
      dr,
      dc,
      row,
      col,
      min_dist,
      dist + 1,
      visited
    );
  }

  // * Go up if possible
  if (isSafe(sr - 1, sc, row, col, grid, visited)) {
    min_dist = findShortestPath(
      grid,
      sr - 1,
      sc,
      dr,
      dc,
      row,
      col,
      min_dist,
      dist + 1,
      visited
    );
  }

  // * Go down if possible
  if (isSafe(sr + 1, sc, row, col, grid, visited)) {
    min_dist = findShortestPath(
      grid,
      sr + 1,
      sc,
      dr,
      dc,
      row,
      col,
      min_dist,
      dist + 1,
      visited
    );
  }

  // backtrack: remove (i, j) from the visited matrix
  visited[sr][sc] = false;
  return min_dist;
}

function isSafe(i, j, row, col, grid, visited) {
  return (
    i >= 0 &&
    i < row &&
    j >= 0 &&
    j < col &&
    grid[i][j] === 1 &&
    visited[i][j] === false
  );
}
*/
// !============================Method 2: Using BFS ==============

// * that BFS works here because it doesn’t consider a single path at once.
// * It considers all the paths starting from the source and moves ahead one unit in all those paths at the same time which makes sure that the first time when the destination is visited, it is the shortest path.

// * time complexity is O(MN)
function shortestPath(grid, source, destination) {
  // * Check for inValid cases
  if (
    grid.length === 0 ||
    grid[source[0]][source[1]] !== 1 ||
    grid[destination[0]][destination[1]] !== 1
  )
    return -1;

  const row = grid.length;
  const col = grid[0].length;

  //* construct an `M × N` matrix to keep track of visited cells
  let visited = [];
  for (var i = 0; i < row; i++) visited.push(new Array(col).fill(false));

  visited[source[0]][source[1]] = true;

  const que = [];

  //* Distance of source cell is 0
  que.push([source[0], source[1], 0]);

  // *Do bfs from source
  while (que.length) {
    const front = que.shift();
    const rr = front[0];
    const cc = front[1];
    const dist = front[2];

    //* These arrays are used to get row and column
    //* numbers of 4 neighbours of a given cell
    let rowNum = [-1, 0, 0, 1];
    let colNum = [0, -1, 1, 0];

    // * check if we have reached to the destination
    if (cc === destination[1] && rr === destination[0]) {
      return dist;
    }

    for (let i = 0; i < 4; i++) {
      const rn = rr + rowNum[i];
      const cn = cc + colNum[i];

      if (
        isSafe(rn, cn, row, col) &&
        grid[rn][cn] === 1 &&
        visited[rn][cn] === false
      ) {
        visited[rn][cn] = true;
        que.push([rn, cn, dist + 1]);
      }
    }
  }

  return -1;
}

function isSafe(i, j, row, col) {
  if (i >= 0 && i < row && j >= 0 && j < col) return true;

  return false;
}

// !========================Example 1===========
// const grid = [
//   [1, 1, 1, 1],
//   [1, 1, 0, 1],
//   [1, 1, 1, 1],
//   [1, 1, 0, 0],
//   [1, 0, 0, 1],
// ];
// const source = [0, 1];
// const destination = [2, 2];

// console.log(shortestPath(grid, source, destination)); // 3

// !===================Example 2 ==================
const grid = [
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
];
const source = [0, 0];
const destination = [3, 4];

// console.log(shortestPath(grid, source, destination)); // 11

// !=================================Shortest Source to Destination Path  ========================
// !=====Links
// * https://practice.geeksforgeeks.org/problems/shortest-source-to-destination-path3544/1?page=1&category[]=Graph&curated[]=1&sortBy=submissions

function shortestDistance(N, M, A, X, Y) {
  if (A[0][0] !== 1 || A[X][Y] !== 1) return -1;

  //* construct an `N × M` matrix to keep track of visited cells
  let visited = [];
  for (var i = 0; i < N; i++) visited.push(new Array(M).fill(false));

  visited[0][0] = true;
  console.log(visited);

  const que = [];

  //* Distance of source cell is 0
  que.push([0, 0, 0]);

  // *Do bfs from source
  while (que.length) {
    const front = que.shift();
    // console.log({ front });
    const rr = front[0];
    const cc = front[1];
    const dist = front[2];

    //* These arrays are used to get row and column
    //* numbers of 4 neighbours of a given cell
    let rowNum = [-1, 0, 0, 1];
    let colNum = [0, -1, 1, 0];

    // * check if we have reached to the destination

    if (cc === Y && rr === X) {
      return dist;
    }

    for (let i = 0; i < 4; i++) {
      const rn = rr + rowNum[i];
      const cn = cc + colNum[i];

      if (
        isSafe(rn, cn, N, M) &&
        A[rn][cn] === 1 &&
        visited[rn][cn] === false
      ) {
        visited[rn][cn] = true;
        que.push([rn, cn, dist + 1]);
      }
    }
  }
  console.log("reached");
  return -1;
}

function isSafe(i, j, row, col) {
  if (i >= 0 && i < row && j >= 0 && j < col) return true;

  return false;
}

let N = 3;
let M = 4;
let A = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
];
let X = 0;
let Y = 3;
console.log(shortestDistance(N, M, A, X, Y));
