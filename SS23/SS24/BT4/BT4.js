let numbers = []; 
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó \n" +
        "5. Tính trung bình cộng của phần tử tại một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát chương trình\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            let rows = parseInt(prompt("Nhập số hàng:"));
            let cols = parseInt(prompt("Nhập số cột:"));
            numbers = [];

            for (let i = 0; i < rows; i++) {
                let row = prompt("Nhập hàng " + (i + 1) + " (các số cách nhau bởi dấu cách):").split(" ");
                for (let j = 0; j < row.length; j++) {
                    row[j] = parseInt(row[j]);
                }
                numbers.push(row);
            }

            alert("Đã nhập xong mảng 2 chiều.");
            break;

        case 2:
            if (numbers.length === 0) {
                alert("Mảng hiện đang trống.");
            } else {
                let result = "Mảng 2 chiều:\n";
                for (let i = 0; i < numbers.length; i++) {
                    result += numbers[i].join(" ") + "\n";
                }
                alert(result);
            }
            break;

        case 3:
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                for (let j = 0; j < numbers[i].length; j++) {
                    sum += numbers[i][j];
                }
            }
            alert("Tổng các phần tử trong mảng: " + sum);
            break;

        case 4:
            let max = numbers[0][0];
            let maxRow = 0;
            let maxCol = 0;
            for (let i = 0; i < numbers.length; i++) {
                for (let j = 0; j < numbers[i].length; j++) {
                    if (numbers[i][j] > max) {
                        max = numbers[i][j];
                        maxRow = i;
                        maxCol = j;
                    }
                }
            }
            alert("Phần tử lớn nhất là " + max + " tại vị trí [" + maxRow + "][" + maxCol + "]");
            break;

        case 5:
            let row = parseInt(prompt("Nhập số hàng cần tính trung bình cộng:"));
            if (row >= 0 && row < numbers.length) {
                let rowSum = 0;
                for (let j = 0; j < numbers[row].length; j++) {
                    rowSum += numbers[row][j];
                }
                let average = rowSum / numbers[row].length;
                alert("Trung bình cộng của hàng " + row + " là: " + average);
            } else {
                alert("Số hàng không hợp lệ.");
            }
            break;

        case 6:
            numbers.reverse();
            alert("Đã đảo ngược các hàng trong mảng.");
            break;

        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 7);