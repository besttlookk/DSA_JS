// !================Stock span problem
// * Expected Time Complexity: O(N).
// * Expected Auxiliary Space: O(N).

// !===============================Links ========================
// * https://practice.geeksforgeeks.org/problems/stock-span-problem-1587115621/1/?page=1&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/the-stock-span-problem/

// !=================Method 1 (brute force) =============
// * The Time Complexity of the above method is O(n^2)
/*
function calculateSpan(price, n) {
  let span = Array(n);
  span[0] = 1;

  for (let i = 1; i < n; i++) {
    let j = i - 1;

    while (price[j] <= price[i]) {
      j--;
    }

    span[i] = i - j;
  }

  return span;
}

*/

// !===================Method 2(Using stack) ========
function calculateSpan(price, n) {
  let st = []; //* it will store day number
  let span = [];
  span[0] = 1;
  st.push(0);

  for (let i = 1; i < n; i++) {
    //* Pop elements from stack while stack is not
    //* empty and top of stack is smaller than price[i]

    while (st.length !== 0 && price[i] >= price[st[st.length - 1]]) {
      //* jab tak current value bara hai .remove item from stack
      st.pop();
    }

    if (st.length === 0) {
      span[i] = i + 1; //* saare number kam hai current number se
    } else {
      span[i] = i - st[st.length - 1];
    }

    st.push(i);
  }

  return span;
}
