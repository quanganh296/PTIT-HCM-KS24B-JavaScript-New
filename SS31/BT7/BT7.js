
let todolist = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false }
  ];
  const list = document.getElementById('myUL');
  const input = document.getElementById('myInput');
  const addBtn = document.querySelector('.addBtn');
  function createTaskElement(taskObj) {
    const li = document.createElement('li');
    li.textContent = taskObj.task;
    if (taskObj.completed) {
      li.classList.add('checked');
    }
    const span = document.createElement('span');
    span.className = 'close';
    span.textContent = 'X';
    li.appendChild(span);
    li.addEventListener('click', function () {
      li.classList.toggle('checked');
    });
    span.addEventListener('click', function (e) {
      e.stopPropagation(); 
      li.remove();
    });
  
    list.appendChild(li);
  }
  todolist.forEach(createTaskElement);
  addBtn.addEventListener('click', function () {
    const task = input.value.trim();
    if (task === '') {
      alert('Vui lòng nhập nội dung công việc!');
      return;
    }
    const newTask = {
      id: Date.now(),
      task: task,
      completed: false
    };
    createTaskElement(newTask);
    input.value = '';
  });
  