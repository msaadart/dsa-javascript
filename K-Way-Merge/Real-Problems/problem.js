// function kWayMerge(arrays, k){

//     let result = [];
//     let heap = [];

//     for(let i = 0; i < arrays.length; i++){
//         heap.push([arrays[i][0], i, 0]);
//     }
//     heap.sort((a,b) => a[0] - b[0]);

//     while(heap.length > 0){
//         let [value, arrayIndex, elementIndex] = heap.shift();
//         result.push(value);

//         let nextIndex = elementIndex + 1;

//         if(nextIndex < arrays[arrayIndex].length){
//             let nextValue = arrays[arrayIndex][nextIndex];
//             heap.push([nextValue, arrayIndex, nextIndex]);
//             heap.sort((a,b)=>a[0]-b[0]);
//         }
//     }
//     return result.slice(0, k);
// }
// let arrays = [
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9]
// ];
// console.log(kWayMerge(arrays, 5));




function kWayMerge(arrays, k) {
    // let result = [];
    let heap = [];
    
    for (let i = 0; i < arrays.length; i++) {
        heap.push([arrays[i][0], i, 0]);
    }
    heap.sort((a, b) => a[0] - b[0]);
    
    let count = 0;
    
    while (heap.length > 0) {
        let [value, arrayIndex, elementIndex] = heap.shift();
        
        count++;
        if(count === k){
            return value;
        }

        let nextIndex = elementIndex + 1;

        if (nextIndex < arrays[arrayIndex].length) {
            let nextValue = arrays[arrayIndex][nextIndex];
            heap.push([nextValue, arrayIndex, nextIndex]);
            heap.sort((a, b) => a[0] - b[0]);
        }
    }
    // return result[k - 1];
}
let arrays = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];
console.log(kWayMerge(arrays, 3));
