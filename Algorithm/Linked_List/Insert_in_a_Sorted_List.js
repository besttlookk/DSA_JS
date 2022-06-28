// !============Links =
// * https://practice.geeksforgeeks.org/problems/insert-in-a-sorted-list/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/given-a-linked-list-which-is-sorted-how-will-you-insert-in-sorted-way/

// !============Method 1 ===================
// * 1) If Linked list is empty then make the node as  head and return it.
// * 2) If the value of the node to be inserted is smaller  than the value of the head node, then insert the node  at the start and make it head.

function sortedInsert(node, data) {
  let current;
  let newNode = new Node(data);

  // * 1) && 2)
  if (node === null || node.data >= data) {
    newNode.next = node;
    node = newNode;
  } else {
    current = node;

    while (current.next !== null && current.next.data < data)
      current = current.next;

    newNode.next = current.next;
    current.next = newNode;
  }
  return node;
}
