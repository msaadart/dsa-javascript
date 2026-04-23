let arr = [2, 4, 1, 3, 6];
arr.sort((a, b) => a - b)

function missingNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return arr.length + 1;
}

let output = missingNumber(arr);
console.log(output);