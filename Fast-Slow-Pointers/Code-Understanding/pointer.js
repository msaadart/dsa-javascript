//// 1 - singly linked list approach 

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;

// let current = node1;

// while (current !== null) {
//     console.log(current.data);
//     current = current.next;
// }





//// 2 - doubly linked list approach 

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);
// let node5 = new Node(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node3;

// let current = node1;
// let count = 0;
// let limit = 10;

// while (current !== null && count < limit) {
//     console.log(current.data);
//     current = current.next;
//     count++;
// }





//// 3 - fast and slow pointer approach ----->

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
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node1;

function detectCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            console.log("Cycle detected at node:", slow.data);
            return slow;
        }
    }
    return null;
}
let meetingNode = detectCycle(node1);