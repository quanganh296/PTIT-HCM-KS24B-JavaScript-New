
function biggestNumber(number) {
    let digits = number.toString().split("");
    digits.sort((a, b) => b - a);
    return parseInt(digits.join(""), 10);
}
let input = parseInt(prompt("Nhập một số nguyên:"));

if (isNaN(input)) {
    alert("Dữ liệu không hợp lệ");
} else {
    let result = biggestNumber(input);
    alert("Số lớn nhất có thể tạo từ các chữ số là: " + result);
}