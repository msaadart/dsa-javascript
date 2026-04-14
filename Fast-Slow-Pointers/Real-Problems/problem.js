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

 node1.next = node2;
 node2.next = node3;
 node3.next = node4;

 function middle(head) {
     slow = head;
     fast = head;

     while (fast !== null && fast.next !== null) {
         slow = slow.next;
         fast = fast.next.next;
     }
     return slow;
 }
 let meetingNode = middle(node1);
 console.log(meetingNode.data)




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

 //  function detect(head) {
 //      slow = head;
 //      fast = head;

 //      while (fast !== null && fast.next !== null) {
 //          slow = slow.next;
 //          fast = fast.next.next;
 //          if (slow === fast) {
 //              console.log("detetc at node", slow.data);
 //              return slow;
 //          }
 //      }
 //      return null;
 //  }
 //  let meetingNode = detect(node1);
 //  console.log("meeting at node", meetingNode.data)








 //// 3 - cycle in circular array

 //  function hasLoop(arr) {
 //      let n = arr.length;

 //      function next(i) {
 //          return (i + arr[i] + n) % n;
 //      }

 //      for (let i = 0; i < n; i++) {
 //          let slow = i;
 //          let fast = i;

 //          while (true) {
 //              slow = next(slow);
 //              fast = next(next(fast));

 //              if (slow === fast) {
 //                  return true;
 //              }

 //              if (Math.abs(arr[slow]) !== Math.abs(arr[i])) break;
 //          }
 //      }

 //      return false;
 //  }

 //  console.log(hasLoop([2, -1, 1, 2, 2]));