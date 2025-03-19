let math= parseFloat(prompt("Nhap diem toan: "));
document.writeln("Diem mon toan: " + math + "<br>");
let Literature= parseFloat(prompt("Nhap diem ngu van: "));
document.writeln("Diem mon ngu van: " + Literature + "<br>");
let English = parseFloat(prompt("Nhap diem tieng anh: "));
document.writeln("Diem mon tieng anh: " + English + "<br>");

let average = (math + Literature + English) /3

document.writeln("Diem trung binh 3 mon la: " + average, "<br>");
if(average >=8){
    document.writeln("Xep loai: Gioi");
}

else if(average >=6.5 || average ==7.9){
    document.writeln("Xep loai: Kha");
}

else if(average >=5 || average ==6.4){
    document.writeln("Xep loai: Trung binh");
}

else{
    document.writeln("Xep loai: Yeu");
}
