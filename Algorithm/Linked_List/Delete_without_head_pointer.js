// !============== Links =========
// * https://practice.geeksforgeeks.org/problems/delete-without-head-pointer/1/?page=1&category[]=Linked%20List&sortBy=submissions

// !====================Method 1 ===================
// * Since head is not given it is not possible to delete the node.
// * what we can do is..we copy the next node valeus
// * delete the next node and copy its data to this node.
function deleteNode(del) {
  const current = del;
  const nextNodeValue = current.next.data;
  const nextNodeNext = current.next.next;

  current.data = nextNodeValue;
  current.next = nextNodeNext;
}

// !===================
function deleteNode(del) {
  del.data = del.next.data;
  del.next = del.next.next;
}
