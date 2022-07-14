// !================Geeky Buildings
// * i < j < k && arr[i] < arr[k] < arr[j]

// !===============Method 1 (Brute force):INCOMPLETE=============
/*
function recreationalSpot(arr, n) {
  for (let j = 0; j < n; j++) {
    let first = -1;
    let third = -1;
    let second = arr[j];

    for (let i = 0; i < j; i++) {
      // if (first === -1 && arr[i] < second) first = arr[i];
      if (arr[i] < second) first = Math.min(first, arr[i]);
    }

    for (let k = j + 1; k < n; k++) {
      if (third === -1 && arr[k] < second && arr[k] > first) third = arr[k];
    }

    console.log(first, second, third);

    if (first !== -1 && third !== -1) {
      return true;
    }
  }

  return false;
}
*/
// !===================Method 2===============
// ! WRONG
/*
function helper(i, arr, st, ans) {
  while (st.length !== 0 && st[st.length - 1] >= arr[i]) st.pop();

  if (st.length === 0) {
    ans[i] = -1;
    st.push(arr[i]);
  } else {
    ans[i] = st[st.length - 1];
    st.push(arr[i]);
  }
}

function getPrevMin(arr, n) {
  const st = [];
  const ans = [];

  for (let i = 0; i < n; i++) {
    helper(i, arr, st, ans);
  }

  return ans;
}

function getNextMin(arr, n) {
  const st = [];
  const ans = [];

  for (let i = n - 1; i >= 0; i--) {
    helper(i, arr, st, ans);
  }

  return ans;
}
function recreationalSpot(arr, n) {
  const prevMin = getPrevMin(arr, n);
  const nextMin = getNextMin(arr, n);

  for (let i = 0; i < n; i++) {
    if (prevMin[i] === -1 || nextMin[i] === -1) continue;

    if (prevMin[i] < nextMin[i]) return true;
  }

  return false;
}

*/

/*
function getPrevMin(arr, n) {
  const ans = [];
  ans[0] = arr[0];

  //*Find left min of each element which will be
  //* our building 1

  for (let i = 1; i < n; i++) {
    ans[i] = Math.min(arr[i], ans[i - 1]);
  }

  return ans;
}

//* Stack top will be our 3rd building
//* arr[i] will be 2nd building
function recreationalSpot(arr, n) {
  const st = [];
  const prevMin = getPrevMin(arr, n);
  console.log({ prevMin });

  for (let i = n - 1; i >= 0; i--) {
    //* while first building is greater then 3rd building pop 3rd building
    while (st.length !== 0 && st[st.length - 1] <= prevMin[i]) st.pop();

    // * if first is less then 2nd and 2nd is greater 3rd
    if (st.length !== 0 && prevMin[i] < arr[i] && arr[i] > st[st.length - 1])
      return true;

    //* push 2nd building
    st.push(arr[i]);
  }

  return false;
}
*/
// !=================+Method 3 =================
function recreationalSpot(arr, n) {
  const st = [];
  let k = Number.MIN_VALUE;

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] < k) return true;
    else {
      while (st.length !== 0 && arr[i] > st[st.length - 1]) {
        k = st.pop();
      }

      st.push(arr[i]);
    }
  }

  return false;
}
console.log(recreationalSpot([1, 2, 3, 4, 2], 5));
