// !============Reversing the equation

// !=============Links
// * https://practice.geeksforgeeks.org/problems/reversing-the-equation2205/0/?page=3&category[]=Stack&sortBy=submissions

function reverseEqn(s) {
  const st = [];
  let res = "";

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "+" || c === "-" || c === "*" || c === "/") {
      st.push(c);
    } else {
      if (st[st.length - 1] >= 0 || st[st.length - 1] <= 9) {
        const temp = st.pop() + c;
        st.push(temp);
      } else {
        st.push(c);
      }
    }
  }

  while (st.length !== 0) {
    res += st.pop();
  }

  return res;
}

console.log(reverseEqn("20-3+5*2"));
