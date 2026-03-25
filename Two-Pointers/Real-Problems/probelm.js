// Problems //

// 1 - Squaring a Sorted Array
let arr = [-2, -4, 9, -1, 8, 12];
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
console.log(res)