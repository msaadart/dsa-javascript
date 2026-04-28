// Problems //

// // 1 - Squaring a Sorted Array
let arr = [3, -4, 9, -1, 8, 12];
arr.sort((a, b) => a - b)

let left = 0;
let right = arr.length - 1;
let res = new Array(arr.length);
let i = arr.length - 1;

while (left <= right) {
    let leftSquare = arr[left] * arr[left];
    let rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
        res[i] = leftSquare;
        left++
    } else {
        res[i] = rightSquare
        right--
    }
    i--;
}

console.log(res);


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





// let arr = [1, 2, 4, 3, 5];
// let left = 0;
// let right = arr.length - 1;

// while (left < arr.length - 1 && arr[left] <= arr[left + 1]) {
//     left++;
// }
// while (right > 0 && arr[right] >= arr[right - 1]) {
//     right--;
// }

// if (left === arr.length - 1) {
//     console.log(0);
// } else {

//     let min = Infinity;
//     let max = -Infinity;

//     for (let i = left; i <= right; i++) {
//         if (arr[i] < min) min = arr[i];
//         if (arr[i] > max) max = arr[i];
//         console.log(arr[i])
//     }

//     while (left > 0 && arr[left - 1] > min) {
//         left--;
//     }
//     while (right < arr.length - 1 && arr[right + 1] < max) {
//         right++;
//     }

//     console.log("Window:", left, "to", right);
// }