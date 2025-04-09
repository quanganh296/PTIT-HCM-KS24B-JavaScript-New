let input = document.getElementById("1");
let count = 0; 
let countDisplay = document.getElementById("count-display");

function clickCount(){
    count++;
    countDisplay.textContent = "Số lần bấm: " + count;
}
input.addEventListener("click", clickCount);