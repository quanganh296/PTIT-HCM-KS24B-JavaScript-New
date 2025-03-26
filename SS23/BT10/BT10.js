let numbers = []; 
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập số phần tử cần nhập và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần\n" +
        "4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng\n" +
        "5. In ra các số nguyên tố trong mảng và tính tổng\n" +
        "6. Nhập một số và đếm số lần xuất hiện trong mảng\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Xóa một phần tử theo giá trị\n" +
        "9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần\n" +
        "0. Thoát\n" +
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
        let evenNumbers = [];
        let evenSum = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                evenNumbers.push(numbers[i]);
                evenSum += numbers[i];
            }
        }
        for (let i = 0; i < evenNumbers.length - 1; i++) {
            for (let j = i + 1; j < evenNumbers.length; j++) {
                if (evenNumbers[i] < evenNumbers[j]) {
                    let temp = evenNumbers[i];
                    evenNumbers[i] = evenNumbers[j];
                    evenNumbers[j] = temp;
                }
            }
        }
        alert("Các phần tử chẵn: " + evenNumbers.join(", ") + "\nTổng các phần tử chẵn: " + evenSum);
    } else if (choice === 4) {
        if (numbers.length === 0) {
            alert("Mảng hiện đang trống.");
        } else {
            let max = numbers[0];
            let min = numbers[0];
            let maxIndex = 0;
            let minIndex = 0;
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] > max) {
                    max = numbers[i];
                    maxIndex = i;
                }
                if (numbers[i] < min) {
                    min = numbers[i];
                    minIndex = i;
                }
            }
            alert("Giá trị lớn nhất: " + max + " tại vị trí " + maxIndex + "\nGiá trị nhỏ nhất: " + min + " tại vị trí " + minIndex);
        }
    } else if (choice === 5) {
        let primeNumbers = [];
        let primeSum = 0;
        for (let i = 0; i < numbers.length; i++) {
            let isPrime = true;
            if (numbers[i] < 2) {
                isPrime = false;
            } else {
                for (let j = 2; j <= Math.sqrt(numbers[i]); j++) {
                    if (numbers[i] % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }
            if (isPrime) {
                primeNumbers.push(numbers[i]);
                primeSum += numbers[i];
            }
        }
        alert("Các số nguyên tố: " + primeNumbers.join(", ") + "\nTổng các số nguyên tố: " + primeSum);
    } else if (choice === 6) {
        let searchNum = parseInt(prompt("Nhập số cần thống kê:"));
        let count = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === searchNum) {
                count++;
            }
        }
        alert(`Số ${searchNum} xuất hiện ${count} lần trong mảng.`);
    } else if (choice === 7) {
        let newElement = parseInt(prompt("Nhập giá trị phần tử cần thêm:"));
        let position = parseInt(prompt("Nhập vị trí cần thêm (bắt đầu từ 0):"));
        if (position >= 0 && position <= numbers.length) {
            for (let i = numbers.length; i > position; i--) {
                numbers[i] = numbers[i - 1];
            }
            numbers[position] = newElement;
            alert("Đã thêm phần tử " + newElement + " vào vị trí " + position);
        } else {
            alert("Vị trí không hợp lệ.");
        }
    } else if (choice === 8) {
        let deleteValue = parseInt(prompt("Nhập giá trị cần xóa:"));
        let found = false;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === deleteValue) {
                for (let j = i; j < numbers.length - 1; j++) {
                    numbers[j] = numbers[j + 1];
                }
                numbers.length--;
                found = true;
                break;
            }
        }
        if (found) {
            alert("Đã xóa phần tử " + deleteValue + " khỏi mảng.");
        } else {
            alert("Không tìm thấy giá trị cần xóa trong mảng.");
        }
    } else if (choice === 9) {
        let sortChoice = prompt("Nhập 'asc' để sắp xếp tăng dần hoặc 'desc' để sắp xếp giảm dần:");
        for (let i = 0; i < numbers.length - 1; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if ((sortChoice === "asc" && numbers[i] > numbers[j]) || (sortChoice === "desc" && numbers[i] < numbers[j])) {
                    let temp = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = temp;
                }
            }
        }
        alert("Mảng sau khi sắp xếp: " + numbers.join(", "));
    } else if (choice === 0) {
        alert("Thoát chương trình.");
    } else {
        alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 0);