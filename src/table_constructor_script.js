document.getElementById("task-name").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

document.getElementById("add-task-btn").addEventListener("click", function () {
  addTask();
});

function createTaskRow(taskName) {
  const newRow = document.createElement("tr");

  const taskNameCell = document.createElement("td");
  taskNameCell.textContent = taskName;
  newRow.appendChild(taskNameCell);

  const deleteCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-task-btn");

  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-times");
  deleteButton.appendChild(icon);

  deleteCell.appendChild(deleteButton);
  newRow.appendChild(deleteCell);

  deleteButton.addEventListener("click", function () {
    newRow.remove();
    saveTasks();
  });

  return newRow;
}

function addTask() {
  const taskName = document.getElementById("task-name").value.trim();

  if (!taskName) {
    alert("Please enter a valid task name.");
    return;
  }

  const taskList = document.getElementById("task-list");
  const newRow = createTaskRow(taskName);

  taskList.appendChild(newRow);
  document.getElementById("task-name").value = '';
  saveTasks();
}

function saveTasks() {
  const taskList = [];
  const rows = document.querySelectorAll("#task-list tr");

  rows.forEach(row => {
    const taskName = row.querySelector("td:first-child").textContent;
    taskList.push(taskName);
  });

  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    const taskList = document.getElementById("task-list");

    savedTasks.forEach(taskName => {
      const newRow = createTaskRow(taskName);
      taskList.appendChild(newRow);
    });
  }
}

window.addEventListener("load", loadTasks);
