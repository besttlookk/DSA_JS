// !=============Snake and Ladder Problem ===================
// * The idea is to consider the given snake and ladder board as a directed graph with a number of vertices equal to the number of cells in the board.
// * The problem reduces to finding the shortest path in a graph.
// * Every vertex of the graph has an edge to next six vertices if the next 6 vertices do not have a snake or ladder.
// * If any of the next six vertices has a snake or ladder, then the edge from the current vertex goes to the top of the ladder or tail of the snake.
// * Since all edges are of equal weight, we can efficiently find the shortest path using Breadth-First Search of the graph.

// !=================Links ==================
// * https://www.geeksforgeeks.org/snake-ladder-problem-2/
// * https://practice.geeksforgeeks.org/problems/snake-and-ladder-problem4816/1?page=1&category[]=Graph&curated[]=7&sortBy=submissions

// !====================Method ==============

function minThrow(arr, n) {
  const snake = new Array(31).fill(-1);
  const ladder = new Array(31).fill(-1);

  for (let i = 0; i < 2 * n; i += 2) {
    if (arr[i] < arr[i + 1]) {
      ladder[arr[i]] = arr[i + 1];
    }

    if (arr[i] > arr[i + 1]) {
      snake[arr[i]] = arr[i + 1];
    }
  }

  const que = [];
  const step = new Array(31).fill(Number.MAX_VALUE);
  step[1] = 0; //* bcoz game starts from 1
  que.push(1);

  while (que.length) {
    const pos = que.shift();
    // * if reached last
    if (pos === 30) break;

    // * Try all 6 possible values
    for (let i = 1; i <= 6; i++) {
      let newPos = pos + i;
      newPos = Math.max(newPos, ladder[newPos], snake[newPos]);

      if (newPos <= 30 && step[newPos] > step[pos] + 1) {
        step[newPos] = step[pos] + 1;
        que.push(newPos);
      }
    }
  }
  return step[30];
}

console.log(
  minThrow([3, 22, 5, 8, 11, 26, 20, 29, 17, 4, 19, 7, 27, 1, 21, 9], 8)
);
