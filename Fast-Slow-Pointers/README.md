Fast & Slow Pointers (Hare & Tortoise)
Is ko Floyd’s Cycle-Finding Algorithm bhi khete hain bcz is mai hum ek (linked-list) mai ye check krte hain k kahi loop ya circle to nhi hai.
Example =>
Hmare pas 2 scenario hai :
1 – Flat race track :  hmare pas 2 cars hain ek ki speed 100km and ek ki 200km so fast wali pehle track khtm kregi bcz it has double speed than slow car.
2 – Circle race track : hmare pas same case hai but is mai koi end point nhi hai yaha asa lazmi hoga k dono cars apas mai connect / kareeb se jaye doesn’t matter speed kia hai agr fast agy jati hai so asa point lazmi ayega k woh apna circle khtm kr k slow ko overtake kregi yani yaha loop create hoga.
Output =>
Case 1 mai koi loop nhi but case 2 mai loop ho skta hai possibility hai so hmein fast and slow pointers mai yehe check krna hota hai k kahi loop ya circle to nhi arha.

Real Use Cases =>
	1 - Middle of Linked List  - (Fast/Slow se Linked list ka middle efficiently find krna):
•	Playlist / Media apps: Playlist ko divide krna midpoint find kr k.
•	Data Processing: Data ko chunks mai lekr ana / 2 halves mai lekr ana.

	2 - Happy Number - (Loop detection in sequence):
•	OPT / ID Generations: Ensure k numbers repeat na ho.
•	Algorithm validations: Infinite loop validations
