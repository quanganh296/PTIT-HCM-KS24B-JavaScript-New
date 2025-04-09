function openImage(imgElement) {
    let fullImage = document.getElementById("fullImage");
    let overlay = document.getElementById("overlay");

    fullImage.src = imgElement.src;
    overlay.style.display = "flex";
}

function closeImage() {
    document.getElementById("overlay").style.display = "none";
}
