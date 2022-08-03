const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/
function linkedAddToHeadTiming() {
    console.time("LinkedList Add to Head")
    let ll = new LinkedList()
    ll.addToHead(1)
    console.timeEnd("LinkedList Add to Head");
}

function linkedAddToTailTiming() {
    console.time("LinkedList Add to Head");
    let ll = new LinkedList();
    ll.addToTail(2);
    console.timeEnd("LinkedList Add to Head");
}

function doubleAddToHead() {
    console.time('DoublyLinkedList Add to Head')
    let dll = new DoublyLinkedList()
    dll.addToHead(1)
    console.timeEnd("DoublyLinkedList Add to Head");
}

function doubleAddToTail() {
    console.time('DoublyLinkedList Add to Tail')
    let dll = new DoublyLinkedList()
    dll.addToTail(2)
    console.timeEnd("DoublyLinkedList Add to Tail");
}

linkedAddToHeadTiming()
linkedAddToTailTiming()
doubleAddToHead()
doubleAddToTail()