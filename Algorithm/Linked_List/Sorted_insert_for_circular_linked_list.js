// !============== Links =========
// * https://practice.geeksforgeeks.org/problems/sorted-insert-for-circular-linked-list/1/?page=2&category[]=Linked%20List&sortBy=submissions

// !===================Method 1============
function sortedInsert(head, data) {
  const newNode = new Node(data);

  if (!head || head.data >= data) {
    newNode.next = head;
    head = newNode;
  } else {
    let current = head;

    while (current.next !== head && current.next.data <= data) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  return head;
}
