// !==============Links =====================
// * https://www.geeksforgeeks.org/josephus-problem-set-1-a-on-solution/
// * https://practice.geeksforgeeks.org/problems/game-of-death-in-a-circle1840/1/#

// !==================Method 19recursive ================
function safePos(n, k) {
  if (n === 1) return 1;
  else {
    return ((safePos(n - 1, k) + k - 1) % n) + 1; //* we are doing mapping
  }
}
