const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

togglePasswordButton.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
});