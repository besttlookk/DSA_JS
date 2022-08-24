//* Given two linked lists(can be sorted or unsorted) of size n1 and n2 of distinct elements. Given a value x. The problem is to count all pairs from both lists whose sum is equal to the given value x.

//* Note: The pair has an element from each linked list.

// * Note : All elements in a linked list are unique.

// !=============== links ================
// * https://practice.geeksforgeeks.org/problems/count-pairs-whose-sum-is-equal-to-x/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/count-pairs-two-linked-lists-whose-sum-equal-given-value/

// !==================================Method 1(Nested Loop)=============================
// * Time Complexity: O(n1*n2)
// * Auxiliary Space: O(1)
function countPairs(head1, head2, x) {
  let count = 0;

  for (let ptr1 = head1; ptr1 != null; ptr1 = ptr1.next) {
    for (let ptr2 = head2; ptr2 !== null; ptr2 = ptr2.next) {
      let sum = ptr1.data + ptr2.data;
      if (sum === x) {
        count++;
      }
    }
  }

  return count;
}

// !======================================Method 2(Sorting)===================================
// * Sort the 1st linked list in ascending order and the 2nd linked list in descending order using merge sort technique.
/*
countPairs(list1, list2, x)
  Initialize count = 0
  while list1 != NULL and list2 != NULL
     if (list1->data + list2->data) == x
        list1 = list1->next    
        list2 = list2->next
        count++
    else if (list1->data + list2->data) > x
        list2 = list2->next
    else
        list1 = list1->next

  return count   
  */
function countPairs(head1, head2, x) {}

// !================================Method 1(hashing) =============
// * We store all first linked list elements in hash table. For elements of second linked list, we subtract every element from x and check the result in hash table. If result is present, we increment the count.
function countPairs(head1, head2, x) {
  let p1 = head1;
  let p2 = head2;
  let set = new Set();
  let count = 0;

  while (p1) {
    set.add(p1.data);
    p1 = p1.next;
  }

  while (p2) {
    if (set.has(x - p2.data)) count++;
    p2 = p2.next;
  }

  return count;
}
