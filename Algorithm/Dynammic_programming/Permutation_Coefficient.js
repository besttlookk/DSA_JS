// !========================Permutation Coefficient

// !=======================Links===================
// * https://www.geeksforgeeks.org/permutation-coefficient/

// !=================Method 1(Brute force app) =============
// * Let us suppose we maintain a single 1D array to compute the factorials up to n.
// * We can use computed factorial value and apply the formula P(n, k) = n! / (n-k)!.

// * TC:O(n)
// * SC: O(n)
function permutationCoeff(n, k) {
  const fact = new Array(n + 1);
  fact[0] = 1;

  for (let i = 1; i <= n; i++) {
    fact[i] = i * fact[i - 1];
  }

  return fact[n] / fact[n - k];
}
// !===================Method 2(Recusion) ==================
// * The coefficient can also be computed recursively using the below recursive formula:
// * P(n, k) = P(n-1, k) + k* P(n-1, k-1)
function permutationCoeff(n, k) {
  if (k > n) return 0;
  if (k === 0) return 1;

  return permutationCoeff(n - 1, k) + k * permutationCoeff(n - 1, k - 1);
}

// !==============Method 3()
// * A O(n) time and O(1) Extra Space Solution
function PermutationCoeff(n, k) {
  let P = 1;

  // Compute n*(n-1)*(n-2)....(n-k+1)
  for (let i = 0; i < k; i++) P *= n - i;

  return P;
}

console.log(permutationCoeff(10, 2)); //90
