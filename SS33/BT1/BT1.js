function register() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const message = document.getElementById("message");

    if (!email) {
      message.textContent = "Email không được bỏ trống!";
      message.style.color = "red";
      return;
  }
  if (!validateEmail(email)) {
      message.textContent = "Email không hợp lệ!";
      message.style.color = "red";
      return;
  }
    if (!password) {
        message.textContent = "Mật khẩu không được bỏ trống!";
        message.style.color = "red";
        return;
    }
    if (password !== confirmPassword) {
        message.textContent = "Xác nhận mật khẩu không trùng khớp!";
        message.style.color = "red";
        return;
    }

    let accountsString = localStorage.getItem("accounts") || "";
    let accounts = accountsString ? accountsString.split(";") : [];
    const emailExists = accounts.some(account => account.split(",")[0] === email);
    if (emailExists) {
        message.textContent = "Email đã được đăng ký!";
        message.style.color = "red";
        return;
    }

    accounts.push(`${email},${password}`);
    localStorage.setItem("accounts", accounts.join(";"));


    message.textContent = "Đăng ký thành công!";
    message.style.color = "green";


    document.getElementById("registerForm").reset();
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePhone(phone) {
    const phoneRegex = /^(03|05|07|08|09)\d{8}$/;
    return phoneRegex.test(phone);
}


