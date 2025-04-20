document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const modeIcon = document.getElementById("mode-icon");
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    modeIcon.src = "https://img.icons8.com/ios-filled/50/moon-symbol.png"; 
  }
  darkModeToggle.addEventListener("click", () => {
    const isCurrentlyDarkMode = document.body.classList.toggle("dark-mode");

    // Cập nhật icon
    if (isCurrentlyDarkMode) {
      modeIcon.src = "https://img.icons8.com/ios-filled/50/moon-symbol.png"; 
    } else {
      modeIcon.src = "https://img.icons8.com/ios-filled/50/sun.png"; 
    }
    localStorage.setItem("darkMode", isCurrentlyDarkMode);
  });
});