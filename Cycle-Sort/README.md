Cycle Sort
Definition
Cycle Sort ek in-place sorting technique hai jo is principle par kaam karti hai:
“Har element ko uski correct position par directly place karna”
________________________________________
Simple Meaning
Isme hum elements ko bar bar swap karke unki correct index position par le jate hain.
________________________________________
Key Idea
•	Value → uski correct index position 
•	Example: agar value = 3 hai → correct index = 2 (0-based indexing) 
________________________________________
2. Why we use Cycle Sort?
Purpose
Cycle Sort ka main purpose hai:
•	Minimum number of swaps (writes) 
•	Memory efficient sorting (O(1) extra space) 
________________________________________
Important Point
Ye sorting algorithm speed ke liye nahi hota, balkay memory writes kam karne ke liye hota hai.
________________________________________
3. Where we use Cycle Sort?
Direct Usage
Cycle Sort direct real applications mein kam use hota hai.
________________________________________
Common Usage Areas
•	Interview problems 
•	DSA practice 
•	Algorithm understanding 
________________________________________
Indirect Usage
Iska concept use hota hai:
•	index mapping problems 
•	placement-based problems 
•	missing/duplicate detection problems 
________________________________________
4. Real Life Use Case
Direct Use
Cycle Sort real software systems mein directly use nahi hota.
________________________________________
Indirect Use
Real systems mein iska concept use hota hai:
•	Data validation 
•	Missing records detection 
•	Duplicate detection 
•	Database integrity checks 
________________________________________
Example
Hospital system mein patient IDs continuous hone chahiye.
Agar koi ID missing ho ya duplicate ho jaye to system detect karta hai.
________________________________________
5. Problems based on Cycle Sort
________________________________________
Problem 1: Find Missing Number
Statement
Ek array diya hota hai jisme numbers 1 se n tak hone chahiye, lekin ek number missing hota hai.
________________________________________
Example
Array:
[1, 2, 4, 5]
Missing number:
3
________________________________________
Concept
•	Har number ko uski correct position par rakhte hain 
•	jo position match nahi karti wahi missing number hota hai 
________________________________________
Problem 2: Find Duplicate Number
Statement
Array mein ek number repeat hota hai, usko find karna hota hai.
________________________________________
Example
[1, 2, 3, 2, 4]
Duplicate:
2
________________________________________
Concept
•	Numbers ko correct index par place karte hain 
•	agar kisi position par same number already ho to duplicate mil jata hai 
________________________________________
6. Purpose of these Problems
Main Goal
Ye problems sikhaati hain:
•	Array indexing samajhna 
•	In-place operations 
•	O(n) optimized thinking 
•	Pattern recognition 
________________________________________
7. Real Project Connection
Real Projects
Direct Cycle Sort use nahi hota.

