// !========== Count all possible walks from a source to a destination with exactly k edges

// !==============Links ================
// * https://www.geeksforgeeks.org/count-possible-paths-source-destination-exactly-k-edges/
// * https://practice.geeksforgeeks.org/problems/possible-paths3834/1

// !===================Method 1(Simple Approach:)==========

// * Time Complexity: O(Vk).
// * Auxiliary Space: O(V).
// To store the stack space and the visited array O(V) space is needed.
function countwalks(graph, u, v, k, V) {
  //* Base cases
  if (k == 0 && u == v) return 1;
  if (k == 1 && graph[u][v]) return 1;
  if (k <= 0) return 0;

  // Initialize result
  var count = 0;

  // Go to all adjacents of u and recur
  for (var i = 0; i < V; i++)
    if (graph[u][i] == 1)
      // Check if is adjacent of u
      count += countwalks(graph, i, v, k - 1);

  return count;
}

// !=============Method 2 (Dynamic Programming. )
