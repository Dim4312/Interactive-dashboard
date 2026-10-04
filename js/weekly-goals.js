const goalForm = document.getElementById("goal-form");
const goalMessage = document.getElementById("goal-message");

// Calculate five days of tasks and add the bonus tasks.
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let weeklyTotal = dailyGoal * 5;
    let totalGoal = weeklyTotal + bonusTasks;

    if (!isFinite(totalGoal)) {
        goalMessage.innerHTML = "That goal is too large. Please enter smaller values.";
        return;
    }

    // Insert the name as text so it cannot be read as HTML.
    goalMessage.innerHTML = "Name: <span id='goal-name'></span>, Total Weekly Goal: " + totalGoal;
    document.getElementById("goal-name").textContent = userName;
    return totalGoal;
}

// Read the form and check the inputs before calculating.
goalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let userName = document.getElementById("user-name").value.trim();
    let dailyGoal = parseFloat(document.getElementById("daily-goal").value);
    let bonusTasks = parseFloat(document.getElementById("bonus-tasks").value);

    if (userName === "") {
        goalMessage.innerHTML = "Please enter your name.";
        document.getElementById("user-name").focus();
        return;
    }

    if (!goalForm.checkValidity() || !isFinite(dailyGoal) || !isFinite(bonusTasks)) {
        goalMessage.innerHTML = "Please enter a whole number of zero or more for each task goal.";
        goalForm.reportValidity();
        return;
    }

    weeklyGoal(userName, dailyGoal, bonusTasks);
});
