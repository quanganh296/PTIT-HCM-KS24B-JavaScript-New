let menu = {}; 
let choice;

do {
    choice = prompt(
        "==========MENU==========\n" +
        "1. Thêm món ăn vào danh mục.\n" +
        "2. Xóa món ăn theo tên khỏi danh mục.\n" +
        "3. Cập nhật thông tin món ăn theo tên.\n" +
        "4. Hiển thị toàn bộ menu.\n" +
        "5. Tìm kiếm món ăn theo tên.\n" +
        "6. Thoát.\n"
    );

    switch (choice) {
        case "1": {
            let category = prompt("Nhập tên danh mục:");
            let dishName = prompt("Nhập tên món ăn:");
            let price = parseFloat(prompt("Nhập giá món ăn:"));
            let description = prompt("Nhập mô tả món ăn:");
            if (!menu[category]) {
             menu[category] = []; 
            }

            menu[category].push({
             name: dishName,
            price: price,
            description: description
            });

            alert("Thêm món ăn thành công!");
            break;
        }

        case "2": {
            let category = prompt("Nhập tên danh mục:");
            let dishName = prompt("Nhập tên món ăn cần xóa:");

            if (menu[category]) {
                const index = menu[category].findIndex(dish => dish.name === dishName);
                if (index !== -1) {
                    menu[category].splice(index, 1); 
                    alert("Xóa món ăn thành công!");
                } else {
                    alert("Không tìm thấy món ăn trong danh mục này.");
                }
            } else {
                alert("Danh mục không tồn tại.");
            }
            break;
        }

        case "3": {
            let category = prompt("Nhập tên danh mục:");
            let dishName = prompt("Nhập tên món ăn cần cập nhật:");

            if (menu[category]) {
                let dishToUpdate = menu[category].find(dish => dish.name === dishName);

                if (dishToUpdate) {
                 dishToUpdate.name = prompt("Nhập tên mới:") || dishToUpdate.name;
                 dishToUpdate.price = parseFloat(prompt("Nhập giá mới:")) || dishToUpdate.price;
                 dishToUpdate.description = prompt("Nhập mô tả mới:") || dishToUpdate.description;
             alert("Cập nhật thông tin món ăn thành công!");
                } else {
        alert("Không tìm thấy món ăn trong danh mục này.");
                }
            } else {
            alert("Danh mục không tồn tại.");
            }
            break;
        }

        case "4": {
            if (Object.keys(menu).length === 0) {
                alert("Menu trống.");
            } else {
            let result = "Toàn bộ menu:\n";
            for (let category in menu) {
                result += `Danh mục: ${category}\n`;
                 menu[category].forEach(dish => {
                        result += `  - Tên món: ${dish.name}\n` +
                            `    Giá: ${dish.price}\n` +
                            `    Mô tả: ${dish.description}\n`;
                });
            result += "========================\n";
                }
                alert(result);
            }
            break;
        }

        case "5": {
            let searchName = prompt("Nhập tên món ăn cần tìm:");
            let foundDishes = [];

            for (let category in menu) {
                menu[category].forEach(dish => {
                    if (dish.name.includes(searchName)) {
                        foundDishes.push({
                        category: category,
                         ...dish
                        });
                    }
             });
            }

            if (foundDishes.length > 0) {
                let result = "Kết quả tìm kiếm:\n";
                foundDishes.forEach(dish => {
                    result += `Danh mục: ${dish.category}\n` +
                        `  - Tên món: ${dish.name}\n` +
                        `    Giá: ${dish.price}\n` +
                        `    Mô tả: ${dish.description}\n`;
                });
                alert(result);
            } else {
                alert("Không tìm thấy món ăn nào.");
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