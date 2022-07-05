// !=================Max rectangle ================

// !-===========Links
// * https://practice.geeksforgeeks.org/problems/max-rectangle/0/?page=1&category[]=Stack&sortBy=submissions#

// !=================Method 1 ====================
function prevMin(arr, n) {
  const st = []; //* increasing order
  const ans = [];

  for (let i = 0; i < n; i++) {
    while (st.length !== 0 && arr[st[st.length - 1]] >= arr[i]) st.pop();

    if (st.length === 0) {
      ans[i] = -1;
      st.push(i);
    } else {
      ans[i] = st[st.length - 1];
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

function getMaxHistArea(hist, n) {
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
function maxArea(matrix, n, m) {
  const currentRow = matrix[0];
  let maxAns = getMaxHistArea(currentRow, m);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 1) {
        currentRow[j] += 1;
      } else {
        currentRow[j] = 0;
      }
    }

    const currAns = getMaxHistArea(currentRow, m);
    maxAns = Math.max(maxAns, currAns);
  }

  return maxAns;
}
