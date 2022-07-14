// !=================Pairwise Consecutive Elements =============
class Stack {
  constructor() {
    this.arr = [];
  }

  push(a) {
    this.arr.push(a);
  }

  pop() {
    this.arr.pop();
  }
  top() {
    let index = this.arr.length - 1;
    return this.arr[index];
  }
  empty() {
    if (this.arr.length != 0) return false;
    else return true;
  }
}

/**
 * @param {Stack} st
 * @returns {boolean}
 */

// !=================Links =============
// * https://practice.geeksforgeeks.org/problems/pairwise-consecutive-elements/1/?page=2&category[]=Stack&sortBy=submissions

// !================Method ====================
// *  We also need to make sure that original  content is retained.

// * Create an auxiliary stack aux.
// * Transfer contents of given stack to aux.
// * Traverse aux. While traversing fetch top two elements and check if they are consecutive or not. After checking put these elements back to original stack.

function pairWiseConsecutive(st) {
  const aux = [];
  let result = true;

  while (st.length !== 0) {
    const top = st[st.length - 1];
    st.pop();
    aux.push(top);
  }

  while (aux.length > 1) {
    let x = aux[aux.length - 1];
    aux.pop();
    let y = aux[aux.length - 1];
    aux.pop();

    if (Math.abs(x - y) !== 1) result = false;

    st.push(x);
    st.push(y);
  }

  if (aux.length == 1) st.push(aux[aux.length - 1]);

  return result;
}
