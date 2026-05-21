
// let arr = [1, 2, 3, 4, 2, 1];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if ((arr[i] ^ arr[j]) === 0) {
//             // console.log("duplicate", arr[i], arr[j])
//         } else {
//             console.log("not duplicate", arr[i] , arr[j])
//         }
//     }
// }


/////// APPROACH BY SET() METHOD -->
// let arr = [1, 2, 3, 4, 2, 1];
// let unique = new Set();

// for (let i = 0; i < arr.length; i++) {
//     let crntNumber = arr[i];

//     if (unique.has(crntNumber)) {
//         unique.delete(crntNumber);
//     }
//     else {
//         unique.add(crntNumber)
//     }
// }

// let result = Array.from(unique);
// console.log(result)





/////// APPROACH BY XOR OPERATOR METHOD -->
// let arr = [1, 2, 3, 4, 2, 1];
// let xorResult = 0;

// for (let i = 0; i < arr.length; i++) {
//     xorResult = xorResult ^ arr[i];
// }

// let xorBit = xorResult & -xorResult;

// let num1 = 0;
// let num2 = 0;

// for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] & xorBit) !== 0) {
//         num1 = num1 ^ arr[i];
//     } else {
//         num2 = num2 ^ arr[i];
//     }
// }
//     console.log(num1, num2);    




/////// APPROACH BY MAP / HASHMAP METHOD -->
// let arr = [1, 2, 3, 4, 2, 1];
// let map = {};

// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (map[num]) {
//         map[num] += 1;
//     }
//     else {
//         map[num] = 1;
//     }
// }
//     let result = [];
//     for(let key in map){
//         if(map[key] === 1){
//             result.push(Number(key));
//         }
//     }
//     console.log(result);



/////// 2nd sample problem -->
let image = [
    [1, 0, 0],
    [0, 1, 1],
    [1, 1, 0]
];

for (let i = 0; i < image.length; i++) {

    // image[i].reverse();
    let left = 0;
    let right = image[i].length - 1;

    while (left < right) {
        [image[i][left], image[i][right]] = [image[i][right], image[i][left]];

        left++;
        right--;
    }

    // for (let j = 0; j < image[i].length; j++) {
    //     if (image[i][j] === 0) {
    //         image[i][j] = 1;
    //     } else {
    //         image[i][j] = 0;
    //     }
    // }
    for (let j = 0; j < image[i].length; j++) {
        image[i][j] = image[i][j] ^ 1;
    }
}
console.log(image);