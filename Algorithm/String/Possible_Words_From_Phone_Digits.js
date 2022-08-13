// !=======================================Possible Words From Phone Digits
/**
 * @param {number[]} a
 * @param {number} N
 * @returns {string[]}
 */

// !=================================Links ============================
// * https://practice.geeksforgeeks.org/problems/possible-words-from-phone-digits-1587115620/1?page=1&category[]=Strings&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions
// * https://www.geeksforgeeks.org/find-possible-words-phone-digits/

// !======================Solution(Recursion) =================
// * he idea is to form a recursive function. Then map the number with its string of probable alphabets, i.e 2 with “abc”, 3 with “def” etc.
// *  Now the recursive function will try all the alphabets, mapped to the current digit in alphabetic order, and again call the recursive function for the next digit and will pass on the current output string.

// * Time Complexity: O(4n), where n is a number of digits in the input number.
// Each digit of a number has 3 or 4 alphabets, so it can be said that each digit has 4 alphabets as options. If there are n digits then there are 4 options for the first digit and for each alphabet of the first digit there are 4 options in the second digit, i.e for every recursion 4 more recursions are called (if it does not match the base case). So the time complexity is O(4n).
// Space Complexity:O(1).

function possibleWords(a, N) {
  const ans = [];
  let output = [];
  let index = 0;
  const mapping = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  solve(a, N, mapping, ans, index, output);

  return ans;
}

function solve(digits, n, mapping, ans, index, output) {
  // * base case
  if (index === n) {
    ans.push(output.join(""));
    return;
  }

  let currNum = parseInt(digits[index]);
  const strForNum = mapping[currNum];

  // * For every digit recur
  for (let i = 0; i < strForNum.length; i++) {
    output.push(strForNum[i]);
    solve(digits, n, mapping, ans, index + 1, output);

    // * when we return back(backtracking) remove the last added item
    output.pop();
  }
}

console.log(possibleWords([2, 3, 4], 3));
