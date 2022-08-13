// !========================Minimum Cost to cut a board into squares ======================
// * Total_cost = Total_cost + edge_cost * total_pieces

// * we perform cuts on highest cost edge as early as possible,
// !===============================Links
// * https://practice.geeksforgeeks.org/problems/minimum-cost-to-cut-a-board-into-squares/1?page=2&category[]=Greedy&curated[]=7&sortBy=submissions
// * https://www.geeksforgeeks.org/minimum-cost-cut-board-squares/

// !=======================Greedy Method
// *  first we sorted the edge cutting costs in reverse order, then we loop in them from higher-cost to lower-cost building our solution. Each time we choose an edge, counterpart count is incremented by 1, which is to be multiplied each time with corresponding edge cutting cost.

function minimumCostOfBreaking(X, Y, m, n) {
  // sort the horizontal cost in reverse order(decreasing order)
  X.sort((a, b) => b - a);
  // * sort the vertical cost in reverse order
  Y.sort((a, b) => b - a);

  //* initialize current width as 1
  let hPiece = 1;
  let vPiece = 1;

  let res = 0;

  // loop until one or both
  // cost array are processed
  let i = 0;
  let j = 0;
  while (i < m - 1 && j < n - 1) {
    if (X[i] > Y[j]) {
      res += X[i] * vPiece;
      hPiece += 1;
      i++;
    } else {
      res += Y[j] * hPiece;
      vPiece += 1;
      j++;
    }
  }

  // console.log({ res });

  // *loop for horizontal array, if remains

  while (i < m - 1) {
    res += X[i] * vPiece;
    i++;
  }

  while (j < n - 1) {
    res += Y[j] * hPiece;
    j++;
  }

  return res;
}

const X = [2, 1, 3, 1, 4];
const Y = [4, 1, 2];
console.log(minimumCostOfBreaking(X, Y, 6, 4));
