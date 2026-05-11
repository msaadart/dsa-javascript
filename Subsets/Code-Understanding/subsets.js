function subsets(team) {

    let result = [];

    function backtrack(index, currentSubset) {

        if (index === team.length) {
            result.push([...currentSubset]);
            return;
        }

        currentSubset.push(team[index]);
        backtrack(index + 1, currentSubset);

        currentSubset.pop();

        backtrack(index + 1, currentSubset);
    }

    backtrack(0, []);

    return result;
}

console.log(subsets(["ali", "umar", "farjad"]));