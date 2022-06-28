// !=========== Links ==============
// * https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1/?page=1&category[]=Linked%20List&sortBy=submissions

// !=============METHOD 1 (Using two loops)

// !=================== Method 2(Using hashMap) =================
// * Expected Time Complexity: O(N)
// * Expected Auxiliary Space: O(N)
function removeDuplicates(head) {
  let set = new Set();

  let current = head.next;
  let prev = head;
  set.add(head.data);

  while (current !== null) {
    if (set.has(current.data)) {
      current = current.next;
      prev.next = current;
    } else {
      set.add(current.data);
      prev = current;
      current = current.next;
    }
  }

  return head;
}
