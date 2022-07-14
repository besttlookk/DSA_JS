// !===========================Links =======================
// * https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/reverse-a-list-in-groups-of-given-size/

// !=================Method 1====================
// * Reverse the first sub-list of size k

function reverse(node, k) {
  if (node === null) return null;

  let curr = node;
  let next = null;
  let prev = null;
  let count = 0;

  while (count < k && curr !== null) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  // * head is still pointing to the first ele which is how the last ele
  // * and next now points to the (kth + 1) ele. call for revsrse again and make the head.next

  if (next !== null) {
    node.next = reverse(next, k);
  }

  // prev is now head of input list
  return prev;
}
