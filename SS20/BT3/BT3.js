let number=parseInt(prompt("Nhập một số bất kì: "));

if(isNaN(number)){
    console.log("Số không hợp lệ");
}
else {
    let reverseNumber=0;
    let temp=number;
    while(temp!=0){
        let remainder=temp%10;
        reverseNumber=reverseNumber*10+remainder;
        temp=Math.floor(temp/10);
    }
    if(number===reverseNumber){
        console.log("Là số đối xứng")
    }
    else{
        console.log("Không phải là số đối xứng")
    }
}
