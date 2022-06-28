// !=========================== Links ========
// * https://practice.geeksforgeeks.org/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/0/?page=2&category[]=Linked%20List&sortBy=submissions

// !====================Method 1===================
function linkdelete(head, M, N) {
  let current = head;
  let count;
  let temp;

  //* The main loop that traverses through the whole list
  while (current !== null) {
    //* skip M nodes
    for (count = 1; count < M && current != null; count++)
      current = current.next;

    //* If we reached end of list, then return
    if (current == null) return head;

    // Start from next node and delete N nodes
    temp = current.next;
    for (count = 1; count <= N && temp != null; count++) {
      temp = temp.next;
    }

    //* Link the previous list with remaining nodes
    current.next = temp;

    //* Set current pointer for next iteration
    current = temp;
  }

  return head;
}
