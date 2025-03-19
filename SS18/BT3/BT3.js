let username;
let password;

do {
    username = prompt("Nhap ten nguoi dung:");

    if (username === "ADMIN") {
        password = prompt("Nhap mat khau:");

        if (password === "TheMaster") {
            alert("Welcome");
            break; 
        } else if (password === null || password === "") {
            alert("Cancelled");
        } else {
            alert("Wrong password");
        }
    } else if (username === null || username === "") {
        alert("Cancelled");
    } else {
        alert("Khong the xac nhan danh tinh!");
    }
} while (true); 