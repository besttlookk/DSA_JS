// !==========Delete middle element of a stack ==================
// * Given a stack with push(), pop(), empty() operations, delete the middle of the stack without using any additional data structure.

// !==================Links ============
// * https://practice.geeksforgeeks.org/problems/delete-middle-element-of-a-stack/1/?page=1&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/delete-middle-element-stack/

// !==============Method 1((Iterative Solution) =================
/*
function deleteMid(s, sizeOfStack) {
  const tempS = [];
  const mid = Math.floor(sizeOfStack / 2);
  let count = 0;

  while (count < mid) {
    tempS.push(s.top());
    s.pop();
    count++;
  }

  s.pop();

  while (tempS.length !== 0) {
    s.push(tempS.pop());
  }

  return s;
}
*/

// !==============Method 2(Recusive)===================
// * The idea is to use recursive calls. We first remove all items one by one, then we recur. After recursive calls, we push all items back except the middle item.

function deleteMid(s, sizeOfStack, curr = 0) {
  //* If stack is empty or all items are traversed
  if (s.length == 0 || curr == sizeOfStack) return;

  let x = s.top();
  s.pop();

  //* Remove other items
  deleteMid(s, sizeOfStack, curr + 1);

  //* Put all items back except middle
  if (curr != parseInt(sizeOfStack / 2, 10)) s.push(x);
}
