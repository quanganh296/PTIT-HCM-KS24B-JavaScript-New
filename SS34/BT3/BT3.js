document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const registeredUsers = [
    { email: "user1@example.com", password: "password123" },
    { email: "user2@example.com", password: "password456" },
  ];

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Email and Password cannot be empty!");
      return;
    }

    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login successful!");
      window.location.href = "homepage.html"; 
    } else {
      alert("Invalid email or password!");
    }
  });
});