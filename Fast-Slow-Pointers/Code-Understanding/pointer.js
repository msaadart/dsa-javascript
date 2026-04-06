class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let current = node1;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}