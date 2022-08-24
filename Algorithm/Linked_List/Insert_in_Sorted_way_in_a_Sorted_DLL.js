// !===================Insert in Sorted way in a Sorted DLL=============

// !==========================Links=============================
// *https://practice.geeksforgeeks.org/problems/insert-in-sorted-way-in-a-sorted-dll/1?page=2&category[]=Linked%20List&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

// !==========================Solution================
function sortedInsert(head, x) {
  let newNode = new Node(x);
  if (head == null) return newNode;

  if (head.data > x) {
    newNode.next = head;
    head.prev = newNode;
    return newNode;
  }

  let curr = head;
  while (curr.next != null && curr.next.data < x) {
    curr = curr.next;
  }

  newNode.next = curr.next;

  newNode.prev = curr;

  if (curr.next != null) {
    curr.next.prev = newNode;
  }

  curr.next = newNode;

  return head;
}
