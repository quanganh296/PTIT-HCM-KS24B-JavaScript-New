let numbers = []; 
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập số phần tử cần nhập và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra giá trị các phần tử chẵn và tính tổng\n" +
        "4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n" +
        "5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n" +
        "6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Thoát\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            numbers = [];
            let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
            for (let i = 0; i < n; i++) {
                let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
                numbers.push(num);
            }
            alert("Đã nhập xong mảng.");
            break;

        case 2:
            if (numbers.length === 0) {
                alert("Mảng hiện đang trống.");
            } else {
                alert("Các phần tử trong mảng: " + numbers.join(", "));
            }
            break;

        case 3:
            let evenNumbers = [];
            let evenSum = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] % 2 === 0) {
                    evenNumbers.push(numbers[i]);
                    evenSum += numbers[i];
                }
            }
            alert("Các phần tử chẵn: " + evenNumbers.join(", ") + "\nTổng các phần tử chẵn: " + evenSum);
            break;

        case 4:
            if (numbers.length === 0) {
                alert("Mảng hiện đang trống.");
            } else {
                let max = numbers[0];
                let min = numbers[0];
                for (let i = 1; i < numbers.length; i++) {
                    if (numbers[i] > max) max = numbers[i];
                    if (numbers[i] < min) min = numbers[i];
                }
                alert("Giá trị lớn nhất: " + max + "\nGiá trị nhỏ nhất: " + min);
            }
            break;

        case 5:
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
            break;

        case 6:
            let searchNum = parseInt(prompt("Nhập số cần thống kê:"));
            let count = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] === searchNum) {
                    count++;
                }
            }
            alert(`Số ${searchNum} xuất hiện ${count} lần trong mảng.`);
            break;

        case 7:
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
            break;

        case 8:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 8);