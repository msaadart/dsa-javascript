// Problems //

// 1 - Squaring a Sorted Array

let arr = [-4, -2, 7, 8, 11];

let left = 0;
let right = arr.length - 1;
let result = new Array(arr.length);
let i = arr.length - 1;

while (left <= right) {

    let leftSquare = arr[left] * arr[left];
    let rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
        result[i] = leftSquare;
        left++;
    } else {
        result[i] = rightSquare;
        right--;
    }

    i--;
}
console.log(result);