//!+++++++++++++++++++++++++++++++ Implement two stacks in an array ++++++++++++++++++++++++++
// * Create a data structure twoStacks that represents two stacks. Implementation of twoStacks should use only one array, i.e., both stacks should use the same array for storing elements.
// !=================== Links =====================
// * https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1/?page=1&category[]=Arrays&curated[]=7&sortBy=submissions
// * https://www.geeksforgeeks.org/implement-two-stacks-in-an-array/#:~:text=A%20simple%20way%20to%20implement,size%20of%20array%20be%20n.

// !=============Method 1 (Divide the space in two halves): ================
//*A simple way to implement two stacks is to divide the array in two halves and assign the half space to two stacks,
// * i.e., use arr[0] to arr[n/2] for stack1, and arr[(n/2) + 1] to arr[n-1] for stack2 where arr[] is the array to be used to implement two stacks and size of array be n.
// * The problem with this method is inefficient use of array space. A stack push operation may result in stack overflow even if there is space available in arr[].

// * Complexity Analysis:
//*   Push operation : O(1)
//*   Pop operation : O(1)

// * Auxiliary Space: O(N)
// * Use of array to implement stack so. It is not the space-optimized method as explained above.
/*
class TwoStacks {
  constructor() {
    this.arr = new Array(n);
    this.size = n;
    this.top1 = 0; //* arr1 bottom is i
    this.top2 = Math.floor(n / 2) + 1;
  }

  push1(x) {
    if (this.top1 < Math.floor(n / 2)) {
      this.top1++;
      this.arr[this.top1] = x;
      return true;
    }

    return false;
  }

  push2(x) {
    if (this.top2 < this.size - 1) {
      this.top2++;
      this.arr[this.top2] = x;
      return true;
    }
    return false;
  }

  pop1() {
    if (this.top1 >= 0) {
      let x = this.arr[this.top1];
      this.top1--;
      return x;
    }

    return null;
  }

  pop2() {
    if (this.top2 >= Math.floor(this.size / 2) + 1) {
      let x = this.arr[this.top2];
      this.top2--;
      return x;
    }
    return x;
  }
}

*/

// !========= Method 2 (A space efficient implementation) : ==========
// *This method efficiently utilizes the available space. It doesn’t cause an overflow if there is space available in arr[].
// * The idea is to start two stacks from two extreme corners of arr[].
// * Both stacks grow (or shrink) in opposite direction. To check for overflow, all we need to check is for space between top elements of both stacks.

//* Time Complexity:
//* Push operation : O(1)
//* Pop operation : O(1)
//* Auxiliary Space :O(N).

class TwoStacks {
  constructor(n) {
    this.arr = Array(n).fill(0);
    this.size = n;
    this.top1 = -1;
    this.top2 = this.size;
  }

  push1(x) {
    if (this.top1 < this.top2 - 1) {
      this.top1++;
      this.arr[this.top1] = x;
      return true;
    }

    return false;
  }

  push2(x) {
    if (this.top1 < this.top2 - 1) {
      this.top2--;
      this.arr[this.top2] = x;
      return true;
    }
    return false;
  }

  pop1() {
    if (this.top1 >= 0) {
      let x = this.arr[this.top1];
      this.top1--;
      return x;
    }

    return null;
  }

  pop2() {
    if (this.top2 < this.size) {
      let x = this.arr[this.top2];
      this.top2++;
      return x;
    }

    return null;
  }
}
