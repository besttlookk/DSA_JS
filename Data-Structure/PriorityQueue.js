// !================ Priority Queue =====================
// * Priority Queue is an extension of Queue having some properties as follows:
// *  1. Each element of the priority queue has a priority associated with it.
// *  2. Elements are added to the queue as per the priority.
// *  3. Lowest priority elements are removed first.
// * We can design a priority queue using two approaches
// *  in the first case we can add the queue element at the end of the queue and we can remove the elements of the queue depending on the priority.
// * In the second case, we can add elements to the queue according to the priority and remove them from the front of the queue. In this article, we would use the second approach to implement a Priority Queue.

// *functions to be implemented
// *  enqueue(item, priority)
// *  dequeue()
// *  front()
// *  isEmpty()
// *  printPQueue()

// * Note:- Here we consider ” 1 ” as the highest priority element, you can modify this as per the requirement.

class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // *  as per priority(lower priority at front)
  enqueue(element, priority) {
    const qElement = new QElement(element, priority);
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        added = true;
        break;
      }
    }

    //* if the element have the highest priority
    //* it is added at the end of the queue

    if (!added) {
      this.items.push(qElement);
    }
  }

  dequeue() {
    // !remove element with priortiy value low
    if (this.isEmpty()) return "Underflow";

    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "No item in the Queue";

    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) return "No item in the Queue";

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
