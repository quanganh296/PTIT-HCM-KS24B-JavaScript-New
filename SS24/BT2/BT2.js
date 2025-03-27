let numbers = []; 
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm các phần tử chẵn và lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tử lớn thứ 2 trong mảng\n" +
        "7. Thoát chương trình\n" +
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
            let oddNumbers = [];
            let evenSum = 0;
            let oddSum = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] % 2 === 0) {
                    evenNumbers.push(numbers[i]);
                    evenSum += numbers[i];
                } else {
                    oddNumbers.push(numbers[i]);
                    oddSum += numbers[i];
                }
            }
            alert("Các phần tử chẵn: " + evenNumbers.join(", ") + "\nCác phần tử lẻ: " + oddNumbers.join(", "));
            break;

        case 4:
            let averageSum = 0;
            for (let i = 0; i < numbers.length; i++) {
                averageSum += numbers[i];
            }
            averageSum /= numbers.length;
            alert("Trung bình cộng của mảng: " + averageSum);
            break;


        case 5:
            let deleteLocate = parseInt(prompt("Nhập vị trí phần tử cần xóa:"));
            if (deleteLocate >= 0 && deleteLocate < numbers.length) {
                let removedElement = numbers.splice(deleteLocate, 1);
                alert("Đã xóa phần tử tại vị trí thứ " + deleteLocate + " khỏi mảng.");
            } else {
                alert("Vị trí không hợp lệ. Vui lòng nhập lại.");
            }
            break;

        case 6:
           

        let maxNumber = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > maxNumber) {
                maxNumber = numbers[i];
            }
        }
    
    
        let secondMax = null;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] !== maxNumber) {
                if (secondMax === null || numbers[i] > secondMax) {
                    secondMax = numbers[i];
                }
            }
        }
    
    
        if (secondMax === null) {
            alert("Không có số lớn thứ 2 trong dãy số.");
        } else {
            alert(secondMax + " là số lớn thứ 2 trong dãy số.");
        }
break;

        case 7:
          
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 7);