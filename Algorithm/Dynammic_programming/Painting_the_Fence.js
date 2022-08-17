// !========================Painting the Fence=======================
//* total[i] = same[i] + diff[i]
//* same[i]  = diff[i-1]
//* diff[i]  = (diff[i-1] + diff[i-2]) * (k-1)
//*          = total[i-1] * (k-1)

// !==================================Links ==========================
// * https://practice.geeksforgeeks.org/problems/painting-the-fence3727/1
// * https://www.geeksforgeeks.org/painting-fence-algorithm/

// !=======================Method 1(DP)===================
// *Returns count of ways to color n posts using k colors
function countWays(n, k) {
  let dp = new Array(n + 1).fill(0);
  let mod = 1000000007;

  // There are k ways to color first post
  dp[1] = k;

  // There are 0 ways for single post to
  // violate (same color_ and k ways to
  // not violate (different color)
  let same = 0,
    diff = k;

  // Fill for 2 posts onwards
  for (let i = 2; i <= n; i++) {
    // Current same is same as previous diff
    same = diff;

    // We always have k-1 choices for next post
    diff = dp[i - 1] * (k - 1); //* (old Same + old Diff) * (k - 1)
    diff = diff % mod;

    // Total choices till i.
    dp[i] = (same + diff) % mod;
  }

  return dp[n];
}

// !=========================Method 2(Space optimization of above code)==================

function countWays(n, k) {
  // There are k ways to color first post
  let total = k;
  let mod = 1000000007;

  // There are 0 ways for single post to
  // violate (same color_ and k ways to
  // not violate (different color)
  let same = 0,
    diff = k;
  // Fill for 2 posts onwards
  for (let i = 2; i <= n; i++) {
    // Current same is same as previous diff
    same = diff;

    // We always have k-1 choices for next post
    diff = total * (k - 1);
    diff = diff % mod;

    // Total choices till i.
    total = (same + diff) % mod;
  }

  return total;
}

console.log(countWays(3, 2));
