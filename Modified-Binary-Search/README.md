<!-- -------------------------------------Modified Binary Search ------------------------------------- -->
	
What is Modified Binary Search (Definition): 
Ye ek algorithm hai jism ai hum data ko find / search / filter krte hai and ye mostly array pr use hota hai.

What is the purpose: 
Iska use krne ka purpose ye hai k ye data ko one by one  search / find / filter nhi krta, ye data ko half half krta hua chlta hai agr 100000 data hai to maximum ye 20 bar chlega means that 20th attempt mai to output mil he jayega.

What is the (Time Complexity): 
Is algorithm ki Time Complexity “O (log n)” hai.

Rules: 
Data sorted hona chaiye because ye sorted mai he chlega wrna nhi chlega, if data sorted nhi hai and we use sorting method so iski time complexity slow hojayegi.
•	Sorting time complexity = O(n log n).
•	Algorithm time complexity = O(log n).
•	Sorting + Algorithm time complexity = O(n log n).
                                        
What is the (Time Complexity): 
Is algorithm ki Time Complexity “O(log n)” hai.


<!-- Approaches and Use Cases:  -->

1)	Ceiling of a Number
•	E-Commerce (Price Filters)
•	Inventory aur Packaging (Size Matching)
•	Finance aur Tax Brackets
•	Bus ya Train Timings

2)	Bitonic Array Maximum
•	Stock Market / Crypto
•	Signal Processing (ECG/Heartbeat)
•	Sensors & IoT
•	Sound Systems


<!-- Code Practice (JS): -->

<!-- Code 1 (Simple Modified Binary Search): -->

function modified(arr, target) {  
    arr.sort((a,b) => a-b);       
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(modified([1,2,4,6,7,8,10], 7));

 
<!-- Code 2 (Ceiling of a Number): -->

function ceilSearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target){
            return arr[mid];   
        } 
        else if(arr[mid] > target){
            ans = arr[mid];
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    } 
    return ans;
}
console.log(ceilSearch([2,4,6,11,8,13,15], 10));
 
<!-- Code 3 (Bitonic array maximum): -->

function bitonicMax(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return arr[left];
}

console.log(bitonicMax([1, 3, 8, 4, 2]));   
 
<!-- Code 4 (Check that Bitonic is possible here): -->

function isBitonic(arr) {
    let n = arr.length;
    let i = 0;

    while (i < n - 1 && arr[i] < arr[i + 1]) {
        i++;
    }

    if (i === 0 || i === n - 1) return false; 

    while (i < n - 1 && arr[i] > arr[i + 1]) {
        i++;
    }

    return i === n - 1;
}   

