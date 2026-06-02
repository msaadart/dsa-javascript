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

let fibSeries = fabinocciNumber(10);
let patientList = [];

function calculateSeverityLevel(age, bp, sugar) {
    if (bp >= 180 || sugar < 70 || sugar > 300 || (age > 75 && bp > 150)) {
        return 6;
    } else if (bp >= 140 || sugar > 180 || age > 60) {
        return 5;
    } else if (bp >= 130 || sugar > 140) {
        return 4;
    } else {
        return 3;
    }
}

function runHospitalSystem() {
    let name = document.getElementById("patientName").value;
    let age = parseInt(document.getElementById("patientAge").value);
    let bp = parseInt(document.getElementById("patientBP").value);
    let sugar = parseInt(document.getElementById("patientSugar").value);

    if (!name || !age || !bp || !sugar) {
        alert("Please fill all fields!");
        return;
    }

    let automaticLevel = calculateSeverityLevel(age, bp, sugar);
    let calculatedScore = fibSeries[automaticLevel];

    patientList.push({ name: name, score: calculatedScore, age: age });

    patientList.sort((a, b) => b.score - a.score);

    let displayBox = document.getElementById("queueDisplay");
    displayBox.innerHTML = "";

    patientList.forEach((patient) => {
        let textModifier = "black";

        if (patient.score >= 8) {
            textModifier = "red";
        } else if (patient.score === 5) {
            textModifier = "orange";
        } else if (patient.score === 3) {
            textModifier = "green";
        } else if (patient.score === 2) {
            textModifier = "blue";
        }

        displayBox.innerHTML += `<p style="color: ${textModifier}"><b>${patient.name} (${patient.age} Yrs)</b> Condition Score: ${patient.score}</p>`;
    });

    document.getElementById("patientName").value = "";
    document.getElementById("patientAge").value = "";
    document.getElementById("patientBP").value = "";
    document.getElementById("patientSugar").value = "";
}
