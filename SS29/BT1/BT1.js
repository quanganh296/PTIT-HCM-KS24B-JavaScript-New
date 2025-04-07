let contactList = []; 
let choice;

do {
    choice = prompt(
        "==========MENU==========\n" +
        "1. Thêm đối tượng Contact vào danh sách liên hệ.\n" +
        "2. Hiển thị danh sách liên hệ.\n" +
        "3. Tìm kiếm thông tin Contact theo số điện thoại.\n" +
        "4. Cập nhật thông tin Contact (name, email, phone) theo id.\n" +
        "5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.\n" +
        "6. Thoát.\n"
    );

    switch (choice) {
        case "1": {
            let id = prompt("Nhập id của liên hệ:");
            let name = prompt("Nhập tên của liên hệ:");
            let email = prompt("Nhập email của liên hệ:");
            let phone = prompt("Nhập số điện thoại của liên hệ:");

            const contact = {
                id: parseInt(id),
                name: name,
                email: email,
                phone: phone
            };

            contactList.push(contact);
            alert("Thêm liên hệ thành công!");
            break;
        }

        case "2": {
            if (contactList.length === 0) {
                alert("Danh sách liên hệ trống.");
            } else {
                let result = "Danh sách liên hệ:\n";
                contactList.forEach(contact => {
                    result += `ID: ${contact.id}\n` +
                        `Tên: ${contact.name}\n` +
                        `Email: ${contact.email}\n` +
                        `Số điện thoại: ${contact.phone}\n` +
                        `========================\n`;
                });
                alert(result);
            }
            break;
        }

        case "3": {
            let searchPhone = prompt("Nhập số điện thoại cần tìm:");
            let foundContact = contactList.find(contact => contact.phone === searchPhone);

            if (foundContact) {
                alert(
                    `Thông tin liên hệ:\n` +
                    `ID: ${foundContact.id}\n` +
                    `Tên: ${foundContact.name}\n` +
                    `Email: ${foundContact.email}\n` +
                    `Số điện thoại: ${foundContact.phone}`
                );
            } else {
                alert("Không tìm thấy liên hệ với số điện thoại này.");
            }
            break;
        }

        case "4": {
            let id = parseInt(prompt("Nhập id của liên hệ cần cập nhật:"));
            let contactToUpdate = contactList.find(contact => contact.id === id);

            if (contactToUpdate) {
                contactToUpdate.name = prompt("Nhập tên mới:") || contactToUpdate.name;
                contactToUpdate.email = prompt("Nhập email mới:") || contactToUpdate.email;
                contactToUpdate.phone = prompt("Nhập số điện thoại mới:") || contactToUpdate.phone;
                alert("Cập nhật thông tin liên hệ thành công!");
            } else {
                alert("Không tìm thấy liên hệ với id này.");
            }
            break;
        }

        case "5": {
            let id = parseInt(prompt("Nhập id của liên hệ cần xóa:"));
            const index = contactList.findIndex(contact => contact.id === id);

            if (index !== -1) {
                contactList.splice(index, 1); 
            } else {
                alert("Không tìm thấy liên hệ với id này.");
            }
            break;
        }

        case "6": {
            alert("Thoát chương trình!");
            break;
        }

        default: {
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    }
} while (choice !== "6");