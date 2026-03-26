// Problems //

// 1 - Squaring a Sorted Array
let arr = [3, -4, 9, -1, 8, 12];
// let arr = [-4, -1, 3, 8, 9, 12];
// arr.sort((a, b) => a - b)

let left = 0;
let right = arr.length - 1;
let res = new Array(arr.length);
let i = arr.length - 1;

while (left <= right) {
    let leftSquare = arr[left] * 9 / 5 + 32 + "F";
    let rightSquare = arr[right] * 9 / 5 + 32 + "F";

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