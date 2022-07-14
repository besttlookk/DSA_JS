// !===========Maximum of minimum for every window size ===============

// !==============Links=============
// * https://practice.geeksforgeeks.org/problems/maximum-of-minimum-for-every-window-size3453/0/?page=2&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/find-the-maximum-of-minimums-for-every-window-size-in-a-given-array/

// !===============Method 1(Brute force) =====================
// * generate all the windows possible of a particular length say ‘L’ and find the minimum element in all such windows
// *  Then find the maximum of all such elements and store it.
// * Now the length of window is 1<=L<=N.
// * So we have to generate all possible windows of size ‘1’ to ‘N’ and for generating each such window we have to mark the end-points of that window.
// *  So for that, we have to use a nested loop for fixing the starting and end point of the window respectively.
// * Therefore there will be a use of triple-nested loop in brute-force approach mainly for fixing the length of the window, starting point and end point.

// * Time Complexity: O(n3).
// * Auxiliary Space: O(1)
/*
function maxOfMin(arr, n) {
  const ans = [];
  //* Consider all windows of different
  //* sizes starting from size

  for (k = 1; k <= n; k++) {
    //* Initialize max of min for current
    //* window size k
    var maxOfMin = Number.MIN_VALUE;

    //* Traverse through all windows of current size k
    for (i = 0; i <= n - k; i++) {
      //* maximum index jaha tak i jaha sakta depend kerna window size per
      // Find minimum of current window
      var min = arr[i];
      for (j = 1; j < k; j++) {
        min = Math.min(min, arr[i + j]); //* i + j is liye likh rahe kyuki j is w,r,t i
      }

      // Update maxOfMin if required
      maxOfMin = Math.max(min, maxOfMin);
    }

    ans[k - 1] = maxOfMin;
  }

  return ans;
}
*/

// !=====================Method 2 ========================
// * We can solve this problem in O(n) time. The idea is to use extra space.
// * Time Complexity: O(n).
// * Auxiliary Space : O(n).

function getPrevMin(arr, n) {
  const st = [];
  const res = [];

  for (let i = 0; i < n; i++) {
    while (st.length !== 0 && arr[st[st.length - 1]] >= arr[i]) {
      st.pop();
    }

    if (st.length === 0) {
      res[i] = -1;
      st.push(i);
    } else {
      res[i] = st[st.length - 1];
      st.push(i);
    }
  }

  return res;
}

function getNextMin(arr, n) {
  const st = [];
  const res = [];

  for (let i = n - 1; i >= 0; i--) {
    while (st.length !== 0 && arr[st[st.length - 1]] >= arr[i]) {
      st.pop();
    }

    if (st.length === 0) {
      res[i] = n;
      st.push(i);
    } else {
      res[i] = st[st.length - 1];
      st.push(i);
    }
  }

  return res;
}
function maxOfMin(arr, n) {
  const ans = new Array(n + 1).fill(0);
  const prevMin = getPrevMin(arr, n);
  const nextMin = getNextMin(arr, n);

  for (let i = 0; i < n; i++) {
    const len = nextMin[i] - prevMin[i] - 1;

    ans[len] = Math.max(ans[len], arr[i]);
  }

  // Some entries in ans[] may not be
  // filled yet. Fill them by taking
  // values from right side of ans[]

  for (let i = n - 1; i >= 1; i--) {
    ans[i] = Math.max(ans[i], ans[i + 1]);
  }

  const res = [];

  // * discard the zero index value
  for (let i = 1; i <= n; i++) {
    res.push(ans[i]);
  }

  return res;
}
console.log(maxOfMin([10, 20, 30, 50, 10, 70, 30], 7));
