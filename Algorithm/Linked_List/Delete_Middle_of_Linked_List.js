// !===========Links ==========
// * https://practice.geeksforgeeks.org/problems/delete-middle-of-linked-list/0/?page=1&category[]=Linked%20List&sortBy=submissions

// !==============Method 1 =============
function deleteMid(node) {
  if (!node) return null;
  let slow = node;
  let fast = node;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    if (fast.next.next !== null) {
      fast = fast.next.next;
    } else {
      fast = fast.next;
    }
    prev = slow;
    slow = slow.next;
  }

  prev.next = slow.next;
  slow = prev.next;
  return node;
}
