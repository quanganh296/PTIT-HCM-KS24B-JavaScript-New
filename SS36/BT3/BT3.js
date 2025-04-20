document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".color-buttons button");


  const savedColor = localStorage.getItem("backgroundColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }


  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const color = button.getAttribute("data-color");
      document.body.style.backgroundColor = color;

      // Lưu màu vào localStorage
      localStorage.setItem("backgroundColor", color);
    });
  });
});