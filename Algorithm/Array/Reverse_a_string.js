// ! =========== Links =================
// * https://practice.geeksforgeeks.org/problems/reverse-a-string/1/?page=3&curated[]=2&sortBy=submissions
// *

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function reverseWord(str) {
  const arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    swap(arr, left, right);
    left++;
    right--;
  }

  return arr.join("");
}

console.log(reverseWord("Geeks"));
