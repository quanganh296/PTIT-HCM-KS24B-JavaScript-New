const pi = Math.PI;


const radius = parseFloat(prompt("Nhap ban kinh hinh cau:"));

const volumeOfSphere= 4/3 * pi  * (radius ** 3);

document.writeln("Dien tich cua hinh cau la: " + volumeOfSphere, "<br/>");

const surfaceAreaOfSphere = 4 * pi * (radius ** 2);

document.writeln("Dien tich cua cua hinh cau la: " + surfaceAreaOfSphere, "<br/>");

const perimeterOfSphere = 2* pi * radius;

document.writeln("Chu vi cua hinh cau la: " + perimeterOfSphere, "<br/>");

