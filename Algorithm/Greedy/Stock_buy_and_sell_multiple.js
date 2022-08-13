// !=========================== Stock buy and sell to max profit: Buy once sell multiple ==============
// * #Greedy

// !====================Links ====================
// * https://practice.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1/?page=2&curated[]=2&sortBy=submissions
//*  https://www.geeksforgeeks.org/stock-buy-sell/
// * https://practice.geeksforgeeks.org/problems/stock-buy-and-sell2615/1
// * https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/

// !======================Method 1 (Brute Force) =========================
// *  A simple approach is to try buying the stocks and selling them on every single day when profitable and keep updating the maximum profit so far.
// !====================== Method 2 (Local minima & Maxima)=========================
//* Following is the algorithm for this problem.

//* Find the local minima and store it as starting index. If not exists, return.
//* Find the local maxima. And store it as an ending index. If we reach the end, set the end as the ending index.
//* Update the solution (Increment count of buy-sell pairs)
//* Repeat the above steps if the end is not reached.

// * Time Complexity: The outer loop runs till I become n-1. The inner two loops increment the value of I in every iteration. So overall time complexity is O(n)

function stockBuySell(A, n) {
  if (n === 1) return;
  let result = [];
  let i = 0;
  while (i < n - 1) {
    // * Find local minima(Jab Tak agla chota hote ja raha ..aage badho)
    while (i < n - 1 && A[i + 1] <= A[i]) {
      i++;
    }
    //* If we reached the end, break
    //* as no further solution possible
    if (i === n - 1) break;

    let minima = i;

    // * Find local maxima(jab tak aage wala bada hai aage badho)
    while (i < n && A[i] < A[i + 1]) {
      i++;
    }

    result.push([minima, i]);
  }
  return result;
}

// !==================Method 3(Little variation of above approch)==============
/*
function stockBuySell(A, n) {
  if (n === 1) return;
  let result = [];
  let i = 0; //* local minima
  let j = 0; //* local maxima
  let profit = 0; //* IF we need to calculate total profit
  while (i < n) {
    // * find next local maima
    while (j < n - 1 && A[j + 1] > A[j]) {
      j++;
    }

    if (i !== j) result.push([i, j]);

    profit += A[j] - A[i];
    i = ++j;

    if (j >= n - 1) break;
  }
  return result;
}
*/
// !=======================Method 4{Valley Peak Approach:}: ====================
// * In this approach, we just need to find the next greater element and subtract it from the current element so that the difference keeps increasing until we reach a minimum. If the sequence is a decreasing sequence, so the maximum profit possible is 0

// * Use this approch if you only need to find total profit

function stockBuySell(A, n) {
  let maxProfit = 0;

  for (let i = 1; i < n; i++) {
    if (A[i] > A[i - 1]) {
      maxProfit += A[i] - A[i - 1];
    }
  }

  return maxProfit;
}

console.log(stockBuySell([100, 180, 260, 310, 40, 535, 695], 7));
