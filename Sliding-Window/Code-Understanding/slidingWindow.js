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


// sliding window technique - sum ,count, , min and max //


// let venue = [12, 14, 3, 11, 8, 9, 21, 16];

// function monthlyVenues(k) {
//     let sum = 0;
//     let min = 0;
//     let max = 0;
//     let tWindow = 0;
//     let sWindow = 0;

//     for (let i = 0; i < k; i++) {
//         sum += venue[i];
//     }
//     console.log("initial", sum)

//     min = sum;
//     max = sum;

//     for (let j = k; j < venue.length; j++) {
//         sum = sum + venue[j] - venue[j - k]
//         console.log("sliding", sum)
//         min = Math.min(min, sum);
//         max = Math.max(max, sum);
//         tWindow = j - 1;
//         sWindow = j - k + 1;
//     }
//     console.log("min", min)
//     console.log("max", max)
//     console.log("t window", tWindow)
//     console.log("s window", sWindow)
// }
// monthlyVenues(3)



// subString --
// largest substring without repeating character // DEMO // ->


// function largest(str) {
//     let left = 0;
//     let maxLength = 0;
//     let charSet = new Set();

//     for (let right = 0; right < str.length; right++) {
//         while (charSet.has(str[right])) {
//             charSet.delete(str[left])
//             left++
//         }
//         charSet.add(str[right]);
//         let windowSize = right - left + 1;
//         if (windowSize > maxLength) {
//             maxLength = windowSize
//         }
//     }
//     return maxLength;
// }
// console.log("largest substring window size is", largest("aioaaue"));






// function totalFruit(fruits) {
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


// let allCities = ["Karachi", "Lahore", "Karachi", "Islamabad", "Lahore", "Karachi"];

// let cityCount = new Map();

// allCities.forEach(city => {
//     if (cityCount.has(city)) {
//         cityCount.set(city, cityCount.get(city) + 1)
//     } else {
//         cityCount.set(city, 1)
//     }
// });
// console.log(cityCount)