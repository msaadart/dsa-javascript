 let arr = [0, 1];
        let newValue = 0;

        function fabinocciNumber(lastPoint){
            while(newValue < lastPoint){
                let right = arr.length - 1;
                newValue = arr[right] + arr[right - 1];
                if(newValue < lastPoint){
                    arr.push(newValue);
                }
            }
            return arr;
        }

        let fibSeries = fabinocciNumber(10); 
        let patientList = [];

        function runHospitalSystem() {
            let name = document.getElementById("patientName").value;
            let level = parseInt(document.getElementById("severityLevel").value);

            let calculatedScore = fibSeries[level]; 

            patientList.push({ name: name, score: calculatedScore });

            patientList.sort((a, b) => b.score - a.score);

            let displayBox = document.getElementById("queueDisplay");
            displayBox.innerHTML = ""; 

            patientList.forEach((patient, index) => {
                let textModifier = (index === 0 && patient.score >= 8) ? "red" : "black";
                displayBox.innerHTML += `<p style="color: ${textModifier}"><b>${patient.name}</b> - Score: ${patient.score}</p>`;
            });
        }
