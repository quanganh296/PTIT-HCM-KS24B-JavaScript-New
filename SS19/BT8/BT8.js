let month = parseInt(prompt("Nhập một tháng bất kì: "));

if (month < 1 || month > 12) {
    console.log("Tháng không hợp lệ.");
} 
if (month==1 || month==2 || month==3){
    console.log("Mùa xuân");
}
if(month>=4 && month<=6 ){
    console.log("Mùa hạ");
}

if(month>=7 && month<=9){
    console.log("Mùa thu");
}

if(month>=10 && month<=12){
    console.log("Mùa đông");
}