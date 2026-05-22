//// find the largest number/element in matrix

let matrix = [
    [2, 1],
    [4, 8],
    [9, 3],
    [5, 10]
];
// let maxNumber = Math.min(...matrix.flat());

let maxNumber = matrix[0][0];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] < maxNumber) {
            maxNumber = matrix[i][j];
        }
    }
}
console.log(maxNumber);




function kWayMerge(arrays){

    let result = [];
    let heap = [];

    for(let i = 0; i < arrays.length; i++){
        heap.push([arrays[i][0], i, 0]);
    }
    heap.sort((a,b) => a[0] - b[0]);

    while(heap.length > 0){
        let [value, arrayIndex, elementIndex] = heap.shift();
        result.push(value);

        let nextIndex = elementIndex + 1;

        if(nextIndex < arrays[arrayIndex].length){
            let nextValue = arrays[arrayIndex][nextIndex];
            heap.push([nextValue, arrayIndex, nextIndex]);
            heap.sort((a,b)=>a[0]-b[0]);
        }
    }
    return result;
}
let arrays = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];
console.log(kWayMerge(arrays));