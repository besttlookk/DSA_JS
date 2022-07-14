// ! How to efficiently implement k stacks in a single array?

// !==================Method 1(A space efficient implementation) ===============
// * The idea is to use two extra arrays for efficient implementation of k stacks in an array.
// * This may not make much sense for integer stacks, but stack items can be large for example stacks of employees, students, etc where every item is of hundreds of bytes.
// * For such large stacks, the extra space used is comparatively very less as we use two integer arrays as extra space.
// * 1) top[]: This is of size k and stores indexes of top elements in all stacks.
// * 2) next[]: This is of size n and stores indexes of next item for the items in array arr[].

// * Here arr[] is actual array that stores k stacks. Together with k stacks, a stack of free slots in arr[] is also maintained.
// *  The top of this stack is stored in a variable ‘free’. All entries in top[] are initialized as -1 to indicate that all stacks are empty.
// * All entries next[i] are initialized as i+1 because all slots are free initially and pointing to next slot.
// * Top of free stack, ‘free’ is initialized as 0.

class KStack {
  constructor(k, n) {
    this.k = k;
    this.n = n;
    this.arr = Array(n).fill(0);
    this.top = Array(k).fill(-1);
    this.next = Array(n).fill(0);

    this.free = 0;

    for (let i = 0; i < n - 1; i++) {
      this.next[i] = i + 1;
    }

    this.next[n - 1] = -1; //* -1 is used to indicate end of free list
  }

  isFull() {
    return this.free === -1;
  }

  push(sn, item) {
    if (this.isFull()) return "Stack Overflow";

    let i = this.free; //* Store index of first free slot

    //* Update index of free slot to index of next slot in free list
    this.free = this.next[i];

    //* Update next of top and then top for stack number 'sn'
    this.next[i] = this.top[sn]; //* before updating top store it on next
    this.top[sn] = i;

    //* Put the item in array
    this.arr[i] = item;
  }

  //* To pop an from stack number 'sn' where sn is from 0 to k-1
  pop(sn) {
    //* Underflow check
    if (this.isEmpty(sn)) {
      return "Stack underflow";
    }

    // Find index of top item in stack number 'sn'
    var i = this.top[sn];

    this.top[sn] = this.next[i]; // Change top to store next of previous top

    // Attach the previous top to the beginning of free list
    this.next[i] = this.free;
    this.free = i;

    // Return the previous top item
    return this.arr[i];
  }

  // To check whether stack number 'sn' is empty or not
  isEmpty(sn) {
    return this.top[sn] == -1;
  }
}
