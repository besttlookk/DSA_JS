// !=======Maximum Rectangular Area in a Histogram ===========

// !================Links ==========
// * https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1/?page=1&category[]=Stack&sortBy=submissions

// !=================Method 1(Brute force) ====================
/*
function getMaxArea(hist, n) {
  let max = 0;

  for (let i = 0; i < n; i++) {
    let left = i;
    let right = i;

    while (left <= right) {
      while (left >= 0 && hist[left] <= hist[i]) left -= 1;
      while (right < n && hist[right] <= hist[i]) right += 1;

      const area = (right - left - 1) * hist[i];
      console.log({ area });
      max = Math.max(max, area);
    }
  }

  return area;
}
*/

// !====================Method 2 ======================

function getPrevMin(arr, n) {
  const st = [];
  const ans = [];

  for (let i = 0; i < n; i++) {
    while (st.length !== 0 && arr[st[st.length - 1]] >= arr[i]) {
      st.pop();
    }

    if (st.length === 0) {
      ans.push(-1);
      st.push(i);
    } else {
      ans.push(st[st.length - 1]);
      st.push(i);
    }
  }
  return ans;
}

function getNextMin(arr, n) {
  const st = [];
  const ans = [];

  for (let i = n - 1; i >= 0; i--) {
    while (st.length !== 0 && arr[st[st.length - 1]] >= arr[i]) {
      st.pop();
    }

    if (st.length === 0) {
      ans[i] = n;
      st.push(i);
    } else {
      ans[i] = st[st.length - 1];
      st.push(i);
    }
  }
  return ans;
}

function getMaxArea(hist, n) {
  let maxArea = 0;
  const prevMin = getPrevMin(hist, n);

  const nextMin = getNextMin(hist, n);

  console.log({ prevMin });
  console.log(nextMin);
  for (let i = 0; i < n; i++) {
    const curr = (nextMin[i] - prevMin[i] - 1) * hist[i];
    maxArea = Math.max(maxArea, curr);
  }

  return maxArea;
}

console.log(getMaxArea([4, 2, 1, 5, 6, 3, 2, 4, 2], 9));
