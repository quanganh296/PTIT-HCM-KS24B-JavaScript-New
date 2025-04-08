document.addEventListener("DOMContentLoaded", function () {
    let boxes = document.querySelectorAll(".color-box");
    boxes.forEach(box => {
        box.addEventListener("click", function () {
    let color = this.getAttribute("data-color");
        document.body.style.backgroundColor = color;
    });
});
});
