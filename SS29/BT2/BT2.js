let productList = []; 
let choice;

do {
    choice = prompt(
        "==========MENU==========\n" +
        "1. Thêm sản phẩm vào danh sách sản phẩm.\n" +
        "2. Hiển thị tất cả sản phẩm.\n" +
        "3. Hiển thị chi tiết sản phẩm theo id.\n" +
        "4. Cập nhật thông tin sản phẩm theo id.\n" +
        "5. Xóa sản phẩm theo id.\n" +
        "6. Lọc sản phẩm theo khoảng giá.\n" +
        "7. Thoát.\n"
    );

    switch (choice) {
        case "1": {
            let id = prompt("Nhập id sản phẩm:");
            let name = prompt("Nhập tên sản phẩm:");
            let price = parseFloat(prompt("Nhập giá sản phẩm:"));
            let category = prompt("Nhập danh mục sản phẩm:");
            let quantity = parseInt(prompt("Nhập số lượng sản phẩm trong kho:"));

            const product = {
                id: id,
                name: name,
                price: price,
                category: category,
                quantity: quantity
            };

            productList.push(product); 
            alert("Thêm sản phẩm thành công!");
            break;
        }

        case "2": {
            if (productList.length === 0) {
                alert("Danh sách sản phẩm trống.");
            } else {
                let result = "Danh sách sản phẩm:\n";
                productList.forEach(product => {
                    result += `ID: ${product.id}\n` +
                        `Tên: ${product.name}\n` +
                        `Giá: ${product.price}\n` +
                        `Danh mục: ${product.category}\n` +
                        `Số lượng: ${product.quantity}\n` +
                        `========================\n`;
                });
                alert(result);
            }
            break;
        }

        case "3": {
            let id = prompt("Nhập id sản phẩm cần xem chi tiết:");
            let product = productList.find(product => product.id === id);

            if (product) {
                alert(
                    `Chi tiết sản phẩm:\n` +
                    `ID: ${product.id}\n` +
                    `Tên: ${product.name}\n` +
                    `Giá: ${product.price}\n` +
                    `Danh mục: ${product.category}\n` +
                    `Số lượng: ${product.quantity}`
                );
            } else {
                alert("Không tìm thấy sản phẩm với id này.");
            }
            break;
        }

        case "4": {
            let id = prompt("Nhập id sản phẩm cần cập nhật:");
            let productToUpdate = productList.find(product => product.id === id);

            if (productToUpdate) {
                productToUpdate.name = prompt("Nhập tên mới:") || productToUpdate.name;
                productToUpdate.price = parseFloat(prompt("Nhập giá mới:")) || productToUpdate.price;
                productToUpdate.category = prompt("Nhập danh mục mới:") || productToUpdate.category;
                productToUpdate.quantity = parseInt(prompt("Nhập số lượng mới:")) || productToUpdate.quantity;
                alert("Cập nhật thông tin sản phẩm thành công!");
            } else {
                alert("Không tìm thấy sản phẩm với id này.");
            }
            break;
        }

        case "5": {
            let id = prompt("Nhập id sản phẩm cần xóa:");
            const index = productList.findIndex(product => product.id === id);

            if (index !== -1) {
                productList.splice(index, 1); 
                alert("Xóa sản phẩm thành công!");
            } else {
                alert("Không tìm thấy sản phẩm với id này.");
            }
            break;
        }

        case "6": {
            let minPrice = parseFloat(prompt("Nhập giá tối thiểu:"));
            let maxPrice = parseFloat(prompt("Nhập giá tối đa:"));

            let filteredProducts = productList.filter(product => product.price >= minPrice && product.price <= maxPrice);

            if (filteredProducts.length > 0) {
                let result = "Sản phẩm trong khoảng giá:\n";
                filteredProducts.forEach(product => {
                    result += `ID: ${product.id}\n` +
                        `Tên: ${product.name}\n` +
                        `Giá: ${product.price}\n` +
                        `Danh mục: ${product.category}\n` +
                        `Số lượng: ${product.quantity}\n` +
                        `========================\n`;
                });
                alert(result);
            } else {
                alert("Không có sản phẩm nào trong khoảng giá này.");
            }
            break;
        }

        case "7": {
            alert("Thoát chương trình!");
            break;
        }

        default: {
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    }
} while (choice !== "7");