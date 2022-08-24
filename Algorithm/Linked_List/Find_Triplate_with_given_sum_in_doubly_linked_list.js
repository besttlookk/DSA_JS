// !===================== Count triplets in a sorted doubly linked list whose sum is equal to a given value x

// !==============================Links ==============================================
// * https://www.geeksforgeeks.org/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/
// * https://www.codingninjas.com/codestudio/problems/count-triplets-in-a-sorted-doubly-linked-list-whose-sum-is-equal-to-a-given-value-x_985286?leftPanelTab=1
// * https://practice.geeksforgeeks.org/problems/87f12e5c728d69a5322634776b54c75897d14daa/1?page=2&category[]=Linked%20List&curated[]=1&curated[]=7&curated[]=8&sortBy=submissions

// !===============================Method 1(Hashing)============================
// * Time Complexity: O(n2)
// * Auxiliary Space: O(n)

function countTriplets(head, x) {
  const map = new Map();
  let curr = head;
  let count = 0;

  while (curr != null) {
    map.set(curr.data, curr);
    curr = curr.next;
  }

  // * Nested loop
  for (let ptr1 = head; ptr1 != null; ptr1 = ptr1.next) {
    for (let ptr2 = ptr1.next; ptr2 != null; ptr2 = ptr2.next) {
      let sum = ptr1.data + ptr2.data;

      if (
        map.has(x - sum) &&
        map.get(x - sum) != ptr1 &&
        map.get(x - sum) !== ptr2
      )
        count++;
    }
  }

  return count / 3; //* for every triplet we get 3 combination
}

// !============================== Method 2 Efficient Approach(Use of two pointers) =============================
// * Since list is sorted we can easily apply two pointer meathod for each node
function countTriplets(head, x) {
  let count = 0;
  let curr = head;
  while (curr.next != null) {
    curr = curr.next;
  }
  console.log({ curr });
  for (let ptr1 = head; ptr1 != null; ptr1 = ptr1.next) {
    let leftPtr = ptr1.next;
    let rightPtr = curr;

    while (leftPtr !== rightPtr && rightPtr.next !== leftPtr) {
      let sum = leftPtr.data + rightPtr.data;
      if (sum === x - ptr1.data) {
        count++;
        leftPtr = leftPtr.next;
        rightPtr = rightPtr.prev;
      } else if (sum > x - ptr1.data) rightPtr = rightPtr.prev;
      else leftPtr = leftPtr.next;
    }
  }

  return count;
}

// !===========================Test code =======================

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function insert(head, val) {
  // Allocate node
  let temp = new Node(val);

  if (head == null) head = temp;
  else {
    temp.next = head;
    head.prev = temp;
    head = temp;
  }
  return head;
}

let head = null;

// Insert values in sorted order
head = insert(head, 9);
head = insert(head, 8);
head = insert(head, 6);
head = insert(head, 5);
head = insert(head, 4);
head = insert(head, 2);
head = insert(head, 1);

let x = 17;

console.log(countTriplets(head, x));
// console.log(head);
