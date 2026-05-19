Bitwise XOR
What is Bitwise XOR:
XOR ek bitwise operator hai jo numbers ko binary (0/1) level pr compare krta hai.
Rule: Same bits = 0 and Different bits = 1.
1 ^ 1 = 0
0 ^ 0 = 0
1 ^ 0 = 1
0 ^ 1 = 1
Example: 



Why we use XOR:
We use XOR because ye:
•	Duplicates remove krta hai.
•	Pairing/Cancelling logic fast krta hai.
•	O(n) time mai kam krta hai
•	Extra memory nhi chaiye (no array/map needed)

Where we use XOR:
•	Duplicate Cancel Problems: [1,1,2,2,3] => 3 find krna.
•	Single unique element Problems: jb baaki sb repeat horhe ho and sirf 1 unique ho.
•	Coding interviews (very common): 
	Arrays 
	Bit manipulation 
	Optimization problems

Real project use case:
1 - Error detection (basic idea):
Data transmission mai XOR use hota hai check krne k liye k data change hua ya nhi.

2 - Memory / hardware level operations:
Low level systems mai XOR fast operations k liye use hota hai.





Sample Problems:
Problem 1 (Two Single Numbers)
Array mai 2 numbers unique hain, baaki sb duplicate hain find those 2 numbers.
Example: [1,2,3,4,2,1]
Output: 3 and 4.
Reason:
	No extra memory
	 Fast O(n) solution
	 Clean logic
	 Interview favorite question
Interview answer:
XOR is used to cancel duplicate numbers and find unique elements efficiently without extra space.


Problem 2 (Flip and Invert an Image)
Hume ek 2D binary matrix di jati hai and humein usko reverse and invert krna hota hai.
Example: [
[1,0,0],
[0,1,1],
[1,1,0]
]
Output: 
[1, 1, 0]
 [0, 0, 1]
[1, 0, 0]
Reason:
	bit manipulation
	 array reversing
	 image transformation logic
	 matrix traversal
	optimization thinking
Interview answer:
This problem teaches how to reverse rows and invert binary values inside a matrix efficiently.
