// !==============M-Coloring Problem

// !============links
// * https://www.geeksforgeeks.org/m-coloring-problem-backtracking-5/
// * https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1
// * https://www.geeksforgeeks.org/graph-coloring-applications/

// !===================Method 1(Using BFS) ===============
function graphColoring(graph, m, V) {
  //* Initialize all color values as 0. This
  //* initialization is needed correct
  //* functioning of isSafe()
  const colArr = new Array(V).fill(0);
  if (graphColoringUtil(graph, m, V, 0, colArr)) return true;

  return false;
}

function graphColoringUtil(graph, m, V, currentNode, colArr) {
  // * if we sucessfully reach to the last node that means there is a way to color the grapgh using m colors
  if (currentNode === V - 1) return true;

  // *Try to apply each color to current node
  for (let i = 1; i <= m; i++) {
    if (isSafe(graph, V, currentNode, colArr, i)) {
      colArr[currentNode] = i;

      // * if color applied nove on to the next node
      // * if it return true break from the ofr loop
      if (graphColoringUtil(graph, m, V, currentNode + 1, colArr)) return true;

      // * if failed removed that color as it was not correct
      colArr[currentNode] = 0;
    }
  }

  //* If no color can be assigned to this vertex then return false
  return false;
}

// * if graph is in the form of adj Matrix
function isSafe(graph, V, currentNode, colArr, currCol) {
  for (let i = 0; i < V; i++)
    if (graph[currentNode][i] === 1 && currCol === colArr[i]) return false;
  return true;
}
