function knapsack(weights, capacity) {

    let memo = new Map();

    function solve(index, remaining) {

        if (
            index >= weights.length ||
            remaining <= 0
        ) {
            return 0;
        }

        let key = index + "-" + remaining;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let skip = solve(
            index + 1,
            remaining
        );

        let take = 0;

        if (weights[index] <= remaining) {
            take = weights[index] + solve(index + 1, remaining - weights[index]);
        }

        memo.set(
            key,
            Math.max(take, skip)
        );

        return memo.get(key);
    }

    return solve(0, capacity);
}


let weights = [45, 55, 65, 40, 60];

console.log(
    knapsack(weights, 100)
);