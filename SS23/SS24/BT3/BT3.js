let numbers = [];
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n" +
        "4. Tính tổng và trung bình cộng của các số dương trong mảng\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có đối xứng không\n" +
        "7. Thoát chương trình\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));

    if (choice === 1) {
        numbers = [];
        let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
        for (let i = 0; i < n; i++) {
            let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
            numbers.push(num);
        }
        alert("Đã nhập xong mảng.");
    } else if (choice === 2) {
        if (numbers.length === 0) {
            alert("Mảng hiện đang trống.");
        } else {
            alert("Các phần tử trong mảng: " + numbers.join(", "));
        }
    } else if (choice === 3) {
        if (numbers.length === 0) {
            alert("Mảng hiện đang trống.");
        } else {
            let max = numbers[0];
            let maxNumber = 0;
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] > max) {
                    max = numbers[i];
                    maxNumber = i;
                }
            }
            alert("Phần tử lớn nhất: " + max + " tại chỉ số " + maxNumber);
        }
    } else if (choice === 4) {
        let sum = 0;
        let count = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > 0) {
                sum += numbers[i];
                count++;
            }
        }
        if (count > 0) {
            let average = sum / count;
            alert("Tổng các số dương: " + sum + "\nTrung bình cộng: " + average);
        } else {
            alert("Không có số dương trong mảng.");
        }
    } else if (choice === 5) {
        if (numbers.length === 0) {
            alert("Mảng hiện đang trống.");
        } else {
            let reversedArray = [];
            for (let i = numbers.length - 1; i >= 0; i--) {
                reversedArray.push(numbers[i]);
            }
            alert("Mảng sau khi đảo ngược: " + reversedArray.join(", "));
        }
    } else if (choice === 6) {
        let isSymmetric = true;
        for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
            if (numbers[i] !== numbers[numbers.length - 1 - i]) {
                isSymmetric = false;
                break;
            }
        }
        if (isSymmetric) {
            alert("Mảng là đối xứng.");
        } else {
            alert("Mảng không đối xứng.");
        }
    } else if (choice === 7) {
        alert("Thoát chương trình.");
    } else {
        alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 7);