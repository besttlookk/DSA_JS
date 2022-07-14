// !===================LRU Cache =====================
// * Expected Time Complexity: O(1) for both get() and set().
// *Expected Auxiliary Space: O(1) for both get() and set().
// * (Although, you may use extra space for cache storage and implementation purposes).

// !==============Method 1

class Node {
  constructor(key, val) {
    this.prev = null;
    this.next = null;
    this.value = val;
    this.key = key;
  }
}

class LRUCache {
  //Constructor for initializing the cache capacity with the given value.
  constructor(cap) {
    this.cap = cap;
    this.map = new Map();
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {number} key
   * @returns {number}
   */

  //Function to return value corresponding to the key.
  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);

      if (this.head !== node) this.moveToFront(node);
      return node.value;
    }

    return -1;
  }

  moveToFront(node) {
    this.remove(node);
    this.addToFront(node);
  }

  remove(node) {
    const nextNode = node.next;
    const prevNode = node.prev;

    if (prevNode !== null) {
      prevNode.next = nextNode;
    } else {
      this.head = nextNode;
    }

    if (nextNode !== null) {
      nextNode.prev = prevNode;
    } else {
      this.tail = prevNode;
    }
  }

  addToFront(node) {
    node.next = this.head;
    node.prev = null;

    if (this.head !== null) {
      this.head.prev = node;
    }

    this.head = node;

    if (!this.tail) this.tail = node;
  }

  //Function for storing key-value pair.
  set(key, value) {
    // * Ager pehle se hai to update kerna hai bas
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      if (this.head !== node) this.moveToFront(node);

      return;
    }

    const newNode = new Node(key, value);

    if (this.map.size === this.cap) {
      // * delete this node info from hashmap
      this.map.delete(this.tail.key);
      this.remove(this.tail);
    }

    this.addToFront(newNode);

    // * now add the address of head in the hashmao with the same key
    this.map.set(key, newNode);
  }
}

const ca = new LRUCache(4);

ca.set(94, 16);
ca.set(93, 87);
ca.set(63, 22);
ca.set(60, 91);
ca.set(41, 27);
ca.set(31, 83);
ca.set(30, 36);
ca.set(57, 94);
ca.set(30, 43);
ca.set(20, 22);
ca.set(14, 71);
ca.set(71, 63);
ca.set(85, 26);
ca.set(6, 37);

/*
SET 85 26 SET 6 37 GET 30 SET 25 58 SET 46 83 GET 68 GET 65 SET 88 51 GET 77 GET 89 GET 4 SET 100 55 GET 61 GET 69 SET 27 13 GET 95 SET 71 96 GET 79 SET 98 2 GET 18 GET 53 GET 2 GET 87 SET 90 66 GET 20 GET 30 SET 98 18 SET 76 82 SET 68 28 GET 98 SET 66 87 GET 84 SET 29 25 SET 30 33 SET 71 20 GET 9 SET 50 41 GET 24 GET 46 GET 52 SET 80 56 GET 65 GET 42 GET 94 GET 35 GET 25 GET 88 GET 44 SET 66 28 SET 33 37 SET 29 38 SET 75 8 SET 96 59 SET 36 38 SET 29 19 SET 29 12 SET 5 77 SET 14 64 GET 7 GET 5 GET 29 GET 70 SET 97 18 GET 44
*/

console.log(ca.get(30));

console.log({ ca });
