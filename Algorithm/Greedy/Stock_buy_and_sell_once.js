// !=========================== Stock buy and sell to max profit: Buy once sell once / . Maximum difference between two elements ==============
// * #Greedy

// !====================Links ====================
// * https://www.geeksforgeeks.org/maximum-difference-between-two-elements/
// * https://practice.geeksforgeeks.org/problems/maximum-difference-1587115620/1

// !======================= Method 1(Brute force) ===============
// * Time Complexity : O(n^2)
// * Auxiliary Space : O(1)
/*
function stockBuySell(A, n) {
  let profit;
  let max = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      profit = A[j] - A[i];
      if (profit > max) {
        max = profit;
      }
    }
  }

  return max;
}
*/
// !================= Method 2(Array preprocessning)(Store the maxProfit for each day) =================
// * Time Complexity : O(n)
// * Auxiliary Space : O(n)

/*
function stockBuySell(A, n) {
  const maxProfitArr = [];
  maxProfitArr[n - 1] = A[n - 1];
  let maxProfit = 0;

  for (let i = n - 2; i >= 0; i--) {
    maxProfitArr[i] = Math.max(A[i], maxProfitArr[i + 1]);
  }

  for (let i = 0; i < n; i++) {
    maxProfit = Math.max(maxProfit, maxProfitArr[i] - A[i]);
  }

  return maxProfit;
}
*/
// !==================Method 3 (Array Preprocessing)(Store the minimum price before each day)=======
// * Time Complexity : O(n)
// * Auxiliary Space : O(n)

/*
function stockBuySell(A, n) {
  const prevMin = [];
  prevMin[0] = -1;
  let maxProfit = 0;

  for (let i = 1; i < n; i++) {
    if (A[i] > prevMin[i - 1]) {
      if (prevMin[i - 1] === -1) prevMin[i] = A[i - 1];
      else prevMin[i] = prevMin[i - 1];
    } else {
      prevMin[i] = -1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (prevMin[i] !== -1) {
      const profit = A[i] - prevMin[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}
*/
// ! =================Method 3 (Using concept of above approch BUT without use of constant space)==========================
// * In this method, instead of taking difference of the picked element with every other element, we take the difference with the minimum element found so far. So we need to keep track of 2 things:
// * 1) Maximum difference found so far (max_diff).
// * 2) Minimum number visited so far (min_element).

// * Time Complexity : O(n)
//*  Auxiliary Space : O(1)

function stockBuySell(A, n) {
  let minSoFar = A[0];
  let maxProfit = 0;

  for (let i = 1; i < n; i++) {
    minSoFar = Math.min(minSoFar, A[i]);
    maxProfit = Math.max(maxProfit, A[i] - minSoFar);
  }

  return maxProfit;
}
console.log(stockBuySell([1, 2, 90, 10, 110], 5));
// console.log(stockBuySell([100, 180, 260, 310, 40, 535, 695], 7));
