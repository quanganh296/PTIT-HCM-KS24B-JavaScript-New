for (let number = 100; number <= 999; number++) {
let sum=0;
let temp= number;
if(isNaN(number)){
    console.log("Dữ liệu nhập vào không hợp lệ!");
}
else {
   while(temp>0){
    let digit = temp%10;
        sum+=Math.pow(digit,3);
        temp=Math.floor(temp/10);
        if(sum===number){
            console.log(number + " là số Armstrong");        }
    }
}
}