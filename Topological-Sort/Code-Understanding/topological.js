function canFinishTasks(tasks, prerequisites) {

    let graph = {};
    let indegree = new Array(tasks).fill(0);
    for (let i = 0; i < tasks; i++) {
        graph[i] = [];
    }
    for (let [parent, child] of prerequisites) {
        graph[parent].push(child);
        indegree[child]++;
    }

    let queue = [];
    for (let i = 0; i < tasks; i++) {

        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let completed = 0;
    while (queue.length > 0) {

        let current = queue.shift();
        completed++;

        for (let neighbor of graph[current]) {
            indegree[neighbor]--;

            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    return completed === tasks;
}

let tasks = 4
let prerequisites = [
    [0, 1],
    [1, 2],
    [2, 3]
];
console.log(canFinishTasks(tasks, prerequisites));