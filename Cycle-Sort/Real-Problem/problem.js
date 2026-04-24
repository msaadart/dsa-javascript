// 1-- - find the missing numbers-- - //

// let arr = [2, 3, 5, 8, 1, 4, 7];
// arr.sort((a, b) => a - b);

// function missingNumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== i + 1)
//             return i + 1;
//     }
// }
// let output = missingNumber(arr);
// console.log("missing number", output);




// 2-- - find the duplicate numbers-- - //

let arr2 = [1, 2, 3, 2, 2, 5, 4, 5];
arr2.sort((a, b) => a - b);

function duplicate(arr2) {
    let result2 = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === arr2[i + 1]) {
            result2.push(arr2[i]);
        }
    }
    return result2;
}
let output2 = duplicate(arr2);
console.log("duplicate numbers", output2);