// !======== Print reverse of a Linked List without actually reversing
// * Time Complexity: O(n)
// *Auxiliary Space: O(n) for stack space since using recursion

function printReverse(head) {
  if (head === null) return null;

  printReverse(head.next);

  console.log(head.data);
}

// !==========================Method 2 (stack)
// * We can also perform the same action using a stack using iterative method.

function printReverse(head) {
  const st = [];
  const curr = head;
  let str = "";

  while (curr) {
    st.push(curr.data);
    curr = curr.next;
  }

  while (st.length !== 0) {
    str += st.pop() + " ";
  }
}
