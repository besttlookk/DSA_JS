// !=============== Links
// * https://practice.geeksforgeeks.org/problems/stack-permutations/1/?page=4&category[]=Stack&sortBy=submissions
// * https://www.geeksforgeeks.org/stack-permutations-check-if-an-array-is-stack-permutation-of-other/

// !==============Method 1 ==============

function isStackPermutation(ip, op) {
  //* we will be pushing elements from input array to stack uptill top of our stack
  //* matches with first element of output array
  const st = [];

  //* will maintain a variable j to iterate on output array
  let j = 0;

  //* will iterate one by one in input array
  for (let i = 0; i < ip.length; i++) {
    //* pushed an element from input array to stack
    st.push(ip[i]);

    //* if our stack isn't empty and top matches with output array
    //* then we will keep popping out from stack uptill top matches with
    //* output array

    while (st.length > 0 && st[st.length - 1] === op[j]) {
      st.pop();
      j++;
    }
  }

  //* if output array was a correct permutation of input array then
  //* by now our stack should be empty
  if (st.length === 0) {
    return true;
  }
  return false;
}

console.log(isStackPermutation([1, 2, 3], [2, 1, 3]));
