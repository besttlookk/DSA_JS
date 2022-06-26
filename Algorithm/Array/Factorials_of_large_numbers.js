// !===========Factorials of large numbers

// !=========Links ============
// * https://practice.geeksforgeeks.org/problems/factorials-of-large-numbers2508/1/?page=3&curated[]=2&sortBy=submissions

// !=============== Method 1(Recursion)

function factorial(N) {
  if (N === 0 || N === 1) return 1;

  return N * factorial(N - 1);
}

console.log(factorial(4));
