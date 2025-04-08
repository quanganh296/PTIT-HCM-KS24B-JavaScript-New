let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
];
let cart = [];
function showProductsByCategory() {
    let categories = [...new Set(products.map(p => p.category))];
    let result = ""; 
categories.forEach(category => {
    result += `\nDanh mục: ${category}\n`;
     products.filter(p => p.category === category).forEach(p => {
    result += `  ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, Số lượng: ${p.quantity}\n`;
        });
    });

    if (result === "") {
        alert("Không có sản phẩm nào trong danh mục.");
    } else {
 alert(result); 
    }
}
function buyProduct(productId, buyQuantity) {
    let product = products.find(p => p.id === productId);
    if (!product) {
        console.log("Sản phẩm không tồn tại.");
     return;
    }
    if (product.quantity < buyQuantity) {
        console.log("Số lượng không đủ để mua.");
        return;
    }
    product.quantity -= buyQuantity;
    let cartItem = cart.find(p => p.id === productId);
    if (cartItem) {
  cartItem.quantity += buyQuantity;
    } else {
 cart.push({ id: product.id, name: product.name, price: product.price, quantity: buyQuantity });
    }
    console.log(`Đã thêm ${buyQuantity} ${product.name} vào giỏ hàng.`);
}
function sortProductsByPrice(order = "asc") {
 if (order === "asc") {
      products.sort((a, b) => a.price - b.price);
    } else {
      products.sort((a, b) => b.price - a.price);
    }
    let result = "Danh sách sản phẩm sau khi sắp xếp:\n";
 products.forEach(p => {
    result += `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, Số lượng: ${p.quantity}\n`;
    });
 alert(result); 
}
function calculateTotal() {
    if (cart.length === 0) {
     alert("Giỏ hàng trống. Vui lòng thêm sản phẩm vào giỏ hàng trước.");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
 alert(`Tổng tiền thanh toán: ${total} VND`);
}
function mainMenu() {
    let choice;
    do {
        choice = prompt(
            "========== MENU ==========\n" +
            "1. Hiển thị sản phẩm theo danh mục\n" +
            "2. Chọn sản phẩm để mua\n" +
            "3. Sắp xếp sản phẩm theo giá (tăng dần)\n" +
            "4. Sắp xếp sản phẩm theo giá (giảm dần)\n" +
            "5. Tính tiền giỏ hàng\n" +
            "6. Thoát\n" +
            "==========================\n" +
            "Nhập lựa chọn của bạn:"
        );

        switch (choice) {
            case "1":
                showProductsByCategory();
             break;
         case "2":
            let id = parseInt(prompt("Nhập ID sản phẩm muốn mua:"));
             let qty = parseInt(prompt("Nhập số lượng:"));
            buyProduct(id, qty);
             break;
            case "3":
                sortProductsByPrice("asc");
                break;
            case "4":
                sortProductsByPrice("desc");
            break;
         case "5":
            calculateTotal();
            break;
         case "6":
            console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while (choice !== '6');
}

mainMenu();
