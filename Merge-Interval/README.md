Merge Intervals
Merge Intervals ek DSA concept hai jahan hum overlapping intervals ko combine karte hain.
	Simple meaning 
Agar multiple times ranges ya intervals overlap kar rahe hon, to unko merge karke ek clean non-overlapping list banana.
Key idea:
•	Intervals ko sort karna (start time ke basis par) 
•	Overlapping intervals ko detect karna 
•	Unko merge karke ek single interval banana 
Example:
Intervals:
(1,3), (2,6), (8,10)
Merged form:
(1,6), (8,10)
Yahan (1,3) aur (2,6) overlap ho rahe the, is liye merge ho gaye.
________________________________________
Why we use it? (Purpose + Importance)
Merge Intervals ka main purpose data ko clean and organized banana hota hai.
Importance:
•	Overlapping data ko simplify karta hai 
•	Conflicts detect karne mein help karta hai 
•	Efficient scheduling possible banata hai 
•	Memory aur processing dono optimize hoti hain 
Simple meaning:
Jab data messy ho (overlapping time slots), to usko clean structure mein convert krna.
________________________________________
Where we use it? (DSA + Interview Usage)
DSA aur interviews mein Merge Intervals bht common topic hai.
Use cases:
•	Arrays and sorting problems 
•	Greedy algorithms 
•	Scheduling problems 
•	Interval-based reasoning 
Interview importance:
•	Amazon, Google, Microsoft jaisi companies frequently poochti hain 
•	Logic + sorting + edge cases test hotay hain 
________________________________________
Real Life Use Case
Merge Intervals ka direct ya indirect use har jagah hota hai:
1.	Meeting schedules:
Agar 2 meetings overlap kar rahi hain, system unko merge karke conflict avoid karta hai. 
2.	Calendar apps:
Google Calendar jaise apps overlapping events ko manage karte hain. 
3.	Hospital appointments:
Doctors ke time slots overlap na hon, is ke liye merge/conflict detection hota hai. 
Indirect idea:
System ko smart banana taake duplicate ya conflicting time slots handle ho saken.
________________________________________
Problems based on this topic
________________________________________
Problem 1: Conflicting Appointments
Statement:
Aapko ek list di gayi hai jisme multiple appointments k start aur end time diye gaye hain. Aapko check karna hai ke koi bhi appointments ek dusre se overlap to nahi kar rahi.
Agar koi bhi overlap mil jaye so usy conflict kehte hain.
________________________________________
Example:
Appointments:
(9, 11), (10, 12), (13, 15)
Explanation:
•	(9,11) and (10,12) overlap kar rahe hain 
•	Is liye conflict exist krta hai 
Result:
Conflict found
________________________________________
Concept Explanation:
Is problem mein hum:
•	Intervals ko compare karte hain 
•	Check karte hain ke current interval ka start previous ke end se chhota to nahi 
•	Agar haan, to overlap exist karta hai 
Yeh basically Merge Intervals ka reverse concept hai (merge nahi karna, sirf detect karna hai).
________________________________________
Problem 2: Not Provided
Agar aap chaho to main is topic par aur problems add kar sakta hoon jaise:
•	Merge Overlapping Intervals 
•	Insert Interval 
•	Minimum Number of Meeting Rooms 
________________________________________
Purpose of these problems (What skill they teach)
In problems se yeh skills develop hoti hain:
•	Sorting + comparison logic 
•	Greedy decision making 
•	Edge case handling 
•	Time interval reasoning 
•	Pattern recognition (overlap detection) 
Simple words:
Soch ko structured aur logical banana seekhte hain.
________________________________________
Real Project Connection
Merge Intervals concept real systems mein indirectly use hota hai:
1.	Task Scheduling Systems
System decide karta hai kaunse tasks overlap kar rahe hain. 
2.	Booking Platforms (flights, hotels)
Double booking avoid karne ke liye intervals check hote hain. 
3.	Time tracking apps
Work hours merge karke total working time calculate hota hai. 
4.	Database systems
Time-based queries optimize karne ke liye interval merging use hoti hai. 

