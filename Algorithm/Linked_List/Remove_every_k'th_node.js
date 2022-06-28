// !===========Links
// * https://practice.geeksforgeeks.org/problems/remove-every-kth-node/0/?page=2&category[]=Linked%20List&sortBy=submissions

// !=====Method 1
// * The idea is to traverse the list from the beginning and keep track of nodes visited after the last deletion.
// * Whenever count becomes k, delete the current node and reset the count as 0.

function deleteK(head, k) {
  if (!head) return null;
  if (k === 1) return null;

  let count = 1;
  let current = head;
  let prev = null;

  while (current) {
    if (count === k) {
      prev.next = current.next;
      current = null;
      current = prev.next;
      count = 1;
    } else {
      prev = current;
      current = current.next;
      count++;
    }
  }

  return head;
}
