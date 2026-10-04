let myTasks = [];

// Create the task list and add it below the form.
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-name");
const userTasks = document.createElement("ul");
userTasks.id = "user-tasks";
taskList.appendChild(userTasks);

// Store each task and add a list item for it.
document.getElementById("add-task").addEventListener("click", function (event) {
    event.preventDefault();
    let taskName = taskInput.value.trim();

    if (taskName === "") {
        taskInput.focus();
        return;
    }

    myTasks.push(taskName);
    let listItem = document.createElement("li");
    let taskText = document.createTextNode(taskName);
    listItem.appendChild(taskText);
    userTasks.appendChild(listItem);

    taskInput.value = "";
    taskInput.focus();
});

// Keep the form from reloading the dashboard.
document.getElementById("task-form").addEventListener("submit", function (event) {
    event.preventDefault();
});
