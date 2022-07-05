// !=========Immediate Smaller Element ==========

// !=============Links =============
// * https://practice.geeksforgeeks.org/problems/immediate-smaller-element1142/1/?page=2&category[]=Stack&sortBy=submissions

// !===================Method 1 (stack) ================
/*
function nextSmaller(arr, n) {
  const st = [];
  const ans = [];
  st.push(0);

  for (let i = 1; i < n; i++) {
    if (st.length === 0) {
      st.push(i);
      continue;
    }

    while (st.length !== 0 && arr[st[st.length - 1]] > arr[i]) {
      ans[st.pop()] = arr[i];
    }

    st.push(i);
  }

  while (st.length !== 0) {
    ans[st.pop()] = -1;
  }

  return ans;
}
*/

// !================Method 2(Iterate from back)
function nextSmaller(arr, n) {
  const st = [];
  const ans = [];
  for (let i = n - 1; i >= 0; i--) {
    while (st.length !== 0 && arr[st[st.length - 1]] >= arr[i]) {
      st.pop(); //* jab tak stack me chota element na mle element hatate jao
    }

    if (st.length === 0) {
      ans[i] = -1;
      st.push(arr[i]);
    } else {
      ans[i] = st[st.length - 1];
      st.push(arr[i]);
    }
  }

  return ans;
}

console.log(nextSmaller([3, 10, 5, 1, 15, 10, 7, 6], 8));
