let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maxNumber = numbers[0];
let locate = 0;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
        locate = i;
    }
}

console.log("Số lớn nhất: " + maxNumber);
console.log("Vị trí: " + locate);
