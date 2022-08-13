// !==================Shop in Candy Store / Find the minimum and maximum amount to buy all N candies ==================

// !===============================Links ==============================
// * https://practice.geeksforgeeks.org/problems/shop-in-candy-store1145/1
// * https://www.geeksforgeeks.org/find-minimum-maximum-amount-buy-n-candies/

// !=============================Method 1(Greedy) ==================
// *  So if we want to minimize the money, we must buy candies at minimum cost and get candies of maximum costs for free. To maximize the money, we must do the reverse.

// * For finding minimum amount :
// * # Start purchasing candies from starting and reduce k free candies from last with every single purchase.

function candyStore(n, k, candies) {
  // * First Sort the price array.
  candies.sort((a, b) => a - b);

  return [findMinimum(n, k, candies), findMaximum(n, k, candies)];
}

function findMinimum(n, k, candies) {
  let res = 0;

  for (let i = 0; i < n; i++) {
    res += candies[i];

    //* And take k candies for free from the last
    n = n - k;
  }

  return res;
}

function findMaximum(n, k, candies) {
  let res = 0;
  let index = 0;
  for (let i = n - 1; i >= index; i--) {
    res += candies[i];

    index += k;
  }
  return res;
}

console.log(candyStore(4, 2, [3, 2, 1, 4]));
