//! =====================================Links=================================================
//  * https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-lists/

// !====================================Method 1================================================

function reverse(node) {
  let curr = node;
  let prev = null;
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

function addTwoLists(first, second) {
  let h1 = reverse(first);
  let h2 = reverse(second);
  let carry = 0;
  const dummyNode = new Node(-1);
  let tail = dummyNode;

  while (h1 !== null || h2 !== null) {
    let x = h1 !== null ? h1.data : 0;
    let y = h2 !== null ? h2.data : 0;

    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    tail.next = new Node(sum % 10);
    tail = tail.next;

    if (h1 !== null) h1 = h1.next;
    if (h2 !== null) h2 = h2.next;
  }

  if (carry > 0) {
    tail.next = new Node(carry);
  }

  return reverse(dummyNode.next);
}
