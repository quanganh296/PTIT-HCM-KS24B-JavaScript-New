const colorInput = document.getElementById("color");


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


colorInput.addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});