function login() {
    const fixedUsername = "huanrose@gmail.com";
    const fixedPassword = "123456";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === fixedUsername && password === fixedPassword) {
        console.log("Đăng nhập thành công!");
        alert("Đăng nhập thành công!");
    } else {
        alert("Đăng nhập thất bại!");
        console.log("Đăng nhập thất bại!");
    }
}