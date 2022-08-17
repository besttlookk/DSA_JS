// !============================Friends_Pairing_problem===============
// * The problem is simplified version of how many ways we can divide n elements into multiple groups. (here group size will be max of 2 elements).
// * For n-th person there are two choices:
// * # 1) n-th person remains single, we recur for f(n – 1)
// * # 2) n-th person pairs up with any of the remaining n – 1 persons. We get (n – 1) * f(n – 2)
// * # Therefore we can recursively write f(n) as:f(n) = f(n – 1) + (n – 1) * f(n – 2)

/**
 * @param {number} n
 * @return {number}
 */
// !===================Links ===================
// * https://www.geeksforgeeks.org/friends-pairing-problem/
// * https://practice.geeksforgeeks.org/problems/friends-pairing-problem5425/1

// !================Method 1(Recursive) ==========
function countFriendsPairings(n) {
  if (n === 1 || n === 0) return 1;

  return countFriendsPairings(n - 1) + (n - 1) * countFriendsPairings(n - 2);
}

// * Since the above recursive formula has overlapping subproblems, we can solve it using Dynamic Programming.

// !=====================Method 2(Dynamic Prog)====================
// * Time Complexity : O(n)
// *Auxiliary Space : O(n)
function countFriendsPairings(n) {
  const dp = new Array(10000);

  for (let i = 0; i < 10000; i++) {
    dp[i] = -1;
  }

  return solve(n, dp);
}

function solve(n, dp) {
  if (dp[n] !== -1) return dp[n];
  if (n <= 2) return (dp[n] = n);

  return (dp[n] = (solve(n - 1, dp) + (n - 1) * solve(n - 2, dp)) % 1000000007);

  // let first, second;
  // if (dp[n - 1] !== -1) {
  //   first = dp[n - 1];
  // } else {
  //   first = solve(n - 1, dp);
  // }

  // if (dp[n - 2] !== -1) {
  //   second = dp[n - 2];
  // } else {
  //   second = solve(n - 2, dp);
  // }

  // return (dp[n] = (first + (n - 1) * second) % 1000000007);
}
// * Since the above formula is similar to fibonacci number, we can optimize the space with an iterative solution.

// !================= Method 3(Iterative) ====================
// * Time Complexity : O(n)
// * Auxiliary Space : O(1)
function countFriendsPairings(n) {
  let a = 1,
    b = 2,
    c = 0;
  if (n <= 2) {
    return n;
  }
  for (let i = 3; i <= n; i++) {
    c = (b + (i - 1) * a) % 1000000007;
    a = b;
    b = c;
  }
  return c;
}

// !======================Slight modification of above code =====================
// * Time Complexity : O(n)
// * Auxiliary Space : O(1)
function countFriendsPairings(n) {
  let dp = new Array(10000);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  const MOD = 1000000007;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + (i - 1) * dp[i - 2]) % MOD;
  }
  return dp[n];
}
console.log(countFriendsPairings(6569)); //* 506750108
console.log(countFriendsPairings(9067)); //* 151249015
console.log(countFriendsPairings(4));
