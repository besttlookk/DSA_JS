// !=======Next element with greater frequency

// !=========Links
// * https://practice.geeksforgeeks.org/problems/9656e96f6eaee49e67400fa2aed7833c8d9846b8/0/?page=3&category[]=Stack&sortBy=submissions

// !===============Method 1================

class Pair {
  constructor(value, freq) {
    (this.value = value), (this.freq = freq);
  }
}
function nextGreaterFreq(arr, n) {
  const map = new Map();
  const ans = [];
  const st = [];

  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    while (st.length !== 0 && map.get(st[st.length - 1]) <= map.get(arr[i])) {
      st.pop();
    }

    if (st.length === 0) {
      ans[i] = -1;
    } else {
      ans[i] = st[st.length - 1];
    }

    st.push(arr[i]);
  }

  return ans;
}

console.log(nextGreaterFreq([2, 1, 1, 3, 2, 1], 6));
