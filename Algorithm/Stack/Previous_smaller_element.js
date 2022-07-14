// !=========Links
// * https://practice.geeksforgeeks.org/problems/smallest-number-on-left3403/0/?page=3&category[]=Stack&sortBy=submissions#

// !========== Method 1 (Brute force) ================
// * TC: O(n * n)
/*
function prevSmaller(arr, n) {
  const ans = [];

  for (let i = 0; i < n; i++) {
    let prev = -1;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        prev = arr[j];
        break;
      }
    }
    ans[i] = prev;
  }

  return ans;
}

*/

// !=======================Method 2(stack ) =================

function prevSmaller(arr, n) {
  const st = []; //* arrange stack in increasing order
  const ans = [];

  for (let i = 0; i < n; i++) {
    while (st.length !== 0 && st[st.length - 1] >= arr[i]) {
      st.pop();
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

console.log(prevSmaller([4, 10, 5, 8, 20, 15, 3, 12], 8));

// ans : [-1, 4,4,5,8,8,-1,3]
