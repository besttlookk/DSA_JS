// !============= Links
// * https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1/?page=1&category[]=Linked%20List&sortBy=submissions

// !=========Method 1(By reversing the list)
// * This method takes O(n) time and O(1) extra space.
// * 1) Get the middle of the linked list.
// * Reverse the second half of the linked list.
// * 3) Check if the first half and second half are identical.
// * 4) Construct the original linked list by reversing the second half again and attaching it back to the first half
function reverseList(head) {
  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;

    // * before going to next iteration set the prev node
    prevNode = currentNode;
    currentNode = nextNode; //* now move the current node forward
  }

  return prevNode; //* it is new head
}

function middle(node) {
  let slow = node;
  let fast = node;

  while (fast !== null && fast.next !== null) {
    if (fast.next.next !== null) {
      fast = fast.next.next;
    } else {
      fast = fast.next;
    }

    slow = slow.next;
  }

  return slow;
}

function isPalindrome(head) {
  if (!head) return true;
  let middleNode = middle(head);
  let last = reverseList(middleNode);
  let current = head;
  while (last !== null) {
    if (last.data !== current.data) return false;
    last = last.next;
    current = current.next;
  }
  return true;
}
