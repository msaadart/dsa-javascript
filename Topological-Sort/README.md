-----------Topological Sort

What is topological sort?
Topological Sort kisi Directed Acyclic Graph (DAG) k sary nodes (points) ko ek aisi straight line (linear order) mai lagane ka naam hai, jahan agr koi arrow (A right arrow B) ja raha hai so line mai hmesha A pehle ayega and B baad mai.

What is the purpose?
•	Dependencies Ko Handle Krna: Jb hmare pas bht sary aisy kaam ho jo ek dusre pr depend krte hoo, so hum confuse ho jate hai that start kahan se krein. Topological Sort ka purpose he us confusion ko khtm krna hai and ek sahi step-by-step approach dena hai.
•	Deadlocks Se Bchna: Agr flow aps mein ghoom kr ek dusre par depend karne lagein (cycle ban jaye), so ye algorithm at the time return kr deta hai that "it’s not possible"

Real life project use cases?

1.	Software packages installations
Jb hum koi new software installs krte hain so us mai bh dependencies ati hain
•	Example: If hmein Package A download krna hai so Package A depend hai Package B pr and Package B depend hai Package C pr.
•	Topological Sort: Ye backend pr map bnata hai and hmare compute ko sequence deta hai that pehly ye install kro phr ye (Package C ---- Package B ---- Package A).

2.	University Course Registration System
Har degree mai kch pre-requisite courses hote hain.
•	Example: Hum Data Structure tb tk nhi prh skte jb tk hum Programming Fundamental nhi prhlein.
•	Topological Sort: University ka software is algorithm ko use kr k hmare 4 saal k course ka roadmap bnata hai that konse courses kis semester mai prhna hai.



