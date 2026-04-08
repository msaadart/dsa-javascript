<= Two Pointers =>

Ye ek aisi approach / pattern hai jisme hum kisi array ya string (data structure) ko traverse (scan) karne ke liye do indices (pointers) ka use karte hain.
Yeh technique specially sorted arrays ya string-based problems ko efficiently solve krne k liye use ki jaati hai, jisse brute-force (nested loops) ki need nhi hoti.
•	Pointers kya hain?
Yeh pointers asl mein indices hote hain (integers) jo array ki kisi position ko point karte hain. 
•	Kese kaam karti hai? 
o	Opposite Ends (Collision): Ek pointer shuru (left) se aur dusra aakhir (right) se 
o	move hota hai and center ki taraf aate hain. 
	Example: Sorted array mein pair sum dhoondna. 
•	Advantage: Yeh time complexity ko nested loops (O(n²)) se kam kr k linear time (O(n)) bna deta hai. 
________________________________________
Two Pointer Kab Use Karein?
1.	Jab array sorted ho (e.g., Two sum problem in sorted array). 
2.	Jab palindrome check karna ho (jese: "radar"). 
3.	Jab array/string ko reverse krna ho ya elements swap krne hon. 
________________________________________
Example Scenario
Problem: Agr hmein kisi sorted array mein 2 numbers ka sum target ke barabar chahiye:
1.	Left pointer index 0 se start. 
2.	Right pointer index last element se start or 2nd last index. 
3.	Agr arr[left] + arr[right] < target, so left ko aage krna (sum increase k liye). 
4.	Agr arr[left] + arr[right] > target, so right ko peeche krna (sum decrease k liye). 
Yeh technique complex problems ko simple, single-pass solutions mein convert kr deti hai.


Real life use case :
1 - Squaring a Sorted Array 
	2 pointer k darmiyaan calculation krna :
-	GPS/Maps   ---> Distance Calculation
-	Games   ---> Players Distance / Damage
-	ML  ---> Distance between data points

2 - Dutch National Flag Problem
	Categories mai divide krna
-	Task sriority system
-	Email sorting (spam / normal / important )
-	Products filter (cheap / medium / expensive)

3 - Minimum Window Sort
	Just jaha problem hai wohe part fix krna na k pura data manage krna – Example : books shelf mai books hain [1,2,5,4,3] is mai 5 and 3 fix nhi hain so sirf in 2 ko he fix kreinge na k pura shelf 
-	Stocks prices correction





