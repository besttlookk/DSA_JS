// !===================Maximum subsequence sum such that no three are consecutive==============
// * This problem is mainly an extension of ==>  Maximum sum such that no two elements are adjacent
// * We maintain an auxiliary array sum[] (of same size as input array) to find the result.

// * sum[0] = arr[0]
// * sum[1] = arr[0] + arr[1]

// We have three cases
// 1) Exclude arr[2], i.e., sum[2] = sum[1]
// 2) Exclude arr[1], i.e., sum[2] = sum[0] + arr[2]
// 3) Exclude arr[0], i.e., sum[2] = arr[1] + arr[2]
// * sum[2] = max(sum[1], arr[0] + arr[2], arr[1] + arr[2])

// * In general,
// We have three cases
// 1) Exclude arr[i],  i.e.,  sum[i] = sum[i-1]
// 2) Exclude arr[i-1], i.e., sum[i] = sum[i-2] + arr[i]
// 3) Exclude arr[i-2], i.e., sum[i-3] + arr[i] + arr[i-1]
//* sum[i] = max(sum[i-1], sum[i-2] + arr[i],sum[i-3] + arr[i] + arr[i-1])

function maxSumWO3Consec(arr, n) {
  let sum = [];

  // Base cases (process first three elements)
  if (n >= 1) sum[0] = arr[0];

  if (n >= 2) sum[1] = arr[0] + arr[1];

  if (n > 2)
    sum[2] = Math.max(sum[1], Math.max(arr[1] + arr[2], arr[0] + arr[2]));

  // Process rest of the elements
  // We have three cases
  // 1) Exclude arr[i], i.e., sum[i] = sum[i-1]
  // 2) Exclude arr[i-1], i.e., sum[i] = sum[i-2] + arr[i]
  // 3) Exclude arr[i-2], i.e., sum[i-3] + arr[i] + arr[i-1]
  for (let i = 3; i < n; i++)
    sum[i] = Math.max(
      Math.max(sum[i - 1], sum[i - 2] + arr[i]),
      arr[i] + arr[i - 1] + sum[i - 3]
    );

  return sum[n - 1];
}

console.log(maxSumWO3Consec([100, 1000, 100, 1000, 1], 5)); //*1100
