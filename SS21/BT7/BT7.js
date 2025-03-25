let tienBanDau = parseFloat(prompt("Tiền ban đầu:"));
let laiSuat = parseFloat(prompt("Lãi suất (%):"));
let soThang = parseInt(prompt("Số tháng gửi:"));


laiSuat = laiSuat / 100;

let tienLai = tienBanDau * (Math.pow(1 + laiSuat, soThang) - 1);

let tienNhanDuoc = tienBanDau + tienLai;

tienLai = tienLai.toFixed(3);

console.log("Tiền lãi: " + tienLai);
console.log("Tiền nhận được: " + tienNhanDuoc);