// !============ Links ==========
// * https://practice.geeksforgeeks.org/problems/insert-in-middle-of-linked-list/0/?page=1&category[]=Linked%20List&sortBy=submissions

// !========= Method 1 =============

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
function insertInMiddle(head, x) {
  let middleNode = findMiddle(head);
  const newNode = new Node(x);
  newNode.next = middleNode.next;
  middleNode.next = newNode;

  return head;
}
