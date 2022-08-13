// !===================Smallest Subset with Greater Sum

// !=========================Solution 1(Brute force)==========
function minSubset(A, N) {
  let min = Number.MAX_VALUE;
  let totalSum = 0;

  for (let i = 0; i < N; i++) {
    totalSum += A[i];
  }

  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = i; j < N; j++) {
      sum += A[j];

      if (sum > totalSum - sum && min > j + 1) {
        min = j + 1;
      }
    }
  }

  return min;
}

// !=======================Solution(2 pointer approch) ==========
function minSubset(A, N) {
  A.sort((a, b) => a - b);
  let low = 0;
  let high = N - 1;
  let count = 1;
  let sum = A[low];
  let maxSum = A[high];

  while (low < high) {
    if (maxSum <= sum) {
      high--;
      maxSum += A[high];
      count++;
    } else {
      low++;
      sum += A[low];
    }
  }

  return count;
}

// !==========================Solution 3 ============

function minSubset(A, N) {
  A.sort((a, b) => a - b);
  let totalSum = 0;

  for (let i = 0; i < N; i++) {
    totalSum += A[i];
  }
  let count = 0;
  let sum = 0;

  for (let i = N - 1; i >= 0; i--) {
    sum += A[i];

    count++;

    if (sum >= totalSum / 2) {
      break;
    }
  }

  return count;
}

console.log(minSubset([20, 12, 18, 4], 4));
