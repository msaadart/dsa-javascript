// Arrays =>
// 1 -> Sorting concept and Comparison =>



// price = [100, 300, 400, 50, 30, 210, 90];

// lowPrice = price.sort((a, b) => a - b);
// console.log("low to high price");
// for (let i = 0; i < lowPrice.length; i++) {
//     console.log(lowPrice[i])
// }

// highPrice = price.sort((a, b) => b - a);
// console.log("high to low price");
// for (let i = 0; i < highPrice.length; i++) {
//     console.log(highPrice[i])
// }



// 2 -> Sorting concept and Comparison =>

// let arr = [3, 5,6, 4, 6, 1];
// arr.sort((a, b) => a - b);

// let target = 7;
// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//     let sum = arr[left] + arr[right];

//     if (sum === target) {
//         console.log("pair found [", arr[left], arr[right], "] =", sum)
//         break;
//     } else if (sum < target) {
//         left++;
//         console.log("left++")
//     } else {
//         right--;
//         console.log("right--")
//     }
// }



// Palindrome =>

// function palindrome(str) {
//     let left = 0
//     let right = str.length - 1

//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false
//         }

//         left++
//         right--
//     }
//     return true
// }
// console.log(palindrome("oppo"))



// Swapping =>

// let arr = [1, 2, 3, 4, 5, 6]

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {

//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
// }

// console.log(arr);