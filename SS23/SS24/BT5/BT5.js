let numbers = []; 
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tính tổng đường chéo chính\n" +
        "5. Tính tổng đường chéo phụ\n" +
        "6. Tính trung bình cộng của phần tử tại một hàng hoặc một cột(Người dùng chọn hàng hoặc cột cần tính toán)\n" +
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
                let diagonalSum = 0;
                for (let i = 0; i < numbers.length; i++) {
                    diagonalSum += numbers[i][i];
                }
                alert("Tổng đường chéo chính");
                break;
    
            case 5:
                let secondaryDiagonalSum = 0;
                for (let i = 0; i < numbers.length; i++) {
                    secondaryDiagonalSum += numbers[i][numbers[i].length - 1 - i];
                }
                alert("Tính tổng đường chéo phụ");
                break;
    
            case 6:
                let option = prompt("Nhập 'row' để tính theo hàng hoặc 'col' để tính theo cột:");
                if (option === "row") {
                    let rowIndex = parseInt(prompt("Nhập chỉ số hàng (bắt đầu từ 0):"));
                    if (rowIndex >= 0 && rowIndex < numbers.length) {
                        let rowSum = 0;
                        for (let j = 0; j < numbers[rowIndex].length; j++) {
                            rowSum += numbers[rowIndex][j];
                        }
                        let rowAverage = rowSum / numbers[rowIndex].length;
                        alert("Tổng các phần tử của hàng " + rowIndex + ": " + rowSum + "\nTrung bình cộng: " + rowAverage);
                    } else {
                        alert("Chỉ số hàng không hợp lệ.");
                    }
                } else if (option === "col") {
                    let colIndex = parseInt(prompt("Nhập chỉ số cột (bắt đầu từ 0):"));
                    if (colIndex >= 0 && colIndex < numbers[0].length) {
                        let colSum = 0;
                        for (let i = 0; i < numbers.length; i++) {
                            colSum += numbers[i][colIndex];
                        }
                        let colAverage = colSum / numbers.length;
                        alert("Tổng các phần tử của cột " + colIndex + ": " + colSum + "\nTrung bình cộng: " + colAverage);
                    } else {
                        alert("Chỉ số cột không hợp lệ.");
                    }
                } else {
                    alert("Lựa chọn không hợp lệ. Vui lòng nhập 'row' hoặc 'col'.");
                }
                break;
    
            case 7:
                alert("Thoát chương trình.");
                break;
    
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 7);
