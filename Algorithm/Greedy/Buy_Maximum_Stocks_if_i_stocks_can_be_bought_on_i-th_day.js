// !===================Buy Maximum Stocks if i stocks can be bought on i-th day

// !=============================Links ======================
// * https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/
// * https://practice.geeksforgeeks.org/problems/buy-maximum-stocks-if-i-stocks-can-be-bought-on-i-th-day/1

// !=======================Method 1(Greedy) ====================
// * The idea is to use greedy approach, where we should start buying product from the day when the stock price is least and so on.
// * So, we will sort the pair of two values i.e { stock price, day } according to the stock price, and if stock prices are same, then we sort according to the day.

// * Let say, we have R rs remaining till now, and the cost of product on this day be C, and we can buy atmost L products on this day then,
// * # total purchase on this day (P) = min(L, R/C)
// * Now, add this value to the answer
// * total_purchase = total_purchase + P, where P =min(L, R/C)
// Now, subtract the cost of buying P items from remaining money, R = R – P*C.
// Total number of products that we can buy is equal to total_purchase.
function buyMaximumProducts(n, k, price) {
  const pairArr = [];
  let count = 0;
  let remainingAmount = k;

  for (let i = 0; i < n; i++) {
    pairArr.push([price[i], i + 1]);
  }

  pairArr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < n; i++) {
    // * It is not necessary that we would by all the stocks allowed on that particular day.
    // * It may be the case the amout remaining does not allow us. So we take the minimum value
    let costOfStock = pairArr[i][0];
    let totalStockCanBuy = parseInt(remainingAmount / costOfStock); //* but there is limitation
    let allowedQunatity = pairArr[i][1];
    let purchQuantity = Math.min(allowedQunatity, totalStockCanBuy);

    count += purchQuantity;
    remainingAmount -= purchQuantity * costOfStock;
  }

  return count;
}

console.log(buyMaximumProducts(3, 45, [10, 7, 19]));
