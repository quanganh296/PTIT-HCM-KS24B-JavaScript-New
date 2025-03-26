// Xóa các phần tử trùng lặp trong mảng và sắp xếp lại theo thứ tự tăng dần
let numbers = [2, 1,7,1,1,8,6,2,2,7];

let uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueNumbers.length; j++) {
        if (numbers[i] === uniqueNumbers[j]) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        uniqueNumbers.push(numbers[i]);
    }
}

for (let i = 0; i < uniqueNumbers.length - 1; i++) {
    for (let j = i + 1; j < uniqueNumbers.length; j++) {
        if (uniqueNumbers[i] > uniqueNumbers[j]) {
            let temp = uniqueNumbers[i];
            uniqueNumbers[i] = uniqueNumbers[j];
            uniqueNumbers[j] = temp;
        }
    }
}

console.log("Mảng sau khi loại bỏ các phần tử trùng lặp và sắp xếp theo thứ tự tăng dần: ", uniqueNumbers);