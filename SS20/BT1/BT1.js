let number=parseInt(prompt("Nhập một số bất kì: "));

if (    isNaN(number)){
 console.log("Dữ liệu nhập vào không hợp lệ!");
}
else if (number<0){
    console.log("Dữ liệu nhập vào không hợp lệ!");
}

else{
    let sum=0;
    for (let i=0;i<=number;i++){
        sum+=i;
    }
    console.log("Tổng các số từ 0 đến " + number + " là: " + sum);
}