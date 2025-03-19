let number = parseInt(prompt("Nhập một số bất kì: "));

if ((isNaN(number))||(number<0)) {
console.log("Dữ liệu nhập vào không hợp lệ");
}
else {
    let result=" ";
    for(let i=1; i<=number; i++) {
        if(i%5==0){
            result+=i+=" ";
        }
    }
    console.log("Các số chia hết cho 5 từ 1 đến " + number + " là: "+ result);
}