// !=================Check if two arrays are equal or not
// Two arrays are said to be equal if:

// both of them contain the same set of elements,
// arrangements (or permutations) of elements might/might not be same.
// If there are repetitions, then counts of repeated elements must also be the same for two arrays to be equal.

// !===============Links ============
// * https://www.geeksforgeeks.org/check-if-two-arrays-are-equal-or-not/
// * https://practice.geeksforgeeks.org/problems/check-if-two-arrays-are-equal-or-not3847/1?page=1&category[]=Hash&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

// !================Method 1 (Sorting) =============
function check(A, B, N) {
  let ans = true;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let j = 0;

  for (let i = 0; i < N; i++) {
    if (A[i] != B[j]) {
      ans = false;
      break;
    }
    j += 1;
  }

  return ans;
}

// !==================Method 2(Hash)===========
function check(A, B, N) {
  if (A.length != B.length) return false;

  const map = new Map();

  for (let i = 0; i < N; i++) {
    if (map.has(A[i])) {
      const old = map.get(A[i]);
      map.set(A[i], old + 1);
    } else {
      map.set(A[i], 1);
    }
  }

  for (let i = 0; i < N; i++) {
    if (map.has(B[i]) && map.get(B[i]) > 0) {
      const old = map.get(B[i]);
      map.set(B[i], old - 1);
    } else {
      return false;
    }
  }

  return true;
}

let arr1 = [3, 5, 2, 5, 2];
let arr2 = [2, 3, 5, 5, 2];
console.log(check(arr1, arr2, 5));
