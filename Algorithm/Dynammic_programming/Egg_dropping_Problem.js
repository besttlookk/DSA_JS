// !================= Egg Dropping Puzzle
// * The problem is not actually to find the critical floor, but merely to decide floors from which eggs should be dropped so that the total number of trials are minimized.

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

// * You are given N identical eggs and you have access to a K-floored building from 1 to K.
// !

// !======================Recursive==============
function eggDrop(n, k) {
  // If there are no floors, then
  // no trials needed. OR if there
  // is one floor, one trial needed.
  if (k == 1 || k == 0) return k;

  // We need k trials for one egg
  // and k floors(Start from floor 1)
  if (n == 1) return k;

  let min = Number.MAX_VALUE;
  let res;

  // Consider all droppings from
  // 1st floor to kth floor and
  // return the minimum of these
  // values plus 1.
  for (let i = 1; i <= k; i++) {
    res = Math.max(eggDrop(n - 1, i - 1), eggDrop(n, k - i)); //* We are taking max bcoz we are considering the worst case
    // * we have to find min of the worst case
    if (res < min) min = res;
  }

  return min + 1;
}

console.log(eggDrop(2, 10)); //* Minimum number of trials in worst case with 2 eggs and 10 floors is 4

// * It should be noted that the above function computes the same subproblems again and again.

// !===========Method 2: Dynamic Programming using memoization.===================
function eggDrop(n, k) {
  var MAX = 1000;

  const dp = Array(MAX)
    .fill()
    .map(() => Array(MAX).fill(-1));

  return solve(n, k, dp);
}

function solve(n, k, dp) {
  if (k == 1 || k == 0) return k;

  if (n == 1) return k;

  if (dp[n][k] != -1) {
    return dp[n][k];
  }

  var min = Number.MAX_VALUE,
    res;

  for (let i = 1; i <= k; i++) {
    res = Math.max(solve(n - 1, i - 1, dp), solve(n, k - i, dp));
    if (res < min) min = res;
  }

  dp[n][k] = min + 1;
  return min + 1;
}

// !===================Optimized above code

function eggDrop(n, k) {
  var MAX = 1000;

  const dp = Array(MAX)
    .fill()
    .map(() => Array(MAX).fill(-1));

  return solve(n, k, dp);
}

function solve(n, k, dp) {
  if (k == 1 || k == 0) return k;

  if (n == 1) return k;

  if (dp[n][k] != -1) {
    return dp[n][k];
  }

  var min = Number.MAX_VALUE,
    res;
  let bt, up;

  for (let i = 1; i <= k; i++) {
    if (dp[n - 1][i - 1] !== -1) {
      bt = dp[n - 1][i - 1];
    } else {
      bt = solve(n - 1, i - 1, dp);
    }

    if (dp[n][k - i] !== -1) {
      up = dp[n][k - i];
    } else {
      up = solve(n, k - i, dp);
    }
    res = Math.max(bt, up);
    if (res < min) min = res;
  }

  dp[n][k] = min + 1;
  return min + 1;
}
