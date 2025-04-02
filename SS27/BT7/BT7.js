let numbers = [];
function findMissingNumber(numbers) {
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    let expectedSum = ((max * (max + 1)) / 2) - ((min * (min - 1)) / 2); 
    let actualSum = numbers.reduce((sum, num) => sum + num, 0); 
    return expectedSum - actualSum;
}
numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];

let input = prompt("Nhập các số nguyên liên tiếp, cách nhau bởi dấu phẩy:");
let array = input.split(",").map(Number);

if (array.some(isNaN)) {
    alert("Dữ liệu không hợp lệ");
} else {
    let missingNumber = findMissingNumber(array);
    if (missingNumber === 0) {
        alert("Không có số nào bị thiếu.");
    } else {
        alert("Số bị thiếu là: " + missingNumber);
    }
}