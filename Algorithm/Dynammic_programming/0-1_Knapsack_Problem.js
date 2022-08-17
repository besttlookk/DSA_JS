// !==============0-1 Knapsack Problem
/**
 * @param {number} W
 * @param {number[]} wt
 * @param {number[]} val
 * @param {number} n
 * @returns {number}
 */

// !===================Links ==============
// * https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
// * https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1?page=3&category[]=Dynamic%20Programming&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

// !==========Method 1: Recursion by Brute-Force algorithm OR Exhaustive Search.============
// *  A simple solution is to consider all subsets of items and calculate the total weight and value of all subsets. Consider the only subsets whose total weight is smaller than W. From all such subsets, pick the maximum value subset.

// * Optimal Sub-structure: To consider all subsets of items, there can be two cases for every item.
// * Case 1: The item is included in the optimal subset.
// * Case 2: The item is not included in the optimal set.

// * Therefore, the maximum value that can be obtained from ‘n’ items is the max of the following two values.
// * Maximum value obtained by n-1 items and W weight (excluding nth item).
// * Value of nth item plus maximum value obtained by n-1 items and W minus the weight of the nth item (including nth item).

// * If the weight of ‘nth’ item is greater than ‘W’, then the nth item cannot be included and Case 1 is the only possibility.
// * we will start from the back

// * Time Complexity: O(2n).
// As there are redundant subproblems.
// *Auxiliary Space :O(1) + O(N).
// As no extra data structure has been used for storing values but O(N) auxiliary stack space(ASS) has been used for recursion stack.
/*
function knapSack(W, wt, val, n) {
  // * Base case
  if (n === 0 || W === 0) return 0;

  // * If weight of current item is greater than weight remaining. WE CANT INCLUDE
  if (wt[n - 1] > W) return knapSack(W, wt, val, n - 1);
  //* Return the maximum of two cases:
  //* (1) nth item included
  //* (2) not included
  else {
    return Math.max(
      val[n - 1] + knapSack(W - wt[n - 1], wt, val, n - 1),
      knapSack(W, wt, val, n - 1)
    );
  }
}
*/
// * It should be noted that the above function computes the same sub-problems again and again

// * Since subproblems are evaluated again, this problem has Overlapping Sub-problems property. So the 0-1 Knapsack problem has both properties (Overlapping Subproblems Property and Optimal Substructure) of a dynamic programming problem.

// !===================Method 2: This method uses Memoization Technique (an extension of recursive approach) ===================

// * Time Complexity: O(N*W).
// As redundant calculations of states are avoided.
// * Auxiliary Space: O(N*W) + O(N).
// The use of 2D array data structure for storing intermediate states and O(N) auxiliary stack space(ASS) has been used for recursion stack:
/*
function knapSack(W, wt, val, n) {
  // Declare the table dynamically

  let dp = new Array(n + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(W + 1);
  }

  // * Initialy fill with -1
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= W; j++) {
      dp[i][j] = -1;
    }
  }

  return solve(W, wt, val, n, dp);
}

function solve(W, wt, val, n, dp) {
  if (n === 0 || W === 0) return 0;

  // * If value is stored . Return that
  if (dp[n][W] !== -1) return dp[n][W];

  if (wt[n - 1] > W) {
    // Store the value of function call
    // stack in table before return
    return (dp[n][W] = solve(W, wt, val, n - 1, dp));
  } else {
    return (dp[n][W] = Math.max(
      val[n - 1] + solve(W - wt[n - 1], wt, val, n - 1, dp),
      solve(W, wt, val, n - 1, dp)
    ));
  }
}
*/
// !========================Method 3(bottom-up manner)================
// *  In a DP[][] table let’s consider all the possible weights from ‘1’ to ‘W’ as the columns and weights that can be kept as the rows.
// * The state DP[i][j] will denote maximum value of ‘j-weight’ considering all values from ‘1 to ith’.
// * So if we consider ‘wi’ (weight in ‘ith’ row) we can fill it in all columns which have ‘weight values > wi’.
// * Now two possibilities can take:
// * # Fill ‘wi’ in the given column.
// * # Do not fill ‘wi’ in the given column.

// * Now we have to take a maximum of these two possibilities,
// * formally if we do not fill ‘ith’ weight in ‘jth’ column then DP[i][j] state will be same as DP[i-1][j] but if we fill the weight, DP[i][j] will be equal to the value of ‘wi’+ value of the column weighing ‘j-wi’ in the previous row.
// * So we take the maximum of these two possibilities to fill the current state. This visualisation will make the concept clear:

// *Time Complexity: O(N*W).
// where ‘N’ is the number of weight element and ‘W’ is capacity. As for every weight element we traverse through all weight capacities 1<=w<=W.
// *Auxiliary Space: O(N*W).
// The use of 2-D array of size ‘N*W’.

function knapSack(W, wt, val, n) {
  let dp = new Array(n + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(W + 1);
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= W; j++) {
      // Initialization ==== base case of recursion
      if (i === 0 || j === 0) dp[i][j] = 0;
      else if (wt[i - 1] <= j) {
        dp[i][j] = Math.max(
          val[i - 1] + dp[i - 1][j - wt[i - 1]],
          dp[i - 1][j]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][W];
}

// !=====================Method 4:  We used the same approach but with optimized space complexity================
// * Time Complexity: O(N*W). As redundant calculations of states are avoided.

// *Auxiliary Space: O(W) As we are using 1-D array instead of 2-D array.

function knapSack(W, wt, val, n) {
  // making and initializing dp array
  let dp = Array(W + 1).fill(0);

  for (let i = 1; i < n + 1; i++) {
    for (let j = W; j >= 0; j--) {
      if (wt[i - 1] <= j)
        // finding the maximum value
        dp[j] = Math.max(dp[j], dp[j - wt[i - 1]] + val[i - 1]);
    }
  }

  console.log({ dp });
  return dp[W];
}
console.log(knapSack(4, [4, 5, 1], [1, 2, 3], 3));
