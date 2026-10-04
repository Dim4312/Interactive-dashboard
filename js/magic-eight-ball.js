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
let hasAnswered = false;

// Pick an answer and show it over the ball's number.
function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    circle.textContent = answers[index];
    circle.style.display = "flex";
}

// Check that the user typed a question before giving an answer.
function askQuestion() {
    if (hasAnswered) {
        return;
    }

    if (document.getElementById("question").value.trim() === "") {
        circle.style.display = "none";
        alert("Please enter a yes/no question first.");
        question.focus();
    } else {
        displayAnswer();
        hasAnswered = true;
        question.readOnly = true;
        ball.setAttribute("aria-disabled", "true");
    }
}

ball.addEventListener("click", askQuestion);

document.getElementById("eight-ball-form").addEventListener("submit", function (event) {
    event.preventDefault();
});

// Allow a new question only after the reset button is pressed.
document.getElementById("reset").addEventListener("click", function () {
    hasAnswered = false;
    question.readOnly = false;
    ball.removeAttribute("aria-disabled");
    circle.textContent = "";
    circle.style.display = "none";
});

// Add a new answer.
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
