// !=======================Immediate Smaller Element =============================

// !================Links =============
// * https://practice.geeksforgeeks.org/problems/immediate-smaller-element1142/1/?page=2&category[]=Stack&sortBy=submissions#

// !================+Method 1(Brute force) ===============
/*
function immediateSmaller(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      arr[i] = arr[i + 1];
    } else {
      arr[i] = -1;
    }
  }

  arr[n - 1] = -1;

  return arr;
}
*/

// !==============Method 2(Stack) ============
// * The idea is to traverse the array and store the just previous element of the current element in a data structure, say Stack, and then compare its top with the next element

function immediateSmaller(arr, n) {
  const st = [];
  st.push(0);

  for (let i = 1; i < n; i++) {
    if (st.length === 0) {
      st.push(i);
      continue;
    }

    if (arr[st[st.length - 1]] > arr[i]) {
      arr[st.pop()] = arr[i];
    }

    st.push(i);
  }

  while (st.length !== 0) {
    arr[st.pop()] = -1;
  }

  return arr;
}

console.log(immediateSmaller([4, 2, 1, 5, 3], 5));
