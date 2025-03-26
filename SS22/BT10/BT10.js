let numbers = []; 
let choice;

do {
    choice = parseInt(prompt(
        "MENU\n" +
        "1. Nhập vào mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Thêm phần tử\n" +
        "4. Sửa phần tử\n" +
        "5. Xóa phần tử\n" +
        "6. Thoát\n" +
        "Lựa chọn của bạn:"));

    switch (choice) {
        case 1:
           numbers=[];
           let n=parseInt(prompt("Nhập số lượng phần tử của mảng: "));
           for (let i = 0; i < n; i++) {
                let element = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
                numbers.push(element);
            }
            alert("Đã nhập xong mảng: ",numbers);
            break;
        case 2:
            if (numbers.length === 0) {
                alert("Mảng hiện đang trống.");
            } else {
                alert("Mảng hiện tại: " + numbers.join(", "));
            }
            break;
        case 3:
            let element = parseInt(prompt("Nhập phần tử cần thêm:"));
            numbers.push(element);
            alert(`Đã thêm phần tử ${element} vào mảng.`);
            break;
        case 4:
            let indexToEdit = parseInt(prompt("Nhập vị trí cần sửa (bắt đầu từ 0):"));
            if (indexToEdit >= 0 && indexToEdit < numbers.length) {
                let newValue = parseInt(prompt("Nhập giá trị mới:"));
                numbers[indexToEdit] = newValue;
                alert(`Đã sửa phần tử tại vị trí ${indexToEdit} thành ${newValue}.`);
            } else {
                alert("Vị trí không hợp lệ.");
            }
            break;
        case 5:
            let indexToDelete = parseInt(prompt("Nhập vị trí cần xóa (bắt đầu từ 0):"));
            if (indexToDelete >= 0 && indexToDelete < numbers.length) {
                let removed = numbers.splice(indexToDelete, 1); 
                alert(`Đã xóa phần tử ${removed} tại vị trí ${indexToDelete}.`);
            } else {
                alert("Vị trí không hợp lệ.");
            }
            break;
        case 6:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 6);