let addbtn = document.querySelector("add-btn");

const addtask=()=> {
    let taskInput = document.querySelector("task-input").value;
    if (!taskInput) {
        alert("Vui lòng nhập công việc!");
        return;
    }
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

}
