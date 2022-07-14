// !=============== String Manipulation ====================

// !===========links ================
// * https://practice.geeksforgeeks.org/problems/string-manipulation3706/1/?page=3&category[]=Stack&sortBy=submissions

function removeConsecutiveSame(arr, n) {
  const st = [];

  for (let i = 0; i < n; i++) {
    if (st.length !== 0 && st[st.length - 1] === arr[i]) {
      while (st.length !== 0 && st[st.length - 1] === arr[i]) {
        st.pop();
      }
    } else {
      st.push(arr[i]);
    }
  }

  return st;
}

console.log(removeConsecutiveSame(["ab", "aa", "aa", "bcd", "ab"], 5));
