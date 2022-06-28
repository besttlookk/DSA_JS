// !============================= Links ================

function insertAtBegining(head, newData) {
  const newNode = new Node(newData);
  newNode.next = head;
  head = newData;
  return newNode;
}
//Function to insert a node at the end of the linked list.
function insertAtEnd(head, newData) {
  const newNode = new Node(newData);
  if (!head) {
    head = newNode;
  } else {
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  return head;
}
