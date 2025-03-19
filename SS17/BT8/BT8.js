
let date1 = prompt("Nhap ngay thu nhat (YYYY-MM-DD):");
let date2 = prompt("Nhap ngay thu hai (YYYY-MM-DD):");

let firstDate = new Date(date1);
let secondDate = new Date(date2);

let timeDifference = Math.abs(secondDate - firstDate);
let dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));


document.writeln("Ngay thu nhat: " + date1 + "<br>");
document.writeln("Ngay thu hai: " + date2 + "<br>");
document.writeln("Do lech la " + dayDifference + " ngay");