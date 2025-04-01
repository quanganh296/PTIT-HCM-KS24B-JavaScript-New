function filterValidEmails(emails) {
    if (!Array.isArray(emails)) {
        return "Dữ liệu không hợp lệ";
    }

    if (emails.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let validEmails = [];
    for (let i = 0; i < emails.length; i++) {
        let email = emails[i];
        if (email.includes("@") && !email.includes(" ")) {
            validEmails.push(email);
        }
    }

    if (validEmails.length > 0 && validEmails.length < 3) {
        return "Dữ liệu không hợp lệ";
    }
    return validEmails;
}

console.log(filterValidEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]));
console.log(filterValidEmails([]));
console.log(filterValidEmails("abc"));