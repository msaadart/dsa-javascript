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

let arr = [1, 3, 4, 2, 5, 9, 8, 7, 6];

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;


    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        heapify(arr, n, largest);
    }
}

function buildHeap(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

console.log("Original Array:", arr);
buildHeap(arr);
console.log("Max-Heap Array:", arr);