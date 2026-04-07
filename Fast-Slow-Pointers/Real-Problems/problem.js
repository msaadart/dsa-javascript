 //// 1 - middle of the linkedlist

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
 let node6 = new Node(6);

 node1.next = node2;
 node2.next = node3;
 node3.next = node4;
 node4.next = node5;
 node5.next = node6;

 function detectCycle(head) {
     let slow = head;
     let fast = head;

     while (fast !== null && fast.next !== null) {
         slow = slow.next;
         fast = fast.next.next;
     }
     return slow;
 }

 let meetingNode = detectCycle(node1);
 console.log(meetingNode.data);




 //// 2 - happy number

 //  class Node {
 //      constructor(data) {
 //          this.data = data;
 //          this.next = null;
 //      }
 //  }

 //  let node1 = new Node(1);
 //  let node2 = new Node(2);
 //  let node3 = new Node(3);
 //  let node4 = new Node(4);
 //  let node5 = new Node(5);

 //  node1.next = node2;
 //  node2.next = node3;
 //  node3.next = node4;
 //  node4.next = node5;
 //  node5.next = node3;

 //  function detectCycle(head) {
 //      slow = head;
 //      fast = head;

 //      while (fast !== null && fast.next !== null) {
 //          slow = slow.next;
 //          fast = fast.next.next;

 //          if (slow === fast) {
 //              console.log("fast detect to slow at node : ", slow.data);
 //              return slow;
 //          }
 //      }
 //      return null;
 //  }
 //  let meetingNode = detectCycle(node1);