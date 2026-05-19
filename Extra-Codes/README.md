Linked-List, Tree and Graph (Syntax)
1 - Singly Linked-List 
class Node{
constructor(data){
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

let current = node1;

while(current !== null){
    console.log(current.data);
    current = current.next;
} 
2 - Circular Linked-List 

class Node{
    constructor(data){
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
node5.next = node3;

let current = node1;
let count = 0;
let limit = 10;

while(current !== null && count < limit){
    console.log(current.data);
    current = current.next;
    count++
}
 
3 - Reversal Linked-List 

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next = node5;
node5.prev = node4;

let current = node1;
let tail = null;

while(current !== null){
    console.log(current.data);
    tail = current;
    current = current.next;
}

current = tail;
while(current !== null){
    console.log(current.data);
    current = current.prev;
}
 
1 – Tree (With BFS)
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

let queue = [root];
while (queue.length > 0) {
    let curr = queue.shift();
    console.log(curr.val);
    if (curr.left) 
     queue.push(curr.left);
    if (curr.right) 
    queue.push(curr.right);
}
 
2 – Graph (With BFS)
let graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A'],
    D: ['B'],
    E: ['B']
};

let queue = ['A'];
let visited = new Set();

visited.add('A');

while (queue.length > 0) {
    let node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
        }
    }
}


