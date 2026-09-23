// ==========================================
// STUDENT GRADE CALCULATOR
// ==========================================

function calculateGrade() {

    let name = document.getElementById("studentName").value.trim();

    if (name === "") {
        document.getElementById("result").innerHTML =
            '<span class="error">Please enter the student name.</span>';
        return;
    }

    let scores = [
        Number(document.getElementById("subject1").value),
        Number(document.getElementById("subject2").value),
        Number(document.getElementById("subject3").value),
        Number(document.getElementById("subject4").value),
        Number(document.getElementById("subject5").value)
    ];

    for (let score of scores) {
        if (!Number.isFinite(score) || score < 0 || score > 100) {
            document.getElementById("result").innerHTML =
                '<span class="error">Please enter valid grades from 0 to 100 for all subjects.</span>';
            return;
        }
    }

    let total = 0;

    for (let score of scores) {
        total += score;
    }

    let average = total / scores.length;

    let result;

    if (average >= 75) {
        result = "PASSED";
    } else {
        result = "FAILED";
    }

    document.getElementById("result").innerHTML =
        "<strong>Student:</strong> " + name +
        "<br><strong>Total:</strong> " + total +
        "<br><strong>Average:</strong> " + average.toFixed(2) +
        "<br><strong>Result:</strong> " + result;
}


// ==========================================
// RESET FUNCTION
// ==========================================

function resetCalculator() {

    document.getElementById("studentName").value = "";

    document.getElementById("subject1").value = "";
    document.getElementById("subject2").value = "";
    document.getElementById("subject3").value = "";
    document.getElementById("subject4").value = "";
    document.getElementById("subject5").value = "";

    document.getElementById("result").innerHTML =
        "Your result will appear here.";
}


// ==========================================
// DYNAMIC TYPING DEMONSTRATION
// ==========================================

let demoValue = 100;

let firstType = typeof demoValue;

demoValue = "Passed";

let secondType = typeof demoValue;

document.getElementById("dynamicDemo").innerHTML =
    "First value: <strong>100</strong>" +
    " → Type: <strong>" + firstType + "</strong>" +
    "<br><br>" +
    "After changing the value: <strong>Passed</strong>" +
    " → Type: <strong>" + secondType + "</strong>" +
    "<br><br>" +
    "The same variable changed from a number to a string. " +
    "This demonstrates dynamic typing in JavaScript.";


// ==========================================
// EVENT LISTENERS
// ==========================================

document.getElementById("calculateButton")
    .addEventListener("click", calculateGrade);

document.getElementById("resetButton")
    .addEventListener("click", resetCalculator);