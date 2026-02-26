Sliding Window!

Q = What is Sliding Window? 
Sliding Window ek technique hai jo array / string k upar continuous sub-array / sub-string problems solve karne k kaam aati hai.


Q = Where is it Used?
• Array / String
• Sub-array / Sub-string problem

Q = What do we find using Sliding Window?
• Array: max, min, sum, count, average
• String: longest / shortest substring
• Window size based: at most K , at least K , exactly K 

Sliding Window Approach =>
Array = [1, 3, 4, 7, 8, 9, 10, 2, 5, 6]
 Ek bar sum kr k usko adjust krega bar-bar calculate nhi krega :
• 1st  window : 1 + 3 + 4 = 8
• 2nd  window => 
• Previous sum = 8
• Remove old element = 1
• Add new element = 7
• New sum = 8 – 1 + 7 = 14
• Old values reuse hoti hain
• Bar bar full calculation nahi hoti
• Time complexity : O(n)

Real Life Use Cases =>

• Last 3 days user’s active status.
• Last 7 days weather cast.
• Last 5 minutes profit / loss in business (Crypto or any personal business software).
• For remove duplication and pattern searching.
• Find the spam (messages) – [ Whatsapp /  Facebook ].


