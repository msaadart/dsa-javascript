// my own logic // start

// let busWindow = [10, 20, 30, 40, 50];
// let k = 3;

// for (let i = 0; i <= busWindow.length - k; i++) {
//     let sum = 0;
//     for (let j = i; j < i + k; j++) {
//         sum += busWindow[j]
//     }
//     console.log(sum);
// }
// my own logic //  end


// sliding window technique - sum , count , min and max //


let daysProfit = [50, 20, 40, 80, 10, 30, 40];

function func(k) {
    let sum = 0;
    let max = 0;
    let min = 0;
    let count = 0;

    for (let i = 0; i < k; i++) {
        sum += daysProfit[i];
    }
    console.log("initial window :", sum);

    min = sum;
    max = sum;

    for (let j = k; j < daysProfit.length; j++) {
        sum = sum + daysProfit[j] - daysProfit[j - k]
        count = j - k + 1;
        min = Math.min(min, sum);
        max = Math.max(max, sum);
        console.log("sliding window : ", sum);
    }
    console.log("min window : ", min);
    console.log("max window : ", max);
    console.log("sliding count : ", count);

}
func(3);







// subString --
// largest substring without repeating character // DEMO // ->

// var longestSubString = function(str) {
//     let left = 0;
//     let maxLength = 0;
//     let charSet = new Set();

//     for (let right = 0; right < str.length; right++) {

//         while (charSet.has(str[right])) {
//             charSet.delete(str[left]);
//             left++
//         }
//         charSet.add(str[right]);
//         let crntWindowSize = right - left + 1;
//         if (crntWindowSize > maxLength) {
//             maxLength = crntWindowSize;
//         }
//     }
//     return maxLength;
// }
// console.log('longest substring is :', longestSubString('aioaeoiu'));





// var totalFruit = function(fruits) {
//     let left = 0;
//     let maxFruits = 0;
//     let basket = new Map();

//     for (let right = 0; right < fruits.length; right++) {

//         let rightFruit = fruits[right];
//         basket.set(rightFruit, (basket.get(rightFruit) || 0) + 1)

//         while (basket.size > 2) {
//             let leftFruit = fruits[left];
//             basket.set(leftFruit, basket.get(leftFruit) - 1);

//             if (basket.get(leftFruit) === 0) {
//                 basket.delete(leftFruit);
//             }
//             left++
//         }
//         maxFruits = Math.max(maxFruits, right - left + 1);
//     }
//     return maxFruits;
// }
// console.log(totalFruit([1, 1, 2, 2, 3, 3]))







// hashing //  start

// let data = [10, 27, 34, 55, 83, 99, 41, 62, 96, 18];
// let tableSize = 10;
// let table = new Array(tableSize);

// for (let x = 0; x < data.length; x++) {
//     let value = data[x];
//     let index = value % tableSize;

//     table[index] = value;
// }
// console.log(table);
// end

//
// const names = ["farjad", "ebad", "saif", "ali", "mustajab"];
// console.log(names.map((name) => name.length));