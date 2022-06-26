// !=========================== Stock buy and sell to max profit: Buy once sell multiple ==============
// * #Greedy

// !====================Links ====================
// * https://practice.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1/?page=2&curated[]=2&sortBy=submissions
//*  https://www.geeksforgeeks.org/stock-buy-sell/

// !=============== Method 1 =========================
//* Following is the algorithm for this problem.

//* Find the local minima and store it as starting index. If not exists, return.
//* Find the local maxima. And store it as an ending index. If we reach the end, set the end as the ending index.
//* Update the solution (Increment count of buy-sell pairs)
//* Repeat the above steps if the end is not reached.

function stockBuySell(A, n) {
  if (n === 1) return;
  let result = [];
  let i = 0;
  while (i < n - 1) {
    // * Find local minima
    while (i < n - 1 && A[i + 1] <= A[i]) {
      i++;
    }
    //* If we reached the end, break
    //* as no further solution possible
    if (i === n - 1) break;

    let minima = i;

    // * Find local maxima
    while (i < n && A[i] < A[i + 1]) {
      i++;
    }

    result.push([minima, i]);
  }
  return result;
}

// !=======================Method 2 ====================
// * In this approach, we just need to find the next greater element and subtract it from the current element so that the difference keeps increasing until we reach a minimum. If the sequence is a decreasing sequence, so the maximum profit possible is 0
/*
function stockBuySell(A, n) {
  let maxProfit = 0;

  for (let i = 1; i < n; i++) {
    if (A[i] > A[i - 1]) {
      maxProfit += A[i] - A[i - 1];
    }
  }

  return maxProfit;
}

*/
console.log(stockBuySell([100, 180, 260, 310, 40, 535, 695], 7));
