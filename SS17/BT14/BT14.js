const pi = Math.PI;


const radius = parseFloat(prompt("Nhap ban kinh:"));
const height = parseFloat(prompt("Nhap chieu cao:"));

const lateralSurfaceArea = 2 * pi * radius * height;
document.writeln("Dien tich xung quanh: ", lateralSurfaceArea, "<br>");


const totalSurfaceArea = lateralSurfaceArea + 2 * pi * radius * radius;
document.writeln("Dien tich toan phan: ", totalSurfaceArea, "<br>");

const volume = pi * radius * radius * height;
document.writeln("The tich hinh tru: ", volume, "<br>");


const baseCircumference = 2 * pi * radius;
document.writeln("Chu vi day: ", baseCircumference, "<br>");