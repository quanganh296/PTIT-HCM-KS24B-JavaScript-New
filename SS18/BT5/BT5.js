
let workYear=parseFloat(prompt("Nhap vao so nam kinh nghiem: "));

document.writeln("So nam kinh nghiem la: " + workYear, "<br>");
if(workYear >6){
    document.writeln("Quan ly");
}

else if(workYear >=4 || workYear ==6){
    document.writeln("Chuyen vien");
}

else if(workYear >=1 || workYear ==3){
    document.writeln("Nhan vien co kinh nghiem");
}

else{
    document.writeln("Moi vao nghe");
}
