let sendMoney=parseInt(prompt("Nhap so tien gui: "));
let month=parseInt(prompt("Nhap so thang gui tien: "));
let bankInterest = Math.round(sendMoney * 0.043/12 * month);

document.writeln("So tien lai sau " + month + " thang gui la: "+ bankInterest + " VND");