// // 2D array basic syntax //

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// // nested loop ---- start
// for (let i = 0; i < matrix.length; i++) {
//     let output = "";
//     for (let j = 0; j < matrix.length; j++) {
//         output += matrix[i][j] + " "
//     }
//     console.log(output)
// }
// // nested loop ---- end



// // built-in ---- start
// flatMatrix = matrix.flat();
// console.log(flatMatrix);
// doubleMatrix = matrix.map(row => row.map(val => val * 2));
// console.log(doubleMatrix)
//     // built-in ---- end



// // Algorithmic Pattern (Transpose Logic) ---- start

// let transpose = [];
// for (let i = 0; i < matrix.length; i++) {
//     transpose[i] = [];
//     for (let j = 0; j < matrix.length; j++) {
//         transpose[i][j] = matrix[j][i]
//     }
// }
// console.log(transpose)
//     // Algorithmic Pattern (Transpose Logic) ---- end    




// // show only z-axis ---- start
// for (let i = 0; i < matrix.length; i++) {
//     let axis = []
//     for (let j = 0; j < matrix.length; j++) {
//         axis = matrix[i++][j]
//         console.log(axis)
//     }
// }




// // own ques ---- start

// // 2 - find the neighbour

// let houses = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ]

// function neighbour(r, c) {
//     directions = [
//         [-1, 0],
//         [1, 0],
//         [0, -1],
//         [0, 1]
//     ];

//     directions.forEach(([dr, dc]) => {

//         let newR = r + dr;
//         let newC = c + dc;

//         if (newR >= 0 && newR < houses.length && newC >= 0 && newC < houses.length) {
//             console.log("Neighbour is", houses[newR][newC])
//         } else {
//             console.log("Neighbour is not found");
//         }
//     });
// }
// neighbour(1, 1)



// With BFS -->


let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let visited = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(false)
);

let queue = [];
queue.push([0, 0]);
visited[0][0] = true;

while (queue.length > 0) {
    let [r, c] = queue.shift();
    console.log(grid[r][c]);

    direction = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    for (let [dr, dc] of direction) {
        let newR = r + dr;
        let newC = c + dc;

        if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited[newR][newC]) {
            queue.push([newR, newC]);
            visited[newR][newC] = true;
        }
    }
}