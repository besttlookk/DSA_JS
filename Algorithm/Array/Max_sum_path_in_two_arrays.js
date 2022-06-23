// ! Links
// * https://practice.geeksforgeeks.org/problems/max-sum-path-in-two-arrays/1/?page=1&curated[]=2&sortBy=submissions
// * https://www.geeksforgeeks.org/maximum-sum-path-across-two-arrays/

//* Space Complexity: O(1).
//* Any extra space is not required, so the space complexity is constant.
//* Time complexity: O(m+n).
function max_path_sum(a, b, M, N) {
  let sum1 = 0; //* for array a
  let sum2 = 0; //* for array b
  let result = 0;
  let i = 0;
  let j = 0;

  while (i < M && j < N) {
    //* Add elements of ar1[] to sum1
    if (a[i] < b[j]) {
      sum1 += a[i];
      i++;
    }
    //* Add elements of ar2[] to sum2
    else if (a[i] > b[j]) {
      sum2 += b[j];
      j++;
    }
    //* We reached a common point
    else {
      result += Math.max(sum1, sum2) + a[i];
      i++;
      j++;
      sum1 = 0;
      sum2 = 0;
    }
  }

  while (i < M) {
    sum1 += a[i];
    i++;
  }

  while (j < N) {
    sum2 += b[j];
    j++;
  }
  result += Math.max(sum1, sum2);

  return result;
}

console.log(max_path_sum([1, 2, 4], [1, 2, 7], 3, 3));
