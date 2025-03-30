let numbers = [2, 4, 8, 1, 9];
let minNumber;

if (numbers.length == 0) {
    console.log("Mảng không chứa phần tử.");
} else if (!Array.isArray(numbers)) {
    console.log("Giá trị không hợp lệ.");
} else {
    minNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minNumber) {
            minNumber = numbers[i];
        }
    }
    console.log("Phần tử nhỏ nhất trong mảng là " + minNumber);
}