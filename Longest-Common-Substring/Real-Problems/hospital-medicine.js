let medicines = [
    "Panadol",
    "Paracetamol",
    "Paramol",
    "Parafast",
    "Brufen",
    "Disprin",
    "Aspirin",
    "Crocine",
    "Dolo",
    "Calpol",
    "Tylenol",
    "Advil",
    "Motrin",
    "Nurofen",
    "Ibuprofen",
    "Diclofenac",
    "Voltaren",
    "Cataflam"
];

function editDistance(a, b) {

    let m = a.length;
    let n = b.length;

    let dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            if (a[i - 1].toLowerCase() === b[j - 1].toLowerCase()) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],
                    dp[i][j - 1],
                    dp[i - 1][j - 1]
                );
            }
        }
    }

    return dp[m][n];
}

function findMedicine() {

    let input = document.getElementById("inputBox").value.toLowerCase();

    let candidates = [];

    // STEP 1: FILTER (important)
    for (let i = 0; i < medicines.length; i++) {

        let med = medicines[i].toLowerCase();

        if (med.includes(input)) {
            candidates.push(medicines[i]);
        }
    }

    // agar koi match na mile → fallback (all medicines)
    if (candidates.length === 0) {
        candidates = medicines;
    }

    // STEP 2: BEST MATCH USING EDIT DISTANCE
    let best = "";
    let minDist = Infinity;

    for (let i = 0; i < candidates.length; i++) {

        let dist = editDistance(input, candidates[i]);

        if (dist < minDist) {
            minDist = dist;
            best = candidates[i];
        }
    }

    // STEP 3: SHOW RESULT
    document.getElementById("result").innerHTML =
        "<li>" + best + "</li>";
}

// function displayBest(medicine) {

//     let list = document.getElementById("outputList");
//     list.innerHTML = "";

//     let li = document.createElement("li");

//     li.innerText = medicine;

//     list.appendChild(li);
// }