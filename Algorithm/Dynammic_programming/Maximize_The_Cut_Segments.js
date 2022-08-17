// !======================Maximize The Cut Segments====================
// * Same as coins exchange problems but with maximum coins
// !========================Links========================
// * https://www.geeksforgeeks.org/maximize-the-number-of-segments-of-length-p-q-and-r/
// * https://practice.geeksforgeeks.org/problems/cutted-segments1642/1

// !==========================Method 1(recursion)========================
// * Let’s say we made a cut of length p , so the remaining length would be l-p and similarly with cuts q & r resulting in remaining lengths l-q & l-r respectively.
// * We will call recursive function for the remaining lengths and at any subsequent instance we’ll have these three choices.
// * We will store the answer from all these recursive calls & take the maximum out of them +1 as at any instance we’ll have 1 cut from this particular call as well.
// *  Also , note that the recursive call would be made if and only if the available length is greater than length we want to cut
// *  suppose p=3 , and after certain recursive calls the available length is 2 only , so we can’t cut this line in lengths of p anymore.

// * Time Complexity : O(n) where n is the length of rod or line segment that has to be cut.
// * Space Complexity : O(n) where n is the length of rod or line segment that has to be cut.
/*
function maximizeTheCuts(n, x, y, z) {
  // * Base case
  if (n === 0) return 0;
  if (n < 0) return Number.MIN_VALUE;

  let a = Number.MIN_VALUE;
  let b = Number.MIN_VALUE;
  let c = Number.MIN_VALUE;

  if (n >= x) a = maximizeTheCuts(n - x, x, y, z);
  if (n >= y) b = maximizeTheCuts(n - y, x, y, z);
  if (n >= z) c = maximizeTheCuts(n - z, x, y, z);

  console.log(a, b, c);

  return 1 + Math.max(a, b, c);
}
*/
// !==========================Method 2(Memoization)================
function maximizeTheCuts(n, x, y, z) {
  const dp = new Array(n + 1).fill(-1);

  const ans = solve(n, x, y, z, dp);

  return ans < 0 ? 0 : ans;
}

function solve(n, x, y, z, dp) {
  if (n === 0) return 0;
  if (n < 0) return Number.MIN_VALUE;
  if (dp[n] !== -1) return dp[n];

  let a = solve(n - x, x, y, z, dp);
  let b = solve(n - y, x, y, z, dp);
  let c = solve(n - z, x, y, z, dp);

  console.log(a, b, c);

  return (dp[n] = 1 + Math.max(a, b, c));
}

// !======================Method 3(tabulation)COrrect=================
function maximizeTheCuts(n, x, y, z) {
  const dp = new Array(n + 1).fill(-1);

  dp[0] = 0;

  for (let i = 0; i <= n; i++) {
    if (dp[i] !== -1) {
      if (i + x <= n) dp[i + x] = Math.max(dp[i + x], dp[i] + 1);
      if (i + y <= n) dp[i + y] = Math.max(dp[i + y], dp[i] + 1);
      if (i + z <= n) dp[i + z] = Math.max(dp[i + z], dp[i] + 1);
    }
  }
  console.log({ dp });

  if (dp[n] < 0) return 0;
  return dp[n];
}

// !======================Method 4(tabulation)WRONG=================
function maximizeTheCuts(n, x, y, z) {
  const dp = new Array(n + 1).fill(Number.MIN_VALUE);

  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    let a = Number.MIN_VALUE;
    let b = Number.MIN_VALUE;
    let c = Number.MIN_VALUE;
    let max = Number.MIN_VALUE;

    if (i - x >= 0) a = dp[i - x];
    if (i - y >= 0) b = dp[i - y];
    if (i - z >= 0) c = dp[i - z];

    max = Math.max(a, b, c);
    if (max !== Number.MIN_VALUE) dp[i] = max + 1;
  }
  console.log({ dp });

  if (dp[n] === Number.MIN_VALUE) return 0;
  return dp[n];
}

// console.log(maximizeTheCuts(4, 2, 1, 1));
// console.log(maximizeTheCuts(5, 5, 3, 2)); // 2
// console.log(maximizeTheCuts(8, 3, 6, 7));
console.log(maximizeTheCuts(7, 5, 5, 2)); // 2
