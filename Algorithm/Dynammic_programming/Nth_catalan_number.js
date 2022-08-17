// !=============Nth catalan number=================

/**
 * @param {number} N
 * @returns {BigInt}
 */
// !==================Links =================
// * https://www.geeksforgeeks.org/program-nth-catalan-number/
// * https://practice.geeksforgeeks.org/problems/nth-catalan-number0817/1

// !========================Method 1(Recusion)================
// * The value of nth catalan number is exponential that makes the time complexity exponential.
function findCatalan(N) {
  let res = 0;

  // * Base case
  if (N <= 1) return 1;

  for (let i = 0; i < N; i++) {
    res += findCatalan(i) * findCatalan(N - i - 1);
  }

  return res;
}

// !========================Method 2(Dynamic Programming)=======================
// * Time Complexity: Time complexity of above implementation is O(n2)
function findCatalan(N) {
  let catalan = [];

  // Initialize first two
  // values in table
  catalan[0] = catalan[1] = 1;

  // Fill entries in catalan[]
  // using recursive formula
  for (let i = 2; i <= N; i++) {
    catalan[i] = 0;
    for (let j = 0; j < i; j++) catalan[i] += catalan[j] * catalan[i - j - 1];
  }

  // Return last entry
  return catalan[N];
}
console.log(findCatalan(5));
