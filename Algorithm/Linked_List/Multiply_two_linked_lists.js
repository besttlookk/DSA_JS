// !======================Multiply two linked lists================

// !============================Links============================
// * https://practice.geeksforgeeks.org/problems/multiply-two-linked-lists/1

function multiplyTwoLists(l1, l2) {
  let M = 1000000007;
  let num1 = 0;
  let num2 = 0;

  while (l1 !== null || l2 !== null) {
    if (l1 !== null) {
      num1 = ((num1 * 10) % M) + l1.data;
      l1 = l1.next;
    }

    if (l2 !== null) {
      num2 = ((num2 * 10) % M) + l2.data;
      l2 = l2.next;
    }
  }

  return ((num1 % M) * (num2 % M)) % M;
}
