document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("modal");
    let openModalBtn = document.getElementById("openModal");
    let closeModalBtn = document.querySelector(".close");
    openModalBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
       modal.style.display = "none";
    }
});
});
