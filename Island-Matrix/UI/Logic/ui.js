let place = [
    [0, 0, 0, 1, 0],
    [0, 1, 1, 0, 0],
    [1, 0, 1, 1, 0],
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 1]
];

let gridDiv = document.getElementById("grid");

function renderGrid() {
    gridDiv.innerHTML = "";

    for (let i = 0; i < place.length; i++) {
        for (let j = 0; j < place[i].length; j++) {

            let cell = document.createElement("div");
            cell.classList.add("cell");

            if (place[i][j] === 1) {
                cell.classList.add("land")
            } else if (place[i][j] === 2) {
                cell.classList.add("active")
            } else {
                cell.classList.add("water")
            }
            cell.addEventListener("click", () => {
                floodFill(i, j);
                renderGrid();
            });
            gridDiv.appendChild(cell);
        }
    }
}
renderGrid();

function floodFill(r, c) {

    let queue = [];
    queue.push([r, c]);

    while (queue.length > 0) {

        let [row, col] = queue.shift();

        place[row][col] = 2;

        let directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];

        for (let [dr, dc] of directions) {

            let newR = row + dr;
            let newC = col + dc;

            if (
                newR >= 0 &&
                newR < place.length &&
                newC >= 0 &&
                newC < place[0].length &&
                place[newR][newC] === 1
            ) {
                queue.push([newR, newC]);
            }
        }
    }
}