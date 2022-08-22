// !=====================================Quick Sort on Linked List =============================
// * changes pointers rather than swapping data.

// !=====================Links ===============
// *https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1
// * https://www.geeksforgeeks.org/quicksort-on-singly-linked-list/

// !=============solution
function quickSort(head) {
  if (head == null || head.next === null) return head;

  let curr = head;

  while (curr.next !== null) {
    curr = curr.next;
  }

  sort(head, curr);
  return head;
}

function sort(start, end) {
  if (start === end) return;

  let pi = partition(start, end);
  sort(start, pi);
  sort(pi.next, end);
}

function partition(start, end) {
  let pivot = end.data;
  let curr = start;
  let prev = start;

  // iterate till one before the end,
  // no need to iterate till the end
  // because end is pivot

  while (start !== end) {
    if (start.data < pivot) {
      prev = curr;
      let temp = curr.data;
      curr.data = start.data;
      start.data = temp;
      curr = curr.next;
    }

    start = start.next;
  }

  let temp = curr.data;
  curr.data = pivot;
  end.data = temp;
  return prev;
}
