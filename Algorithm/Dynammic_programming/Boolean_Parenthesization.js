// !==================Boolean Parenthesization

// !===================Links===================
// * https://practice.geeksforgeeks.org/problems/boolean-parenthesization5610/1
// * https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/

// !========================Recursion======================
function countWays(S, n) {
  return solve(S, 0, n - 1, true);
}

function solve(S, i, j, isTrue) {
  if (i > j) return false;

  if (i === j) {
    if (isTrue) {
      return S[i] === "T";
    } else {
      return S[i] === "F";
    }
  }

  let count = 0;
  for (let k = i + 1; k < j; k += 2) {
    const leftTrue = solve(S, i, k - 1, true);
    const leftFalse = solve(S, i, k - 1, false);
    const rightTrue = solve(S, k + 1, j, true);
    const rightFalse = solve(S, k + 1, j, false);

    if (S[k] === "&") {
      if (isTrue === true) {
        count = count + leftTrue * rightTrue;
      } else {
        count =
          count +
          leftTrue * rightFalse +
          leftFalse * rightTrue +
          leftFalse * rightFalse;
      }
    } else if (S[k] === "|") {
      if (isTrue === true) {
        count =
          count +
          leftTrue * rightTrue +
          leftTrue * rightFalse +
          leftFalse * rightFalse;
      } else {
        count = count + leftFalse * rightFalse;
      }
    } else if (S[k] === "^") {
      if (isTrue) {
        count += leftFalse * rightTrue + leftTrue * rightFalse;
      } else {
        count += leftFalse * rightFalse + leftTrue * rightTrue;
      }
    }
  }

  return count;
}

// !=================================Method 2(Using Memoization and 3D Matrix)===================
// * Time Complexity: O(n3), as we are using a loop to traverse, n times and we are making recursive calls which will cost n2 times. Where n is the length of the symbols string.
//* Auxiliary Space: O(n2), as we are using extra space for the DP matrix. Where n is the length of the symbols string.

function countWays(S, n) {
  let dp = new Array(n + 1); // n * n * 2 : Array
  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(n + 1);
    for (let j = 0; j < n + 1; j++) {
      dp[i][j] = new Array(2);
      for (let k = 0; k < 2; k++) dp[i][j][k] = -1;
    }
  }

  return solve(S, 0, n - 1, 1, dp);
}

function solve(S, i, j, isTrue, dp) {
  if (i > j) return 0;

  if (i === j) {
    if (isTrue === 1) {
      return S[i] === "T" ? 1 : 0;
    } else {
      return S[i] === "F" ? 1 : 0;
    }
  }

  if (dp[i][j][isTrue] !== -1) return dp[i][j][isTrue];

  let count = 0;
  let leftTrue, leftFalse, rightTrue, rightFalse;
  for (let k = i + 1; k <= j - 1; k += 2) {
    if (dp[i][k - 1][1] !== -1) {
      leftTrue = dp[i][k - 1][1];
    } else {
      leftTrue = solve(S, i, k - 1, 1, dp);
    }

    if (dp[i][k - 1][0] !== -1) {
      leftFalse = dp[i][k - 1][0];
    } else {
      leftFalse = solve(S, i, k - 1, 0, dp);
    }

    if (dp[k + 1][j][1] !== -1) {
      rightTrue = dp[k + 1][j][1];
    } else {
      rightTrue = solve(S, k + 1, j, 1, dp);
    }

    if (dp[k + 1][j][0] !== -1) {
      rightFalse = dp[k + 1][j][0];
    } else {
      rightFalse = solve(S, k + 1, j, 0, dp);
    }

    //* Evaluate AND operation
    if (S[k] === "&") {
      if (isTrue === 1) {
        count += leftTrue * rightTrue;
      } else {
        count +=
          leftTrue * rightFalse +
          leftFalse * rightTrue +
          leftFalse * rightFalse;
      }
    }
    //* Evaluate OR operation
    else if (S[k] === "|") {
      if (isTrue === 1) {
        count +=
          leftTrue * rightTrue + leftTrue * rightFalse + leftFalse * rightTrue;
      } else {
        count += leftFalse * rightFalse;
      }
    } else if (S[k] === "^") {
      if (isTrue === 1) {
        count += leftFalse * rightTrue + leftTrue * rightFalse;
      } else {
        count += leftFalse * rightFalse + leftTrue * rightTrue;
      }
    }
  }

  return (dp[i][j][isTrue] = count % 1003);
}

// console.log(countWays("T|T&F^T", 7));
console.log(countWays("T^F|F", 5));
console.log(countWays("T|F^F&T|F^F^F^T|T&T^T|F^T^F&F^T|T^F", 35)); // 638
