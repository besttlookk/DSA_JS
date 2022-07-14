// !===========Remove K Digits

// !==============Links=========
//*https://practice.geeksforgeeks.org/problems/remove-k-digits/1/?page=3&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/build-lowest-number-by-removing-n-digits-from-a-given-number/

// !===============Method 1(Stack)=====================
// * we have to remove the deep
function removeKdigits(s, k) {
  const st = [];
  const n = s.length;
  const res = "";
  if (k >= n) return;

  for (let i = 0; i < n; i++) {
    while (st.length !== 0 && st[st.length - 1] > s[i] && k > 0) {
      st.pop();
      k--;
    }

    if (st.length !== 0 || s[i] !== 0) {
      st.push(s[i]);
    }
  }

  // * Special case: what is there was no deep . all the numbers are added.
  // * In that case remove "k" number from the stack
  while (st.length !== 0 && k > 0) {
    st.pop();
    k--;
  }

  if (st.length === 0) return 0;

  while (st.length !== 0) {
    res = st.pop() + res;
  }

  return res;
}
