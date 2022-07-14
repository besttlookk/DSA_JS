// !=========== Next Greater Element
// !===========Links ================
// * https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1/?page=1&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/next-greater-element/
// * https://practice.geeksforgeeks.org/problems/save-gotham1222/1/?page=3&category[]=Stack&sortBy=submissions#

// !============Method 1(Brute force) ==================
// * Time Complexity: O(N2)
// * Auxiliary Space: O(1)
/*
function nextLargerElement(arr, n) {
  let ans = Array(n);
  for (let i = 0; i < n; i++) {
    let next = -1;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        next = arr[j];
        break;
      }
    }
    ans[i] = next;
  }

  return ans;
}

*/

// !=============Method 2(Stack)==============
// * Push the first element to stack.
// * Pick rest of the elements one by one and follow the following steps in loop
// *  # Mark the current element as next
// *  # If stack is not empty, compare top element of stack with next.
// *  # If next is greater than the top element, Pop element from stack. next is the next greater element for the popped element.
// *  # Keep popping from the stack while the popped element is smaller than next. next becomes the next greater element for all such popped elements.
// * Finally, push the next in the stack.
// * After the loop in step 2 is over, pop all the elements from the stack and print -1 as the next element for them.

function nextLargerElement(arr, n) {
  let s = [];
  let ans = [];

  //* push the first element index to stack
  s.push(0);

  //* iterate for rest of the elements
  for (let i = 1; i < n; i++) {
    if (s.length === 0) {
      s.push(i);
      continue;
    }
    //* if stack is not empty, then pop an element from stack.
    //* If the popped element is smaller than next, then
    //*   a) print the pair
    //*    b) keep popping while elements are  smaller and stack is not empty

    while (s.length !== 0 && arr[s[s.length - 1]] < arr[i]) {
      ans[s.pop()] = arr[i];
    }

    //* push next to stack so that we can find  next greater for it

    s.push(i);
  }

  while (s.length !== 0) {
    ans[s.pop()] = -1;
  }
}

//! ===========================Method 3(Iterate from back) =============
// * iterate kerte time jab v hame koi esa element milega jo bada hoga top of the stack se..to saare chote elements ko stacks se hata denge
// *

function nextLargerElement(arr, n) {
  const st = [];
  const ans = [];
  for (let i = n - 1; i >= 0; i--) {
    while (st.length !== 0 && arr[st[st.length - 1]] <= arr[i]) {
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
