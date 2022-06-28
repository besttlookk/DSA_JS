// !========== link
// * https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1/?page=1&category[]=Linked%20List&sortBy=submissions

function reverseList(head) {
  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = current.next;
    currentNode.next = prevNode;

    // * before going to next iteration set the prev node
    prevNode = currentNode;
    currentNode = nextNode; //* now move the current node forward
  }

  return prevNode; //* it is new head
}
