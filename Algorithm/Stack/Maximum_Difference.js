// !===========Maximum Difference=============

// !===============Links ===============
// * https://practice.geeksforgeeks.org/problems/maximum-difference-1587115620/1
function helper(i, arr, st, ans) {
  while (st.length !== 0 && st[st.length - 1] >= arr[i]) {
    st.pop();
  }

  if (st.length === 0) {
    ans[i] = 0;
    st.push(arr[i]);
  } else {
    ans[i] = st[st.length - 1];
    st.push(arr[i]);
  }
}
function prevSmaller(arr, n) {
  const st = []; //* arrange stack in increasing order
  const ans = [];

  for (let i = 0; i < n; i++) {
    helper(i, arr, st, ans);
  }

  return ans;
}

function nextSmaller(arr, n) {
  const st = [];
  const ans = [];
  for (let i = n - 1; i >= 0; i--) {
    helper(i, arr, st, ans);
  }

  return ans;
}
function findMaxDiff(arr, n) {
  const prevS = prevSmaller(arr, n);
  const nextS = nextSmaller(arr, n);

  let result = 0;

  for (let i = 0; i < n; i++) {
    const diff = Math.abs(prevS[i] - nextS[i]);
    result = Math.max(result, diff);
  }

  return result;
}

console.log(findMaxDiff([2, 4, 8, 7, 7, 9, 3], 7));
