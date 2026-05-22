------------------------------------K-Way Merge---------------------------------

What is K-Way Merge:
K-way merge means that ek time pe multiple sorted lists/arrays ko merge krna and final sorted output bnana.
•	K = number of arrays/lists
•	Merge = combine krna
Example:
Array 1 = [1, 4, 7]
Array 2 = [2, 5, 8]
Array 3 = [3, 6, 9]	
[1,2,3,4,5,6,7,8,9]	Total arrays = 3 means that k = 3

Difference Between Normal Merge and K-Way Merge:
Normal Merge	K-Way Merge
Sb arrays ko combine kro then sort kro, so isse time complexity bht zyada hojaye gi.
Especially:
•	large data 
•	servers 
•	databases 
•	millions of records

Time Complexity: O(N log N)
	Is case mai hum heap use krte hain and priority (min heap) ko dete hain bcz heap hmein smallest value instantly deta hai.
How to work:
Sb array k 1st element heap mai dalo then smallest find kro ab jo smallest aya us he array mai jakr 2nd element nikalo and ye cycle chlegi.

Time Complexity: O(N log K)


What is the main purpose:
Multiple sorted data ko efficiently combined krna without sorting again.
Why We Use K-Way Merge:
Time complexity best / data fast hota hai.
Especially:
•	Data already sorted ho
•	Data kafi large ho
•	Memory limited ho


Real Project Use Cases:
•	Databases:
1.	MySQL
2.	MongoDB
                     Large sorted files merge rkhte hain

•	Hospital Project:
1.	Karachi hospital ka sorted patient log 
2.	Lahore hospital ka sorted log 
3.	Islamabad hospital ka sorted log
Real Life Analogy:
Imagine we have 3 lines:
Line A → sorted people
Line B → sorted people
Line C → sorted people
Hmien shortest person to longest person single line bnani hai 
Steps:
1.	Sb se pehle hum hur line ka first person compare kreinge 
2.	Shorest ko final line mai bhejein ge
3.	Jis line ka shortest find hua us he line se next person leinge 
4.	Cycle repeat
