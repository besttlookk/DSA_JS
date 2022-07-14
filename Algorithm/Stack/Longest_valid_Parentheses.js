// !===========Longest valid Parentheses

// !=============Links ===============
// * https://practice.geeksforgeeks.org/problems/longest-valid-parentheses5657/0/?page=3&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/length-of-the-longest-valid-substring/
// * https://practice.geeksforgeeks.org/problems/3b47f0ad00f953dd514235ddec54e39fdc297dda/0/?page=3&category[]=Stack&sortBy=submissions
// * https://practice.geeksforgeeks.org/problems/valid-substring0624/0/?page=3&category[]=Stack&sortBy=submissions

// !=================Method 1 ===============
// *  The idea is to store indexes of previous starting brackets in a stack.
// * The first element of the stack is a special element that provides index before the beginning of valid substring (base for next valid string).
function maxLength(s) {
  const n = s.length;
  const st = [];

  // * The first element of the stack is used to provide a base for the next valid string.

  st.push(-1);
  let count = 0;

  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (c === "(") st.push(i);
    //* If closing bracket, i.e.,str[i] = ')'
    else {
      //* Pop the previous opening bracket's index
      if (st.length !== 0) st.pop();

      //* Check if this length formed with base of
      //* current valid substring is more than max
      //* so far

      if (st.length !== 0) {
        count = Math.max(count, i - st[st.length - 1]);
      }
      //* If stack is empty. push current index as
      //* base for next valid substring (if any)
      else {
        st.push(i);
      }
    }
  }
  return count;
}
