// !=========================Links
// * https://practice.geeksforgeeks.org/problems/find-the-median0527/1

// !=======Find the median
// * Median is the middle value of a set of data.
// * To determine the median value in a sequence of numbers, the numbers must first be arranged in ascending order.

// * If there is an odd amount of numbers, the median value is the number that is in the middle, with the same amount of numbers below and above.
// * If there is an even amount of numbers in the list, the median is the average of the two middle values.

function find_median(arr) {
  // * sort the array
  arr.sort((a, b) => a - b);

  let n = arr.length;

  if (n % 2 !== 0) return arr[parseInt(n / 2)];

  return (arr[parseInt((n - 1) / 2)] + arr[parseInt(n / 2)]) / 2;
}

console.log(find_median([90, 100, 78, 89, 67]));
