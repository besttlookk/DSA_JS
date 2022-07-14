// !==========Get min at pop

class Stack {
  constructor() {
    this.arr = [];
    this.top = -1;
  }
}

// !===============Links
// * https://practice.geeksforgeeks.org/problems/get-min-at-pop/1/?page=2&category[]=Stack&sortBy=submissions

// !==================Method

class Solution {
  /**
   * @param {number} arr
   * @param {number} n
   * @returns {Stack}
   */
  //Function to push all the elements into the stack.
  _push(arr, n) {
    let stack = [];
    for (let i = 0; i < n; i++) {
      stack.push(arr[i]);
    }
    return stack;
  }

  /**
   * @param {Stack} s
   */
  //Function to print minimum value in stack each time while popping.
  _getMinAtPop(s) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < s.length; i++) {
      min = Math.min(s[i]);
    }
    s.pop();

    return min;
  }
}
_getMinAtPop(s);
{
  //your code here
  // console.log(s);
  let newarr = [];
  for (let i = s.length - 1; i >= 0; i--) {
    let min = i;
    let top = i;
    while (top >= 0) {
      if (s[top] < s[min]) {
        min = top;
        top--;
      } else {
        top--;
      }
    }
    newarr.push(s[min]);
  }
  console.log(...newarr);
}
