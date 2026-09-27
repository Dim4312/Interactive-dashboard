// Possible answers for the Magic Eight Ball.
const answers = [
    "Yes, definitely.",
    "It is likely.",
    "Outlook good.",
    "Ask again later.",
    "Cannot predict now.",
    "Don't count on it.",
    "My answer is no.",
    "Very doubtful."
];

const ball = document.getElementById("ball");
const circle = document.getElementById("circle");
const question = document.getElementById("question");

// Pick an answer and show it over the ball's number.
function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    // Display added responses as text, even if they contain HTML characters.
    circle.innerHTML = answers[index].replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    circle.style.display = "flex";
}

// Check that the user typed a question before giving an answer.
function askQuestion() {
    if (document.getElementById("question").value.trim() === "") {
        circle.style.display = "none";
        alert("Please enter a yes/no question first.");
        question.focus();
    } else {
        displayAnswer();
    }
}

ball.addEventListener("mousedown", askQuestion);

// Also allow the keyboard to ask a question without reloading the page.
ball.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        askQuestion();
    }
});

document.getElementById("eight-ball-form").addEventListener("submit", function (event) {
    event.preventDefault();
    askQuestion();
});

// The reset button clears the question and hides the answer.
document.getElementById("reset").addEventListener("click", function () {
    circle.style.display = "none";
});

// Bonus: add a response for this visit and log the new total.
document.getElementById("add-response").addEventListener("click", function () {
    let response = prompt("Enter a new Eight Ball response (up to 60 characters):");
    if (response === null) {
        return;
    }
    response = response.trim();
    if (response === "" || response.length > 60) {
        alert("Please enter a response between 1 and 60 characters.");
        return;
    }
    answers.push(response);
    console.log("Added response:", response, "Total responses:", answers.length);
});
