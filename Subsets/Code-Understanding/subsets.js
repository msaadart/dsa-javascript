function subsets(permissions) {

    let result = [];

    function backtrack(index, currentSubset) {

        if (index === permissions.length) {
            result.push([...currentSubset]);
            return;
        }

        currentSubset.push(permissions[index]);
        backtrack(index + 1, currentSubset);

        currentSubset.pop();

        backtrack(index + 1, currentSubset);
    }

    backtrack(0, []);

    return result;
}

console.log(subsets(["read", "write", "delete"]));