let width = parseInt(prompt("Nhập chiều rộng của hình chữ nhật:"));
let height = parseInt(prompt("Nhập chiều cao của hình chữ nhật:"));

if (isNaN(width) || isNaN(height) || width < 2 || height < 2) {
    alert("Chiều rộng và chiều cao phải là số nguyên lớn hơn hoặc bằng 2.");
    throw new Error("Invalid input: width and height must be integers >= 2.");
}

document.writeln("<pre>");


document.writeln("*".repeat(width));

for (let i = 0; i < height - 2; i++) {
    document.writeln("*" + " ".repeat(width - 2) + "*");
}

document.writeln("*".repeat(width));

document.writeln("</pre>");