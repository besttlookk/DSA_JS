// !======== Rearrange positive and negative numbers with constant extra space
// * The order of appearance should be maintained.

// !===========Links ============
// * https://www.geeksforgeeks.org/rearrange-positive-and-negative-numbers/
// * https://practice.geeksforgeeks.org/problems/arranging-the-array1131/1/

// !====Approach 1: Modified Partition Process of Quick Sort========
// * We can reverse the order of positive numbers whenever relative order is changed. This will happen if there are more than one positive element between last negative number in left subarray and current negative element.

function rotateSubArray(arr, l, r) {
  let temp = arr[r];
  for (let j = r; j > l - 1; j--) {
    arr[j] = arr[j - 1];
  }
  arr[l] = temp;

  return arr;
}

function Rearrange(a, n) {
  let last_negative_index = -1;

  for (let j = 0; j < n; j++) {
    if (a[j] < 0) {
      last_negative_index++;
      // *swap
      [a[last_negative_index], a[j]] = [a[last_negative_index], a[j]];

      //* Done to manage order too
      if (j - last_negative_index >= 2)
        this.rotateSubArray(arr, last_negative_index + 1, i);
    }
  }

  return a;
}
