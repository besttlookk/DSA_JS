// !======Links
// * https://practice.geeksforgeeks.org/problems/rotate-a-linked-list/1/?page=1&category[]=Linked%20List&sortBy=submissions
//* https://www.geeksforgeeks.org/rotate-a-linked-list/

// !===========Method 1 ) ==================
// * To rotate the linked list, we need to change the next pointer of kth node to NULL, the next pointer of the last node should point to previous head node, and finally, change the head to (k+1)th node. So we need to get hold of three nodes: kth node, (k+1)th node, and last node.

// * Traverse the list from the beginning and stop at kth node. Store pointer to kth node.
// * We can get (k+1)th node using kthNode->next. Keep traversing till the end and store a pointer to the last node also. Finally, change pointers as stated above.

// * Time Complexity: O(n) where n is the number of nodes in Linked List. The code traverses the linked list only once.

//*  Auxiliary Space : O(1)

/*
function rotate(head, k) {
  if (k === 0) return head;

  let current = head;
  let count = 1;

  // * Traverse the list from the beginning and stop at kth node
  while (count < k && current !== null) {
    current = current.next;
    count++;
  }

  //* If current is NULL, k is greater than or equal to count
  //* of nodes in linked list. Don't change the list in this case
  if (current === null) return head;

  let kthNode = current;

  while (current.next !== null) current = current.next;

  current.next = head;

  head = kthNode.next;

  // change next of kth node to null
  kthNode.next = null;

  return head;
}

*/

// !==============Method 2 ====================
// * To rotate a linked list by k, we can first make the linked list circular and then moving k-1 steps forward from head node, making (k-1)th node’s next to null and make kth node as head.

function rotate(head, k) {
  if (k === 0) return head;

  var current = head;

  //* Traverse till the end.
  while (current.next != null) current = current.next;

  // * Making circular
  current.next = head;

  current = head;

  for (i = 0; i < k - 1; i++) current = current.next;

  head = current.next;
  current.next = null;

  return head;
}
