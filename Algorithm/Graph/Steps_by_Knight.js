// !==========Steps by Knight
/**
 * @param {number[]} KnightPos
 * @param {number[]} TargetPos
 * @param {number} N
 * @returns {number}
 */
// !===========Links
// * https://practice.geeksforgeeks.org/problems/steps-by-knight5927/1?page=1&category[]=Graph&sortBy=submissions
// * https://www.geeksforgeeks.org/minimum-steps-reach-target-knight/

// !=================Solution(BFS)
// * This problem can be seen as shortest path in unweighted graph.
// * Therefore we use BFS to solve this problem.
// *  We try all 8 possible positions where a Knight can reach from its position.
// * If reachable position is not already visited and is inside the board, we push this state into queue with distance 1 more than its parent state.
// * Finally we return distance of target position, when it gets pop out from queue.
/*
function minStepToReachTarget(KnightPos, TargetPos, N) {
  // * store initial x and y cordinate
  // * Since we are given 1-based index. substract by 1 to convert it in 0-based index
  const x1 = KnightPos[0] - 1;
  const y1 = KnightPos[1] - 1;
  // * store target coordinate
  const xt = TargetPos[0] - 1;
  const yt = TargetPos[1] - 1;

  // * Check if initial coordiante is target coordinate
  if (x1 === xt && y1 === yt) return 0;

  const que = [];

  // * Make 2-D visited array initially marked as false
  const visited = new Array(N);

  for (let i = 0; i < N; i++) {
    visited[i] = new Array(N);

    for (let j = 0; j < N; j++) {
      visited[i][j] = false;
    }
  }

  que.push([x1, y1]);
  // * mark this as visited
  visited[x1][y1] = true;

  let ans = 0; //* we will do level by level traversal

  while (que.length) {
    const size = que.length;
    for (let i = 0; i < size; i++) {
      const front = que.shift();
      const xx = front[0];
      const yy = front[1];

      // * check if this is the target cordinate
      if (xx === xt && yy === yt) return ans;

      const arrx = [1, 1, -1, -1, 2, -2, 2, -2];
      const arry = [2, -2, 2, -2, 1, 1, -1, -1];

      // * find new x-cordinate & y-cor of all the valid neigghbour
      for (let i = 0; i < 8; i++) {
        const xn = xx + arrx[i];
        const yn = yy + arry[i];

        // *Before adding to que check if that cordinate is valid or not
        if (isSafe(xn, yn, N, visited)) {
          que.push([xn, yn]);
          visited[xn][yn] = true;
        }
      }
    }
    ans++;
  }

  return ans;
}

function isSafe(x, y, n, visited) {
  if (x >= 0 && x < n && y >= 0 && y < n && visited[x][y] === false)
    return true;

  return false;
}
*/
// !==================Slight modification of above code ==========
// * the way we handle the ans counter
function minStepToReachTarget(KnightPos, TargetPos, N) {
  const x1 = KnightPos[0] - 1;
  const y1 = KnightPos[1] - 1;
  // * store target coordinate
  const xt = TargetPos[0] - 1;
  const yt = TargetPos[1] - 1;

  // * Check if initial coordiante is target coordinate
  if (x1 === xt && y1 === yt) return 0;

  const que = [];

  // * Make 2-D visited array initially marked as false
  const visited = new Array(N);

  for (let i = 0; i < N; i++) {
    visited[i] = new Array(N);

    for (let j = 0; j < N; j++) {
      visited[i][j] = false;
    }
  }

  que.push([x1, y1, 0]);
  // * mark this as visited
  visited[x1][y1] = true;

  while (que.length) {
    const front = que.shift();
    const xx = front[0];
    const yy = front[1];
    const steps = front[2];

    // * check if this is the target cordinate
    if (xx === xt && yy === yt) return steps;

    const arrx = [1, 1, -1, -1, 2, -2, 2, -2];
    const arry = [2, -2, 2, -2, 1, 1, -1, -1];

    // * find new x-cordinate & y-cor of all the valid neigghbour
    for (let i = 0; i < 8; i++) {
      const xn = xx + arrx[i];
      const yn = yy + arry[i];

      // *Before adding to que check if that cordinate is valid or not
      if (isSafe(xn, yn, N, visited)) {
        que.push([xn, yn, steps + 1]);
        visited[xn][yn] = true;
      }
    }
  }

  return -1;
}

function isSafe(x, y, n, visited) {
  if (x >= 0 && x < n && y >= 0 && y < n && visited[x][y] === false)
    return true;

  return false;
}

console.log(minStepToReachTarget([3, 1], [1, 3], 3));
