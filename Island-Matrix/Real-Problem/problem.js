let place = [
    [1, 1, 0, 1],
    [0, 0, 1, 1],
    [1, 1, 0, 0],
    [1, 0, 1, 1]
];

let visited = Array.from({ length: place.length }, () =>
    Array(place[0].length).fill(false)
);

let count = 0;

for (let i = 0; i < place.length; i++) {
    for (let j = 0; j < place[i].length; j++) {
        if (place[i][j] === 1 && !visited[i][j]) {
            count++;
            bfs(i, j)
        }
    }
}
console.log("island", count);


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
            newR = row + dr;
            newC = col + dc;

            if (newR >= 0 && newR < place.length && newC >= 0 && newC < place[0].length && place[newR][newC] === 1 && !visited[newR][newC]) {
                queue.push([newR, newC]);
                visited[newR][newC] = true
            }
        }
    }
}