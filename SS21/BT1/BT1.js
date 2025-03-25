let sum = 0;

for (let i = 0; i < 5; i++) {
    let number = parseInt(prompt("Nhập số nguyên thứ "+ (i +1) + ":"));
    
    if (isNaN(number)) {
        alert("Vui lòng nhập một số nguyên hợp lệ.");
        i--; 
    } else if (number % 2 !== 0) {
        sum += number;
    }
}

console.log("Tổng các số lẻ là: " + sum);