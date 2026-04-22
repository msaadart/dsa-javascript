// let slr = 80000;
// let perc = 15;
// let count = 0;
// let outerIncrease = 0;

// console.log("starting salary :", slr)
// while (slr < 150000) {
//     let increase = (slr * perc) / 100;
//     slr = slr + increase;
//     outerIncrease = increase;
//     count++;

//     console.log("increase :", Math.round(increase));
//     console.log("after increased :", Math.round(slr));
// }
// console.log("how many times increased (15%) salary :", count);
// console.log("total salary :", Math.round(slr * 12 * count), "in", count * 12, "months");
// console.log("total increament :", Math.round(outerIncrease * 12 * count));



/// -- HEAP , HEAPIFY , CBT -- ///

// 1 function -> comparsion and swapping 

// let arr = [33, 54, 65, 12, 28, 67, 80, 11, 109];

// function heapify(arr, n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if (left < n && arr[left] > arr[largest]) {
//         largest = left;
//     }
//     if (right < n && arr[right] > arr[largest]) {
//         largest = right;
//     }
//     if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, n, largest);
//     }
// }

// function buildHeap(arr) {
//     let n = arr.length;
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }
// }
// console.log("Original Array :", arr);
// buildHeap(arr);
// console.log("Max-Heap Array :", arr);

// problem 1 -- ///

function canAttendAll(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);


    for (let i = 1; i < intervals.length; i++) {
        let prev = intervals[i - 1];
        let curr = intervals[i];

        if (curr[0] < prev[1]) {
            return false;
        }
    }

    return true;
}

console.log(canAttendAll([
    [4, 5],
    [5, 6],
    [7, 9]
]));