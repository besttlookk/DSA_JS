// !===========Clone a stack without extra space

// !============Links ================
// * https://practice.geeksforgeeks.org/problems/clone-a-stack-without-usinig-extra-space/1/?page=3&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/clone-a-stack-without-extra-space/

// !===================Method 1(Using recursion)==================
// *  In order to solve this without using extra space, we first reverse the source stack, then pop the top elements of the source stack one by one and push it into the destination stack.
function clonestackUtil(st, cloned) {
  if (st.length === 0) return;
  const x = st.pop();
  clonestackUtil(st, cloned);
  cloned.push(x);
}

function clonestack(st, cloned) {
  clonestackUtil(st, cloned);

  return;
}

console.log(clonestack([1, 1, 2, 2, 3, 4, 5, 5, 6, 7], []));
