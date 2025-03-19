
let num1 = parseInt(prompt("Nhap so thu nhat:"));
let num2 = parseInt(prompt("Nhap so thu hai:"));

let min = Math.min(num1, num2);
let max = Math.max(num1, num2);

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;


alert(`So ngau nhien giua ${min} va ${max} la: ${randomNumber}`);
document.writeln(`So ngau nhien giua ${min} va ${max} la: ${randomNumber}`);
