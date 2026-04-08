All DSA Problems Real Life Use Cases / Purpose =>
Sliding Window :

ye ek technique hai jo continuous subarray / substring ko efficiently process krne mai kam ati hai , is mai
hum ek window bnate hai array / string pr and window ko shrink / expand krte hain according to
condition and har step mai result calculate krte hain without reprocessing everything , hum isko use
krne ka asal maqsad hai nested loop ko avoid krna , jisy hmari time complexity mai bht difference ata
hai
1 - Longest Substring with 'K' Distinct Characters -> is mai hum longest substring find krte hain iska (use
case / real project) mai use hum for password bhi krte hain password ki strength check krne k liye woh
sb isi approach se hota hai and post pr hashtag limits captions lgana is se hi hota hai , duplication
detect krne k liye bhi that koi spam to nhi krha hai like msg koi send krta hai so if message mai kuch
percent words same hain so usko bhi detect kr lega ye.
2 - Fruits into Baskets -> is mai hum maximum fruits rkh skte hain real projects ki bat krein to e-commerce
mai history check krna sliding window se max 2 categories track krna ase hi bht se logics ho skti hain
with this approach.
________________________________________
Island (Matrix Traversal) :

ye hum use krte hain (Matrix) k har element tk jane k liye , row by row - column by column ya element k
neighbor tk jane k liye is ka use case:
1 - Number of islands -> Matrix mai connected regions ko count krna jitne connected hain woh island
bnte hain single bhi hoga to island mai count hoga jese mere pas matrix hai us mai 2 trah k numbers hain
(1 and 0) ab 1 mere pas land hai and 0 is water so 1 jaha bhi hoge and woh connected hain so woh pura
island bnega if single hai 1 koi connect nhi hai so woh bhi island hoga , iska use case : area detect krne
mai ata hai like kitna forest , traffic , water , island wala hissa hai hum jese maps mai dekhte hain agr
traffic jam hota hai so show hota hai ye sb isi approach se hota hai and medical softwares mai bhi use
hota hai.
2 - Flood fill -> Connected areas pr krna , jese matrix ki bat ki to yaha jo connected hoge un pr kam krna
jese editing app hai hum ek area choose kr k waha color fill krte hain to pura connected / chosen area
mai color aa jata hai ase jaha hmein connected areas mai kch krna ho color fill , color change ya game
development mai bat krein to waha map fill krna coloring etc ye sb krne mai hum flood fill approach use
krte hain.
3 - Cycle in a matrix : matrix mai loop detect krna that check krna k starting path loop mai to nhi arha
like apna circle khatm kr k dobara same point pr to nhi arha iska use case hum networking mai bhi dekhte
hain jb data packets mai ata hai so bht sa data asa hota hai jo dobara jakr arha hota hai , ase cases ajate
hain jis mai chunks 0-0-0-1-1-0 ase aty hain jis se loop detect ho jata hai.
________________________________________
Two Pointers :

ye hum use krte hain sorted data aur calculations k liye is se hum 2 pointers ka use kr k kam krte hain jis
se time complexity pr bht acha farq ata hai
like agr mere pas 10000 ka data hai mujhe is mai se ek data chahiye ho skta hai woh 700 pr ho ya 300 pr
ho so agr hum sirf left ya right se find krein ge to time zyada lgega yehi kam hum 2 pointers lekr krein
left and right so hum us se half aur kbhi kbhi half n half time mai kr lenge
is k kch real scenarios / problems hain :
1 - Squaring a sorted array -> yaha hmein ek array hai usko square mai krna hai har values ko convert
krna hai square se ye aksr kam ata hai weather conditions mai and bht si jgah jaha hmare pas data hota
hai but humein kbhi kbhar usko different angle se dekhna hota hai jese weather mai mujhe (celsius) by
default hai but mujhe isko (fahrenheit) mai dekhna hai so mai 2 pointer pakr lunga jise easily ho jaye
2 - Dutch national flag problem -> ye problem bht common hai ye flag k upar hai jis k 3 different colors
hoty hain yehi sequence pr hum kam krte hain like hum apne data ko 3 parts mai rkhte hain jese hmare pas
emails hoti hain us k andar (imp - spam - normal) is trah ki hoti hain to ye sb ek sath aayenge to smjh nhi
aayega konsi kse read kre is liye approach krte hain that ye sb separate aayen ya koi bhi asa data jo
hmein separate krna ho
3 - Minimum window sort -> yaha hmein asi problem face hoti hai jaha sb data to ok hai bs kch nhi hai ho
skta woh starting mai ho ya mid mai ya end pr to ab hum sara data to set nhi krege time lgega and bht sa
delay ho skta hai so hum usi part ko fix kreinge jo sequence se nhi arha ye use case aksr data fetching ,
network mai ata hai jaha sb sahi arha but kch jgah bugs ajate to hum sb nhi krte fix bs us part ko krte
hain jo sequence se out hai.
________________________________________
Fast & Slow Pointers :

ye hum use krte hain for finding loop , duplications and middle find krna (linked-list / array) is mai hum
fast and slow pointer ka use krte hain
example mere pas ek road hai 10km ka and 2 cars hain ek slow hai and ek fast , fast slow se double hai
like slow is 100kph so fast is 200kph mere pas straight road hai yaha zahir hai dono kbhi milege hi nhi
even fast to apni end point chala jaye ga but agr road circular ho yani ground ho so yaha koi end point
nhi hai and lazmi dono cars apas mai milegi asa point ayega jaha dono same place pr honge
1 - Middle of the linkedlist -> is mai hum linked list ka middle find krte hain ye krte is liye hain jese
mere pas agr ek playlist hai ya ek large data hai agr usko ek sath layege to time lega is liye uska middle
find kr k usko 2 halves mai kr dete hain k data find krne mai pehle se kam time lge example mere pas ek
list hai us mai 1000 data hai agr 1000 data mai se kch lane ki try kre to 1000 ko hi find krega agr isko
hum 2 mai divide kr dein ge to hmein us k half time lgega , approach yaha fast slow ase work krti hai k
fast jitna hoga uska half data ka mid point hoga.
2 - Happy number -> yaha hmein data ko happy rkhna hota hai yani yaha hmein find krna hota hai k kahi
(loop / circle) to nhi , is mai hum loop ko avoid kr rhe hoty hain aur yaha jaha bhi hmein loop detect
hota hai hum usko avoid krne ki krte hain bcz loop ayega to end point hi nhi milega but ye un cases mai
hai jaha hmein avoid krna hai bht si asi cases hoty hain jaha loop must hota hai , approach yaha fast
slow ki asi hoti hai agr fast slow se meet ho gaye / detect ho gaya so means that loop / circle hai yaha.
3 - Cycle in a circular array -> yaha bhi hmein (happy number) ki trah loop detect krna hota hai but yaha
hum avoid nhi krte sirf detect krte hain bcz yaha wale case mai loop ayega hi ayega hum bs find kr rhe
hoty hain k loop (kaha aya , kb kb aya) , example ek circle hai waha ek player hai woh kbhi kuch steps
forward kbhi backward like (+2 , -1 , +3 , -2) ase so hmein bs loop detect krna hai but avoid nhi krna.

