// !=========== Links ==============
// * https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/remove-duplicates-from-an-unsorted-linked-list/

// !=============METHOD 1 (Using two loops) ===================

// !====================Method 2 (Using sorting)=================
// * In general, Merge Sort is the best-suited sorting algorithm for sorting linked lists efficiently.

// !=================== Method 2(Using hashMap) =================
// * Expected Time Complexity: O(N)
// * Expected Auxiliary Space: O(N)
function removeDuplicates(head) {
  let set = new Set();

  let current = head;
  let prev = null;

  while (current !== null && current.next !== null) {
    if (set.has(current.data)) {
      prev.next = current.next;
    } else {
      set.add(current.data);
      prev = current;
    }
    current = current.next;
  }

  if (set.has(prev.next.data)) prev.next = null;

  return head;
}
