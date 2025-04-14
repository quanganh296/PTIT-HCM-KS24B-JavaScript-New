document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const addBtn = document.getElementById("addBtn");
  const todoList = document.getElementById("todoList");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  const renderTodos = () => {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${todo}
        <button onclick="deleteTodo(${index})">Xóa</button>
      `;
      todoList.appendChild(li);
    });
  };
  const saveTodosToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  addBtn.addEventListener("click", () => {
    const todo = todoInput.value.trim();
    if (!todo) {
      alert("Vui lòng nhập công việc!");
      return;
    }
    todos.push(todo);
    saveTodosToLocalStorage();
    renderTodos();
    todoInput.value = "";
  });
  window.deleteTodo = (index) => {
    todos.splice(index, 1);
    saveTodosToLocalStorage();
    renderTodos();
  };
  renderTodos();
});