// !======== Reverse a Stack
// * You are given a stack St. You have to reverse the stack using recursion.

// *Expected Time Complexity: O(N)
// * Expected Auxiliary Space: O(N)

// !========Method 1(Using another stack)=====================
// * Time Complexity: O(N)
// *  The loop runs for n times and the time complexity for all the stack operations is O(1). Therefore the overall time complexity is O(N
// * Space Complexity: O(N)
//* bcoz extra stack is used
/*
function reverseStack(s) {
  const rs = new Stack();
  const n = s.size();

  for (let i = 0; i < n; i++) {
    const temp = s.peek();
    s.pop();
    rs.push(temp);
  }

  return rs;
}
*/

// !===================Method 2 (using Two Stacks)=================
// * This is similar to the above approach; the difference is that in this approach, instead of returning the extra stack, we directly use the original stack after transferring elements.

// * Time Complexity: O(N)
// * The loop runs for 3n times and the time complexity for all the stack operations is O(1). Therefore the overall time complexity is O(N)

// * Space Complexity: O(N)

/*
function transfer(s1, s2) {
  while (!s1.empty()) {
    const temp = s1.peek();
    s1.pop();
    s2.push(temp);
  }
}
function reverseStack(s) {
  const s1 = new Stack();
  const s2 = new Stack();

  transfer(s, s1);

  transfer(s1, s2);

  transfer(s2, s);

  return s;
}

*/
// !==============Method 3(Using recursion) =================
