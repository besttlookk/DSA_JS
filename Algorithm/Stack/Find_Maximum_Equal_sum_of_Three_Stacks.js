// !===============Find Maximum Equal sum of Three Stacks

// !===Links ===========
// * https://practice.geeksforgeeks.org/problems/find-maximum-equal-sum-of-three-stacks/1/?page=3&category[]=Stack&sortBy=submissions

// !==========
// * Time Complexity : O(n1 + n2 + n3) where n1, n2 and n3 are sizes of three stacks.
function maxEqualSum(S1, S2, S3, N1, N2, N3) {
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;

  sum1 = findSum(S1);
  sum2 = findSum(S2);
  sum3 = findSum(S3);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < N1 && j < N2 && k < N3) {
    if (sum1 === sum2 && sum2 === sum3) return sum1;
    else if (sum1 >= sum2 && sum1 >= sum3) {
      // * sum1 me se S1[0] ko hata do
      sum1 -= S1[i];
      i++;
    } else if (sum2 >= sum1 && sum2 >= sum3) {
      sum2 -= S2[j];
      j++;
    } else if (sum3 >= sum1 && sum3 >= sum2) {
      sum3 -= S3[k];
      k++;
    }
  }

  return 0;
}

function findSum(arr) {
  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
}

console.log(maxEqualSum([4, 2, 3], [1, 1, 2, 3], [1, 4], 3, 4, 2));
