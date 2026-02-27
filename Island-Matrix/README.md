Island (Matrix Traversal)!
What is Island (Matrix Traversal)? 

=>  Island (Matrix Traversal) ek problem solving technique / pattern hai : 
•	Hmare pas 2D matrix (Grid) hoti hai 
•	Kuch cells “on / land / 1 / true” hoty hain
•	Kuch cells “off / water / 0 / false” hoty hain
•	Hum connected positive cells (on / land / 1 / true) ko group krte hain
•	Jo positive cells apas mai connected ho (top , bottom , left , right) se ye sb milkr island bnate hain

Example:

1	0	1	1	0
0	1	1	1	0
1	1	0	1	0
1	0	0	1	0
1	0	1	0	0

Why we use?
=>	Is approach ka purpose :
•	2D grid k andr connected areas ko dhoondna 
•	Count krna 
•	Size nikalna
•	Process / fill / mark krna
•	Grid k andr jo chezein aps mai connected ho , unko efficiently identify and handle krna

Real project use cases?
=>	Maps & Location-based Systems
Example: Flood areas , forest regions , city blocks ko identify krna
•	Map ko grid kit rah treat kia jata hai
•	Connected areas = one region
•	System pura connected area detect krta hai (flooded zone , traffic zone etc)

=>	Image Processing / Photo Editing Tools
Example: Select similarity
•	Image = matrix of pixels
•	Jaha click kia , us se connected similar color k pixels select hojate hain
•	Yeh exact island traversal (flood fill) technique hai

=>	Game (Map and Level Logic)
Example: Walk-able areas, blocked regions, flood fill effects 
•	Game map = 2D grid
•	Connected walk-able cells = one region
•	Maloom hota hai k konsa player kaha move kr skta hai konsa area isolated hai




