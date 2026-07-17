
//// Ceil of a number 

// function ceilSearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let ans = -1;

//     while (left <= right) {
//         let mid = Math.ceil((left + right) / 2);

//         if (arr[mid] === target) {
//             return arr[mid];
//         }
//         else if (arr[mid] > target) {
//             ans = arr[mid];
//             right = mid - 1;
//         }
//         else {
//             left = mid + 1;
//         }
//     }
//     return ans;
// }
// console.log(ceilSearch([2, 4, 6, 8, 10, 12], 9));
//// searching for bookings , search in ecommerce and etc


//// Bitonic Array Maximum

function bitonicMax(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return arr[left];
}

console.log(bitonicMax([1, 3, 8, 4, 2]));
//// searching for stocks marketing , finding the peak point in a mountain array and etc