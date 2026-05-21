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