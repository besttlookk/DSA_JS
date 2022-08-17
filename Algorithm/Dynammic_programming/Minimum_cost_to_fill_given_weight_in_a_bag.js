// !===============Minimum cost to fill given weight in a bag
// * This problem is can be reduced to Unbounded Knapsack

// * We need to create price arr and weight arr on our own as few weight might be not available(-1)

// !======================Links ==================
// * https://practice.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1
// * https://www.geeksforgeeks.org/minimum-cost-to-fill-given-weight-in-a-bag/

// !====================Method 1(DP:Tabulation)===============

function minimumCost(arr, n, w) {
  let INF = 1000000;

  const wtArr = [];
  const price = [];
  let size = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== -1) {
      wtArr.push(i + 1);
      price.push(arr[i]);
      size++;
    }
  }

  n = size;

  const dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(w + 1);
  }

  //* fill 0th row with infinity
  for (let i = 0; i <= w; i++) {
    dp[0][i] = INF;
  }

  //* fill 0'th column with 0
  for (let i = 1; i <= n; i++) {
    dp[i][0] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= w; j++) {
      // wt[i-1]>j means capacity of bag is
      // less than weight of item
      if (wtArr[i - 1] > j) dp[i][j] = dp[i - 1][j];
      // here we check we get minimum cost either
      // by including it or excluding it
      else {
        dp[i][j] = Math.min(
          price[i - 1] + dp[i][j - wtArr[i - 1]],
          dp[i - 1][j]
        );
      }
    }
  }

  // exactly weight W can not be made by given weights
  return dp[n][w] == INF ? -1 : dp[n][w];
}

// !=======================Method 2(Space Optimized Solution)=============================
// * If we take a closer look at this problem, we may notice that this is a variation of Rod Cutting Problem. Instead of doing maximization, here we need to do minimization.

// console.log(minimumCost([20, 10, 4, 50, 100], 5, 5));
console.log(
  minimumCost(
    [40, 28, 7, 21, 59, 48, 74, 15, 63, 24, 81, 14, 31, 7, 35, -1, 13],
    17,
    138
  )
);
