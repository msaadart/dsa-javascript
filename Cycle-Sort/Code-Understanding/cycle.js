// cycle sort ////

function cycleSort(arr) {
    let i = 0;
    let n = arr.length

    while (i < n) {
        let correct = arr[i] - 1;
        if (arr[i] !== arr[correct]) {
            [arr[i], arr[correct]] = [arr[correct], arr[i]];
        } else {
            i++
        }
    }
}

let arr = [3, 4, 1, 2, 5];
cycleSort(arr);
console.log(arr.join(' '));

// Get-AppxPackage windows.immersivecontrolpanel | Reset-AppxPackage