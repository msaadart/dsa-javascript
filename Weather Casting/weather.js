// let temps = [30, 32, 31, 29, 28, 27, 26, 25];

// function last7DaysAvg(k) {
//     let sum = 0;
//     let count = 0;
//     let today = 0;

//     for (let i = 0; i < k; i++) {
//         sum += temps[i];
//     }

//     let avg = sum / k;
//     console.log("initial avg:", avg, "C");

//     for (let j = k; j < temps.length; j++) {
//         sum = sum + temps[j] - temps[j - k];
//         count = j - k + 1;
//         avg = sum / k;
//         console.log("avg temp of 7 days :", Math.round(avg), "C");
//         today = temps[j];
//     }
//     temps.shift();
//     // console.log(temps);
//     // console.log("sliding count:", count);
//     console.log("today temperature :", today, "C")
// }

// last7DaysAvg(7);


let temps = [];
let sum = 0;
let k = 7;

function addTemp() {

    let input = document.getElementById("temperatureInput");
    let newTemp = Number(input.value);

    // if (newTemp) return;

    if (temps.length < k) {
        temps.push(newTemp);
        sum += newTemp;
    } else {
        sum = sum + newTemp - temps[0];
        temps.shift();
        temps.push(newTemp);
    }


    let avg = sum / temps.length;
    if (avg < -40) {
        document.getElementById("avg-detail").innerText = "Emergency - (Frostbite occurs within minutes)";
        document.getElementById("avg-color").style.color = "#0000FF";
    } else if (avg < -30) {
        document.getElementById("avg-detail").innerText = "Arctic cold - (Extremely dangerous)";
        document.getElementById("avg-color").style.color = "#4169E1";
    } else if (avg < -20) {
        document.getElementById("avg-detail").innerText = "Very cold - (Heavy snow likely)";
        document.getElementById("avg-color").style.color = "#00BFFF";
    } else if (avg < -10) {
        document.getElementById("avg-detail").innerText = "Hard Frost - (Sub-zero temperatures, often dry)";
        document.getElementById("avg-color").style.color = "#E0FFFF";
    } else if (avg < 0) {
        document.getElementById("avg-detail").innerText = "Freezing - (Water freezes; snow is possible)";
        document.getElementById("avg-color").style.color = "#B0E0E6";
    } else if (avg < 10) {
        document.getElementById("avg-detail").innerText = "Cold - (Requires heavy jackets; frost possible in the morning)";
        document.getElementById("avg-color").style.color = "#B0C4DE";
    } else if (avg < 20) {
        document.getElementById("avg-detail").innerText = "Cool  - (Comfortable for active outdoor wear)";
        document.getElementById("avg-color").style.color = "#98FB98";
    } else if (avg < 25) {
        document.getElementById("avg-detail").innerText = "Comfortable - (The 'sweet spot' for many)";
        document.getElementById("avg-color").style.color = "#3CB371";
    } else if (avg < 30) {
        document.getElementById("avg-detail").innerText = "Warm - (Definitely warm; T-shirt weather)";
        document.getElementById("avg-color").style.color = "#FFD700";
    } else if (avg < 35) {
        document.getElementById("avg-detail").innerText = "Hot - (Heat safety precautions should be considered)";
        document.getElementById("avg-color").style.color = "#FFA500";
    } else if (avg < 40) {
        document.getElementById("avg-detail").innerText = "Very Hot - (Dangerous if accompanied by high humidity)";
        document.getElementById("avg-color").style.color = "#FF8C00 ";
    } else if (avg < 45) {
        document.getElementById("avg-detail").innerText = "Extremely Hot  - (Dangerous heat, often dry in deserts, humid in tropical areas)";
        document.getElementById("avg-color").style.color = "#FF4500";
    } else {
        document.getElementById("avg-detail").innerText = "Extreme heat wave  - (Extreme Danger)";
        document.getElementById("avg-color").style.color = "#DC143C";
    }


    let today = temps[temps.length - 1];
    if (today < -40) {
        document.getElementById("today-detail").innerText = "Emergency - (Frostbite occurs within minutes)";
        document.getElementById("today-color").style.color = "#0000FF";
    } else if (today < -30) {
        document.getElementById("today-detail").innerText = "Arctic cold - (Extremely dangerous)";
        document.getElementById("today-color").style.color = "#4169E1";
    } else if (today < -20) {
        document.getElementById("today-detail").innerText = "Very cold - (Heavy snow likely)";
        document.getElementById("today-color").style.color = "#00BFFF";
    } else if (today < -10) {
        document.getElementById("today-detail").innerText = "Hard Frost - (Sub-zero temperatures, often dry)";
        document.getElementById("today-color").style.color = "#E0FFFF";
    } else if (today < 0) {
        document.getElementById("today-detail").innerText = "Freezing - (Water freezes; snow is possible)";
        document.getElementById("today-color").style.color = "#B0E0E6";
    } else if (today < 10) {
        document.getElementById("today-detail").innerText = "Cold - (Requires heavy jackets; frost possible in the morning)";
        document.getElementById("today-color").style.color = "#B0C4DE";
    } else if (today < 20) {
        document.getElementById("today-detail").innerText = "Cool  - (Comfortable for active outdoor wear)";
        document.getElementById("today-color").style.color = "#98FB98";
    } else if (today < 25) {
        document.getElementById("today-detail").innerText = "Comfortable - (The 'sweet spot' for many)";
        document.getElementById("today-color").style.color = "#3CB371";
    } else if (today < 30) {
        document.getElementById("today-detail").innerText = "Warm - (Definitely warm; T-shirt weather)";
        document.getElementById("today-color").style.color = "#FFD700";
    } else if (today < 35) {
        document.getElementById("today-detail").innerText = "Hot - (Heat safety precautions should be considered)";
        document.getElementById("today-color").style.color = "#FFA500";
    } else if (today < 40) {
        document.getElementById("today-detail").innerText = "Very Hot - (Dangerous if accompanied by high humidity)";
        document.getElementById("today-color").style.color = "#FF8C00 ";
    } else if (today < 45) {
        document.getElementById("today-detail").innerText = "Extremely Hot  - (Dangerous heat, often dry in deserts, humid in tropical areas)";
        document.getElementById("today-color").style.color = "#FF4500";
    } else {
        document.getElementById("today-detail").innerText = "Extreme heat wave  - (Extreme Danger)";
        document.getElementById("today-color").style.color = "#DC143C";
    }


    let min = Math.min(...temps);
    if (min < -40) {
        document.getElementById("lowest-detail").innerText = "Emergency - (Frostbite occurs within minutes)";
        document.getElementById("lowest-color").style.color = "#0000FF";
    } else if (min < -30) {
        document.getElementById("lowest-detail").innerText = "Arctic cold - (Extremely dangerous)";
        document.getElementById("lowest-color").style.color = "#4169E1";
    } else if (min < -20) {
        document.getElementById("lowest-detail").innerText = "Very cold - (Heavy snow likely)";
        document.getElementById("lowest-color").style.color = "#00BFFF";
    } else if (min < -10) {
        document.getElementById("lowest-detail").innerText = "Hard Frost - (Sub-zero temperatures, often dry)";
        document.getElementById("lowest-color").style.color = "#E0FFFF";
    } else if (min < 0) {
        document.getElementById("lowest-detail").innerText = "Freezing - (Water freezes; snow is possible)";
        document.getElementById("lowest-color").style.color = "#B0E0E6";
    } else if (min < 10) {
        document.getElementById("lowest-detail").innerText = "Cold - (Requires heavy jackets; frost possible in the morning)";
        document.getElementById("lowest-color").style.color = "#B0C4DE";
    } else if (min < 20) {
        document.getElementById("lowest-detail").innerText = "Cool  - (Comfortable for active outdoor wear)";
        document.getElementById("lowest-color").style.color = "#98FB98";
    } else if (min < 25) {
        document.getElementById("lowest-detail").innerText = "Comfortable - (The 'sweet spot' for many)";
        document.getElementById("lowest-color").style.color = "#3CB371";
    } else if (min < 30) {
        document.getElementById("lowest-detail").innerText = "Warm - (Definitely warm; T-shirt weather)";
        document.getElementById("lowest-color").style.color = "#FFD700";
    } else if (min < 35) {
        document.getElementById("lowest-detail").innerText = "Hot - (Heat safety precautions should be considered)";
        document.getElementById("lowest-color").style.color = "#FFA500";
    } else if (min < 40) {
        document.getElementById("lowest-detail").innerText = "Very Hot - (Dangerous if accompanied by high humidity)";
        document.getElementById("lowest-color").style.color = "#FF8C00 ";
    } else if (min < 45) {
        document.getElementById("lowest-detail").innerText = "Extremely Hot  - (Dangerous heat, often dry in deserts, humid in tropical areas)";
        document.getElementById("lowest-color").style.color = "#FF4500";
    } else {
        document.getElementById("lowest-detail").innerText = "Extreme heat wave  - (Extreme Danger)";
        document.getElementById("lowest-color").style.color = "#DC143C";
    }


    let max = Math.max(...temps);
    if (max < -40) {
        document.getElementById("highest-detail").innerText = "Emergency - (Frostbite occurs within minutes)";
        document.getElementById("highest-color").style.color = "#0000FF";
    } else if (max < -30) {
        document.getElementById("highest-detail").innerText = "Arctic cold - (Extremely dangerous)";
        document.getElementById("highest-color").style.color = "#4169E1";
    } else if (max < -20) {
        document.getElementById("highest-detail").innerText = "Very cold - (Heavy snow likely)";
        document.getElementById("highest-color").style.color = "#00BFFF";
    } else if (max < -10) {
        document.getElementById("highest-detail").innerText = "Hard Frost - (Sub-zero temperatures, often dry)";
        document.getElementById("highest-color").style.color = "#E0FFFF";
    } else if (max < 0) {
        document.getElementById("highest-detail").innerText = "Freezing - (Water freezes; snow is possible)";
        document.getElementById("highest-color").style.color = "#B0E0E6";
    } else if (max < 10) {
        document.getElementById("highest-detail").innerText = "Cold - (Requires heavy jackets; frost possible in the morning)";
        document.getElementById("highest-color").style.color = "#B0C4DE";
    } else if (max < 20) {
        document.getElementById("highest-detail").innerText = "Cool  - (Comfortable for active outdoor wear)";
        document.getElementById("highest-color").style.color = "#98FB98";
    } else if (max < 25) {
        document.getElementById("highest-detail").innerText = "Comfortable - (The 'sweet spot' for many)";
        document.getElementById("highest-color").style.color = "#3CB371";
    } else if (max < 30) {
        document.getElementById("highest-detail").innerText = "Warm - (Definitely warm; T-shirt weather)";
        document.getElementById("highest-color").style.color = "#FFD700";
    } else if (max < 35) {
        document.getElementById("highest-detail").innerText = "Hot - (Heat safety precautions should be considered)";
        document.getElementById("highest-color").style.color = "#FFA500";
    } else if (max < 40) {
        document.getElementById("highest-detail").innerText = "Very Hot - (Dangerous if accompanied by high humidity)";
        document.getElementById("highest-color").style.color = "#FF8C00 ";
    } else if (max < 45) {
        document.getElementById("highest-detail").innerText = "Extremely Hot  - (Dangerous heat, often dry in deserts, humid in tropical areas)";
        document.getElementById("highest-color").style.color = "#FF4500";
    } else {
        document.getElementById("highest-detail").innerText = "Extreme heat wave  - (Extreme Danger)";
        document.getElementById("highest-color").style.color = "#DC143C";
    }

    document.getElementById("days").innerText = temps.join(" , ");
    document.getElementById("avg").innerText = Math.round(avg) + "°C";
    document.getElementById("today").innerText = today + "°C";
    document.getElementById("max").innerText = max + "°C";
    document.getElementById("min").innerText = min + "°C";
    input.value = "";
    return secFunc;
}