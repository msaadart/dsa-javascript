// <1> --- Number of island --- //

let place = [
    [1, 1, 0],
    [0, 1, 0],
    [1, 0, 1]
];

let visited = Array.from({ length: place.length }, () =>
    Array(place[0].length).fill(false)
);

let count = 0;

for (let i = 0; i < place.length; i++) {
    for (let j = 0; j < place[0].length; j++) {
        if (place[i][j] === 1 && !visited[i][j]) {
            count++;
            bfs(i, j)
        }
    }
}
console.log("Island is", count);

function bfs(r, c) {
    directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    let queue = [];
    queue.push([r, c]);
    visited[r][c] = true;

    while (queue.length > 0) {
        let [row, col] = queue.shift();

        for (let [dr, dc] of directions) {

            let newR = row + dr;
            let newC = col + dc;

            if (newR >= 0 && newR < place.length && newC >= 0 && newC < place.length && place[newR][newC] === 1 && !visited[newR][newC]) {
                queue.push([newR, newC]);
                visited[newR][newC] = true
            }
        }
    }
}


// <2> --- Flood fill --- //

place = [
    [1, 1, 0],
    [0, 1, 0],
    [1, 0, 1]
];

let startR = 1;
let startC = 1;
let newColor = 2;
let oldColor = place[startR][startC];

let queue = [];
queue.push([startR, startC]);
place[startR][startC] = newColor;

let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];

while (queue.length > 0) {
    let [row, col] = queue.shift();
    for (let [dr, dc] of direction) {
        let newR = row + dr;
        let newC = col + dc;

        if (newR >= 0 && newR < place.length && newC >= 0 && newC < place.length && place[newR][newC] === oldColor) {
            queue.push([newR, newC]);
            place[newR][newC] = newColor;
        }
    }
}
console.log(place)







// for (let i = 0; i < place.length; i++) {
//     output = "";
//     for (let j = 0; j < place.length; j++) {
//         output += place[i][j] + " "
//         if (place[i][j] === 0) {
//             console.log("water area is here")
//         }
//     }
//     console.log(output)
// }