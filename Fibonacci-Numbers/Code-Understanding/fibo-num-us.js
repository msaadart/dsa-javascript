let arr = [0, 1];
let newValue = 0;

function fabinocciNumber(lastPoint) {
    while (newValue < lastPoint) {
        let right = arr.length - 1;

        newValue = arr[right] + arr[right - 1];

        if (newValue < lastPoint) {
            arr.push(newValue);
        }
    }
    return arr;
}
console.log(fabinocciNumber(120))