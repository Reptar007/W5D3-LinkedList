class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; 
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let node = new DoublyLinkedListNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    else {
      let temp = this.head;
      this.head = node;
      node.next = temp;
      temp.prev = node;
    }
    this.length ++ 
    return this; 
  }

  addToTail(val) {
    let node = new DoublyLinkedListNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      this.tail = node;
      node.prev = temp;
      temp.next = node;
    }
    this.length++;
    return this; 
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
