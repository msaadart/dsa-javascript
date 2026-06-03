------Longest Common Substring
What is longest common substring?
When we have 2 different strings and un dono strings mai se longest continuous ek jesa nikalein so
it’s called “Longest Common Substring”.
 Hum Subsequence mai characters skip kr skte thy but Substring mai asa nhi krte is mai
characters ka apas mai consecutive hona lazmi hai, we can’t skip the character.
Example:
 String1 = “abcdef”
 String2 = “zbcdge”
Is mai hamra pas longest substring “bcd” hai, hum “bcde” nhi kr skte because hmein 2nd string mai
“g” skip krna hoga and hmein skip nhi krna hmein continuous he chlna hai.


What is the purpose?
Iska purpose 2 different data files, codes, ya words k beech mai exact match and continuous pattern
find krna hota hai. Yeh computer ko ye btata hai that ye 2 different dikhne wali file mai se konsa
block apas mai match hota hai.


Why we use and where we use?
Hum isko waha use krte hain jaha hmara purpose same text/code/characters ko spot krna ho, 2
different data ko apas mai change hone se rokna, yaa data mai se exact copy-paste find krna ho.


Real Project Use Cases?
1. Plagiarism Detection Tools:
 Use case: Jb hum koi bhi assignment bnate hai ya article likhte hai so Turnitin and Copyleaks
jese software check krte hain that apne internet se copy taw nhi kia.
 How to work: Ye software hmare paragraph and internet pr mojood lakhoo articles k
darmiyan Longest Common Substring use krte hain. Agr 10 se 15 continuous words detect
hojate hain so software smjhata hai that ye copy-paste hai and woh highlight krdeta hai.