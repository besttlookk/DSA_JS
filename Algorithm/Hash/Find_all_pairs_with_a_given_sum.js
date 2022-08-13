// !=======================Find all pairs with a given sum
// * Given two unsorted arrays A of size N and B of size M of distinct elements, the task is to find all pairs from both arrays whose sum is equal to X.

// !====================Links
// * https://practice.geeksforgeeks.org/problems/find-all-pairs-whose-sum-is-x5808/1?page=1&category[]=Hash&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions
// !=============Method 1(Hashing)
function allPairs(A, B, N, M, X) {
  let set = new Set(A);

  const result = [];

  for (let i = 0; i < M; i++) {
    if (set.has(X - B[i])) {
      const temp = [X - B[i], B[i]];
      result.push(temp);
    }
  }

  result.sort((a, b) => a[0] - b[0]);
  return result;
}

const A = [1, 2, 4, 5, 7];
const B = [5, 6, 3, 4, 8];
console.log(allPairs(A, B, 5, 5, 9));
