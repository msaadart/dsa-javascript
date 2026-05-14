
function ceilSearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target){
            return arr[mid];   
        } 
        else if(arr[mid] > target){
            ans = arr[mid];
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    } 
    return ans;
}
console.log(ceilSearch([2,4,6,11,8,13,15], 10));
