document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.getElementById("form-container");
  const greetingContainer = document.getElementById("greeting-container");
  const nameInput = document.getElementById("name");
  const saveBtn = document.getElementById("save-btn");
  const greeting = document.getElementById("greeting");
  const changeNameBtn = document.getElementById("change-name-btn");


  const savedName = localStorage.getItem("name");
  if (savedName) {
    showGreeting(savedName); 
  } else {
    showForm(); 
  }

  
  saveBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (!name) {
      alert("Vui lòng nhập tên của bạn!");
      return;
    }
    localStorage.setItem("name", name); 
    showGreeting(name); 
  });

  
  changeNameBtn.addEventListener("click", () => {
    localStorage.removeItem("name"); 
    showForm(); 
  });

 
  function showGreeting(name) {
    greeting.textContent = `👋 Chào bạn, ${name}!`;
    formContainer.style.display = "none";
    greetingContainer.style.display = "block";
  }

 
  function showForm() {
    formContainer.style.display = "block";
    greetingContainer.style.display = "none";
  }
});
