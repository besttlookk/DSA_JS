// !======== Reverse a Stack
// * You are given a stack St. You have to reverse the stack using recursion.

// *Expected Time Complexity: O(N)
// * Expected Auxiliary Space: O(N)

// !===================Links ===============
// * https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/
// * https://www.codingninjas.com/blog/2021/08/24/reversing-a-stack/
// * https://practice.geeksforgeeks.org/problems/reverse-a-stack/1/?page=3&category[]=Stack&sortBy=submissions

// !========Method 1(Using another stack)=====================
// * Time Complexity: O(N)
// *  The loop runs for n times and the time complexity for all the stack operations is O(1). Therefore the overall time complexity is O(N
// * Space Complexity: O(N)
//* bcoz extra stack is used
/*
function reverseStack(s) {
  const rs = new Stack();
  const n = s.size();

  for (let i = 0; i < n; i++) {
    const temp = s.peek();
    s.pop();
    rs.push(temp);
  }

  return rs;
}
*/

// !===================Method 2 (using Two Stacks)=================
// * This is similar to the above approach; the difference is that in this approach, instead of returning the extra stack, we directly use the original stack after transferring elements.

// * Time Complexity: O(N)
// * The loop runs for 3n times and the time complexity for all the stack operations is O(1). Therefore the overall time complexity is O(N)

// * Space Complexity: O(N)

/*
function transfer(s1, s2) {
  while (!s1.empty()) {
    const temp = s1.peek();
    s1.pop();
    s2.push(temp);
  }
}
function reverseStack(s) {
  const s1 = new Stack();
  const s2 = new Stack();

  transfer(s, s1);

  transfer(s1, s2);

  transfer(s2, s);

  return s;
}

*/
// !==============Method 3(Using recursion) =================
// * if the question specifies that no other data structure can be used to solve the problem, recursion has to be used.
// * In this approach, we pop the top element from the given stack and recursively call another instance of the same function
// * When this child function returns to the parent function, append the popped element to the bottom of the stack.
// * For this, we would be using two recursive functions: reverseStack() and insertAtBottom().

function reverse(st) {
  if (st.length > 0) {
    //* Hold all items in Function Call Stack until we reach end of the stack
    let x = st.pop();
    reverse(st);

    //* Insert all the items held in Function Call Stack one by one from the bottom
    //* to top. Every item is inserted at the bottom
    insertAtBottom(st, x);
  }
}

function insertAtBottom(st, x) {
  if (st.length == 0) st.push(x);
  else {
    // All items are held in Function
    // Call Stack until we reach end
    // of the stack. When the stack becomes
    // empty, the st.size() becomes 0, the
    // above if part is executed and
    // the item is inserted at the bottom
    let a = st.pop();
    insertAtBottom(x);

    // push allthe items held
    // in Function Call Stack
    // once the item is inserted
    // at the bottom
    st.push(a);
  }
}
