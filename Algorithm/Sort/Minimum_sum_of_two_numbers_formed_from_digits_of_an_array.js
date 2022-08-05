// !==============Minimum sum of two numbers formed from digits of an array

// * A minimum number will be formed from set of digits when smallest digit appears at most significant position and next smallest digit appears at next most significant position ans so on..
// !=================Links ====================
// * https://www.geeksforgeeks.org/minimum-sum-two-numbers-formed-digits-array/

// * https://practice.geeksforgeeks.org/problems/minimum-sum4058/1?page=1&category[]=Sorting&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

// !========================Method 1: Sorting ======================
// * The idea is to sort the array in increasing order and build two numbers by alternating picking digits from the array.
// * So first number is formed by digits present in odd positions in the array and second number is formed by digits from even positions in the array.
/*
function solve(arr, n) {
  arr.sort((a, b) => a - b);

  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      num1 = num1 * 10 + arr[i];
    } else {
      num2 = num2 * 10 + arr[i];
    }
  }

  return num1 + num2;
}
*/
// ! ==================Method 2 (For Large Numbers)
// * When we have to deal with very big numbers (as in the PRACTICE section of this question) the above approach will not work
// * The basic idea of approaching the question is the same as above, but instead of using numbers, we will use strings to handle sum.

function solve(arr, n) {
  arr.sort((a, b) => a - b);

  let num1 = "";
  let num2 = "";

  for (let i = 0; i < n; i += 2) {
    num1 += arr[i];
  }

  for (let i = 1; i < n; i += 2) {
    num2 += arr[i];
  }

  let j = num1.length - 1;
  let k = num2.length - 1;
  // as initial carry is zero
  let carry = 0;
  let ans = "";

  // *traverse both number from back
  while (j >= 0 && k >= 0) {
    let sum = 0;

    sum +=
      num1.charCodeAt(j) -
      "0".charCodeAt(0) +
      (num2.charCodeAt(k) - "0".charCodeAt(0)) +
      carry;

    ans += (sum % 10).toString(); //* we are conatinating the ans .so we need to reverser the answer to get final output
    carry = Math.floor(sum / 10);
    // console.log({ ans });
    j--;
    k--;
  }

  //* if string b is over and string a is left
  //* here we dont need to put here while condition
  //* as it would run at max one time. Because the difference
  //* between both the strings could be at max 1.
  while (j >= 0) {
    let sum = 0;
    sum += num1[j] - "0" + carry;
    ans += (sum % 10).toString();
    carry = Math.floor(sum / 10);
    j--;
  }

  //* if string a is over and string b is left
  while (k >= 0) {
    let sum = 0;
    sum += num2.charCodeAt(k) - "0".charCodeAt(0) + carry;
    ans += (sum % 10).toString();
    carry = Math.floor(sum / 10);
    k--;
  }

  // if carry is left
  if (carry) {
    ans += carry.toString();
  }

  ans = ans.split("");
  while (ans.length && ans[ans.length - 1] == "0") {
    ans.pop();
  }

  ans = ans.join("");

  // reverse our final string because we were storing sum from left to right
  ans = ans.split("").reverse().join("");
  return ans;
}

// console.log(solve([6, 8, 4, 5, 2, 3], 6));
console.log(
  solve([1, 3, 8, 7, 4, 2, 7, 7, 9, 3, 1, 9, 8, 6, 5, 0, 2, 8, 6, 0, 2, 4], 22)
);
