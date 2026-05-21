function maxHeap(heap , n ,i){
let largest = i;
let left = 2 * i + 1;
let right = 2 * i + 2;

if(left < n && heap[left][0] > heap[largest][0]){
largest = left;
}
if(right < n && heap[right][0] > heap[largest][0]){
    largest = right;
}
if(largest !== i){
[heap[i] , heap[largest]] = [heap[largest] , heap[i]];
maxHeap(heap, n , largest)
}
}

function kClosest(points ,k){
    let heap = [];

    for(let i = 0; i < k; i++){
        let x =  points[i][0];
        let y = points[i][1];

        let distance = x * x + y * y;
        heap.push([distance , points[i]]);
    }

    for(let i = Math.floor(k/2) - 1; i >= 0; i--){
        maxHeap(heap , k , i);
    }

    for(let i = k; i < points.length; i++){
        let x =  points[i][0];
        let y = points[i][1];

        let distance = x * x + y * y;
        if(distance < heap[0][0]){
            heap[0] = [distance , points[i]];
            maxHeap(heap , k , 0);
        }
    }
    return heap.map(item => item[1]);
}
let points = [ [4,7],[-2,4],[1,3],[0,9] ];
let k = 2;
console.log(kClosest(points , k))