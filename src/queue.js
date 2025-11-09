const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    const node = {value: null, next: null};
    let currentObj = node;
    let currentNode = this.head;

    while (currentNode) {
      currentObj.next = {value: currentNode.value, next: null};
      currentObj = currentObj.next;
      currentNode = currentNode.next;
    }

    return node.next;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.head){
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++
  }

  dequeue() {
    if (!this.head) return undefined;

    const current = this.head;
    this.head = this.head.next;

    if(!this.head) this.tail = null;

    this.length--;

    return current.value;
  }
}

module.exports = {
  Queue
};
