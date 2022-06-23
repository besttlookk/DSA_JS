// ! Links
// * https://practice.geeksforgeeks.org/problems/palindromic-array-1587115620/1/?page=1&category[]=Arrays&curated[]=7&sortBy=submissions

// !==========Method 1(Using build-in method) ===============

/*
function checkPalindrom(el) {
  const reverse = el.toString().split("").reverse().join("");
  return el.toString() === reverse;
}

function PalinArray(arr, n) {
  return arr.every((el) => checkPalindrom(el) === true);
}
*/
// !============Method 2 ===================

function checkPalindrom(el) {
  const str = el.toString();
  const n = str.length;

  for (let i = 0; i < parseInt(n / 2, 10); i++) {
    if (str[i] !== str[n - 1 - i]) return false;
  }

  return true;
}

function PalinArray(arr, n) {
  for (let i = 0; i < n; i++) {
    let ans = checkPalindrom(arr[i]);

    if (ans === false) return false;
  }

  return true;
}
console.log(PalinArray([121, 131, 202], 3));
