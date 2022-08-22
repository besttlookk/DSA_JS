// !=========================== Insertion Sort for Singly Linked List ========================
// * first check: "Insert in a Sorted List".

// * Below is a simple insertion sort algorithm for a linked list.

// *    1) Create an empty sorted (or result) list
// *    2) Traverse the given list, do following for every node.
// *      ......a) Insert current node in sorted way in sorted or result list.
// *    3) Change head of given linked list to head of sorted (or result) list.

// !=============================Links ==================================
// * https://www.geeksforgeeks.org/insertion-sort-for-singly-linked-list/
// * https://practice.geeksforgeeks.org/problems/insertion-sort-for-singly-linked-list/1

// !=============================Method 1=================================
// * Thus Time Complexity: O(n)*O(n)=O(n^2)
function insertionSort(node) {
  let sorted = null;
  let curr = node;

  while (curr !== null) {
    // Store next for next iteration
    let next = current.next;

    // insert current in sorted linked list
    sorted = sortedInsert(sorted, curr);
    // Update current
    curr = next;
  }

  // Update head_ref to point to sorted linked list
  node = sorted;
  return node;
}

function sortedInsert(sorted, newNode) {
  if (sorted === null || sorted.data >= newNode.data) {
    newNode.next = sorted;
    sorted = newNode;
  } else {
    let curr = sorted;

    while (curr.next !== null && curr.next.data < newNode.data) {
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;
  }

  return sorted;
}
