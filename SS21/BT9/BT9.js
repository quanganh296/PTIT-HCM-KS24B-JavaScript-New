let number = parseInt(prompt("Nhập một số bất kì: "));
let temp = true;

if (number < 2) {
    temp = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            temp = false;
            break;
        }
    }
}

if (!temp) {
    console.log("Không phải là số nguyên tố");
} else {
    console.log("Là số nguyên tố");
}