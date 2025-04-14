document.addEventListener("DOMContentLoaded", () => {
  const taskTable = document.getElementById("taskTable");
  const contentInput = document.getElementById("content");
  const dueDateInput = document.getElementById("dueDate");
  const statusInput = document.getElementById("status");
  const assignedToInput = document.getElementById("assignedTo");
  const submitBtn = document.getElementById("submitBtn");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const renderTasks = () => {
    taskTable.innerHTML = "";
    tasks.forEach((task, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${task.content}</td>
        <td>${task.dueDate}</td>
        <td>${task.status}</td>
        <td>${task.assignedTo}</td>
        <td class="action-buttons">
          <button class="edit-btn" onclick="editTask(${index})">Sửa</button>
          <button class="delete-btn" onclick="deleteTask(${index})">Xóa</button>
        </td>
      `;
      taskTable.appendChild(row);
    });
  };

  const saveTasksToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  submitBtn.addEventListener("click", () => {
    const content = contentInput.value.trim();
    const dueDate = dueDateInput.value;
    const status = statusInput.value;
    const assignedTo = assignedToInput.value.trim();

    if (!content || !dueDate || !assignedTo) {
      alert("Please fill in all fields!");
      return;
    }

    tasks.push({ content, dueDate, status, assignedTo });
    saveTasksToLocalStorage();
    renderTasks();

    contentInput.value = "";
    dueDateInput.value = "";
    statusInput.value = "Pending";
    assignedToInput.value = "";
  });

  window.editTask = (index) => {
    const task = tasks[index];
    contentInput.value = task.content;
    dueDateInput.value = task.dueDate;
    statusInput.value = task.status;
    assignedToInput.value = task.assignedTo;

    submitBtn.textContent = "Update";
    submitBtn.onclick = () => {
      tasks[index] = {
        content: contentInput.value.trim(),
        dueDate: dueDateInput.value,
        status: statusInput.value,
        assignedTo: assignedToInput.value.trim(),
      };
      saveTasksToLocalStorage();
      renderTasks();

      contentInput.value = "";
      dueDateInput.value = "";
      statusInput.value = "Pending";
      assignedToInput.value = "";
      submitBtn.textContent = "Submit";
      submitBtn.onclick = submitBtnClickHandler;
    };
  };

  window.deleteTask = (index) => {
    if (confirm("Are you sure you want to delete this task?")) {
      tasks.splice(index, 1);
      saveTasksToLocalStorage();
      renderTasks();
    }
  };

  renderTasks();
});