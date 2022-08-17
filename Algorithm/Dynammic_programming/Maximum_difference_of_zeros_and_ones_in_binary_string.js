// !================ Maximum difference of zeros and ones in binary string===============

// !======================Links ==========================
// * https://practice.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1

// * https://www.geeksforgeeks.org/maximum-difference-zeros-ones-binary-string/

// !========================+Method 1( kadne algorithm)=======================
function maxSubstring(S) {
  let count = 0;
  let ans = -1;

  for (let i = 0; i < S.length; i++) {
    const ch = S[i];

    if (ch === "1") count--;

    if (count < 0) count = 0;

    if (ch === "0") count++;

    ans = Math.max(ans, count);
  }

  if (ans <= 0) ans = -1;

  return ans;
}

// !===========================Method 2(DP)================

console.log(maxSubstring("11000010001"));
