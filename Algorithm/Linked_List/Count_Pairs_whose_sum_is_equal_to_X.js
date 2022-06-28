// * Note : All elements in a linked list are unique.

// !=============== links ================
// * https://practice.geeksforgeeks.org/problems/count-pairs-whose-sum-is-equal-to-x/0/?page=1&category[]=Linked%20List&sortBy=submissions
// * https://www.geeksforgeeks.org/count-pairs-two-linked-lists-whose-sum-equal-given-value/

// !=================Method 1(hashing) =============
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
