// !=======Count the Reversals ============

// !=================Links ================
// * https://practice.geeksforgeeks.org/problems/count-the-reversals0401/0/?page=2&category[]=Stack&sortBy=submissions

// !==============Method 1(stack) =====================

function countRev(s) {
  const st = [];
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "}") {
      if (st.length === 0) {
        ans++;
        st.push("{");
      } else {
        // * ager stack me kuch hoga to pakka hai ki "{" hi hoga
        st.pop();
      }
    } else if (s[i] === "{") {
      st.push("{");
    }
  }

  while (st.length !== 0) {
    ans++;
    st.pop();
    if (st.length === 0) return -1;
    st.pop();
  }

  return ans;
}

console.log(countRev("{{}{{{}{{}}{{"));
