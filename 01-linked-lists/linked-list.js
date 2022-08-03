class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  addToHead(val) {
  
    const newNode = new LinkedListNode(val)
    
    newNode.next = this.head
    this.head = newNode
    this.length++
    // if you can add to node constructor  
    // this.head = new LinkedListNode(val, this.head)
    // this.length++
  }

  addToTail(val) {
    const newNode = new LinkedListNode(val)
    this.length++

    if(!this.head) {
      this.head = newNode
      return this
    }

    let currentNode = this.head

    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }

    currentNode.next = newNode
  } 

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

linkedList = new LinkedList();

linkedList.addToHead(1);
linkedList.addToHead(2);
linkedList.addToHead(3);

linkedList.print()

module.exports = LinkedList;
