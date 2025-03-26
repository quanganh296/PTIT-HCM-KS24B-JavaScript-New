let n = parseInt(prompt("Nhập độ dài mảng:"));

if (n === 0) {
    alert("Không có ký tự số");
} else {
    let inputArray = [];
    let numericCharacters = []; 

    for (let i = 0; i < n; i++) {
        inputArray.push(prompt(`Nhập phần tử thứ ${i + 1}:`));
    }

    for (let i = 0; i < n; i++) {
        if (inputArray[i] >= '0' && inputArray[i] <= '9') {
            numericCharacters.push(inputArray[i]); 
        }
    }

    if (numericCharacters.length > 0) {
        alert("Các ký tự số trong mảng: " + numericCharacters.join(", "));
        console.log("Các ký tự số trong mảng: " + numericCharacters.join(", "));
    } else {
        alert("Không có ký tự số");
    }
}