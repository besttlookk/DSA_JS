// !======= Minimize the maximum difference between the heights ========

// ! ============= Links ================
// * https://www.geeksforgeeks.org/minimize-the-maximum-difference-between-the-heights/
// * https://practice.geeksforgeeks.org/problems/minimize-the-heights-i/1/

// !============Method 2
// * First, we try to sort the array and make each height of the tower maximum.
// * We do this by decreasing the height of all the towers towards the right by k and increasing all the height of the towers towards the left (by k).
// * It is also possible that the tower you are trying to increase the height doesn’t have the maximum height
// * Therefore we only need to check whether it has the maximum height or not by comparing it with the last element on the right side which is a[n]-k. Since the array is sorted if the tower’s height is greater than the [n]-k then it’s the tallest tower available. Similar reasoning can also be applied to finding the shortest tower.
//*  Note:- We need not consider where a[i]<k because the height of the tower can’t be negative so we have to neglect that case.

// * Time Complexity: O(nlogn)
// * Auxiliary Space: O(n)
function getMinDiff(arr, n, k) {
  arr.sort((a, b) => a - b);
  let tempMin = arr[0];
  let tempMax = arr[n - 1];

  let minDiff = tempMax - tempMin; //* before changing. we need to minimize it

  for (let i = 1; i < n; i++) {
    // * for new temp min we will add "K" to the zero index element and substract K from each index. Then chose min from them
    tempMin = Math.min(arr[0] + k, arr[i] - k);

    // * similarluy for max
    tempMax = Math.max(arr[n - 1] - k, arr[i - 1] + k);

    minDiff = Math.min(minDiff, tempMax - tempMin);
  }

  return minDiff;
}

console.log(getMinDiff([2, 6, 3, 4, 7, 2, 10, 3, 2, 1], 10, 5));
