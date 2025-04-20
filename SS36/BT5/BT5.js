document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskName");
  const addTaskButton = document.querySelector(".task-input button");
  const pendingTasks = document.getElementById("pendingTasks");
  const inProgressTasks = document.getElementById("inProgressTasks");
  const doneTasks = document.getElementById("doneTasks");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const saveTasksToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  const renderTasks = () => {
    pendingTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    doneTasks.innerHTML = "";

    tasks.forEach((task, index) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.innerHTML = `
        <p>${task.name}</p>
        ${
          task.status === "pending"
            ? `<button onclick="changeStatus(${index}, 'inProgress')">Chuyển tiếp</button>`
            : task.status === "inProgress"
            ? `<button onclick="changeStatus(${index}, 'done')">Chuyển tiếp</button>`
            : ""
        }
      `;

      if (task.status === "pending") {
        pendingTasks.appendChild(taskElement);
      } else if (task.status === "inProgress") {
        inProgressTasks.appendChild(taskElement);
      } else if (task.status === "done") {
        doneTasks.appendChild(taskElement);
      }
    });
  };
  addTaskButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (!taskName) {
      alert("Vui lòng nhập tên công việc!");
      return;
    }

    tasks.push({ name: taskName, status: "pending" });
    saveTasksToLocalStorage();
    renderTasks();
    taskInput.value = "";
  });
  window.changeStatus = (index, newStatus) => {
    tasks[index].status = newStatus;
    saveTasksToLocalStorage();
    renderTasks();
  };
  renderTasks();
});
