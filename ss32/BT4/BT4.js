function validateEmail() {
    const email = document.getElementById("emailInput").value;
    const result = document.getElementById("result");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;

    if (emailPattern.test(email)) {
        result.textContent = "Email hợp lệ!";
        result.className = "valid";
    } else {
        result.textContent = "Email không hợp lệ!";
        result.className = "invalid";
    }
}
