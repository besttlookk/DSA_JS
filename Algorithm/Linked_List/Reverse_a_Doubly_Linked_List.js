// * We can also swap data instead of pointers to reverse the Doubly Linked List.
// * Method used for reversing array can be used to swap data. Swapping data can be costly compared to pointers if the size of the data item(s) is more.

// !===========Links =====
// * https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/reverse-a-doubly-linked-list/

// !===========================Method 1(Iterative) ================
// * Time Complexity: O(N), where N denotes the number of nodes in the doubly linked list.
// * Auxiliary Space: O(1)
function reverseDLL(head) {
  let current = head;
  let nextNode = null;
  let prevNode = null;

  while (current) {
    nextNode = current.next;
    current.next = prevNode;
    current.prev = nextNode;

    prevNode = current;
    current = nextNode;
  }

  return prevNode;
}

// !=============================Methd 2(stack)===========================
function reverseDLL(head) {
  if (head == null || head.next == null) return head;

  const st = [];
  let curr = head;

  while (curr != null) {
    st.push(curr);
    curr = curr.next;
  }

  head = st.pop();
  curr = head;
  prev = null;
  head.prev = prev;

  while (st.length) {
    let temp = st.pop();
    curr.next = temp;
    temp.prev = curr;
    curr = curr.next;
  }

  curr.next = null;
}
