// !=========== Valid Substring  ================

// !===================Method 1(Using stack)

function findMaxLen(s) {
  let count = 0;
  // let max = Number.MIN_VALUE
  const st = [];

  for (let i = 0; i < s.length; i++) {
    //* If opening bracket, push index of it
    if (s[i] === "(") st.push(i);
    else {
      //* Pop the previous opening bracket's index
      if (st.length !== 0) st.pop();

      //* Check if this length formed with base of
      //* current valid substring is more than max so far
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
