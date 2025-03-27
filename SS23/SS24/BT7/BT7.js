let str = "";
let choice;

do {
    choice = parseInt(prompt(
        "================== MENU ===================\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi\n" +
        "4. Đảo ngược chuỗi ký tự\n" +
        "5. Đếm số lượng từ trong chuỗi ký tự\n" +
        "6. Tìm kiếm và thay thế các ký tự trong chuỗi\n" +
        "7. Thoát chương trình\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi:");
            break;
        case 2:
            alert("Chuỗi hiện tại: " + str);
            break;
        case 3:
            str = str.trim();
            alert("Chuỗi sau khi loại bỏ khoảng trắng: " + str);
            break;
        case 4:
            str = str.split("").reverse().join("");
            alert("Chuỗi sau khi đảo ngược: " + str);
            break;
        case 5:
            let wordCount = str.trim().split(/\s+/).length;
            alert("Số lượng từ trong chuỗi: " + wordCount);
            break;
        case 6:
            let charToFind = prompt("Nhập ký tự cần tìm:");
            if (str.includes(charToFind)) {
                let charToReplace = prompt("Nhập ký tự thay thế:");
                str = str.split(charToFind).join(charToReplace);
                alert("Chuỗi sau khi thay thế: " + str);
            } else {
                alert("Không tìm thấy ký tự '" + charToFind + "' trong chuỗi.");
            }
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (choice !== 7);