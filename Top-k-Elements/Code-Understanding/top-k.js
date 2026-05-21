// ////// top k elements in an array by heap - (largest)
function minHeap(arr, n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }
    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    } if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        minHeap(arr, n, smallest);
    }
}
function topkElements(arr, k) {
    for (let i = Math.floor(k / 2) - 1; i >= 0; i--) {
        minHeap(arr, k, i);
    }
    for (let i = k; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
            arr[0] = arr[i];
            minHeap(arr, k, 0);
        }
    }
    return arr.slice(0, k);
}
let arr = [3, 2, 14, 3, 5, 9, 10];
let k = 3;
let result = topkElements(arr, k);
let output = result.sort((a, b) => a - b);
console.log(output);



// ////// top k elements in an array by heap - (smallest)
    // function maxHeap(arr,n,i){
    //     let largest = i;
    //     let left = 2 * i + 1;
    //     let right = 2 * i + 2;

    //     if(left < n && arr[left] > arr[largest]){
    //         largest = left;
    //     }
    //     if(right < n && arr[right] > arr[largest]){
    //         largest = right;
    //     }
    //     if(largest !== i){
    //         [arr[i] , arr[largest]] = [arr[largest] , arr[i]];
    //         maxHeap(arr , n , largest)
    //     }

    //     function topKElement(arr,k){
    //         for(let i = Math.floor(k/2) - 1; i >=0; i--){
    //             maxHeap(arr,k,i);
    //         }
    //     }
    // }