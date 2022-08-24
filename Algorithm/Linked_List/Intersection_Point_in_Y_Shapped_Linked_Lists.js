// !==Links ===
// * https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/

// !=============Method 1 (Brute) force ==================
// * For every node in list1, compare the node of other list. Return first match
// * TC: O(m * n)
// * SC: O(1)
/*
function intersectPoint(head1, head2) {
  let current1 = head1;

  while (current1 !== null) {
    let current2 = head2;

    while (current2 !== null) {
      if (current1 === current2) return current1;
      current2 = current2.next;
    }

    current1 = current1.next;
  }

  return -1;
}
*/

// !========================================Method 2(hash) =======================================
// * Traverse list1 and store all the node.
// * Againg traverse the list two. return the first match

// * Basically, we need to find a common node of two linked lists. So we hash all nodes of the first list and then check the second list.
// * 1) Create an empty hash set.
// * 2) Traverse the first linked list and insert all nodes’ addresses in the hash set.
// * 3) Traverse the second list. For every node check if it is present in the hash set. If we find a node in the hash set, return the node.

// * TC: O(m + n)
// * SC: O(m)
/*
function intersectPoint(head1, head2) {
  let current1 = head1;
  let current2 = head2;
  const set = new Set();

  while (current1 !== null && current1.next !== null) {
    set.add(current1);
    current1 = current1.next;
  }

  while (current2 !== null && current2.next !== null) {
    if (set.has(current2)) return current2;
  }

  return -1;
}
*/

// !======================== Method 3(Using two stacks) ====================
// * dono list ko stack me add karenge..and piche se comaprare karenge. jab v match karega to usko temp variable me store ker ke nikal denge
// * jaise first mis-match mila top of stack. return temp varibale

// * TC: O(m + n)
// * SC: O(m+n)
/*
function intersectPoint(head1, head2) {
  const st1 = [];
  const st2 = [];
  let temp = null;

  let curr1 = head1;
  let curr2 = head2;

  while (curr1) {
    st1.push(curr1);
    curr1 = curr1.next;
  }

  while (curr2) {
    st1.push(curr2);
    curr2 = curr2.next;
  }

  while (
    st1.length !== 0 &&
    st2.length !== 0 &&
    st1[st1.length - 1] === st2[st2.length - 1]
  ) {
    temp = st1[st1.length - 1];
    st1.pop();
    st2.pop();
  }

  return temp;
}
*/

// !===============Method 4(First repaeating node in the array) ===============
// * store both list in a array and find first reapting node.

// !===============Method 4(Using the difference in node counts) ============
/*

class Node {
  constructor(item) {
    this.data = item;
    this.next = null;
  }
}

function getCount(node) {
  let length = 0;

  while (node !== null) {
    length++;
    node = node.next;
  }

  return length;
}

//* list1 is longer that list 2
function findIntersection(diff, head1, head2) {
  // * head1 is longer list.
  // * 
  while (diff > 0 && head1 !== null) {
    diff--;
    head1 = head1.next;
  }

  while (head1 !== null && head2 !== null) {
    if (head1 === head2) return head1.data;

    head1 = head1.next;
    head2 = head2.next;
  }

  return -1;
}

function intersectPoint(head1, head2) {
  let length1 = getCount(head1);
  let length2 = getCount(head2);

  let diff = Math.abs(length1 - length2);

  if (length1 > length2) return findIntersection(diff, head1, head2);
  else return findIntersection(diff, head2, head1);
}

head1 = new Node(3);
head1.next = new Node(6);
head1.next.next = new Node(9);
head1.next.next.next = new Node(15);
head1.next.next.next.next = new Node(30);

// creating second linked list
head2 = new Node(10);
head2.next = new Node(15);
head2.next.next = new Node(30);

console.log(intersectPoint(head1, head2));
*/

// !===============Method 4( 2-pointer technique )======================

//* Initialize two pointers ptr1 and ptr2  at head1 and  head2.
//* Traverse through the lists, one node at a time.
//* When ptr1 reaches the end of a list, then redirect it to head2.
//* similarly, when ptr2 reaches the end of a list, redirect it to the head1.
//* Once both of them go through reassigning, they will be equidistant from
//  the collision point
//* If at any node ptr1 meets ptr2, then it is the intersection node.
//* After the second iteration if there is no intersection node it returns NULL.

function intersectPoint(head1, head2) {
  let ptr1 = head1;
  let ptr2 = head2;

  // If any one of head is null i.e
  // no Intersection Point
  if (ptr1 == null || ptr2 == null) {
    return null;
  }

  // Traverse through the lists until they
  // reach Intersection node

  while (ptr1 != ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;

    if (ptr1 == ptr2) {
      return ptr1.data;
    }

    //* When ptr1 reaches the end of a list, then
    //* reassign it to the head2.
    if (ptr1 == null) {
      ptr1 = head2;
    }

    // When ptr2 reaches the end of a list, then
    // redirect it to the head1.
    if (ptr2 == null) {
      ptr2 = head1;
    }
  }

  return -1;
}

// !======================= Method 5(Make a circle in the first list)
// 1. Traverse the first linked list(count the elements) and make a circular linked list. (Remember the last node so that we can break the circle later on).
// 2. Now view the problem as finding the loop in the second linked list. So the problem is solved.
// 3. Since we already know the length of the loop(size of the first linked list) we can traverse those many numbers of nodes in the second list, and then start another pointer from the beginning of the second list. we have to traverse until they are equal, and that is the required intersection point.
// 4. remove the circle from the linked list.

// Time Complexity: O(m+n)
// Auxiliary Space: O(1)
