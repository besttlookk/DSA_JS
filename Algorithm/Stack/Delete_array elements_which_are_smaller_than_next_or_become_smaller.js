// !===Delete array elements which are smaller than next or become smaller

// !==Links ===========
// * https://practice.geeksforgeeks.org/problems/delete-array-elements-which-are-smaller-than-next-or-become-smaller3115/0/?page=4&category[]=Stack&sortBy=submissions

// !===============Method 1===========
function deleteElement(arr, n, k) {
  const st = [];

  for (let i = 0; i < n; i++) {
    if (st.length === 0 || arr[i] <= st[st.length - 1]) st.push(arr[i]);
    else {
      while (k > 0 && st.length > 0 && st[st.length - 1] < arr[i]) {
        k--;
        st.pop();
      }
      st.push(arr[i]);
    }
  }

  return st;
}

console.log(deleteElement([12, 7, 11, 5, 20, 15, 15, 7, 10], 9, 5));
