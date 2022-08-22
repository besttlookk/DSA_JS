// !=================== Find pairs with given sum in doubly linked list
// * Given a sorted doubly linked list of positive distinct elements, the task is to find pairs in a doubly-linked list whose sum is equal to given value x, without using any extra space?

// !==============================Links =================================
// * https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/

// !===================================Method 1(Two pointer)==================================
// * Time complexity : O(n)
// * Auxiliary space : O(1)
function pairSum(head, x) {
  // Set two pointers, first
  // to the beginning of DLL
  // and second to the end of DLL.
  let first = head;
  let second = head;
  let count = 0;

  while (second.next != null) second = second.next;

  //* To track if we find a pair or not
  let found = false;

  // The loop terminates when
  // they cross each other (second.next
  // == first), or they become same
  // (first == second)
  while (first != second && second.next != first) {
    // pair found
    if (first.data + second.data == x) {
      found = true;
      count++;

      //* move first in forward direction
      first = first.next;

      //* move second in backward direction
      second = second.prev;
    } else {
      if (first.data + second.data < x) first = first.next;
      else second = second.prev;
    }
  }

  return count;
}

// !===============================Method 2(Hashing)==============================
function pairSum(head, x) {
  const set = new Set();
  const ans = [];

  let curr = head;
  while (curr !== null) {
    if (set.has(x - curr.data)) {
      ans.push([x - curr.data, curr.data]);
    }
    curr = curr.next;
  }
}
