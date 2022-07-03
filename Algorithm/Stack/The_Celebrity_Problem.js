// !========= The Celebrity Problem

// !=====Links ============
// * https://www.geeksforgeeks.org/the-celebrity-problem/
// * https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1/?page=1&category[]=Stack&sortBy=submissions

// !==============Method 1 ===============

// * Time Complexity: O(n2).
//* Space Complexity: O(n).
/*
function celebrity(M, n) {
  const indegree = Array(n).fill(0);
  const outdegree = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1) {
        indegree[j] += 1; // j ko i jaanta hai..so
        outdegree[i] += 1; // i j ko jaanta hai
      }
    }
  }

  for (let i = 0; i < n; i++) {
    // * if i ko sab jaanat and i ksi ko nahi jaanta
    if (indegree[i] === n - 1 && outdegree[i] === 0) return i;
  }

  return -1;
}
*/

// !===================Method 2( elimination technique)=========
// * If A knows B, then A can’t be a celebrity. Discard A, and B may be celebrity.
// * If A doesn’t know B, then B can’t be a celebrity. Discard B, and A may be celebrity.
// *Repeat above two steps till there is only one person.
// * Ensure the remained person is a celebrity. (What is the need of this step?)

//* ---Algo:
// * Create a stack and push all the id’s in the stack.
// * Run a loop while there are more than 1 element in the stack.
// * Pop top two element from the stack (represent them as A and B)
// * If A knows B, then A can’t be a celebrity and push B in stack. Else if A doesn’t know B, then B can’t be a celebrity push A in stack.
// * Assign the remaining element in the stack as the celebrity.
// * Run a loop from 0 to n-1 and find the count of persons who knows the celebrity and the number of people whom the celebrity knows. if the count of persons who knows the celebrity is n-1 and the count of people whom the celebrity knows is 0 then return the id of celebrity else return -1.

// * Time Complexity: O(n).
// The total number of comparisons 3(N-1), so the time complexity is O(n).
//* Space Complexity: O(n).

/*
function celebrity(M, n) {
  const st = new Array(n);

  for (let i = 0; i < n; i++) {
    st.push(i);
  }

  while (st.length > 1) {
    let a = st.pop();
    let b = st.pop();

    if (M[a][b] === 1) {
      // * a knows b so discard b
      st.push(b);
    } else {
      st.push(a);
    }
  }

  //* If there are only two people
  //* and there is no
  //* potential candidate
  if (st.length === 0) return -1;

  let c = st.pop(); //* potential celebrity

  for (let i = 0; i < n; i++) {
    if (i !== c && (M[c][i] !== 0 || M[i][c] === 0)) return -1;
  }

  return c;
}
*/

// !===============Method 3 (Optimal Approach: Two pointer approach) =============
// *  The idea is to use two pointers, one from start and one from the end. Assume the start person is A, and the end person is B.
// * If A knows B, then A must not be the celebrity. Else, B must not be the celebrity.
// * At the end of the loop, only one index will be left as a celebrity. Go through each person again and check whether this is the celebrity.
//* The Two Pointer approach can be used where two pointers can be assigned, one at the start and the other at the end, and the elements can be compared and the search space can be reduced.

function celebrity(M, n) {
  let low = 0;
  let high = n - 1;
  while (low < high) {
    if (M[low][high] === 1) {
      //* low knows high
      low++;
    } else {
      // * high is not know to high
      high--;
    }
  }

  //* i points to our celebrity candidate
  var c = low;

  //* Now, all that is left is to check that whether
  //* the candidate is actually a celebrity

  for (let i = 0; i < n; i++) {
    if (c !== i && (M[c][i] === 1 || M[i][c] === 0)) return -1;
  }

  return c;
}
