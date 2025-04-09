function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Vui lòng nhập nhiệm vụ!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?")) {
            li.remove();
        }
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
