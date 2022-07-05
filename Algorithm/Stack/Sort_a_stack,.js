// !===========Sort a stack ============
// * Expected Time Complexity: O(N*N)
// * Expected Auxilliary Space: O(N) recursive.

// * Given a stack, the task is to sort it such that the top of the stack has the greatest element.

// !================Links ================
// * https://practice.geeksforgeeks.org/problems/sort-a-stack/1/?page=1&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/sort-a-stack-using-recursion/

// !=============Method 1 (Using recursion)==================

function sort(st) {
  if (st.length > 0) {
    //* Hold all items in Function Call Stack until we reach end of the stack
    let x = st.pop();
    sort(st);

    //* Insert all the items held in Function Call Stack one by one from the bottom
    //* to top. Every item is inserted at the bottom
    insertAtBottom(st, x);
  }
}

function insertAtBottom(st, x) {
  if (st.length == 0) st.push(x);
  else {
    let a = st.pop();
    insertAtBottom(x);
    st.push(a);
  }
}

Stack.prototype.sort = function () {
  if (this.stack.length > 0) {
    let x = this.stack.pop();
    this.sort();

    this.insertAtCorrectPosition(x);
  }
};

Stack.prototype.insertAtCorrectPosition = function (x) {
  if (this.stack.length === 0 || this.stack[this.stack.length - 1] < x) {
    this.stack.push(x);
  } else {
    let temp = this.stack.pop();
    this.insertAtCorrectPosition(x);
    this.stack.push(temp);
  }
};
