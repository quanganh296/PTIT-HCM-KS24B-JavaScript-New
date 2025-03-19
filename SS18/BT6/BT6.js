
let year = prompt("Nhập vao mot nam bat ky:");


let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);


if (isLeapYear) {
    document.writeln(year + " la nam nhuan.");
} else {
    document.writeln(year + " khong phai la nam nhuan.");
}