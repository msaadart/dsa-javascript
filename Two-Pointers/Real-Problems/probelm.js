// Problems //

// 1 - Squaring a Sorted Array
// let arr = [3, -4, 9, -1, 8, 12];
// // let arr = [-4, -1, 3, 8, 9, 12];
// // arr.sort((a, b) => a - b)

// let left = 0;
// let right = arr.length - 1;
// let res = new Array(arr.length);
// let i = arr.length - 1;

// while (left <= right) {
//     let leftSquare = arr[left] * 9 / 5 + 32 + "F";
//     let rightSquare = arr[right] * 9 / 5 + 32 + "F";

//     if (leftSquare > rightSquare) {
//         res[i] = leftSquare;
//         left++
//     } else {
//         res[i] = rightSquare
//         right--
//     }
//     i--;
// }

// console.log(res);


// 2️ - Dutch National Flag Problem

// let arr2 = ["spam", "imp", "imp", "ib", "ib", "spam", "imp", "ib", "ib", "spam", "imp", "imp"];
// let low = 0;
// let mid = 0;
// let high = arr2.length - 1;

// while (mid <= high) {
//     if (arr2[mid] === "spam") {
//         [arr2[low], arr2[mid]] = [arr2[mid], arr2[low]]
//         low++;
//         mid++;
//     } else if (arr2[mid] === "ib") {
//         mid++;
//     } else {
//         [arr2[mid], arr2[high]] = [arr2[high], arr2[mid]]
//         high--;
//     }
// }

// console.log(arr2)

// history / all - > "spam", "imp", "imp", "ib", "ib", "spam", "imp", "ib", "ib", "spam", "imp", "imp"
// screen - > "spam", "imp", "imp"
// inbox - >
// important - >
// spam - >


// let prices = [1, 2, 5, 3, 4]; // 1 2,3,4,5
// let left = 0;
// let right = prices.length - 1;

// while (left <= right) {
//     if (prices[left] > prices[right]) {
//         [prices[left], prices[right]] = [prices[right], prices[left]];
//         left++;
//     } else {
//         right--
//     }
// }

// console.log(prices)