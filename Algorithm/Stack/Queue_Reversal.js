// !============Queue Reversal===============

// !============Links ==============
// * https://practice.geeksforgeeks.org/problems/queue-reversal/1/?page=2&category[]=Stack&sortBy=submissions

// !===============Method 1(Using stack)==================

function rev(q) {
  const st = [];

  while (!q.empty()) {
    st.push(q.pop());
  }

  while (st.length !== 0) {
    q.push(st.pop());
  }

  return q;
}
