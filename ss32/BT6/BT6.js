function changeFontSize(change) {
    let textElement = document.getElementById("text");
    let currentSize = parseInt(window.getComputedStyle(textElement).fontSize);
    let newSize = currentSize + change;

    if (newSize >= 10 && newSize <= 50) { 
        textElement.style.fontSize = newSize + "px";
    }
}
