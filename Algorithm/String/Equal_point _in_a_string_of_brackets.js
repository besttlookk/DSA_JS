// !==========Equal point in a string of brackets
// * Given a string S of opening and closing brackets '(' and ')' only. The task is to find an equal point. An equal point is an index such that the number of closing brackets on right from that point must be equal to number of opening brackets before that point.

// !==========Links
// * https://practice.geeksforgeeks.org/problems/find-equal-point-in-string-of-brackets2542/1/?page=1&curated[]=3&sortBy=submissions#
// * https://www.geeksforgeeks.org/find-equal-point-string-brackets/

// !============== Approach 1: ============
// * Store the number of opening brackets appears in the string up to every index, it must start from starting index.
//* Similarly, Store the number of closing brackets appears in the string upto each and every index but it should be done from last index.
//* Check if any index has the same value of opening and closing brackets.

// ! =============Approach 2 ===============

// * Count the total number of closed brackets in string and store in variable, let’s say cnt_close.
//* So count of open brackets is length of (string – count) of closed brackets.
//* Traverse string again but now keep count of open brackets in string, let’s say cnt_open.
//* Now while traversing, let index be i, so count of closed brackets till that index will be (i+1 – cnt_open).
//* Hence, we can check for what index, the count of open brackets in first part equals that of count of closed brackets in second part.
//* Equation becomes cnt_close – (i+1 – cnt_open) = cnt_open, we have to find i.
//* After evaluating above equation we can see cnt_open gets cancelled on both sides so no need.

function findIndex(str) {
  let close = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ")") {
      close++;
    }
  }

  return close;
}

console.log(findIndex("(())))("));
