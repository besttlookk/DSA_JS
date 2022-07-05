// !===========Reverse a string using Stack =============

// !==========Links ================
// * https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1/?page=1&category[]=Stack&sortBy=submissions
// *

// !================Method 1 ===========================
function reverse(S) {
  const st = [];

  for (let i = 0; i < S.length; i++) {
    st.push(S[i]);
  }

  let str = "";

  while (st.length !== 0) {
    str += st.pop();
  }

  return str;
}

console.log(reverse("GeeksforGeeks"));
