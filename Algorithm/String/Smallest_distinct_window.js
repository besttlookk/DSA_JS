// !=============Smallest distinct window

// !=====================Links
// * https://practice.geeksforgeeks.org/problems/smallest-distant-window3132/1?page=1&category[]=Strings&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

// !================ Method 1: This is the Brute Force method of solving the problem using HashMap.=====
// *  For solving the problem we first have to find out all the distinct characters present in the string. This can be done using a HashMap
// * The next thing is to generate all the possible substrings. This follows by checking whether a substring generated has all the required characters(stored in the hash_map) or not.
// * If yes, then compare its length with the minimum substring length which follows the above constraints, found till now.

// * Time Complexity: O(N^2).
// * This time is required to generate all possible sub-strings of a string of length “N”.
// * Space Complexity: O(N).

function findSubString(s) {
  const n = s.length;
  const map = new Map();
  let min = Number.MAX_VALUE;
  let res = "";

  for (let i = 0; i < n; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  const distCount = map.size;

  for (let i = 0; i < n; i++) {
    let count = 0;
    let sub_str = "";

    let visited = new Array(256).fill(0);

    for (let j = i; j < n; j++) {
      if (visited[s.charCodeAt(j)] === 0) {
        count++;
        visited[s.charCodeAt(j)] = 1;
      }

      sub_str += s[j];

      // * Jaise hi saare dist char include ho jaaye sub string .
      if (count == distCount) break;
    }

    // * For every sub_str check whetere its size is mininmum
    //* if subStr length is less that current val of
    if (sub_str.length < min && count == distCount) {
      res = sub_str;
      min = res.length;
    }
  }
  return res;
}

// !==============================Method 2(Sliding Window) ====================
// * This technique shows how a nested for loop in few problems can be converted to single for loop and hence reducing the time complexity.
// *  Whenever the window contains all characters of given string, the window is shrinked from left side to remove extra characters and then its length is compared with the smallest window found so far.
// * If in the present window, no more characters can be deleted then we start increasing the size of the window using the end until all the distinct characters present in the string are also there in the window. Finally, find the minimum size of each window.

// * 1. Maintain an array (visited) of maximum possible characters (256 characters) and as soon as we find any in the string, mark that index in the array (this is to count all distinct characters in the string).
// * 2. Take two pointers start and end which will mark the start and end of window.
// * 3. Take a counter=0 which will be used to count distinct characters in the window.
// * 4. Now start reading the characters of the given string and if we come across a character which has not been visited yet increment the counter by 1.
// * 5. If the counter is equal to total number of distinct characters, Try to shrink the window.
// * 6. For shrinking the window -:
//  *  If the frequency of character at start pointer is greater than 1 increment the pointer as it is redundant.
//  * Now compare the length of present window with the minimum window length.

function findSubString(s) {
  const n = s.length;

  // if string is empty or having one char
  if (n <= 1) return s;

  let min = Number.MAX_VALUE;
  const map = new Map(); //* to store the frequency for char in substr
  const set = new Set(s); //* to calculate dist char
  let distCount = set.size;
  let count = 0;
  let start = 0;

  for (let i = 0; i < n; i++) {
    // * STEP 1. Update the freq of the char
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      count++;
      map.set(s[i], 1);
    }

    // * the moment we included all the dist char we will try to reduce the size of the window
    if (count === distCount) {
      // * check if any character is occurring more no. of times
      //*  than its occurrence in pattern, if yes
      //*  then remove it from starting and also remove the useless characters.
      while (map.get(s[start]) > 1) {
        map.set(s[start], map.get(s[start]) - 1);

        start++;
      }

      // Update window size
      const currentWindowSize = i - start + 1;
      if (min > currentWindowSize) {
        min = currentWindowSize;
      }
    }
  }

  return s.substring(start, start + min).length;
}
console.log(findSubString("AABBBCBBAC"));
