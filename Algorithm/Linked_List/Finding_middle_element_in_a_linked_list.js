// !======Links
// * https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/

// !==============Method 1(Two pointer)
function getMiddle(node) {
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

  return slow.data;
}
